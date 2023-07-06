import React from "react";

const FormRow = ({
  name,
  labelText,
  value,
  handleChange,
  type,
  placeholder,
}) => {
  return (
    <div className="flex flex-col capitalize tracking-wider">
      <label
        className="my-4 font-semibold text-lg text-[#fee4c3] text-start"
        htmlFor={name}
      >
        {labelText || name}
      </label>
      <input
        className="outline-none py-2 px-3 rounded-sm"
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormRow;
