// // import React from "react";

// // // Timeline Component
// // export default function Timeline({ courses }) {
// //   return (
// //     <div className="relative border-l-2 border-gray-300 pl-6 mt-8">
// //       {courses.map((c, idx) => {
// //         const year = new Date(c.timestamp).getFullYear(); // Extract year
// //         return (
// //           <div key={idx} className="mb-8 ml-4">
// //             {/* Dot */}
// //             <div className="absolute -left-3 w-6 h-6 bg-orange-500 rounded-full border-2 border-white"></div>

// //             {/* Year + Course */}
// //             <p className="text-lg font-bold text-gray-700">{year}</p>
// //             <p className="text-gray-600">{c.course}</p>
// //           </div>
// //         );
// //       })}
// //     </div>
// //   );
// // }

// // import React from "react";

// // export default function Timeline({ courses }) {
// //   if (!courses || courses.length === 0) {
// //     return <p className="text-gray-500">No course history available.</p>;
// //   }

// //   return (
// //     <div className="relative w-full overflow-x-auto">
// //       {/* Horizontal line */}
// //       <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-300"></div>

// //       <div className="flex justify-between items-center relative z-10">
// //         {courses.map((item, index) => {
// //           const year = new Date(item.timestamp).getFullYear();
// //           const isUp = index % 2 === 0; // alternate up and down

// //           return (
// //             <div key={index} className="relative flex-1 text-center">
// //               {/* Connector */}
// //               <div className="w-4 h-4 bg-blue-500 rounded-full mx-auto mb-2 z-20 relative"></div>

// //               {/* Course Box */}
// //               <div
// //                 className={`absolute w-40 p-3 bg-white border shadow rounded text-sm ${
// //                   isUp ? "-top-24" : "top-8"
// //                 } left-1/2 -translate-x-1/2`}
// //               >
// //                 <p className="font-bold text-blue-600">{year}</p>
// //                 <p className="text-gray-700">{item.course}</p>

// //                 {/* Arrow */}
// //                 <div
// //                   className={`absolute left-1/2 -translate-x-1/2 border-8 ${
// //                     isUp
// //                       ? "border-b-transparent border-l-transparent border-r-transparent border-t-blue-500 top-full"
// //                       : "border-t-transparent border-l-transparent border-r-transparent border-b-blue-500 -top-4"
// //                   }`}
// //                 ></div>
// //               </div>
// //             </div>
// //           );
// //         })}
// //       </div>
// //     </div>
// //   );
// // }

// // import React from "react";

// // export default function Timeline({ courses }) {
// //   if (!courses || courses.length === 0) {
// //     return <p className="text-gray-500">No course history available.</p>;
// //   }

// //   return (
// //     <div className="relative w-full overflow-x-auto py-16">
// //       {/* Horizontal line */}
// //       <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-300"></div>

// //       <div className="flex justify-between items-center relative z-10">
// //         {courses.map((item, index) => {
// //           const year = new Date(item.timestamp).getFullYear();
// //           const isUp = index % 2 === 0; // alternate up and down

// //           return (
// //             <div key={index} className="relative flex-1 text-center min-w-[150px]">
// //               {/* Dot */}
// //               <div className="w-4 h-4 bg-blue-500 rounded-full mx-auto"></div>

// //               {/* Course Box */}
// //               <div
// //                 className={`absolute w-40 p-3 bg-white border shadow-lg rounded text-sm transition-all ${
// //                   isUp ? "-top-28" : "top-10"
// //                 } left-1/2 -translate-x-1/2`}
// //               >
// //                 <p className="font-bold text-blue-600">{year}</p>
// //                 <p className="text-gray-700">{item.course}</p>

// //                 {/* Arrow */}
// //                 <div
// //                   className={`absolute left-1/2 -translate-x-1/2 border-8 ${
// //                     isUp
// //                       ? "border-b-0 border-x-transparent border-t-blue-500 top-full"
// //                       : "border-t-0 border-x-transparent border-b-blue-500 -top-4"
// //                   }`}
// //                 ></div>
// //               </div>
// //             </div>
// //           );
// //         })}
// //       </div>
// //     </div>
// //   );
// // }
// // import React from "react";

// // export default function Timeline({ courses }) {
// //   if (!courses || courses.length === 0) {
// //     return <p className="text-gray-500">No course history available.</p>;
// //   }

// //   return (
// //     <div className="relative w-full overflow-x-auto py-24">
// //       {/* Horizontal line (thicker) */}
// //       <div className="absolute top-1/2 left-0 w-full h-2 bg-gray-400 rounded"></div>

// //       <div className="flex justify-between items-center relative z-10">
// //         {courses.map((item, index) => {
// //           const year = new Date(item.timestamp).getFullYear();
// //           const isUp = index % 2 === 0; // alternate box positions

// //           return (
// //             <div key={index} className="relative flex-1 text-center min-w-[220px]">
// //               {/* Dot (bigger) */}
// //               <div className="w-6 h-6 bg-blue-600 rounded-full mx-auto border-4 border-white shadow-lg"></div>

// //               {/* Course Box (larger) */}
// //               <div
// //                 className={`absolute w-56 p-4 bg-white border-2 shadow-xl rounded-lg text-base font-medium ${
// //                   isUp ? "-top-36" : "top-14"
// //                 } left-1/2 -translate-x-1/2`}
// //               >
// //                 <p className="font-bold text-blue-700 text-lg">{year}</p>
// //                 <p className="text-gray-800">{item.course}</p>

// //                 {/* Arrow */}
// //                 <div
// //                   className={`absolute left-1/2 -translate-x-1/2 border-8 ${
// //                     isUp
// //                       ? "border-b-0 border-x-transparent border-t-blue-600 top-full"
// //                       : "border-t-0 border-x-transparent border-b-blue-600 -top-4"
// //                   }`}
// //                 ></div>
// //               </div>
// //             </div>
// //           );
// //         })}
// //       </div>
// //     </div>
// //   );
// // }
// import React from "react";

// export default function Timeline({ courses }) {
//   if (!courses || courses.length === 0) {
//     return <p className="text-gray-500">No course history available.</p>;
//   }

//   return (
//     <div className="relative w-full py-24">
//       {/* Horizontal line (thicker) */}
//       <div className="absolute top-1/2 left-0 w-full h-2 bg-gray-400 rounded"></div>

//       <div className="flex justify-between items-center relative z-10 w-full">
//         {courses.map((item, index) => {
//           const year = new Date(item.timestamp).getFullYear();
//           const isUp = index % 2 === 0; // alternate box positions

//           return (
//             <div key={index} className="relative flex-1 text-center">
//               {/* Dot (bigger) */}
//               <div className="w-6 h-6 bg-blue-600 rounded-full mx-auto border-4 border-white shadow-lg"></div>

//               {/* Course Box (larger, evenly spaced) */}
//               <div
//                 className={`absolute w-56 p-4 bg-white border-2 shadow-xl rounded-lg text-base font-medium ${
//                   isUp ? "-top-36" : "top-14"
//                 } left-1/2 -translate-x-1/2`}
//               >
//                 <p className="font-bold text-blue-700 text-lg">{year}</p>
//                 <p className="text-gray-800">{item.course}</p>

//                 {/* Arrow */}
//                 <div
//                   className={`absolute left-1/2 -translate-x-1/2 border-8 ${
//                     isUp
//                       ? "border-b-0 border-x-transparent border-t-blue-600 top-full"
//                       : "border-t-0 border-x-transparent border-b-blue-600 -top-4"
//                   }`}
//                 ></div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }
import React from "react";

export default function Timeline({ courses }) {
  if (!courses || courses.length === 0) {
    return <p className="text-gray-500">No course history available.</p>;
  }

  return (
    <div className="w-full bg-gray-50 p-8 rounded-lg shadow-md">
      <div className="relative w-full py-20">
        {/* Horizontal line */}
        <div className="absolute top-1/2 left-0 w-full h-2 bg-gray-400 rounded"></div>

        {/* Timeline items */}
        <div className="flex justify-between items-center relative z-10 w-full">
          {courses.map((item, index) => {
            const year = new Date(item.timestamp).getFullYear();
            const isUp = index % 2 === 0; // alternate box positions

            return (
              <div key={index} className="relative flex-1 text-center">
                {/* Dot */}
                <div className="w-5 h-5 bg-blue-600 rounded-full mx-auto border-4 border-white shadow-md"></div>

                {/* Course Box (smaller) */}
                <div
                  className={`absolute w-40 p-2 bg-white border shadow-md rounded-md text-sm ${isUp ? "-top-24" : "top-12"
                    } left-1/2 -translate-x-1/2`}
                >
                  <p className="font-bold text-blue-700 text-base">{year}</p>
                  <p className="text-gray-700">{item.course}</p>

                  {/* Arrow */}
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 border-6 ${isUp
                      ? "border-b-0 border-x-transparent border-t-blue-600 top-full"
                      : "border-t-0 border-x-transparent border-b-blue-600 -top-3"
                      }`}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
