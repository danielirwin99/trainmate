import React from "react";
import Navbar from "../components/Navbar";
import FormRow from "../components/FormRow";

const ContactUs = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    alert("Hello")
  };

  return (
    <div className="bg-gray-700  ">
      <Navbar />
      <div className="flex flex-col items-center h-[calc(100vh-120px)] mt-10">
        <h1 className="text-4xl font-bold text-white">Contact Us</h1>
        <form
          className="flex flex-col w-[60%] xl:w-[45%]"
          // onSubmit={onSubmit}
        >
          {/* Full Name */}
          <FormRow type="text" name="full name" />
          {/* Email */}
          <FormRow type="email" name="email" />
          {/* Message */}
          <h1 className="text-[#fee4c3] font-bold my-4 text-lg">Message</h1>
          <textarea
            className="py-4 px-4 resize-none outline-none h-40"
            placeholder="Type your message here..."
          ></textarea>
          <button onClick={onSubmit} type="submit" className="btn mt-8 mb-6">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
