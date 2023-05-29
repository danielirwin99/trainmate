import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className=" bg-gray-500 opacity-95 sticky top-0 z-50">
      <div className="flex justify-between items-center px-6 py-3 h-[100px]">
        <Link to="/" className="flex items-center cursor-pointer space-x-3">
          <figure className="h-[80px]">
            <img
              className="w-full h-full bg-[#fee4c3] rounded-full p-2"
              src="https://www.pngall.com/wp-content/uploads/2017/05/TM-Symbol-PNG-Picture.png"
              alt="trainmate logo"
            />
          </figure>
          <h2 className="font-bold text-2xl text-[#fee4c3] hidden lg:block ">
            TrainMate
          </h2>
        </Link>
        <div>
          {" "}
          <ul className="flex justify-center space-x-7 text-center">
            <li className="navLinks">
              <Link to="/">Home</Link>
            </li>
            <li className="navLinks">
              <Link to="/contact-us">Contact Us</Link>
            </li>
            <li className="navLinks globalColour">
              <Link to="/register">Login / Register</Link>
            </li>
          </ul>
        </div>
        <div>
          <Link to="/journal" className="btn">
            Journal
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
