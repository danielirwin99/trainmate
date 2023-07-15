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
    <div className="grid grid-cols-2 row-auto capitalize tracking-wider mb-4 mr-2">
      <label
        className=" font-semibold text-gray-400 text-lg text-start w-24 "
        htmlFor={name}
      >
        {labelText || name}
      </label>
      <div>
        <input
          autoComplete="off"
          className="outline-none py-1 px-3 rounded-sm border border-opacity-50 font-semibold text-sm border-black w-full max-w-xl"
          type={type}
          value={value}
          name={name}
          onChange={handleChange}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default ProfileForm;
