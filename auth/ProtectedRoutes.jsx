import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useContext(AuthContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/admin" replace />;
  }
  
  return children;
};

export default ProtectedRoute;

//REASON WHY I BUILD THIS PROTECTED ROUTE IS THAT WHEN U WANNA CONNECT THE BACKEND AUTH IT WILL BE EASY FOR U TO TELL THE KIND OF PAGE U WANT THE ORDINARY PEOPLE TO HAVE ACCESS TO , LIKE SO THAT THEY WONT BE ABLE TO HAVE ACCESS TO THE ADMIN PAGE