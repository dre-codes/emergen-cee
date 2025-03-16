"use client";
import { useState, useEffect } from "react";
import supabase from "../../lib/supabase";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Dashboard() {
  const [patients, setPatients] = useState([]);
  const [estimatedTime, setEstimatedTime] = useState("--");

  // Fetch initial patients
  useEffect(() => {
    async function fetchPatients() {
      const { data, error } = await supabase.from("Patients").select("*");
      if (error) console.error("Error fetching patients:", error);
      else setPatients(data);
    }
    fetchPatients();
  }, []);

  // Subscribe to real-time updates
  useEffect(() => {
    const subscription = supabase
      .channel("Patients")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "Patients" },
        (payload) => {
          if (payload.eventType === "INSERT") {
            setPatients((prev) => [...prev, payload.new]);
          } else if (payload.eventType === "UPDATE") {
            setPatients((prev) =>
              prev.map((p) => (p.id === payload.new.id ? payload.new : p))
            );
          } else if (payload.eventType === "DELETE") {
            setPatients((prev) => prev.filter((p) => p.id !== payload.old.id));
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(subscription);
    };
  }, []);

  return (
    <div className="flex flex-col gap-6 p-6">
      <h1 className="text-3xl font-bold tracking-tight text-center">
        Patient Dashboard
      </h1>
      {/* Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className={"bg-green-500"}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white">
              Total Doctors Available
            </CardTitle>
            {/* <DollarSignIcon className="h-4 w-4 text-muted-foreground" /> */}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">4</div>
            {/* <p className="text-xs text-muted-foreground">
              <span className="text-emerald-500 flex items-center">
                <ArrowUpIcon className="mr-1 h-4 w-4" />
                +20.1%
              </span>{" "}
              from last month
            </p> */}
          </CardContent>
        </Card>
        <Card className={"bg-red-500"}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white">
              Total Doctors Busy
            </CardTitle>
            {/* <UsersIcon className="h-4 w-4 text-muted-foreground" /> */}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">7</div>
            {/* <p className="text-xs text-muted-foreground">
              <span className="text-emerald-500 flex items-center">
                <ArrowUpIcon className="mr-1 h-4 w-4" />
                +18.2%
              </span>{" "}
              from last month
            </p> */}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Estimated Wait Time
            </CardTitle>
            {/* <ActivityIcon className="h-4 w-4 text-muted-foreground" /> */}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{estimatedTime}</div>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className={"bg-red-500"}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white">
              Total High Severity
            </CardTitle>
            {/* <DollarSignIcon className="h-4 w-4 text-muted-foreground" /> */}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">2</div>
            {/* <p className="text-xs text-muted-foreground">
              <span className="text-emerald-500 flex items-center">
                <ArrowUpIcon className="mr-1 h-4 w-4" />
                +20.1%
              </span>{" "}
              from last month
            </p> */}
          </CardContent>
        </Card>
        <Card className={"bg-orange-500"}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white  ">
              Total Medium Severity
            </CardTitle>
            {/* <UsersIcon className="h-4 w-4 text-muted-foreground" /> */}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">4</div>
            {/* <p className="text-xs text-muted-foreground">
              <span className="text-emerald-500 flex items-center">
                <ArrowUpIcon className="mr-1 h-4 w-4" />
                +18.2%
              </span>{" "}
              from last month
            </p> */}
          </CardContent>
        </Card>
        <Card className={"bg-yellow-500"}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white">
              Total Low Severity
            </CardTitle>
            {/* <ActivityIcon className="h-4 w-4 text-muted-foreground" /> */}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">5</div>
          </CardContent>
        </Card>
      </div>

      {/* Table */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Patients</CardTitle>
          {/* <CardDescription>A list of your recent transactions.</CardDescription> */}
        </CardHeader>
        <CardContent>
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-3 text-left border border-gray-300 w-[100px]">
                  Name
                </th>
                <th className="p-3 text-left border border-gray-300">
                  Severity
                </th>
                <th className="p-3 text-left border border-gray-300">
                  Symptoms
                </th>
                <th className="p-3 text-right border border-gray-300">Age</th>
                <th className="p-3 text-right border border-gray-300">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient) => (
                <tr
                  key={patient.id}
                  className="odd:bg-white even:bg-gray-100"
                  onClick={() => setEstimatedTime(patient.estimatedTime)}
                >
                  <td className="p-3 border border-gray-300 font-medium">
                    {patient.name}
                  </td>
                  <td className="p-3 border border-gray-300">
                    <span
                      className={`px-2 py-1 text-white text-sm rounded-md font-medium ${
                        patient.severity === "Low"
                          ? "bg-yellow-500"
                          : patient.severity === "Medium"
                          ? "bg-orange-500"
                          : "bg-red-500"
                      }`}
                    >
                      {patient.severity}
                    </span>
                  </td>
                  <td className="p-3 border border-gray-300">
                    {patient.symptoms}
                  </td>
                  <td className="p-3 text-right border border-gray-300">
                    {patient.age}
                  </td>
                  <td className="p-3 text-right border border-gray-300">
                    <button
                      type="submit"
                      className="px-6 py-3  bg-blue-600 text-white rounded-md hover:bg-indigo-700 transition duration-200"
                    >
                      Assign
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
