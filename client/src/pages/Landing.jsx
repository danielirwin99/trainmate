import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Landing/Header";
import Title from "../components/Landing/Title";
import Testimonials from "../components/Landing/Testimonials";

const Landing = () => {

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
