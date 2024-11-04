"use client";
import PatientProvider from "@/context/PatientProvider";

export default function PatientWraper({ children }) {
  return <PatientProvider>{children}</PatientProvider>;
}
