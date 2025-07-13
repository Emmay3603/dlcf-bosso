import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "../Admin/Dashboard";
import AddNew from "../Admin/AddNew";
import ProtectedRoute from "../auth/ProtectedRoutes";
import { AuthContext } from "../auth/AuthContext";
import Loader from "../src/Component/Loader";

const DashboardPage = ({ inviteesList, setInviteesList }) => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated, loading, logout } = useContext(AuthContext);

  const handleLogout = async () => {
    await logout();
    navigate("/admin");
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <ProtectedRoute isAuthenticated={isAuthenticated}>
      <div className="flex justify-center items-start min-h-screen bg-blue-50 py-10">
        <Dashboard 
          inviteesList={inviteesList} 
          setInviteesList={setInviteesList} 
          onLogout={handleLogout}
        />
        
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