import React from "react";
import Navbar from "../components/Navbar";

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="pageHeight w-full">
        <div className="flex">
          <figure className="w-30% h-full">
            <img
              className="w-full h-full"
              src="https://www.pngall.com/wp-content/uploads/2017/05/TM-Symbol-PNG-Picture.png"
              alt=""
            />
          </figure>
          <div>
            <h1>John Doe</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
