import React from "react";
import { Container } from "react-bootstrap";
import Post from "../post/Post";

export default function Posts() {
  const posts = {
    flex: "9",
    display: "flex",
    flexWrap: "wrap",
    margin: "20px",
  };
  return (
    <Container style={posts}>
      {posts.map((p) => (
        <Post post={p} />
      ))}
    </Container>
  );
}
