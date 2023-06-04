import React, { useState } from "react";
import { FiEdit2 } from "react-icons/fi";

const ProfileForm = ({
  name,
  labelText,
  value,
  handleChange,
  type,
  placeholder,
  disabled,
}) => {
  return (
    <div className="flex capitalize tracking-wider mb-4">
      <label
        className=" font-semibold text-gray-400 text-lg text-start w-24 "
        htmlFor={name}
      >
        {labelText || name}
      </label>
      <input
        className="outline-none ml-48 py-1 px-3 rounded-sm border border-opacity-50 font-semibold text-sm border-black w-[400px]"
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
      />
      <button className="ml-4 text-2xl  focus:border-2 border-black rounded-lg">
        <FiEdit2 className="p-[5px]" />
      </button>
    </div>
  );
};

export default ProfileForm;
