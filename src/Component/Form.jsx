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
      {error && (
        <p className="text-red-500 mt-0.5 text-xs md:text-lg duration-200">
          {error}
        </p>
      )}
    </>
  );
};

const Form = ({
  setFormSubmitted = () => {},
  setShowModal,
  inviteesList = [],
  setInviteesList = () => {},
  mode = "resgistration", //By default
}) => {
  const [fullNameInput, setFullNameInput] = useState("");
  const [departmentInput, setDepartmentInput] = useState("");
  const [whatsappInput, setWhatsappInput] = useState("");
  const [levelInput, setLevelInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [otherLevel, setOtherLevel] = useState("");
  const [checkError, setCheckError] = useState(false);

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
      if (mode === "registration") setFormSubmitted(false);
    } else {
      setCheckError(false);
      if (mode === "registration") setFormSubmitted(true);
      if (mode === "admin") setShowModal(false);

      const newInvitee = {
        id: Date.now(), // i use timestamp as unique id
        name: fullNameInput,
        department: departmentInput,
        level: levelInput === "others" ? otherLevel : levelInput,
        whatsapp: whatsappInput,
        email: emailInput === "" ? "Nill" : emailInput,
      };

      const updatedList = [...inviteesList, newInvitee];
      setInviteesList(updatedList);
      console.log(updatedList);

      setFullNameInput("");
      setDepartmentInput("");
      setWhatsappInput("");
      setLevelInput("");
      setEmailInput("");
      setOtherLevel("");
    }
  }
  return (
    <div>
      <form className="px-5" onSubmit={handleSubmit}>
        <div>
          <Input
            label="Full Name"
            setInput={setFullNameInput}
            id="name"
            value={fullNameInput}
            error={checkError && !fullNameInput ? "Full name is required" : ""}
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
            <p className="text-red-500 text-xs md:text-lg">Level is required</p>
          )}

          {levelInput === "others" && (
            <Input
              label="Specify"
              id="otherLevel"
              value={otherLevel}
              setInput={setOtherLevel}
              error={
                checkError && !otherLevel ? "Specified level is required" : ""
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
              checkError && !whatsappInput ? "WhatsApp number is required" : ""
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
    </div>
  );
};

export default Form;
