import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import terryImg from "../../assets/images/terry.jpg";

export default function Sidebar() {
  const sidebar = {
    flex: "3",
    margin: "20px",
    paddingBottom: "30px",
    backgroundColor: "#fdfbfb",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const sidebarItem = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const sidebarTitle = {
    margin: "10px",
    padding: "5px",
    width: "80%",
    borderTop: "1px solid #a7a4a4",
    borderBottom: "1px solid #a7a4a4",
    fontSize: "12px",
    color: "#222",
    fontWeight: "600",
    lineHeight: "20px",
    textAlign: "center",
  };

  const paddingBlock = {
    padding: "30px",
  };

  const sidebarList = {
    listStyle: "none",
    marginBottom: "30px",
  };

  const sidebarListItem = {
    display: "inline-block",
    width: "50%",
    marginTop: "15px",
    cursor: "pointer",
  };

  const sidebarSocial = {
    marginTop: "15px",
    width: "250px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const sidebarIcon = {
    fontSize: "16px",
    marginLeft: "10px",
    cursor: "pointer",
  };

  const sidebarItemImg = { marginTop: "15px" };

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const res = await axios.get("/categories");
      setCategories(res.data);
    };
    getCategories();
  }, []);

  return (
    <Container style={sidebar}>
      <Container style={sidebarItem}>
        <span style={sidebarTitle}>ABOUT ME</span>
        <img style={sidebarItemImg} src={terryImg} alt='Terry Hunt' />
        <p style={paddingBlock}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui
          necessitatibus nostrum illum reprehenderit.
        </p>
      </Container>
      <Container>
        <span style={sidebarTitle}>Categories</span>
        <ul style={sidebarList}>
          {categories.map((c) => (
            <Link to={`/?vat=${c.name}`} className='link'>
              <li style={sidebarListItem}>{c.name}</li>
            </Link>
          ))}
        </ul>
      </Container>
      <Container style={sidebarItem}>
        <span style={sidebarSocial}>FOLLOW US</span>
        <Container style={sidebarSocial}>
          <i style={sidebarIcon} className='fab fa-facebook-square'></i>
          <i style={sidebarIcon} className='fab fa-twitter-square'></i>
          <i style={sidebarIcon} className='fab fa-pinterest-square'></i>
          <i style={sidebarIcon} className='fab fa-instagram-square'></i>
        </Container>
      </Container>
    </Container>
  );
}
