import React from "react";
import Navbar from "../components/Navbar";

const Landing = () => {
  return (
    <>
      <Navbar />
      <header className=" w-full h-[60vh] relative flex flex-col items-center justify-center ">
        <figure className="absolute w-full h-[60vh] bg-gradient-to-bl from-gray-400 to-black">
          <img
            className="w-full h-full object-cover mix-blend-overlay "
            src="https://images.unsplash.com/photo-1521805103424-d8f8430e8933?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
        </figure>
        <h1 className="font-bold text-white text-center text-4xl lg:text-6xl z-10 tracking-wider">
          Start your fitness journey here.
        </h1>
        <h2 className=" text-white text-center z-10 mt-10 font-semibold text-xl lg:text-2xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
          voluptates modi repudiandae ab nobis reprehenderit et accusamus, eos
          ducimus ut!
        </h2>
        <button className="btn z-10 mt-10 bg-slate-50 bg-opacity-10">
          Browse Collection
        </button>
      </header>
    </>
  );
};

export default Landing;
