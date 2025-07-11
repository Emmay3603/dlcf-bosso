import React, { useState } from "react";
import Form from "./Form";

const Registration = ({
  adminPortal,
  setAdminPortal,
  inviteesList,
  setInviteesList,
}) => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <div
      className={`font-roboto rounded-lg overflow-hidden bg-white w-11/12 md:w-[700px] my-5 md:my-10 shadow-lg ${
        // This is for register page to view on screen
        !formSubmitted && "motion-preset-slide-right"
      } ${
        // This works for the submit successful modal
        formSubmitted && "motion-preset-expand motion-duration-400 "
      } `}
    >
      {!formSubmitted ? (
        <>
          <div className=" flex justify-center items-center h-35 flex-col bg-[radial-gradient(circle_at_center,_#3b82f6,_#1e3a8a)]">
            <div className="flex gap-1.5">
              <img
                src="/DLBC-logo.png"
                width="40px"
                height="40px"
                alt="Deeper Life Bible Church logo"
              />
              <img
                src="/DLCF-logo.png"
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
          <p className="text-center text-blue-800 font-bold text-[21px] md:text-2xl my-5 ">
            Invitee Registration Portal
          </p>
          {/* This is the form Component */}
          <Form
            setFormSubmitted={setFormSubmitted}
            inviteesList={inviteesList}
            setInviteesList={setInviteesList}
          />

          <div className="flex justify-center">
            <p
              className="text-blue-800 text-sm font-medium block mt-3 md:text-lg mb-6 cursor-pointer"
              onClick={() => {
                setAdminPortal(!adminPortal);
              }}
            >
              Admin Login
            </p>
          </div>
        </>
      ) : (
        <div className="flex justify-center items-center flex-col px-8 text-center ">
          <img
            className="mb-3 mt-7 motion-scale-in-[0.25] motion-translate-x-in-[-1%] motion-translate-y-in-[2%] motion-duration-[0.38s] motion-ease-bounce"
            src="/public/icons8-tick.svg"
            width="100px"
            height="100px"
            alt="success icon"
          />
          <h1 className="text-blue-800 text-2xl font-extrabold">Thank You!</h1>
          <p className="mb-5 mt-2 text-blue-900 ">
            The invitee has been successfully registered. We'll follow up
            shortly.
          </p>
          <button
            className="bg-[radial-gradient(circle_at_center,_#3b82f6,_#1e3a8a)] mb-9 text-white py-2 px-5 rounded-lg font-bold block active:scale-105 duration-200 cursor-pointer"
            onClick={() => {
              setFormSubmitted(false);
            }}
          >
            Register Another
          </button>
        </div>
      )}
    </div>
  );
};

export default Registration;
