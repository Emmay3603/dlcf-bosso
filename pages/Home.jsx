import React from "react";
import Registration from "../src/Component/Registration";

const Home = ({ inviteesList, setInviteesList }) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-50">
      <Registration inviteesList={inviteesList} setInviteesList={setInviteesList} />
    </div>
  );
};

export default Home;