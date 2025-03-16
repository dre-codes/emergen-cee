import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import patients from "../../app/patients";

// const colorSeverity = (severity) => {
//   if (severity === "low") {
//     return "green";
//   } else if (severity === "medium") {
//     return "yellow";
//   } else if (severity === "high") {
//     return "red";
//   }
// };

function page() {
  return (
    // <div className="min-h-screen flex justify-center items-center bg-gray-100 p-6">
    //   <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
    //     <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
    //       Patients
    //     </h2>
    //     <table className="w-full border-collapse border border-gray-300">
    //       <caption className="text-gray-500 text-sm mb-2">
    //         List of patients.
    //       </caption>
    //       <thead className="bg-gray-200">
    //         <tr>
    //           <th className="p-3 text-left border border-gray-300 w-[100px]">
    //             Name
    //           </th>
    //           <th className="p-3 text-left border border-gray-300">Severity</th>
    //           <th className="p-3 text-left border border-gray-300">Symptoms</th>
    //           <th className="p-3 text-right border border-gray-300">Age</th>
    //           <th className="p-3 text-right border border-gray-300">Action</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {patients.map((patient) => (
    //           <tr key={patient.id} className="odd:bg-white even:bg-gray-100">
    //             <td className="p-3 border border-gray-300 font-medium">
    //               {patient.name}
    //             </td>
    //             <td className="p-3 border border-gray-300">
    //               <span
    //                 className={`px-2 py-1 text-white text-sm rounded-md font-medium ${
    //                   patient.severity === "Low"
    //                     ? "bg-yellow-500"
    //                     : patient.severity === "Medium"
    //                     ? "bg-orange-500"
    //                     : "bg-red-500"
    //                 }`}
    //               >
    //                 {patient.severity}
    //               </span>
    //             </td>
    //             <td className="p-3 border border-gray-300">
    //               {patient.symptoms}
    //             </td>
    //             <td className="p-3 text-right border border-gray-300">
    //               {patient.age}
    //             </td>
    //             <td className="p-3 text-right border border-gray-300">
    //               <button
    //                 type="submit"
    //                 className="px-6 py-3  bg-blue-600 text-white rounded-md hover:bg-indigo-700 transition duration-200"
    //               >
    //                 Assign
    //               </button>
    //             </td>
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //   </div>
    // </div>
      
  );
}

export default page;
