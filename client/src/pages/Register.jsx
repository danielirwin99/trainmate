import React, { useState } from "react";
import FormRow from "../components/FormRow";
import { useAppContext } from "../context/appContext";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  const { user, isLoading, showAlert, displayAlert, registerUser, loginUser } =
    useAppContext();

  // Function handles toggling between registering and logging in
  const toggleMember = () => {
    // Iterate over the values and spread them out
    // Looking for the isMember value --> If its false --> Fire this function
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (e) => {
    // Looping over all the values --> Then making event.target.name equal to what we enter inside the form
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // Looking for these values
    const { name, email, password, isMember } = values;

    // If these values are not present display the alert and return it (stop the functionality)
    if (!email || !password || (!isMember && !name)) {
      displayAlert();
      return;
    }

    // Grabs these three values to use below
    const currentUser = { name, email, password };

    // If they are a member already --> Fire this function from useAppContext()
    if (isMember) {
      loginUser(currentUser);

      // If they are a new user registering --> It will fire the function from appContext
      // with the values from above
    } else {
      registerUser(currentUser);
    }
  };

  return (
    <div className="flex justify-center items-center h-[100vh] bg-gradient-to-b from-gray-300 to-white">
      <form
        className="flex flex-col w-[600px] rounded-md bg-gray-700 text-center px-16 py-10 focus:border-none shadow-md shadow-black"
        // onSubmit={onSubmit}
      >
        <h1 className="font-bold text-4xl z-1 mb-2 underline text-[#fee4c3]">
          {values.isMember ? "Sign In" : "Create an Account"}
        </h1>
        {/* Name */}
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
          />
        )}
        {/* Email */}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />
        {/* Password */}
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />
        <button type="submit" className="btn mt-8 mb-6">
          Submit
        </button>
        <button className="px-4 py-2 border-2 shadow-sm border-[#fee4c3] rounded-full font-bold active:bg-transparent bg-[#fee4c3] transition-all duration-100 ease-in-out text-black mb-5">
          Guest User
        </button>
        <p className="text-gray-400 text-lg tracking-wide">
          {values.isMember ? "Not a member yet?" : "Already a member?"}
          <button
            type="button"
            onClick={toggleMember}
            className="text-[#fee4c3] ml-2 font-bold tracking-wider"
          >
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </div>
  );
};

export default Register;
