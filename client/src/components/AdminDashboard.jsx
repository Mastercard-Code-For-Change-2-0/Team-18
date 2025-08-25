// import React from "react";
// import { useNavigate } from "react-router-dom";
// import AdminLayout from "./AdminLayout";  

// const students = [
//   {
//     name: "Alice Johnson",
//     batch: "B2023-01",
//     location: "Delhi",
//     partner: "SkillBridge Solutions",
//     role: "Data Analyst",
//     enrollment: "2023-03-15",
//     status: "Active",
//   },
//   {
//     name: "Bob Williams",
//     batch: "B2023-02",
//     location: "Mumbai",
//     partner: "TechGrow Academy",
//     role: "Web Developer",
//     enrollment: "2023-04-01",
//     status: "Completed",
//   },
//   {
//     name: "Charlie Brown",
//     batch: "B2023-01",
//     location: "Bangalore",
//     partner: "FutureSkills Hub",
//     role: "UI/UX Designer",
//     enrollment: "2023-03-20",
//     status: "Pending",
//   },
// ];

// export default function AdminDashboard() {
//   const navigate = useNavigate();

//   const handleRowClick = (student) => {
//     navigate(`/student/${encodeURIComponent(student.name)}`, { state: student });
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>

//       <div className="bg-white shadow rounded p-4">
//         <h3 className="font-semibold mb-4">Student Overview</h3>
//         <table className="w-full border border-gray-300 text-sm">
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="border px-3 py-2">Student Name</th>
//               <th className="border px-3 py-2">Batch</th>
//               <th className="border px-3 py-2">Location</th>
//               <th className="border px-3 py-2">Training Partner</th>
//               <th className="border px-3 py-2">Job Role</th>
//               <th className="border px-3 py-2">Enrollment Date</th>
//               <th className="border px-3 py-2">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {students.map((s, idx) => (
//               <tr
//                 key={idx}
//                 onClick={() => handleRowClick(s)}
//                 className="cursor-pointer hover:bg-gray-50"
//               >
//                 <td className="border px-3 py-2">{s.name}</td>
//                 <td className="border px-3 py-2">{s.batch}</td>
//                 <td className="border px-3 py-2">{s.location}</td>
//                 <td className="border px-3 py-2">{s.partner}</td>
//                 <td className="border px-3 py-2">{s.role}</td>
//                 <td className="border px-3 py-2">{s.enrollment}</td>
//                 <td className="border px-3 py-2">
//                   <span
//                     className={`px-2 py-1 rounded text-white text-xs ${
//                       s.status === "Active"
//                         ? "bg-green-500"
//                         : s.status === "Completed"
//                         ? "bg-blue-500"
//                         : "bg-yellow-500"
//                     }`}
//                   >
//                     {s.status}
//                   </span>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

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
  },
  {
    name: "Bob Williams",
    batch: "B2023-02",
    location: "Mumbai",
    partner: "TechGrow Academy",
    role: "Web Developer",
    enrollment: "2023-04-01",
    status: "Completed",
  },
  {
    name: "Charlie Brown",
    batch: "B2023-01",
    location: "Bangalore",
    partner: "FutureSkills Hub",
    role: "UI/UX Designer",
    enrollment: "2023-03-20",
    status: "Pending",
  },
];

export default function AdminDashboard() {
  const navigate = useNavigate();

  const handleRowClick = (student) => {
    navigate(`/student/${encodeURIComponent(student.name)}`, { state: student });
  };

  return (
    <AdminLayout>  {/* wrap inside AdminLayout */}
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

