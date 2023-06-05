import React from "react";

const ProfileForm = ({
  name,
  labelText,
  value,
  handleChange,
  type,
  placeholder,
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
    </div>
  );
};

export default ProfileForm;
