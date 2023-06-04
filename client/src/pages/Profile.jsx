import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useAppContext } from "../context/appContext";
import { BsPerson } from "react-icons/bs";
import ProfileForm from "../components/ProfileForm";
import { useNavigate } from "react-router-dom";
import DeleteModal from "../components/DeleteModal";

const Profile = () => {
  const { user, logoutUser, } = useAppContext();

  const navigate = useNavigate();

  // if (!user) {
  //   navigate("/");
  // }

  const logout = () => {
    logoutUser();
    navigate("/register");
  };
  return (
    <>
      <Navbar />
      <div className=" m-10 ml-32 w-50%">
        <h1 className="font-bold text-5xl">Profile</h1>
        <div className="flex my-5 items-center space-x-3">
          <BsPerson className="text-3xl" />
          <h1 className="capitalize text-2xl">
            User: <span className="font-bold">{user?.name}</span>
          </h1>
        </div>
        <div className="flex space-x-48 mt-10">
          <figure className="w-30% h-28 rounded-lg">
            <img
              className="w-full h-full rounded-lg"
              src="https://www.pngall.com/wp-content/uploads/2017/05/TM-Symbol-PNG-Picture.png"
              alt=""
            />
          </figure>
          <div>
            <h1 className="capitalize text-5xl font-semibold mb-4">
              {user?.name}
            </h1>
            <h2 className="text-cyan-600 cursor-pointer text-xl">
              {user?.email}
            </h2>
          </div>
        </div>
        <div className="border-b-2 pb-4">
          <h1 className="text-2xl">Account</h1>
        </div>
        <div className="flex-col mt-10 mb-5">
          <ProfileForm type="text" name="name" placeholder={user?.name} />
          <ProfileForm
            type="text"
            name="last name"
            placeholder={user?.lastName}
          />
          <ProfileForm type="email" name="email" placeholder={user?.email} />
          <ProfileForm type="password" name="password" placeholder="********" />
          <ProfileForm type="text" name="weight" placeholder={user?.weight} />
          <ProfileForm type="text" name="height" placeholder={user?.height} />
        </div>
        <div className="space-y-5 mb-5">
          <button className="btn ml-[450px] px-7 bg-slate-500">Submit</button>
          <div className="flex items-center ml-72 ">
            <button onClick={logout} className="btn px-7 bg-slate-500">
              Logout
            </button>
            <DeleteModal />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
