import React from "react";

const InviteeCard = ({ iDept, iEmail, iLevel, iName, iWhatsapp, onDelete }) => {
  return (
    <div className="shadow-lg rounded-lg overflow-hidden hover:-translate-y-1 duration-200 transition-transform">
      <div className="text-white px-4 py-3 flex justify-between items-center bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="flex items-center gap-3 min-w-0">
          <div className="bg-white flex-shrink-0 flex justify-center items-center w-9 h-9 rounded-full">
            <i className="ri-user-line text-xl text-blue-800"></i>
          </div>
          <h1 className="text-md font-bold truncate">{iName}</h1>
        </div>
        <div
          className="bg-white/20 flex justify-center items-center w-7 h-7 rounded-full cursor-pointer flex-shrink-0 hover:bg-white/30 transition-colors"
          onClick={onDelete}
        >
          <i className="fa-regular fa-trash-can text-xs text-white"></i>
        </div>
      </div>
      <div className="p-4 grid gap-3">
        <div className="flex gap-3">
          <i className="ri-hotel-line text-blue-500 text-lg"></i>
          <div>
            <h3 className="text-xs font-medium text-gray-500">DEPARTMENT</h3>
            <p className="text-gray-900 text-sm">{iDept}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <i className="ri-graduation-cap-line text-blue-500 text-lg"></i>
          <div>
            <h3 className="text-xs font-medium text-gray-500">LEVEL</h3>
            <p className="text-gray-900 text-sm">{iLevel}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <i className="ri-phone-line text-blue-500 text-lg"></i>
          <div>
            <h3 className="text-xs font-medium text-gray-500">WHATSAPP</h3>
            <p className="text-gray-900 text-sm">{iWhatsapp}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <i className="ri-mail-line text-blue-500 text-lg"></i>
          <div>
            <h3 className="text-xs font-medium text-gray-500">EMAIL</h3>
            <p className="text-gray-900 text-sm">{iEmail}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InviteeCard;