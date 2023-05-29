import React from "react";

const FormRow = ({ name, labelText, value, handleChange, type }) => {
  return (
    <div className="flex flex-col capitalize tracking-wider">
      <label
        className="my-4 font-semibold text-lg text-[#fee4c3] text-start"
        htmlFor={name}
      >
        {labelText || name}
      </label>
      <input className="py-1 px-3 rounded-sm" type={type} value={value} name={name} onChange={handleChange} />
    </div>
  );
};

export default FormRow;
