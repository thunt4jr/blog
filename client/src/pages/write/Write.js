import React, { useContext, useState } from "react";
import axios from "axios";
import { Context } from "../../context/Context";
import { Container } from "react-bootstrap";

export default function Write() {
  const write = {
    paddingtop: "50px",
  };

  const writeImg = {
    marginleft: "150px",
    width: "70vw",
    height: "250px",
    borderradius: "10px",
    objectfit: "cover",
  };

  const writeForm = {
    position: "relative",
  };

  const writeFormGroup = {
    marginleft: "150px",
    display: "flex",
    alignitems: "center",
  };

  const writeIcon = {
    width: "25px",
    height: "25px",
    borderradius: "50%",
    border: "1px solid",
    display: "flex",
    alignitems: "center",
    justifycontent: "center",
    fontsize: "20px",
    color: "rgb(121, 118, 118)",
    cursor: "pointer",
  };

  const writeInput = {
    fontsize: "30px",
    border: "none",
    padding: "20px",
    width: "70vw",
  };

  // const writeInput: focus = {
  //   outline: "none",
  // };

  const writeText = {
    fontsize: "20px",
    height: "100vh",
  };

  const writeSubmit = {
    position: "absolute",
    top: "20px",
    right: "50px",
    color: "white",
    backgroundcolor: "teal",
    padding: "10px",
    border: "none",
    borderradius: "10px",
    cursor: "pointer",
    fontsize: "16px",
  };
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  };
  return (
    <Container style={write}>
      {file && <img style={writeImg} src={URL.createObjectURL(file)} alt='' />}
      <form style={writeForm} onSubmit={handleSubmit}>
        <Container style={writeFormGroup}>
          <label htmlFor='fileInput'>
            <i style={writeIcon} className='fas fa-plus'></i>
          </label>
          <input
            type='file'
            id='fileInput'
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type='text'
            placeholder='Title'
            style={writeInput}
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Container>
        <Container style={writeFormGroup}>
          <textarea
            placeholder='Tell your story...'
            type='text'
            style={(writeInput, writeText)}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </Container>
        <button style={writeSubmit} type='submit'>
          Publish
        </button>
      </form>
    </Container>
  );
}
