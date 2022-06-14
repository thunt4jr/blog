import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  const home = {
    display: "flex",
  };
  return (
    <>
      <Header />
      <Container style={home}>
        <Posts posts={posts} />
        <Sidebar />
      </Container>
    </>
  );
}
