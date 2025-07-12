import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "./Form";

const Registration = ({ inviteesList, setInviteesList }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const navigate = useNavigate();
//this is the regsitration page for the normal envagelizmator, it is responsible for the registration of new invitees. It uses the Form component to handle the form submission and display the form fields. The form is submitted when the user fills in their details and clicks the submit button. After successful submission, a thank you message is displayed, and the user can register another invitee if they wish. and then like i said before u see that i passed in the form here again as a prop coz ive already defined it in the form component to accept ptops and u can see that the mode here is registartionn and if u check the admin add new u will see that the mode is admin, so i used it to differentiate between the two forms and then i also passed in the inviteesList and setInviteesList as props to the form component so that it can update the invitees list when a new invitee is registered

  return (
    <div
      className={`font-roboto rounded-lg overflow-hidden bg-white w-full max-w-md mx-4 my-10 shadow-lg ${
        !formSubmitted ? "motion-preset-slide-right" : "motion-preset-expand"
      }`}
    >
      {!formSubmitted ? (
        <>
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

          <p className="text-center text-blue-800 font-bold text-xl my-5">
            Invitee Registration Portal
          </p>

          <Form
            setFormSubmitted={setFormSubmitted}
            inviteesList={inviteesList}
            setInviteesList={setInviteesList}
            mode="registration"
          />

          <div className="flex justify-center pb-6">
            <button
              className="text-blue-800 text-sm font-medium mt-3 cursor-pointer hover:underline"
              onClick={() => navigate("/admin")}
            >
              Admin Login
            </button>
          </div>
        </>
      ) : (
        <div className="flex justify-center items-center flex-col px-8 py-10 text-center">
          <img
            className="mb-4 motion-scale-in"
            src="/icons8-tick.svg"
            width="80px"
            height="80px"
            alt="Success icon"
          />
          <h1 className="text-blue-800 text-xl font-extrabold">Thank You!</h1>
          <p className="mb-6 mt-2 text-blue-900">
            The invitee has been successfully registered. We'll follow up shortly.
          </p>
          <button
            className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-2 px-6 rounded-lg font-bold active:scale-95 duration-200 cursor-pointer"
            onClick={() => setFormSubmitted(false)}
          >
            Register Another
          </button>
        </div>
      )}
    </div>
  );
};

export default Registration;