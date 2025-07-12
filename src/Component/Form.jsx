
//instead of having eveything together here , what i did is that i seaprate the inputs and then use it here as a component to make things fasterinstead of bunch codes
// and more readable, so i created a new file called Input.jsx and then i use it here in the Form.jsx file
// this is the Form.jsx file, it is responsible for the form that is used in the data collection

import React, { useState } from "react";
import Input from "./Input";

const Form = ({
  setFormSubmitted,
  setShowModal,
  inviteesList = [],
  setInviteesList,
  mode = "registration",
}) => {
  const [formData, setFormData] = useState({
    fullName: "",
    department: "",
    whatsapp: "",
    level: "",
    email: "",
    otherLevel: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full name is required";
    if (!formData.department) newErrors.department = "Department is required";
    if (!formData.whatsapp) newErrors.whatsapp = "WhatsApp number is required";
    if (!formData.level) newErrors.level = "Level is required";
    if (formData.level === "others" && !formData.otherLevel) {
      newErrors.otherLevel = "Specified level is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // triggered API call with timeout to 2 sec to just show small loading state
    await new Promise(resolve => setTimeout(resolve, 2000));

    const newInvitee = {
      id: Date.now(),
      name: formData.fullName,
      department: formData.department,
      level: formData.level === "others" ? formData.otherLevel : formData.level,
      whatsapp: formData.whatsapp,
      email: formData.email || "Nill",
    };

    setInviteesList([...inviteesList, newInvitee]);

    if (mode === "registration") {
      setFormSubmitted(true);
    } else if (mode === "admin") {
      setShowModal(false);
    }

    setFormData({
      fullName: "",
      department: "",
      whatsapp: "",
      level: "",
      email: "",
      otherLevel: "",
    });
    setIsSubmitting(false);
  };

  return (
    <form className="px-5" onSubmit={handleSubmit}>
      <Input
        label="Full Name *"
        id="fullName"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        error={errors.fullName}
        icon="ri-user-line"
      />

      <Input
        label="Department *"
        id="department"
        name="department"
        value={formData.department}
        onChange={handleChange}
        error={errors.department}
        icon="ri-building-line"
      />

      <div className="mb-4">
        <label className="text-blue-800 font-medium block mt-3 text-[15px] md:text-lg" htmlFor="level">
          Level *
        </label>
        <select
          name="level"
          id="level"
          value={formData.level}
          onChange={handleChange}
          className={`block w-full px-3 bg-blue-50 border-1 border-blue-300 rounded-md h-10 focus:outline-0 focus:border-blue-500 focus:border-2 duration-200 ${
            errors.level ? "border-red-500 bg-red-50" : ""
          }`}
        >
          <option value="">Select Level</option>
          <option value="100">100 Level</option>
          <option value="200">200 Level</option>
          <option value="300">300 Level</option>
          <option value="400">400 Level</option>
          <option value="500">500 Level</option>
          <option value="others">Others</option>
        </select>
        {errors.level && (
          <p className="text-red-500 text-xs mt-1">{errors.level}</p>
        )}

        {formData.level === "others" && (
          <Input
            label="Specify Level *"
            id="otherLevel"
            name="otherLevel"
            value={formData.otherLevel}
            onChange={handleChange}
            error={errors.otherLevel}
            icon="ri-pencil-line"
          />
        )}
      </div>

      <Input
        label="WhatsApp Number *"
        id="whatsapp"
        name="whatsapp"
        value={formData.whatsapp}
        onChange={handleChange}
        error={errors.whatsapp}
        icon="ri-phone-line"
      />

      <Input
        label="Email (Optional)"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        icon="ri-mail-line"
      />

      <button
        className={`block mt-5 w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 active:scale-95 duration-200 rounded-md h-10 text-white font-medium cursor-pointer ${
          isSubmitting ? "opacity-70 cursor-not-allowed" : ""
        }`}
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Processing..." : "Submit"}
      </button>
    </form>
  );
};

export default Form;
