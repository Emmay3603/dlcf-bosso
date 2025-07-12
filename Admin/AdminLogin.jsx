import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../src/Component/Input";
import Loader from "../src/Component/Loader";

//this is the admin login page like this so i did all these so that it will even make ur work more simple when u are connecting backend 

const AdminLogin = () => {
  const [emailAdmin, setEmailAdmin] = useState("");
  const [passwordAdmin, setPasswordAdmin] = useState("");
  const [errorInputAdmin, setErrorInputAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!emailAdmin || !passwordAdmin) {
      setErrorInputAdmin(true);
      return;
    }

    setIsLoading(true);
    
    // triggered fake authentication with timeout so that we can show the loading state
    await new Promise(resolve => setTimeout(resolve, 2000));

    if (emailAdmin === "admin" && passwordAdmin === "admin") {
      navigate("/dashboard");
    } else {
      setErrorInputAdmin(true);
    }
    setIsLoading(false);
  };

  return (
    <div className="font-roboto rounded-lg overflow-hidden bg-white w-full max-w-md mx-4 my-10 shadow-lg motion-preset-slide-right">
      {isLoading && <Loader />}
      <div className="flex justify-center items-center h-40 flex-col bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="flex gap-3">
          <img
            src="/public/DLBC-logo.png"
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
            label="Username"
            type="text"
            placeholder="Enter admin username"
            id="email"
            value={emailAdmin}
            onChange={(e) => {
              setEmailAdmin(e.target.value);
              setErrorInputAdmin(false);
            }}
            error={errorInputAdmin && !emailAdmin ? "Username is required" : ""}
            icon="ri-user-line"
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

          {errorInputAdmin && emailAdmin && passwordAdmin && (
            <p className="text-red-600 mt-3 text-sm text-center">
              Invalid credentials. Please try again.
            </p>
          )}

          <button
            type="submit"
            className="block mt-6 w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 active:scale-95 duration-200 rounded-md h-10 text-white font-medium cursor-pointer"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;