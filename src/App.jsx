import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Invitees } from "../constants";
import Home from "../pages/Home";
import AdminLoginPage from "../pages/AdminLoginPage";
import DashboardPage from "../pages/DashboardPage";

//this is now the main App component, it is responsible for rendering the different pages of the application based on the route. It uses React Router to define the routes and render the corresponding components. The inviteesList and setInviteesList state are passed down to the Home and DashboardPage components to manage the list of invitees across the application. so u see that i wrapped all the page in a route and the path i want it to go to like /dashboard /admin / and etc.....

const App = () => {
  const [inviteesList, setInviteesList] = useState(Invitees);

  return (
    <div className="min-h-screen bg-blue-50 font-outfit">
      <Routes>
        <Route
          path="/"
          element={<Home inviteesList={inviteesList} setInviteesList={setInviteesList} />}
        />
        <Route path="/admin" element={<AdminLoginPage />} />
        <Route
          path="/dashboard"
          element={<DashboardPage inviteesList={inviteesList} setInviteesList={setInviteesList} />}
        />
      </Routes>
    </div>
  );
};

export default App;