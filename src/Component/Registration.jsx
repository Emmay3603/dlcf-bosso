import React, { useState } from "react";
const inputStyle =
  "block w-full px-3 bg-blue-100 border-1 border-blue-300 rounded-md h-10 focus:outline-0 focus:border-blue-500 focus:border-2 duration-200";
const errorInput =
  "border-red-500 border-1 focus:border-red-500 focus:border-2 transition-all duration-200 bg-red-50";
const labelStyle =
  "text-blue-800 font-medium block mt-3 text-[15px] md:text-lg";
const Input = ({ label, setInput, error, id, value }) => {
  return (
    <>
      <div>
        <label className={`${labelStyle}`} htmlFor={id}>
          {label} *
        </label>
        <input
          className={`${inputStyle} ${error && errorInput}`}
          type="text"
          id={id}
          value={value}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </div>
      {error ? (
        <p className="text-red-500 mt-0.5 text-xs md:text-lg duration-200">
          {error}
        </p>
      ) : (
        ""
      )}
    </>
  );
};

const Registration = ({ adminPortal, setAdminPortal }) => {
  const [fullNameInput, setFullNameInput] = useState("");
  const [departmentInput, setDepartmentInput] = useState("");
  const [whatsappInput, setWhatsappInput] = useState("");
  const [levelInput, setLevelInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [otherLevel, setOtherLevel] = useState("");
  const [checkError, setCheckError] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const allValid =
      fullNameInput &&
      departmentInput &&
      whatsappInput &&
      levelInput &&
      (levelInput !== "others" || otherLevel);
    if (!allValid) {
      setCheckError(true);
      setFormSubmitted(false);
      console.log("error");
    } else {
      setCheckError(false);
      setFormSubmitted(true);
      console.log("success");
    }
    console.log({
      level: levelInput === "others" ? otherLevel : levelInput,
    });
    console.log({ fullNameInput });
    console.log({ departmentInput });
  }
  return (
    <div
      className={`font-roboto rounded-lg overflow-hidden bg-white w-11/12 md:w-[700px] my-5 md:my-10 shadow-lg ${
        // This is for register page onshow
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
          <p className="text-center text-blue-800 font-bold text-[21px] md:text-2xl my-5 ">
            Invitee Registration Portal
          </p>
          <form className="px-5" onSubmit={handleSubmit}>
            <div>
              <Input
                label="Full Name"
                setInput={setFullNameInput}
                id="name"
                value={fullNameInput}
                error={
                  checkError && !fullNameInput ? "Full name is required" : ""
                }
              />
            </div>

            <div>
              <Input
                label="Department"
                setInput={setDepartmentInput}
                id="department"
                value={departmentInput}
                error={
                  checkError && !departmentInput ? "Department is required" : ""
                }
              />
            </div>

            <div>
              <label className={`${labelStyle}`} htmlFor="level">
                Level *
              </label>
              <select
                onChange={(e) => {
                  setLevelInput(e.target.value);
                }}
                className={`${inputStyle} ${
                  checkError && !levelInput ? errorInput : ""
                }`}
                value={levelInput}
                name="level"
                id="level"
              >
                <option hidden>Select Level</option>
                <option value="100">100 Level</option>
                <option value="200">200 Level</option>
                <option value="300">300 Level</option>
                <option value="400">400 Level</option>
                <option value="500">500 Level</option>
                <option value="others">Others</option>
              </select>
              {checkError && !levelInput && (
                <p className="text-red-500 text-xs md:text-lg">
                  Level is required
                </p>
              )}

              {levelInput === "others" && (
                <Input
                  label="Specify"
                  id="otherLevel"
                  value={otherLevel}
                  setInput={setOtherLevel}
                  error={
                    checkError && !otherLevel
                      ? "Specified level is required"
                      : ""
                  }
                />
              )}
            </div>
            <div>
              <Input
                label="WhatsApp Number"
                id="whatsapp"
                value={whatsappInput}
                setInput={setWhatsappInput}
                error={
                  checkError && !whatsappInput
                    ? "WhatsApp number is required"
                    : ""
                }
              />
            </div>
            <>
              <label className={`${labelStyle}`} htmlFor="email">
                Email (Optional)
              </label>
              <input
                className={`${inputStyle}`}
                id="email"
                value={emailInput}
                onChange={(e) => {
                  setEmailInput(e.target.value);
                }}
              />
            </>
            <button
              className="block mt-5 w-full bg-[radial-gradient(circle_at_center,_#3b82f6,_#1e3a8a)] active:scale-105 duration-100 transition-all rounded-md h-10 text-white font-medium cursor-pointer"
              type="submit"
            >
              Submit
            </button>
          </form>
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
              setFullNameInput("");
              setDepartmentInput("");
              setLevelInput("");
              setWhatsappInput("");
              setEmailInput("");
              setOtherLevel("");
              setCheckError(false);
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
