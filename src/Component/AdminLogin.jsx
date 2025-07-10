import React, { useState } from "react";

const inputStyle =
  "block w-full pl-9 pr-3 bg-blue-100 border-1 border-blue-300 rounded-md h-10 focus:outline-0 focus:border-blue-500 focus:border-2 duration-200 ";
const labelStyle =
  "text-blue-800 font-medium block mt-5 text-[15px] md:text-lg";
const iconStyle = "absolute top-8 left-3 text-blue-800";

const Input = ({ label, type, id, value, setAdminLogin, placeholder }) => {
  return (
    <>
      <label className={labelStyle} htmlFor={id}>
        {label}
      </label>
      <input
        className={inputStyle}
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          setAdminLogin(e.target.value);
        }}
      />
    </>
  );
};
// adminPortal && setAdminPortal is state to check Admin Login Portal
const AdminLogin = ({
  setAdminPortal,
  adminPortal,
  setDashboardAdminPortal,
  dashboardAdminPortal,
}) => {
  const [emailAdmin, setEmailAdmin] = useState("");
  const [passwordAdmin, setPasswordAdmin] = useState("");
  const [errorInputAdmin, setErrorInputAdmin] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (emailAdmin === "admin" && passwordAdmin === "admin") {
      setDashboardAdminPortal(true);
      setErrorInputAdmin(false);
    } else {
      setDashboardAdminPortal(false);
      setErrorInputAdmin(true);
    }
    console.log({ emailAdmin });
    console.log({ passwordAdmin });
    console.log({ dashboardAdminPortal });
  }
  return (
    <div className="font-roboto rounded-lg overflow-hidden bg-white w-11/12 md:w-[700px] my-10 md:my-10 shadow-lg motion-preset-slide-right ">
      <div className=" flex justify-center items-center h-35 flex-col bg-[radial-gradient(circle_at_center,_#3b82f6,_#1e3a8a)]">
        <div className="flex gap-1.5">
          <img
            src="/public/DLBC-logo.png"
            width="40px"
            height="40px"
            alt="Deeper Life Bible Church logo"
          />
          <img
            src="/public/DLCF-logo.png"
            width="40px"
            height="40px"
            alt="Deeper Life Bible Church logo"
          />
        </div>
        <p className=" text-white text-center font-medium leading-3.5  text-sm">
          Deeper Life Campus Fellowship <br />
          Futminna, Bosso Campus.
        </p>
      </div>

      <div className="py-7 px-5  ">
        <p
          className="text-sm cursor-pointer inline text-blue-800"
          onClick={() => {
            setAdminPortal(!adminPortal);
          }}
        >
          <i className="ri-arrow-left-long-line "></i> Back to Registration
        </p>
        <h1 className="text-center text-blue-800 font-bold text-[21px] md:text-2xl mb-5 mt-3">
          Admin Login Portal
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="relative">
            <Input
              label="Email"
              type="text"
              placeholder="Enter your email"
              id="email"
              value={emailAdmin}
              setAdminLogin={setEmailAdmin}
            />
            <div className={iconStyle}>
              <i className="fa-regular fa-envelope"></i>
            </div>
          </div>
          <div className="relative">
            <Input
              label="Password"
              type="password"
              id="password"
              placeholder="Enter your password"
              value={passwordAdmin}
              setAdminLogin={setPasswordAdmin}
            />
            <div className={iconStyle}>
              <i className="ri-lock-line"></i>
            </div>
          </div>
          {errorInputAdmin && (
            <p className="text-red-600 mt-3 text-sm">
              {emailAdmin || passwordAdmin
                ? "Invalid credentials. Try again"
                : "Please enter both username and password"}
            </p>
          )}
          <button className="block mt-5 w-full bg-[radial-gradient(circle_at_center,_#3b82f6,_#1e3a8a)] hover:scale-105  active:scale-110 duration-200 transition-all rounded-md h-10 text-white font-medium cursor-pointer">
            Login
          </button>
        </form>
        <button></button>
      </div>
    </div>
  );
};

export default AdminLogin;
