import React from "react";
import { Container, Row, Image } from "react-bootstrap";
import backgroundImg from "../../assets/images/coding.jpg";

const header = {
  marginTop: "60px",
};

const headerTitles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: "#444",
};

const headerTitleSm = {
  position: "absolute",
  top: "18%",
  fontSize: "20px",
};

const headerTitleLg = {
  position: "absolute",
  top: "20%",
  fontSize: "100px",
};

const headerImg = {
  width: "100%",
  height: "450px",
  marginTop: "80px",
  objectFit: "cover",
};

export default function Header() {
  return (
    <Container style={header}>
      <Container style={headerTitles}>
        <Row style={headerTitleSm}>Testing</Row>
        <Row style={headerTitleLg}>Blog</Row>
      </Container>
      <Image style={headerImg} src={backgroundImg} />
    </Container>
  );
}
