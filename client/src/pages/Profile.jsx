import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useAppContext } from "../context/appContext";
import { BsPerson } from "react-icons/bs";
import ProfileForm from "../components/ProfileForm";
import { useNavigate } from "react-router-dom";
import DeleteModal from "../components/DeleteModal";
import Alert from "../components/Alert";

const Profile = () => {
  const { user, logoutUser, showAlert, displayAlert, updateUser, isLoading } =
    useAppContext();
  const [name, setName] = useState(user?.name);
  const [lastName, setLastName] = useState(user?.lastName);
  const [email, setEmail] = useState(user?.email);
  const [weight, setWeight] = useState(user?.weight);
  const [height, setHeight] = useState(user?.height);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !lastName || !email || !weight || !height) {
      displayAlert();
      return;
    }
    updateUser({ name, email, lastName, weight, height });
  };

  const disabledButton = () => {
    if (handleSubmit === "") {
      return true;
    }
    return false;
  };

  const logout = () => {
    logoutUser();
    navigate("/register");
  };

  return (
    <>
      <Navbar />
      <div className=" m-10 ml-32 min-w-5xl">
        <h1 className="font-bold text-4xl">Profile</h1>
        <div className="flex my-5 items-center space-x-3">
          <BsPerson className="text-2xl" />
          <h1 className="capitalize text-xl">
            User: <span className="font-bold">{user?.name}</span>
          </h1>
        </div>
        <div className="flex space-x-48 mt-5">
          <figure className="w-30% h-28 rounded-lg">
            <img
              className="w-full h-full rounded-lg"
              src="https://www.pngall.com/wp-content/uploads/2017/05/TM-Symbol-PNG-Picture.png"
              alt=""
            />
          </figure>
          <div>
            <h1 className="capitalize text-4xl font-semibold mb-4">
              {user?.name}
            </h1>
            <h2 className="text-cyan-600 text-xl">{user?.email}</h2>
          </div>
        </div>
        <div className="border-b-2 pb-4">
          <h1 className="text-2xl">Account</h1>
        </div>
        <form className="flex flex-col mb-5 max-w-2xl" onSubmit={handleSubmit}>
          <div className="my-5 w-full text-center text-black font-bold">
            {showAlert && <Alert />}
          </div>
          <ProfileForm
            type="text"
            name="name"
            value={name}
            handleChange={(e) => setName(e.target.value)}
          />
          <ProfileForm
            type="text"
            name="last name"
            value={lastName}
            handleChange={(e) => setLastName(e.target.value)}
          />
          <ProfileForm
            type="email"
            name="email"
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
          />
          <ProfileForm type="password" name="password" placeholder="********" />
          <ProfileForm
            type="text"
            name="weight"
            value={weight}
            handleChange={(e) => setWeight(e.target.value)}
          />
          <ProfileForm
            type="text"
            name="height"
            value={height}
            handleChange={(e) => setHeight(e.target.value)}
          />
          <button
            className="btn px-7 mt-5 py-2 border-2 shadow-sm text-slate-500 border-slate-500 rounded-full font-bold active:bg-transparent bg-[#fee4c3] transition-all duration-100 ease-in-out "
            type="submit"
          >
            Submit
          </button>
          <div className="flex justify-center w-full mt-10 gap-x-4">
            <button onClick={logout} className="btn px-12 py-2.5 bg-slate-500">
              Logout
            </button>
            <DeleteModal />
          </div>
        </form>
      </div>
    </>
  );
};

export default Profile;
