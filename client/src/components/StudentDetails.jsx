import React from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import SideBar from "./SideBar";

export default function StudentDetails() {
  const { name } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

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

  return (
    <>
      <NavBar />

      <div className="flex min-h-screen">
        {/* Sidebar */}
        <SideBar />

        {/* Main Content */}
        <div className="flex-1 p-6">
          <h2 className="text-2xl font-bold mb-6">{name}</h2>
          <div className="bg-white shadow rounded p-6">
            <p><strong>Batch:</strong> {batch}</p>
            <p><strong>Location:</strong> {location}</p>
            <p><strong>Training Partner:</strong> {partner}</p>
            <p><strong>Job Role:</strong> {role}</p>
            <p><strong>Enrollment Date:</strong> {enrollment}</p>
            <p><strong>Status:</strong> {status}</p>
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
