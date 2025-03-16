"use client";
import { useState, useCallback, useEffect } from "react";
import { useSession } from "next-auth/react";

import Swal from "sweetalert2";

// const handleSubmit = (event) => {
//   event.preventDefault();
//   const data = new FormData(event.target);
//   const name = data.get("name");
//   const age = data.get("age");
//   const gender = data.get("gender");
//   const phone = data.get("phone");
//   const address = data.get("address");
//   const symptoms = data.get("symptoms");
//   const admissionDate = data.get("admissionDate");
//   const dischargeDate = data.get("dischargeDate");
//   const diagnosis = data.get("diagnosis");
//   const medication = data.get("medication");
//   const severity = data.get("severity");

//   console.log("called");
//   fetch("/api/scoring", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       name,
//       age,
//       gender,
//       phone,
//       address,
//       symptoms,
//       admissionDate,
//       dischargeDate,
//       diagnosis,
//       medication,
//       severity,
//     }),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log("done");
//     });

//   return;
// };

const handleSubmit = (e) => {
  e.preventDefault(); // Prevent default form submission

  // Collect form data
  const formData = new FormData(e.target);

  // Send the form data to your server or API route

  console.log("sending", formData);
  fetch("/api/scoring", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Form submitted:", data);
      Swal.fire({
        title: "Patient Info Saved!",
        text: "Thank you",
        icon: "success",
      });
    })
    .catch((error) => console.error("Error:", error));
};

function register() {
  const { data: session } = useSession();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [isLoading, setisLoading] = useState(false);
  //const [admissionDate, setAdmissionDate] = useState("");
  // const [dischargeDate, setDischargeDate] = useState("");
  // const [diagnosis, setDiagnosis] = useState("");
  // const [medication, setMedication] = useState("");
  // const [severity, setSeverity] = useState("");

  return (
    <div>
      {!session ? (
        " Please sign in"
      ) : (
        <div className="min-h-screen flex justify-center items-center bg-gray-100 p-6">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg shadow-lg space-y-6 w-full max-w-2xl"
          >
            <h2 className="text-2xl font-semibold text-center text-gray-800">
              Information
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="text"
                name="age"
                placeholder="Age"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="text"
                name="gender"
                placeholder="Gender"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 col-span-2"
              />
              <input
                type="date"
                name="admissionDate"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="text"
                name="symptoms"
                placeholder="Symptoms"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 col-span-2"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 mt-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-200"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default register;
