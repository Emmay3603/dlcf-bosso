import React from "react";

const InviteeCard = ({ iDept, iEmail, iLevel, iName, iWhatsapp, onDelete, profileImage }) => {
  return (
    <div className="shadow-lg rounded-lg overflow-hidden hover:-translate-y-1 duration-200 transition-transform">
      <div className="text-white px-4 py-3 flex justify-between items-center bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="flex items-center gap-3 min-w-0">
          <div className="flex-shrink-0 flex justify-center items-center w-9 h-9 rounded-full overflow-hidden">
            {profileImage ? (
              <img 
                src={profileImage} 
                alt={iName}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="bg-white w-full h-full flex justify-center items-center">
                <i className="ri-user-line text-xl text-blue-800"></i>
              </div>
            )}
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
            <p className="text-gray-900 text-sm">{iDept || "N/A"}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <i className="ri-graduation-cap-line text-blue-500 text-lg"></i>
          <div>
            <h3 className="text-xs font-medium text-gray-500">LEVEL</h3>
            <p className="text-gray-900 text-sm">{iLevel || "N/A"}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <i className="ri-phone-line text-blue-500 text-lg"></i>
          <div>
            <h3 className="text-xs font-medium text-gray-500">WHATSAPP</h3>
            <p className="text-gray-900 text-sm">
              {iWhatsapp && iWhatsapp !== "N/A" ? (
                <a 
                  href={`https://wa.me/${iWhatsapp.replace(/^\+/, '')}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {iWhatsapp}
                </a>
              ) : (
                "N/A"
              )}
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <i className="ri-mail-line text-blue-500 text-lg"></i>
          <div>
            <h3 className="text-xs font-medium text-gray-500">EMAIL</h3>
            <p className="text-gray-900 text-sm">{iEmail || "N/A"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InviteeCard;

