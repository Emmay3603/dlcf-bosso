import React, { useState } from "react";
import Registration from "./Component/Registration";
import AdminLogin from "./Component/AdminLogin";
import Dashboard from "./Component/Dashboard";

const App = () => {
  const [adminPortal, setAdminPortal] = useState(false);
  const [dashboardAdminPortal, setDashboardAdminPortal] = useState(false);

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
          />
        )}
      </div>
      {/* This show the edit icon in the dashboard, if the dashboard is in the view  */}
      {dashboardAdminPortal && (
        <div className="fixed top-[70vh] right-5 bg-gradient-to-br from-blue-600 to-purple-600 text-white flex justify-center items-center w-14 h-14 rounded-full shadow-md hover:bg-purple-700 hover:scale-110 transition duration-200 cursor-pointer z-50 ">
          <i className="ri-add-line text-2xl"></i>
        </div>
      )}
    </div>
  );
};

export default App;
