
import React from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "./AdminLayout";

const students = [
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
  }
];


export default function AdminDashboard() {
  const navigate = useNavigate();

  const handleRowClick = (student) => {
    navigate(`/student/${encodeURIComponent(student.name)}`, { state: student });
  };

  return (
    <AdminLayout>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>

        <div className="bg-white shadow rounded p-4">
          <h3 className="font-semibold mb-4">Student Overview</h3>
          <table className="w-full border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-3 py-2">Student Name</th>
                <th className="border px-3 py-2">Batch</th>
                <th className="border px-3 py-2">Location</th>
                <th className="border px-3 py-2">Training Partner</th>
                <th className="border px-3 py-2">Job Role</th>
              
                <th className="border px-3 py-2">Enrollment Date</th>
               
                <th className="border px-3 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {students.map((s, idx) => (
                <tr
                  key={idx}
                  onClick={() => handleRowClick(s)}
                  className="cursor-pointer hover:bg-gray-50"
                >
                  <td className="border px-3 py-2">{s.name}</td>
                  <td className="border px-3 py-2">{s.batch}</td>
                  <td className="border px-3 py-2">{s.location}</td>
                  <td className="border px-3 py-2">{s.partner}</td>
                  <td className="border px-3 py-2">{s.role}</td>
                 
                  <td className="border px-3 py-2">{s.enrollment}</td>
                  
                  <td className="border px-3 py-2">
                    <span
                      className={`px-2 py-1 rounded text-white text-xs ${
                        s.status === "Active"
                          ? "bg-green-500"
                          : s.status === "Completed"
                          ? "bg-blue-500"
                          : "bg-yellow-500"
                      }`}
                    >
                      {s.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}

