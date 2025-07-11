import React, { useState } from "react";

const selectCategoryStyle =
  "bg-white font-medium text-blue-900 shadow-md rounded-md ";
const initialCategoryStyle =
  "flex gap-2  justify-center items-center cursor-pointer px-4 py-2 duration-200";
const infoBoxStyle = "flex gap-3";
const iconInfoStyle = " text-blue-500 text-xl";
const departmentInfoStyle = "text-xs font-medium text-gray-500";
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
      className={`flex ${bgColor} p-7 rounded-lg border-1 ${borderColor} justify-start items-center gap-3`}
    >
      <i className={`${icon} text-4xl ${iconColor} font-medium`}></i>
      <div>
        <p className="text-sm">{title}</p>
        <p className="font-bold text-2xl font-poppins text-blue-950">
          {number}
        </p>
      </div>
    </div>
  );
};
const InviteeCard = ({ iDept, iEmail, iLevel, iName, iWhatsapp, onDelete }) => {
  return (
    <div className="shadow-lg rounded-lg overflow-hidden hover:-translate-y-1  duration-200">
      <div className="text-white px-3 py-4 flex justify-between items-center  bg-[radial-gradient(circle_at_center,_#3b82f6,_#1e3a8a)] ">
        <div className="flex items-center  gap-3 min-w-0">
          <div className="bg-white flex-shrink-0 flex justify-center items-center w-10 h-10 rounded-full">
            <i className="ri-user-line text-2xl text-blue-800"></i>
          </div>
          <h1 className="text-lg font-bold">{iName}</h1>
        </div>
        <div
          className="bg-[#ebebeb3d] flex justify-center items-center w-8 h-8 rounded-full cursor-pointer flex-shrink-0"
          onClick={onDelete}
        >
          <i className="fa-regular fa-trash-can text-sm "></i>
        </div>
      </div>
      <div className="p-5  grid gap-3">
        <div className={infoBoxStyle}>
          <i className={`ri-hotel-line ${iconInfoStyle}`}></i>
          <div>
            <h3 className={departmentInfoStyle}>DEPARTMENT</h3>
            <p className="text-gray-900 text-[15px]">{iDept}</p>
          </div>
        </div>
        <div className={infoBoxStyle}>
          <i className={`ri-graduation-cap-line ${iconInfoStyle}`}></i>
          <div>
            <h3 className={departmentInfoStyle}>LEVEL</h3>
            <p className="text-gray-900 text-[15px]">{iLevel}</p>
          </div>
        </div>
        <div className={infoBoxStyle}>
          <i className={`ri-phone-line ${iconInfoStyle}`}></i>
          <div>
            <h3 className={departmentInfoStyle}>WHATSAPP</h3>
            <p className="text-gray-900 text-[15px]"> {iWhatsapp}</p>
          </div>
        </div>
        <div className={infoBoxStyle}>
          <i className={`ri-mail-line ${iconInfoStyle}`}></i>
          <div>
            <h3 className={departmentInfoStyle}>EMAIL</h3>
            <p className="text-gray-900 text-[15px]">{iEmail}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
const Dashboard = ({
  setDashboardAdminPortal,
  inviteesList,
  setInviteesList,
  Invitees,
}) => {
  const [overViewActive, setOverViewActive] = useState(true);
  const [inviteesActive, setInviteesActive] = useState(false);
  const [searchInvitee, setSearchInvitee] = useState("");
  const filteredInvitees = inviteesList.filter(
    (invitee) =>
      invitee.name.toLowerCase().includes(searchInvitee.toLowerCase()) ||
      invitee.department.toLowerCase().includes(searchInvitee.toLowerCase()) ||
      invitee.level.toLowerCase().includes(searchInvitee.toLowerCase()) ||
      invitee.email.toLowerCase().includes(searchInvitee.toLowerCase())
  );

  function handleDeleteInvitee(id) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this invitee?"
    );
    if (confirmed) {
      const updatedList = inviteesList.filter((invitee) => invitee.id !== id);
      setInviteesList(updatedList);
    }
  }
  return (
    <div className="font-roboto rounded-lg overflow-hidden bg-white w-11/12 min-h-screen md:w-[700px] my-5 md:my-10 shadow-lg text-gray-600 motion-preset-slide-right ">
      <div className=" flex justify-center items-center h-30 bg-[radial-gradient(circle_at_center,_#3b82f6,_#1e3a8a)]">
        <div className="flex gap-1.5 w-full justify-between items-center text-white pr-5 pl-7">
          <div className="flex justify-center items-center gap-3">
            <img
              src="/DLCF-logo.png"
              width="50px"
              height="50px"
              alt="Deeper Life Campus Fellowship logo"
            />
            <h1 className="text-2xl font-bold leading-7">Admin Dashboard</h1>
          </div>
          <button
            className="bg-[#ebebeb3d] text-white px-5 py-2 gap-2 rounded-md flex items-center hover:bg-white/30 active:scale-95 duration-200"
            onClick={() => {
              setDashboardAdminPortal(false);
            }}
          >
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
            Logout
          </button>
        </div>
      </div>
      <div className="bg-[#072e720e] border-b-1 border-gray-200  px-5 py-3  flex items-center gap-4">
        <div
          className={`${initialCategoryStyle} ${
            overViewActive && selectCategoryStyle
          }`}
          onClick={() => {
            setOverViewActive(true);
            setInviteesActive(false);
            setSearchInvitee("");
          }}
        >
          <i className="fa-solid fa-chart-column"></i>
          <p>Overview</p>
        </div>
        <div
          className={`${initialCategoryStyle} 
          ${inviteesActive && selectCategoryStyle}
          `}
          onClick={() => {
            setInviteesActive(true);
            setOverViewActive(false);
            console.log(Invitees.length);
          }}
        >
          <i className="ri-group-line"></i>
          <p>Invitees</p>
        </div>
      </div>
      <div className="p-5 flex flex-col gap-5 flex-grow min-h-[calc(100vh-200px)]">
        {overViewActive && (
          <>
            <CardCategory
              icon="ri-group-line"
              iconColor="text-blue-900"
              bgColor="bg-blue-50"
              borderColor="border-blue-300"
              title="Total Invitees"
              number={inviteesList.length}
            />

            <div className="flex-grow border-purple-300  bg-purple-50 border-1 rounded-lg flex items-center justify-center ">
              <img
                className="opacity-20"
                width="200px"
                height="200px"
                src="/public/DLBC-logo.png"
                alt="Deeper Life Bible Church"
              />
            </div>
          </>
        )}
        {inviteesActive && (
          <div className="flex flex-col gap-5 flex-grow min-h-[calc(100vh-200px)]">
            <div className="relative">
              <input
                type="text"
                className="block w-full pl-9 pr-3 bg-blue-50 border-1 border-blue-300 rounded-md h-10 focus:outline-0 focus:border-blue-500 focus:border-2 duration-200 "
                placeholder="Search invitees..."
                onChange={(e) => {
                  setSearchInvitee(e.target.value);
                }}
              />
              <i className="ri-search-line absolute top-2 text-blue-500 left-3"></i>
            </div>

            {filteredInvitees.length > 0 ? (
              filteredInvitees.map((invitee) => (
                <InviteeCard
                  key={invitee.id}
                  iName={invitee.name}
                  iDept={invitee.department}
                  iEmail={invitee.email}
                  iLevel={invitee.level}
                  iWhatsapp={invitee.whatsapp}
                  onDelete={() => handleDeleteInvitee(invitee.id)}
                />
              ))
            ) : (
              <div className="border-blue-300 bg-blue-50 border-1 flex-grow rounded-lg h-50  flex justify-center items-center flex-col gap-2">
                <i className="ri-group-line text-6xl opacity-40 text-blue-900"></i>
                <h3 className="text-lg font-bold text-blue-900">
                  No invitees found
                </h3>
                <p className="text-blue-900 opacity-40">
                  Try adjusting your search
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
