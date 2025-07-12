import React from "react";
import Form from "../src/Component/Form";

//this is the AddNew component, it is responsible for adding new invitees to the list. It uses the Form component to handle the form submission and display the form fields. The modal is displayed when the admin wants to add a new invitee, and it can be closed by clicking the close button. so it is also used by normal envagelizmator that went out to collect data (so summary is that i makse it a global form which is reusable in both admin and normal envagelizmator and then i crate a props called setShowmodal, inviteeList and SetInviteelist in yhe form.jsx and i sued it here check below)

const AddNew = ({ setShowModal, inviteesList, setInviteesList }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 z-50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4 overflow-hidden motion-preset-pop">
        <div className="flex justify-end p-3">
          <button
            onClick={() => setShowModal(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            <i className="ri-close-circle-line text-2xl"></i>
          </button>
        </div>
        <div className="px-5 pb-6">
          <h2 className="text-xl font-bold text-blue-800 mb-4 text-center">
            Add New Invitee
          </h2>
          <Form
            setShowModal={setShowModal}
            inviteesList={inviteesList}
            setInviteesList={setInviteesList}
            mode="admin"
          />
        </div>
      </div>
    </div>
  );
};

export default AddNew;