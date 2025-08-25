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
  },
];

export default function AdminDashboard() {
  const navigate = useNavigate();

  const handleRowClick = (student) => {
    navigate(`/student/${encodeURIComponent(student.name)}`, { state: student });
  };

  return (
    <AdminLayout>
      <div className="p-6">
        {/* Title */}
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Admin Dashboard</h2>

        {/* Card */}
        <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-100">
          <h3 className="font-semibold mb-6 text-lg text-gray-700">Student Overview</h3>

          {/* Table Wrapper */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-orange-50 text-gray-700">
                  <th className="text-left px-4 py-3 font-semibold">Student Name</th>
                  <th className="text-left px-4 py-3 font-semibold">Batch</th>
                  <th className="text-left px-4 py-3 font-semibold">Location</th>
                  <th className="text-left px-4 py-3 font-semibold">Training Partner</th>
                  <th className="text-left px-4 py-3 font-semibold">Job Role</th>
                  <th className="text-left px-4 py-3 font-semibold">Enrollment Date</th>
                  <th className="text-left px-4 py-3 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {students.map((s, idx) => (
                  <tr
                    key={idx}
                    onClick={() => handleRowClick(s)}
                    className="cursor-pointer hover:bg-orange-50/40 transition"
                  >
                    <td className="px-4 py-3 border-b">{s.name}</td>
                    <td className="px-4 py-3 border-b">{s.batch}</td>
                    <td className="px-4 py-3 border-b">{s.location}</td>
                    <td className="px-4 py-3 border-b">{s.partner}</td>
                    <td className="px-4 py-3 border-b">{s.role}</td>
                    <td className="px-4 py-3 border-b">{s.enrollment}</td>
                    <td className="px-4 py-3 border-b">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${s.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : s.status === "Completed"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-yellow-100 text-yellow-700"
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
      </div>
    </AdminLayout>
  );
}
