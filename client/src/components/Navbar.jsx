import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/appContext";

const Navbar = () => {
  const { user, logoutUser } = useAppContext();

  const navigate = useNavigate();

  const logout = () => {
    logoutUser();
    navigate("/register");
  };

  return (
    <nav className=" bg-gray-500 sticky top-0 z-50">
      <div className="flex justify-between items-center px-6 py-3 h-[100px]">
        <Link to="/" className="flex items-center cursor-pointer space-x-3">
          <figure className="h-[50px] w-[50px] md:h-[70px] md:w-[70px]">
            <img
              className=" w-full h-full bg-[#fee4c3] rounded-full shadow-sm shadow-black p-2"
              src="https://www.pngall.com/wp-content/uploads/2017/05/TM-Symbol-PNG-Picture.png"
              alt="trainmate logo"
            />
          </figure>
          <h2 className="font-bold text-2xl text-[#fee4c3] hidden xl:block bg-clip-text ">
            TrainMate
          </h2>
        </Link>{" "}
        <ul className="flex justify-center space-x-7 text-center -mr-4">
          <li className="navLinks">
            <Link to="/">Home</Link>
          </li>
          <li className="navLinks hidden md:flex">
            <Link to="/contact-us">Contact Us</Link>
          </li>{" "}
          {user && (
            <li className="navLinks">
              <Link to="/profile">Profile</Link>
            </li>
          )}
          <li className="navLinks globalColour">
            {" "}
            {user ? (
              <button
                type="button"
                className="underline"
                onClick={() => logout(user)}
              >
                Logout
              </button>
            ) : (
              <Link to="/register">Login / Register</Link>
            )}
          </li>
        </ul>
        <div className="flex items-center space-x-3">
          {user && (
            <h3 className="-ml-14 mr-2 capitalize text-white text-lg hidden lg:block">
              Welcome,{" "}
              <Link
                to="/profile"
                className="transition-all duration-200 ease-out hover:text-[#fee4c3] font-bold"
              >
                {user.name}
              </Link>{" "}
            </h3>
          )}
          <Link to="/journal" className="btn text-[10px] lg:text-base">
            Journal
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
