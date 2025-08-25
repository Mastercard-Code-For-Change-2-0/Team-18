import React, { useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import SideBar from "./SideBar";

export default function UpdateStudent() {
  const { name } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="p-6">
        <h2 className="text-xl font-bold">No student data found</h2>
        <button
          className="mt-4 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>
    );
  }

  const [formData, setFormData] = useState({
    batch: state.batch || "",
    location: state.location || "",
    partner: state.partner || "",
    role: state.role || "",
    enrollment: state.enrollment || "",
    status: state.status || "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 🚨 Replace this with actual API call to save updates
    alert(`Student ${name} updated successfully!`);
    navigate(-1); // go back to details page
  };

  return (
    <>
      <NavBar />

      <div className="flex min-h-screen">
        {/* Sidebar */}
        <SideBar />

        {/* Main Content */}
        <div className="flex-1 p-6">
          <h2 className="text-2xl font-bold mb-6">Update Student: {name}</h2>
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow rounded p-6 space-y-4"
          >
            <div>
              <label className="block font-medium">Batch</label>
              <input
                type="text"
                name="batch"
                value={formData.batch}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div>
              <label className="block font-medium">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div>
              <label className="block font-medium">Training Partner</label>
              <input
                type="text"
                name="partner"
                value={formData.partner}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div>
              <label className="block font-medium">Job Role</label>
              <input
                type="text"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div>
              <label className="block font-medium">Enrollment Date</label>
              <input
                type="date"
                name="enrollment"
                value={formData.enrollment}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div>
              <label className="block font-medium">Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
              >
                <option value="Active">Active</option>
                <option value="Completed">Completed</option>
                <option value="Dropped">Dropped</option>
              </select>
            </div>

            <div className="flex gap-4 mt-6">
              <button
                type="button"
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                onClick={() => navigate(-1)}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}
