import React from "react";
import FormRow from "../components/FormRow";
import Link from "react-router-dom"

const Register = () => {
  return (
    <div className="flex justify-center items-center h-[100vh] bg-white">
      <form className="flex flex-col h-[550px] w-[600px] rounded-md bg-gray-700 text-center px-4 py-5 ">
        <h1 className="font-bold text-4xl text-black z-1">Register</h1>
        <FormRow />
        <FormRow />
        <FormRow />
        <p>
          Already a member? 
        </p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
