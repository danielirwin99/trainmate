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
          <figure className="h-[70px]">
            <img
              className="w-full h-full bg-[#fee4c3] rounded-full p-2"
              src="https://www.pngall.com/wp-content/uploads/2017/05/TM-Symbol-PNG-Picture.png"
              alt="trainmate logo"
            />
          </figure>
          <h2 className="font-bold text-2xl text-[#fee4c3] hidden lg:block text-shadow-sm shadow-black ">
            TrainMate
          </h2>
        </Link>{" "}
        <ul className="flex justify-center space-x-7 text-center -mr-4">
          <li className="navLinks">
            <Link to="/">Home</Link>
          </li>
          <li className="navLinks">
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
            <h3 className="-ml-14 mr-2 capitalize text-white font-bold text-lg">
              Welcome,{" "}
              <Link
                to="/profile"
                className="transition-all duration-200 ease-out hover:text-[#fee4c3]"
              >
                {user.name}
              </Link>{" "}
            </h3>
          )}
          <Link to="/journal" className="btn">
            Journal
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
