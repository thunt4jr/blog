import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Post() {
  const post = {
    width: "385px",
    margin: "0px 25px 40px 25px",
  };
  const postImg = {
    width: "100%",
    height: "280px",
    objectFit: "cover",
    borderRadius: "7px",
  };

  const postInfo = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const postCat = {
    fontSize: "11px",
    color: "#be9656",
    lineHeight: "20px",
    marginTop: "15px",
    marginRight: "10px",
    cursor: "pointer",
  };

  const postTitle = {
    fontSize: "24px",
    fontWeight: "700",
    marginTop: "15px",
    cursor: "pointer",
  };

  const postDate = {
    fontStyle: "italic",
    fontsize: "13px",
    color: "#999",
    marginTop: "15px",
  };

  const postDesc = {
    fontSize: "14px",
    color: "#444",
    lineHeight: "24px",
    marginTop: "15px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    webkitLineCLamp: "4",
    webkitBoxOrient: "vertical",
  };
  const PF = "http://localhost:5000/images/";
  return (
    <Container style={post}>
      {post.photo && <img style={postImg} src={PF + post.photo} alt='' />}
      <Container style={postInfo}>
        <Container style={postCat}>
          {post.categories.map((c) => (
            <span style={postCat}>{c.name}</span>
          ))}
        </Container>
        <Link to={`/post/${post._id}`} className='link'>
          <span style={postTitle}>post.title</span>
        </Link>
        <hr />
        <span style={postDate}>{new Date(post.createdAt).toDateString()}</span>
      </Container>
      <p style={postDesc}>{post.desc}</p>
    </Container>
  );
}
