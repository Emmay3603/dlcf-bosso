import React from "react";

const Input = ({ label, type = "text", id, name, value, onChange, placeholder, error, icon }) => {
  const inputStyle = `block w-full pl-9 pr-3 bg-blue-50 border-1 border-blue-300 rounded-md h-10 focus:outline-0 focus:border-blue-500 focus:border-2 duration-200 ${
    error ? "border-red-500 bg-red-50" : ""
  }`;
  const labelStyle = "text-blue-800 font-medium block mt-3 text-[15px] md:text-lg";

  return (
    <div className="relative mb-4">
      <label className={labelStyle} htmlFor={id}>
        {label}
      </label>
      {icon && (
        <div className="absolute top-8 md:top-9 left-3 text-blue-800 mb-8">
          <i className={icon}></i>
        </div>
      )}
      <input
        className={inputStyle}
        type={type}
        id={id}
        name={name} 
        placeholder={placeholder}
        value={value}
        onChange={onChange} 
      />
      {error && (
        <p className="text-red-500 mt-1 text-xs">{error}</p>
      )}
    </div>
  );
};

export default Input;