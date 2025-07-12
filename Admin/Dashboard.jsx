import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CardCategory from "../src/Component/CardCategory";
import InviteeCard from "../src/Component/InviteeCard";

//This is the admin dashboard like this, as u cansee it , what i did here is that i use navige from router dom react so that it can navigate to admin login when user is not logged in and then i also input the card categry which i created to catgeorize the card and then i also added imprt the inviteecard which is to make it more organized and then i passed in the components and props as ive decalred it from the invitee card, check invittee card for more comments on explanations and also check below the props of the category cardes are: iconColor, bgColor, borderColor, title, number and the props of the inviteecard are: iName, iDept, iEmail, iLevel, iWhatsapp, onDelete
             

const Dashboard = ({ inviteesList, setInviteesList }) => {
  const [overViewActive, setOverViewActive] = useState(true);
  const [inviteesActive, setInviteesActive] = useState(false);
  const [searchInvitee, setSearchInvitee] = useState("");
  const navigate = useNavigate();

  const filteredInvitees = inviteesList.filter(
    (invitee) =>
      invitee.name.toLowerCase().includes(searchInvitee.toLowerCase()) ||
      invitee.department.toLowerCase().includes(searchInvitee.toLowerCase()) ||
      invitee.level.toLowerCase().includes(searchInvitee.toLowerCase()) ||
      invitee.email.toLowerCase().includes(searchInvitee.toLowerCase())
  );

  const handleDeleteInvitee = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this invitee?"
    );
    if (confirmed) {
      const updatedList = inviteesList.filter((invitee) => invitee.id !== id);
      setInviteesList(updatedList);
    }
  };

  const handleLogout = () => {
    navigate("/admin");
  };

  return (
    <div className="font-roboto rounded-lg overflow-hidden bg-white w-full max-w-4xl mx-4 my-10 shadow-lg text-gray-600 motion-preset-slide-right">
      <div className="flex justify-center items-center h-24 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="flex gap-3 w-full justify-between items-center text-white px-6">
          <div className="flex justify-center items-center gap-3">
            <img
              src="/DLCF-logo.png"
              width="45px"
              height="45px"
              alt="Deeper Life Campus Fellowship logo"
              className=""
            />
            <h1 className="text-xl font-bold">Admin Dashboard</h1>
          </div>
          <button
            type="button"
            aria-label="Logout"
            className="bg-white/20 text-white px-4 py-1.5 gap-2 rounded-md flex items-center hover:bg-white/30 active:scale-95 duration-200 text-sm"
            onClick={handleLogout}
          >
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
            Logout
          </button>
        </div>
      </div>

      <div className="bg-blue-50 border-b border-gray-200 px-5 py-3 flex items-center gap-4">
        <button
          className={`flex gap-2 items-center cursor-pointer px-4 py-2 duration-200 rounded-md ${
            overViewActive ? "bg-white shadow-md font-medium text-blue-900" : ""
          }`}
          onClick={() => {
            setOverViewActive(true);
            setInviteesActive(false);
            setSearchInvitee("");
          }}
        >
          <i className="fa-solid fa-chart-column"></i>
          <span>Overview</span>
        </button>
        <button
          className={`flex gap-2 items-center cursor-pointer px-4 py-2 duration-200 rounded-md ${
            inviteesActive ? "bg-white shadow-md font-medium text-blue-900" : ""
          }`}
          onClick={() => {
            setInviteesActive(true);
            setOverViewActive(false);
          }}
        >
          <i className="ri-group-line"></i>
          <span>Invitees</span>
        </button>
      </div>

      <div className="p-5 flex flex-col gap-5">
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

            <div className="border border-blue-200 bg-blue-50 rounded-lg flex items-center justify-center py-10">
              <img
                className="opacity-20"
                width="150px"
                height="150px"
                src="/DLBC-logo.png"
                alt="Deeper Life Bible Church"
              />
            </div>
          </>
        )}

        {inviteesActive && (
          <div className="flex flex-col gap-5">
            <div className="relative">
              <input
                type="text"
                className="block w-full pl-9 pr-3 bg-blue-50 border border-blue-300 rounded-md h-10 focus:outline-0 focus:border-blue-500 focus:border-2 duration-200"
                placeholder="Search invitees..."
                value={searchInvitee}
                onChange={(e) => setSearchInvitee(e.target.value)}
              />
              <i className="ri-search-line absolute top-2 text-blue-500 left-3"></i>
            </div>

            {filteredInvitees.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredInvitees.map((invitee) => (
                  <InviteeCard
                    key={invitee.id}
                    iName={invitee.name}
                    iDept={invitee.department}
                    iEmail={invitee.email}
                    iLevel={invitee.level}
                    iWhatsapp={invitee.whatsapp}
                    onDelete={() => handleDeleteInvitee(invitee.id)}
                  />
                ))}
              </div>
            ) : (
              <div className="border border-blue-200 bg-blue-50 rounded-lg flex-grow py-10 flex justify-center items-center flex-col gap-2">
                <i className="ri-group-line text-5xl opacity-40 text-blue-900"></i>
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