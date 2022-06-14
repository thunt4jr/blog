import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import { Container } from "react-bootstrap";

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = "http://localhost:5000/images/";
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
      });
      setUpdateMode(false);
    } catch (err) {}
  };

  const singlePost = {
    flex: "9",
  };

  const singlePostWrapper = {
    padding: "20px",
    paddingRight: "0",
    display: "flex",
    flexdirection: "column",
  };

  const singlePostImg = {
    width: "100%",
    height: "300px",
    borderradius: "5px",
    objectfit: "cover",
  };

  const singlePostTitle = {
    textalign: "center",
    margin: "10px",
    fontsize: "28px",
  };

  const singlePostTitleInput = {
    margin: "10px",
    fontsize: "28px",
    textalign: "center",
    border: "none",
    color: "gray",
    borderbottom: "1px solid lightgray",
  };

  // const singlePostTitleInputFocus = {
  //   outline: "none",
  // };

  const singlePostEdit = {
    float: "right",
    fontsize: "16px",
  };

  const singlePostIcon = {
    marginleft: "10px",
    cursor: "pointer",
  };

  // const singlePostIconFirstchild = {
  //   color: "teal",
  // };

  // const singlePostIconLastchild = {
  //   color: "tomato",
  // };

  const singlePostInfo = {
    marginbottom: "20px",
    display: "flex",
    justifycontent: "spacebetween",
    fontsize: "16px",
    color: "#b39656",
  };

  const singlePostDesc = {
    color: "#666",
    fontsize: "18px",
    lineheight: "25px",
  };

  // const singlePostDescFirstletter = {
  //   marginleft: "20px",
  //   fontsize: "30px",
  //   fontweight: "600",
  // };

  const singlePostDescInput = {
    border: "none",
    color: "#666",
    fontsize: "18px",
    lineheight: "25px",
  };

  // const singlePostDescInputFocus = {
  //   outline: "none",
  // };

  const singlePostButton = {
    width: "100px",
    border: "none",
    backgroundcolor: "teal",
    padding: "5px",
    color: "white",
    borderradius: "5px",
    cursor: "pointer",
    alignself: "flexend",
    margintop: "20px",
  };

  return (
    <Container style={singlePost}>
      <Container style={singlePostWrapper}>
        {post.photo && (
          <img src={PF + post.photo} alt='' style={singlePostImg} />
        )}
        {updateMode ? (
          <input
            type='text'
            value={title}
            style={singlePostTitleInput}
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 style={singlePostTitle}>
            {title}
            {post.username === user?.username && (
              <Container style={singlePostEdit}>
                <i
                  style={singlePostIcon}
                  className='far fa-edit'
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  style={singlePostIcon}
                  className='far fa-trash-alt'
                  onClick={handleDelete}
                ></i>
              </Container>
            )}
          </h1>
        )}
        <Container style={singlePostInfo}>
          <span>
            {/* style={singlePostAuthor} */}
            Author:
            <Link to={`/?user=${post.username}`} className='link'>
              <b> {post.username}</b>
            </Link>
          </span>
          <span>
            {/* style={singlePostDate} */}
            {new Date(post.createdAt).toDateString()}
          </span>
        </Container>
        {updateMode ? (
          <textarea
            style={singlePostDescInput}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p style={singlePostDesc}>{desc}</p>
        )}
        {updateMode && (
          <button style={singlePostButton} onClick={handleUpdate}>
            Update
          </button>
        )}
      </Container>
    </Container>
  );
}
