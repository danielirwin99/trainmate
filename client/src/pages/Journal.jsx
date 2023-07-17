import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import WorkoutDay from "../components/WorkoutDay";
import data from "../data/data.js";
import { TbBarbell } from "react-icons/tb";
import { Link, Outlet } from "react-router-dom";
import SkeletonPhoto from "../components/UI/SkeletonPhoto";

const Journal = () => {
  const [loading, isLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      isLoading(false);
    }, 1500);
  });
  return (
    <>
      <Navbar />
      <div className="mt-10 flex flex-col justify-center items-center">
        <div className="flex items-center justify-center mb-10 gap-x-3">
          <TbBarbell className="text-5xl pt-1" />
          <h1 className="text-3xl md:text-5xl font-bold ">
            What Day is it Today?
          </h1>
          <TbBarbell className="text-5xl pt-1" />
        </div>
        <div className="flex flex-wrap justify-center">
          {!loading
            ? data.map((exercise, index) => (
                <Link
                  to={`/journal/${exercise.link}`}
                  className="flex flex-wrap justify-center"
                  key={index}
                >
                  <WorkoutDay image={exercise.image} name={exercise.name} />
                </Link>
              ))
            : new Array(6)
                .fill(0)
                .map((_, index) => <SkeletonPhoto key={index} />)}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Journal;
