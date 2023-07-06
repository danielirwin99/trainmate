import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";

const Error = () => {
  return (
    <div className="h-screen ">
      <Navbar />
      <div className="h-full flex flex-col items-center justify-center text-center gap-y-14 -mt-14 w-1/2 mx-auto">
        <h1 className="font-bold text-5xl tracking-wider">
          There was an error with the page you were accessing...
        </h1>
        <h2 className="font-semibold text-3xl">Head back to the home page?</h2>
        <Link
          to={"/"}
          className="flex items-center justify-center tracking-wide text-xl px-6 py-3 border-2 shadow-sm border-[#fee4c3] rounded-full font-bold active:bg-gray-800 bg-gray-500 transition-all duration-200 ease-in-out text-white"
        >
          <AiOutlineHome className="mr-3 text-3xl" /> Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
