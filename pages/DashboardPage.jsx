import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "../Admin/Dashboard";
import AddNew from "../Admin/AddNew";
import ProtectedRoute from "../auth/ProtectedRoutes";

//this is the dashbaord page as u can see i imported the dashboard component and then i also imported the admin add invitee component which is the modal that pops up when u click on the add invitee button and then i also imported the protected route which is to protect the route so that only authenticated users can access it and then i passed in the props inviteesList and setInviteesList to the dashboard component and then i also used useNavigate from react-router-dom to navigate to other pages if needed

const DashboardPage = ({ inviteesList, setInviteesList }) => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  return (
    <ProtectedRoute isAuthenticated={true}>
      <div className="flex justify-center items-start min-h-screen bg-blue-50 py-10">
        <Dashboard inviteesList={inviteesList} setInviteesList={setInviteesList} />
        
        <button
          className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white flex justify-center items-center w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-transform duration-200 z-50"
          onClick={() => setShowModal(true)}
          aria-label="Add invitee"
        >
          <i className="ri-add-line text-2xl"></i>
        </button>

        {showModal && (
          <AddNew
            setShowModal={setShowModal}
            inviteesList={inviteesList}
            setInviteesList={setInviteesList}
          />
        )}
      </div>
    </ProtectedRoute>
  );
};

export default DashboardPage;