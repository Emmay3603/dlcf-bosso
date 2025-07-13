//This is the admin dashboard like this, as u cansee it , what i did here is that i use navige from router dom react so that it can navigate to admin login when user is not logged in and then i also input the card categry which i created to catgeorize the card and then i also added imprt the inviteecard which is to make it more organized and then i passed in the components and props as ive decalred it from the invitee card, check invittee card for more comments on explanations and also check below the props of the category cardes are: iconColor, bgColor, borderColor, title, number and the props of the inviteecard are: iName, iDept, iEmail, iLevel, iWhatsapp, onDelete
             

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CardCategory from "../src/Component/CardCategory";
import InviteeCard from "../src/Component/InviteeCard";
import Loader from "../src/Component/Loader";

const Dashboard = ({ inviteesList, setInviteesList, onLogout }) => {
  const [overViewActive, setOverViewActive] = useState(true);
  const [inviteesActive, setInviteesActive] = useState(false);
  const [searchInvitee, setSearchInvitee] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const backendUrl =  'http://localhost:5000';

    // Function to generate random avatar URL using DiceBear API
  const generateRandomAvatar = (seed) => {
    const avatarStyle = 'identicon'; // You can change this to 'bottts', 'avataaars', 'micah', etc.
    return `https://api.dicebear.com/7.x/${avatarStyle}/svg?seed=${seed}`;
  };


useEffect(() => {
  const fetchCandidates = async () => {
    try {
      const url = new URL(`${backendUrl}/api/candidates`);
      if (searchQuery) {
        url.searchParams.append('search', searchQuery);
      }

      const response = await fetch(url, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch candidates');
      }

      const data = await response.json();
      setInviteesList(data.data.map(candidate => ({
        id: candidate.id,
        name: candidate.FullName,
        department: candidate.Dept,
        level: candidate.Level,
        email: candidate.email,
        whatsapp: candidate.whatsapp || "N/A",
        profileImage: generateRandomAvatar(candidate.id || candidate.FullName)
      })));
      setLoading(false); 
    } catch (error) {
      console.error('Error fetching candidates:', error);
      setLoading(false);
    }
  };

  const debounceTimer = setTimeout(() => {
    fetchCandidates();
  }, 500);

  return () => clearTimeout(debounceTimer);
}, [searchQuery]);


  

  const handleDeleteInvitee = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this invitee?"
    );
    if (confirmed) {
      try {
        const response = await fetch(`${backendUrl}/api/candidates/${id}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });

        if (!response.ok) {
          throw new Error('Failed to delete candidate');
        }

        const updatedList = inviteesList.filter((invitee) => invitee.id !== id);
        setInviteesList(updatedList);
      } catch (error) {
        console.error('Error deleting candidate:', error);
      }
    }
  };

  const filteredInvitees = inviteesList.filter(
    (invitee) =>
      invitee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      invitee.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      invitee.level.toLowerCase().includes(searchQuery.toLowerCase()) ||
      invitee.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleLogout = async () => {
    await onLogout();
    navigate("/admin");
  };

  if (loading) {
    return <Loader />;
  }



  return (
    <div className="font-roboto rounded-lg overflow-hidden bg-white w-full max-w-4xl mx-4 my-10 shadow-lg text-gray-600 motion-preset-slide-right">
      <div className="flex justify-center items-center h-24 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="flex gap-3 w-full justify-between items-center text-white px-6">
          <div className="flex justify-center items-center gap-3">
            <img
              src="/DLCF-logo.png"
              width="45px"
              height="45px"
              alt="Deeper Life Campus Fellowship logo"
              className=""
            />
            <h1 className="text-xl font-bold">Admin Dashboard</h1>
          </div>
          <button
            type="button"
            aria-label="Logout"
            className="bg-white/20 text-white px-4 py-1.5 gap-2 rounded-md flex items-center hover:bg-white/30 active:scale-95 duration-200 text-sm"
            onClick={handleLogout}
          >
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
            Logout
          </button>
        </div>
      </div>

      <div className="bg-blue-50 border-b border-gray-200 px-5 py-3 flex items-center gap-4">
        <button
          className={`flex gap-2 items-center cursor-pointer px-4 py-2 duration-200 rounded-md ${
            overViewActive ? "bg-white shadow-md font-medium text-blue-900" : ""
          }`}
          onClick={() => {
            setOverViewActive(true);
            setInviteesActive(false);
            setSearchInvitee("");
          }}
        >
          <i className="fa-solid fa-chart-column"></i>
          <span>Overview</span>
        </button>
        <button
          className={`flex gap-2 items-center cursor-pointer px-4 py-2 duration-200 rounded-md ${
            inviteesActive ? "bg-white shadow-md font-medium text-blue-900" : ""
          }`}
          onClick={() => {
            setInviteesActive(true);
            setOverViewActive(false);
          }}
        >
          <i className="ri-group-line"></i>
          <span>Invitees</span>
        </button>
      </div>

      <div className="p-5 flex flex-col gap-5">
        {overViewActive && (
          <>
            <CardCategory
              icon="ri-group-line"
              iconColor="text-blue-900"
              bgColor="bg-blue-50"
              borderColor="border-blue-300"
              title="Total Invitees"
              number={inviteesList.length}
            />

            <div className="border border-blue-200 bg-blue-50 rounded-lg flex items-center justify-center py-10">
              <img
                className="opacity-20"
                width="150px"
                height="150px"
                src="/DLBC-logo.png"
                alt="Deeper Life Bible Church"
              />
            </div>
          </>
        )}

{inviteesActive && (
  <div className="flex flex-col gap-5">
    <div className="relative">
      <input
        type="text"
        className="block w-full pl-9 pr-3 bg-blue-50 border border-blue-300 rounded-md h-10 focus:outline-0 focus:border-blue-500 focus:border-2 duration-200"
        placeholder="Search invitees..."
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        
        }}
      />
      <i className="ri-search-line absolute top-2 text-blue-500 left-3"></i>
    </div>

    <div className="relative min-h-[200px]">
      {loading && (
        <div className="absolute inset-0 bg-white bg-opacity-70 flex justify-center items-center z-10">
          <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-b-4 border-blue-500"></div>
        </div>
      )}
      
      {filteredInvitees.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredInvitees.map((invitee) => (
            <InviteeCard
              key={invitee.id}
              iName={invitee.name}
              iDept={invitee.department}
              iEmail={invitee.email}
              iLevel={invitee.level}
              iWhatsapp={invitee.whatsapp}
              profileImage={invitee.profileImage}
              onDelete={() => handleDeleteInvitee(invitee.id)}
            />
          ))}
        </div>
      ) : (
        <div className="border border-blue-200 bg-blue-50 rounded-lg flex-grow py-10 flex justify-center items-center flex-col gap-2">
          <i className="ri-group-line text-5xl opacity-40 text-blue-900"></i>
          <h3 className="text-lg font-bold text-blue-900">
            {searchQuery ? "No matching invitees found" : "No invitees found"}
          </h3>
          <p className="text-blue-900 opacity-40">
            {searchQuery ? "Try a different search term" : "Add new invitees to get started"}
          </p>
        </div>
      )}
    </div>
  </div>
)}
      </div>
    </div>
  );
};

export default Dashboard;