import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "./AdminLayout";

const initialStudents = [
  {
    name: "Alice Johnson",
    batch: "B2023-01",
    location: "Delhi",
    partner: "SkillBridge Solutions",
    role: "Data Analyst",
    enrollment: "2023-03-15",
    status: "Active",
    courses: [
      { course: "Data Science", timestamp: "2021-06-15T10:30:00" },
      { course: "AI & ML", timestamp: "2022-07-20T14:10:00" },
      { course: "Big Data", timestamp: "2023-01-05T09:45:00" },
    ],
  },
  {
    name: "Rahul Mehta",
    batch: "B2022-04",
    location: "Mumbai",
    partner: "TechEdge Academy",
    role: "Full Stack Developer",
    enrollment: "2022-01-20",
    status: "Completed",
    courses: [
      { course: "JavaScript Essentials", timestamp: "2020-05-10T09:00:00" },
      { course: "React Development", timestamp: "2021-08-14T12:00:00" },
      { course: "Node.js Advanced", timestamp: "2022-01-18T11:15:00" },
    ],
  },
  {
    name: "Sophia Williams",
    batch: "B2021-09",
    location: "Bangalore",
    partner: "FutureSkills Training",
    role: "UI/UX Designer",
    enrollment: "2021-09-05",
    status: "Active",
    courses: [
      { course: "Graphic Design Basics", timestamp: "2019-04-22T10:20:00" },
      { course: "UI Design", timestamp: "2020-07-30T13:40:00" },
      { course: "UX Research", timestamp: "2021-09-02T15:30:00" },
    ],
  },
  {
    name: "Arjun Patel",
    batch: "B2023-03",
    location: "Pune",
    partner: "NextGen Academy",
    role: "Cloud Engineer",
    enrollment: "2023-05-10",
    status: "Active",
    courses: [
      { course: "AWS Fundamentals", timestamp: "2021-12-01T10:00:00" },
      { course: "Azure Cloud", timestamp: "2022-11-15T11:30:00" },
    ],
  },
  {
    name: "Emily Davis",
    batch: "B2020-08",
    location: "Hyderabad",
    partner: "SkillHub",
    role: "Cybersecurity Analyst",
    enrollment: "2020-08-18",
    status: "Completed",
    courses: [
      { course: "Network Security", timestamp: "2019-03-11T09:15:00" },
      { course: "Ethical Hacking", timestamp: "2020-06-22T14:50:00" },
    ],
  },
  {
    name: "Karan Verma",
    batch: "B2022-12",
    location: "Chennai",
    partner: "TechEdge Academy",
    role: "Backend Developer",
    enrollment: "2022-12-10",
    status: "Active",
    courses: [
      { course: "Python Programming", timestamp: "2020-09-20T10:20:00" },
      { course: "Django Framework", timestamp: "2021-12-10T16:00:00" },
    ],
  },
  {
    name: "Neha Sharma",
    batch: "B2021-06",
    location: "Kolkata",
    partner: "SkillBridge Solutions",
    role: "Business Analyst",
    enrollment: "2021-06-05",
    status: "Completed",
    courses: [
      { course: "Excel Mastery", timestamp: "2019-07-01T11:40:00" },
      { course: "Power BI", timestamp: "2020-10-15T09:30:00" },
    ],
  },
  {
    name: "David Lee",
    batch: "B2023-02",
    location: "Gurgaon",
    partner: "FutureSkills Training",
    role: "DevOps Engineer",
    enrollment: "2023-02-25",
    status: "Active",
    courses: [
      { course: "Linux Basics", timestamp: "2021-03-05T08:15:00" },
      { course: "Docker & Kubernetes", timestamp: "2022-06-17T12:45:00" },
    ],
  },
  {
    name: "Priya Nair",
    batch: "B2020-11",
    location: "Ahmedabad",
    partner: "SkillHub",
    role: "Frontend Developer",
    enrollment: "2020-11-12",
    status: "Completed",
    courses: [
      { course: "HTML & CSS", timestamp: "2018-08-09T09:10:00" },
      { course: "React Basics", timestamp: "2019-10-11T10:30:00" },
    ],
  },
  {
    name: "Mohammed Ali",
    batch: "B2022-07",
    location: "Jaipur",
    partner: "NextGen Academy",
    role: "AI Engineer",
    enrollment: "2022-07-22",
    status: "Active",
    courses: [
      { course: "Machine Learning", timestamp: "2020-02-10T14:25:00" },
      { course: "Deep Learning", timestamp: "2021-05-15T16:40:00" },
    ],
  },
];



export default function AdminDashboard() {
  const navigate = useNavigate();
  const [students, setStudents] = useState(initialStudents);

  const handleRowClick = (student) => {
    navigate(`/student/${encodeURIComponent(student.name)}`, { state: student });
  };

  const handleDelete = (idx) => {
    const updated = students.filter((_, i) => i !== idx);
    setStudents(updated);
  };

  return (
    <AdminLayout>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>

        <div className="bg-white shadow rounded p-4">
          <h3 className="font-semibold mb-4">Student Overview</h3>
          <table className="w-full text-sm border-collapse overflow-hidden rounded-xl shadow-lg">
  <thead>
    <tr className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white text-sm uppercase tracking-wide">
      <th className="px-4 py-3">Student Name</th>
      <th className="px-4 py-3">Batch</th>
      <th className="px-4 py-3">Location</th>
      <th className="px-4 py-3">Training Partner</th>
      <th className="px-4 py-3">Job Role</th>
      <th className="px-4 py-3">Enrollment Date</th>
      <th className="px-4 py-3">Status</th>
      <th className="px-4 py-3 text-center">Actions</th>
    </tr>
  </thead>
  <tbody>
    {students.map((s, idx) => (
      <tr
        key={idx}
        className={`transition duration-300 ease-in-out ${
          idx % 2 === 0 ? "bg-gradient-to-r from-gray-50 to-gray-100" : "bg-white"
        } hover:scale-[1.02] hover:shadow-lg hover:bg-yellow-50`}
      >
        <td
          className="px-4 py-3 cursor-pointer font-medium text-gray-800 hover:text-purple-600 transition"
          onClick={() => handleRowClick(s)}
        >
          {s.name}
        </td>
        <td className="px-4 py-3 text-gray-600">{s.batch}</td>
        <td className="px-4 py-3 text-gray-600">{s.location}</td>
        <td className="px-4 py-3 text-gray-600">{s.partner}</td>
        <td className="px-4 py-3 text-gray-600">{s.role}</td>
        <td className="px-4 py-3 text-gray-600">{s.enrollment}</td>
        <td className="px-4 py-3">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold shadow-md ${
              s.status === "Active"
                ? "bg-green-500/80 text-white animate-pulse"
                : s.status === "Completed"
                ? "bg-blue-500/80 text-white"
                : "bg-yellow-500/80 text-white"
            }`}
          >
            {s.status}
          </span>
        </td>
        <td className="px-4 py-3 text-center">
          <button
            onClick={() => handleDelete(idx)}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded-full shadow-md hover:shadow-red-500/50 transition transform hover:scale-105"
          >
            Delete
          </button>
        </td>
      </tr>
    ))}
    {students.length === 0 && (
      <tr>
        <td colSpan="8" className="text-center py-6 text-gray-500 italic">
          🚀 No students available. Time to add some!
        </td>
      </tr>
    )}
  </tbody>
</table>

        </div>
      </div>
    </AdminLayout>
  );
}
