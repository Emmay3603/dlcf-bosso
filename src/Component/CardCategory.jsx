import React from "react";

const CardCategory = ({
  title,
  number,
  icon,
  iconColor,
  bgColor,
  borderColor,
}) => {
  return (
    <div
      className={`flex ${bgColor} p-5 rounded-lg border-1 ${borderColor} justify-start items-center gap-3 shadow-sm hover:shadow-md transition-shadow`}
    >
      <i className={`${icon} text-3xl ${iconColor} font-medium`}></i>
      <div>
        <p className="text-sm text-gray-600">{title}</p>
        <p className="font-bold text-2xl font-poppins text-blue-950">
          {number}
        </p>
      </div>
    </div>
  );
};

export default CardCategory;

//