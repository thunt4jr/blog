import Sidebar from "../../components/sidebar/Sidebar";
import React, { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";
import { Container } from "react-bootstrap";

export default function Settings() {
  const settings = {
    display: "flex",
  };

  const settingsWrapper = {
    flex: "9",
    padding: "20px",
  };

  const settingsTitle = {
    display: "flex",
    alignitems: "center",
    justifycontent: "spacebetween",
  };

  const settingsUpdateTitle = {
    fontsize: "30px",
    marginbottom: "20px",
    color: "lightcoral",
  };

  const settingsDeleteTitle = {
    color: "red",
    fontsize: "12px",
    cursor: "pointer",
  };

  const settingsForm = {
    display: "flex",
    flexdirection: "column",
  };

  const settingsPP = {
    display: "flex",
    alignitems: "center",
    margin: "10px 0",
  };

  // const settingsPP > img ={
  //   width: "70px",
  //   height: "70px",
  //   borderradius: "20px",
  //   objectfit: "cover",
  // }

  const settingsPPIcon = {
    width: "25px",
    height: "25px",
    borderradius: "50%",
    backgroundcolor: "lightcoral",
    color: "white",
    display: "flex",
    alignitems: "center",
    justifycontent: "center",
    marginleft: "10px",
    cursor: "pointer",
  };

  // const settingsForm > label ={
  //   fontsize: "20px",
  //   margintop: "20px",
  // }

  // const settingsForm > input ={
  //   color: "gray",
  //   margin: "10px 0",
  //   height: "30px",
  //   border: "none",
  //   borderbottom: "1px solid lightgray",
  // }

  const settingsSubmit = {
    width: "150px",
    alignself: "center",
    border: "none",
    borderradius: "10px",
    color: "white",
    backgroundcolor: "teal",
    padding: "10px",
    margintop: "20px",
    cursor: "pointer",
  };
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.put("/users/" + user._id, updatedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };
  return (
    <Container style={settings}>
      <Container style={settingsWrapper}>
        <Container style={settingsTitle}>
          <span style={settingsUpdateTitle}>Update Your Account</span>
          <span style={settingsDeleteTitle}>Delete Account</span>
        </Container>
        <form style={settingsForm} onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <Container style={settingsPP}>
            <img
              src={file ? URL.createObjectURL(file) : PF + user.profilePic}
              alt=''
            />
            <label htmlFor='fileInput'>
              <i style={settingsPPIcon} className='far fa-user-circle'></i>
            </label>
            <input
              type='file'
              id='fileInput'
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </Container>
          <label>Username</label>
          <input
            type='text'
            placeholder={user.username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type='email'
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type='password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <button style={settingsSubmit} type='submit'>
            Update
          </button>
          {success && (
            <span
              style={{
                color: "green",
                textAlign: "center",
                marginTop: "20px",
              }}
            >
              Profile has been updated...
            </span>
          )}
        </form>
      </Container>
      <Sidebar />
    </Container>
  );
}
