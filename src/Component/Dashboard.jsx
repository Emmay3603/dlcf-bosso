import React, { useState } from "react";
const selectCategoryStyle =
  "bg-white font-medium text-blue-900 shadow-md rounded-md ";
const initialCategoryStyle =
  "flex gap-2  justify-center items-center cursor-pointer px-4 py-2 duration-200";
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
const InviteeCard = () => {
  return <div></div>;
};
const Dashboard = ({ setDashboardAdminPortal }) => {
  const [overViewActive, setOverViewActive] = useState(true);
  const [inviteesActive, setInviteesActive] = useState(false);
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
              title="Total Invitee"
              number="6"
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

            {/* <CardCategory
          title="Departments"
          icon="ri-pie-chart-line"
          iconColor="text-purple-900"
          bgColor="bg-purple-50"
          borderColor="border-purple-300"
          number="2"
          />
          <CardCategory
          title="This Week"
          icon="ri-line-chart-line"
          iconColor="text-cyan-900"
          bgColor="bg-cyan-50"
          borderColor="border-cyan-300"
          number="8"
        /> */}
          </>
        )}
        {inviteesActive && (
          <div className="flex flex-col gap-5">
            <div className="relative">
              <input
                type="text"
                className="block w-full pl-9 pr-3 bg-blue-50 border-1 border-blue-300 rounded-md h-10 focus:outline-0 focus:border-blue-500 focus:border-2 duration-200 "
                placeholder="Enter invitees..."
              />
              <i className="ri-search-line absolute top-2 text-blue-500 left-3"></i>
            </div>
            <InviteeCard />
            {/* <CardCategory
              title="This Week"
              icon="ri-line-chart-line"
              iconColor="text-cyan-900"
              bgColor="bg-cyan-50"
              borderColor="border-cyan-300"
              number="8"
            /> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
