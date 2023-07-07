import React from "react";

const WorkoutDay = ({ name, image }) => {
  return (
    <div className="md:h-[200px] lg:w-[300px] lg:h-[200px] xl:w-[450px] xl:h-[250px] relative cursor-pointer overflow-hidden group/image rounded-xl mx-4 my-2">
      <div className=" rounded-xl object-fill">
        <img
          className="group-hover/image:brightness-[0.4] group-hover/image:opacity-85 "
          src={
            image ||
            "https://images.unsplash.com/photo-1521805103424-d8f8430e8933?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          }
          alt="Chest Day"
        />
      </div>
      <div className="  absolute top-0 left-0 text-center flex items-center justify-center w-full h-full z-1 opacity-0 hover:opacity-100">
        <h1 className="text-white font-bold text-3xl">{name}</h1>
      </div>
    </div>
  );
};

export default WorkoutDay;
