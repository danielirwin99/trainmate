import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" bg-gray-500 ">
      <div className="flex justify-between items-center px-6 py-4">
        <Link to="/" className="flex items-center cursor-pointer space-x-3">
          <figure className="h-[80px]">
            <img
              className="w-full h-full bg-[#fee4c3] rounded-full p-2"
              src="https://www.pngall.com/wp-content/uploads/2017/05/TM-Symbol-PNG-Picture.png"
              alt="trainmate logo"
            />
          </figure>
          <h2 className="font-bold text-2xl text-[#fee4c3]">TrainMate</h2>
        </Link>
        <div>
          {" "}
          <ul className="flex justify-center space-x-7 text-center">
            <li className="navLinks">
              <Link to="/">Home</Link>
            </li>
            <li className="navLinks">
              <Link to="/journal">Journal</Link>
            </li>
            <li className="navLinks globalColour">
              <Link to="/landing">Login / Register</Link>
            </li>
          </ul>
        </div>
        <div>
          <button className="btn">Journal</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
