import React from "react";
import Navbar from "../components/Navbar";
import WorkoutDay from "../components/WorkoutDay";
import { chest, back, cardio, curl, fbw, legs } from "../assets/index";

const Journal = () => {
  return (
    <>
      <Navbar />
      <div className="mt-10 flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold mb-10">What Day is it Today?</h1>
        <div className="flex flex-wrap justify-center">
          <WorkoutDay image={chest} name="Chest" />
          <WorkoutDay image={back} name="Back" />
          <WorkoutDay image={legs} name="Legs" />
          <WorkoutDay image={curl} name="Arms/Shoulders" />
          <WorkoutDay image={cardio} name="Cardio" />
          <WorkoutDay image={fbw} name="Full Body Workout" />
        </div>
      </div>
    </>
  );
};

export default Journal;
