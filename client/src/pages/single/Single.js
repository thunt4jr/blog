import React from "react";
import { Container } from "react-bootstrap";
import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlePost/SinglePost";

const single = {
  display: "flex",
};

export default function Single() {
  return (
    <Container style={single}>
      <SinglePost />
      <Sidebar />
    </Container>
  );
}
