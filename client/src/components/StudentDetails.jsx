import React, { useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import SideBar from "./SideBar";
import Timeline from "./Timeline";

export default function StudentDetails() {
  const { name } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  const [skills, setSkills] = useState(state?.courses || []);
  const [newSkill, setNewSkill] = useState({ name: "", date: "" });
  const [showInput, setShowInput] = useState(false);

  if (!state) {
    return (
      <div className="p-6">
        <h2 className="text-xl font-bold">Student not found</h2>
        <button
          className="mt-4 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>
    );
  }

  const { batch, location, partner, role, enrollment, status } = state;

  const handleAddSkill = () => {
    if (newSkill.name.trim() !== "" && newSkill.date !== "") {
      setSkills([...skills, { ...newSkill }]);
      setNewSkill({ name: "", date: "" });
      setShowInput(false);
    }
  };

  return (
    <>
      <NavBar />

      <div className="flex min-h-screen">
        <SideBar />

        <div className="flex-1 p-6">
          <h2 className="text-2xl font-bold mb-6">{name}</h2>

          <div className="bg-white shadow rounded p-6 space-y-2">
            <p><strong>Batch:</strong> {batch}</p>
            <p><strong>Location:</strong> {location}</p>
            <p><strong>Training Partner:</strong> {partner}</p>
            <p><strong>Job Role:</strong> {role}</p>
            <p><strong>Enrollment Date:</strong> {enrollment}</p>
            <p><strong>Status:</strong> {status}</p>
          </div>

          {/* Timeline */}
          <h3 className="text-xl font-semibold mt-8 mb-4">Course Timeline</h3>
          <Timeline courses={skills} />

          {/* Add course */}
          <div className="mt-6 flex flex-col gap-3">
            {showInput ? (
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newSkill.name}
                  onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
                  placeholder="Enter course name"
                  className="border rounded px-2 py-1"
                />
                <input
                  type="date"
                  value={newSkill.date}
                  onChange={(e) => setNewSkill({ ...newSkill, date: e.target.value })}
                  className="border rounded px-2 py-1"
                />
                <button
                  onClick={handleAddSkill}
                  className="px-4 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  Save
                </button>
                <button
                  onClick={() => setShowInput(false)}
                  className="px-4 py-1 bg-gray-300 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowInput(true)}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Add Course
              </button>
            )}
          </div>

          <div className="mt-6 flex gap-4">
            <button
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              onClick={() => navigate(-1)}
            >
              Back
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
