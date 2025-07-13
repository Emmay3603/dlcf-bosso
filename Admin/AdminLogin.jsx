import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../src/Component/Input";
import Loader from "../src/Component/Loader";
import { AuthContext } from "../auth/AuthContext";

const AdminLogin = () => {
  const [emailAdmin, setEmailAdmin] = useState("");
  const [passwordAdmin, setPasswordAdmin] = useState("");
  const [errorInputAdmin, setErrorInputAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { login, isAuthenticated, loading } = useContext(AuthContext);

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated && !loading) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, loading, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!emailAdmin || !passwordAdmin) {
      setErrorInputAdmin(true);
      return;
    }

    setIsLoading(true);
    setErrorMessage("");
    
    try {
      const result = await login(emailAdmin, passwordAdmin);
      
      if (result.success) {
        navigate("/dashboard");
      } else {
        setErrorMessage(result.message || "Invalid credentials");
        setErrorInputAdmin(true);
      }
    } catch (error) {
      setErrorMessage("An error occurred during login");
      setErrorInputAdmin(true);
    } finally {
      setIsLoading(false);
    }
  };

  // Show loading while checking auth state
  if (loading) {
    return <Loader />;
  }

  return (
    <div className="font-roboto rounded-lg overflow-hidden bg-white w-full max-w-md mx-4 my-10 shadow-lg motion-preset-slide-right">
      {isLoading && <Loader />}
      <div className="flex justify-center items-center h-40 flex-col bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="flex gap-3">
          <img
            src="/DLBC-logo.png"
            width="40px"
            height="40px"
            alt="Deeper Life Bible Church logo"
            className=""
          />
          <img
            src="/DLCF-logo.png"
            width="40px"
            height="40px"
            alt="Deeper Life Campus Fellowship logo"
            className=""
          />
        </div>
        <p className="text-white text-center font-medium leading-5 text-sm mt-2">
          Deeper Life Campus Fellowship <br />
          Futminna, Bosso Campus.
        </p>
      </div>

      <div className="py-7 px-5">
        <h1 className="text-center text-blue-800 font-bold text-2xl mb-6">
          Admin Login Portal
        </h1>
        <form onSubmit={handleSubmit}>
          <Input
            label="Email"
            type="email"
            placeholder="Enter admin email"
            id="email"
            value={emailAdmin}
            onChange={(e) => {
              setEmailAdmin(e.target.value);
              setErrorInputAdmin(false);
            }}
            error={errorInputAdmin && !emailAdmin ? "Email is required" : ""}
            icon="ri-mail-line"
          />

          <Input
            label="Password"
            type="password"
            id="password"
            placeholder="Enter your password"
            value={passwordAdmin}
            onChange={(e) => {
              setPasswordAdmin(e.target.value);
              setErrorInputAdmin(false);
            }}
            error={errorInputAdmin && !passwordAdmin ? "Password is required" : ""}
            icon="ri-lock-line"
          />

          {(errorInputAdmin && errorMessage) && (
            <p className="text-red-600 mt-3 text-sm text-center">
              {errorMessage}
            </p>
          )}

          <button
            type="submit"
            className="block mt-6 w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 active:scale-95 duration-200 rounded-md h-10 text-white font-medium cursor-pointer"
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;