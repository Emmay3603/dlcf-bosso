import React, { useState } from "react";
import Registration from "./Component/Registration";
import AdminLogin from "./Component/AdminLogin";
import Dashboard from "./Component/Dashboard";
import Form from "./Component/Form";

const Invitees = [
  {
    id: 1,
    name: "Emmanuel",
    department: "Computer Science",
    level: "300",
    whatsapp: "08101369911",
    email: "emmay@gmil.com",
  },
  {
    id: 2,
    name: "Adebayo Emmanuel",
    department: "Musical Science",
    level: "100",
    whatsapp: "08101355101",
    email: "emmay@gmil.com",
  },
  {
    id: 3,
    name: "Emmanuel",
    department: "Computer Science",
    level: "300",
    whatsapp: "08101369911",
    email: "emmay@gmil.com",
  },
  {
    id: 4,
    name: "Emmanuel",
    department: "Computer Science",
    level: "300",
    whatsapp: "08101369911",
    email: "emmay@gmil.com",
  },
];

const AdminAddInvitee = ({ setShowModal, inviteesList, setInviteesList }) => {
  return (
    <div className="fixed bg-[#0434867e] inset-0 bg-opacity-30 z-50 flex justify-center items-center top-0">
      <div className="bg-white pb-5 pt-2 rounded-lg motion-preset-pop motion-duration-400">
        <div className="text-center  ">
          <i
            className="ri-close-circle-line text-3xl cursor-pointer text-blue-900 opacity-80 "
            onClick={() => {
              setShowModal(false);
            }}
          ></i>
        </div>
        <Form
          setShowModal={setShowModal}
          inviteesList={inviteesList}
          setInviteesList={setInviteesList}
        />
      </div>
    </div>
  );
};

const App = () => {
  const [adminPortal, setAdminPortal] = useState(false);
  const [inviteesList, setInviteesList] = useState(Invitees);

  const [dashboardAdminPortal, setDashboardAdminPortal] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="relative w-full min-h-screen bg-blue-100">
      <div
        className={`flex justify-center ${
          !adminPortal ? "items-center" : "items-start"
        } min-h-screen`}
      >
        {!dashboardAdminPortal ? (
          !adminPortal ? (
            <Registration
              setAdminPortal={setAdminPortal}
              adminPortal={adminPortal}
              inviteesList={inviteesList}
              setInviteesList={setInviteesList}
            />
          ) : (
            <AdminLogin
              setAdminPortal={setAdminPortal}
              adminPortal={adminPortal}
              dashboardAdminPortal={dashboardAdminPortal}
              setDashboardAdminPortal={setDashboardAdminPortal}
            />
          )
        ) : (
          <Dashboard
            dashboardAdminPortal={dashboardAdminPortal}
            setDashboardAdminPortal={setDashboardAdminPortal}
            inviteesList={inviteesList}
            setInviteesList={setInviteesList}
            Invitees={Invitees}
          />
        )}
      </div>
      {/* This show the edit icon in the dashboard, if the dashboard is in the view  */}
      {dashboardAdminPortal && (
        <>
          <div
            className="fixed top-[70vh] border-1 border-blue-200 right-5 bg-gradient-to-br from-blue-[#4b8dff33] to-blue-100 flex justify-center items-center w-14 h-14 rounded-full shadow-md  hover:scale-110 transition duration-200 cursor-pointer z-50 "
            onClick={() => setShowModal(true)}
          >
            <i className="ri-add-line text-2xl text-blue-700"></i>
          </div>
          {showModal && (
            <AdminAddInvitee
              setShowModal={setShowModal}
              inviteesList={inviteesList}
              setInviteesList={setInviteesList}
            />
          )}
        </>
      )}
    </div>
  );
};

export default App;
