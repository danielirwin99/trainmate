import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Landing/Header";
import Title from "../components/Landing/Title";
import Testimonials from "../components/Landing/Testimonials";
import axios from "axios"

const Landing = () => {
  const fetchData = async () => {
    try {
      const { data } = await axios.get("/api/v1");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Navbar />
      <Header />
      <Title />
      <Testimonials />
    </>
  );
};

export default Landing;
