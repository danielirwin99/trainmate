import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className=" w-full h-[60vh] relative flex flex-col items-center justify-center px-3 ">
      <figure className="absolute w-full h-[60vh] bg-gradient-to-bl from-gray-400 to-black">
        <img
          className="w-full h-full object-cover mix-blend-overlay "
          src="https://images.unsplash.com/photo-1521805103424-d8f8430e8933?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
      </figure>
      <div className="z-10 flex flex-col items-center justify-center px-7">
        <h1 className="font-bold text-white text-center text-4xl lg:text-6xl z-10 tracking-wider">
          Start your fitness journey here.
        </h1>
        <h2 className=" text-white text-center z-10 mt-10 font-semibold text-xl lg:text-2xl">
        "Unleash your inner beast and conquer the iron jungle!"
        </h2>
        <button
          onClick={() => navigate("/journal")}
          className="btn z-10 mt-10 bg-slate-50 bg-opacity-10"
        >
          Start Your Journal
        </button>
      </div>
    </header>
  );
};

export default Header;
