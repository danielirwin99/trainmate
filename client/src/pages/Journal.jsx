import React from "react";
import Navbar from "../components/Navbar";
import WorkoutDay from "../components/WorkoutDay";
import { chest, back, cardio, curl, fbw, legs } from "../assets/index";
import { TbBarbell } from "react-icons/tb";
import { Link, Outlet } from "react-router-dom";

const Journal = () => {
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
          <Link to="/journal/chest">
            <WorkoutDay image={chest} name="Chest" />
          </Link>
          <Link to={`/journal/back`}>
            <WorkoutDay image={back} name="Back" />
          </Link>
          <Link to={`/journal/legs`}>
            <WorkoutDay image={legs} name="Legs" />
          </Link>
          <Link to={`/journal/arms`}>
            <WorkoutDay image={curl} name="Arms" />
          </Link>
          <Link to={`/journal/cardio`}>
            <WorkoutDay image={cardio} name="Cardio" />
          </Link>
          <Link to={`/journal/full-body-workout`}>
            <WorkoutDay image={fbw} name="Full Body Workout" />
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Journal;
