import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-500 h-60 flex flex-col justify-center items-center">
      <div className="flex items-center space-x-4">
        <Link
          to="/"
          className="flex items-center cursor-pointer space-x-4 mr-10"
        >
          <figure className="h-[80px]">
            <img
              className="w-full h-full bg-[#fee4c3] rounded-full shadow-sm shadow-black p-2"
              src="https://www.pngall.com/wp-content/uploads/2017/05/TM-Symbol-PNG-Picture.png"
              alt="trainmate logo"
            />
          </figure>
          <h2 className="font-bold text-2xl text-[#fee4c3] hidden lg:block ">
            TrainMate
          </h2>
        </Link>
        <div className="flex space-x-5">
          <ul className="flex flex-col ">
            <Link className="footerLinks">Home</Link>
            <Link className="footerLinks">About</Link>
            <Link to="/journal/:id/exercises" className="footerLinks">Journal</Link>
          </ul>
          <ul className="flex flex-col">
            <Link className="footerLinks">Contact Us</Link>
            <Link className="footerLinks">FAQ</Link>
            <Link className="footerLinks">Pricing</Link>
          </ul>
          <ul className="flex flex-col">
            <Link className="footerLinks">Reviews</Link>
            <Link className="footerLinks">Refer a friend</Link>
            <Link className="footerLinks">Profile</Link>
          </ul>
        </div>
      </div>
      <h2 className="mt-6 text-white font-semibold">
        Copyright &copy; TrainMate 2023
      </h2>
    </footer>
  );
};

export default Footer;
