import { createContext, useState } from "react";

export const PatientContext = createContext();

export default function PatientProvider({ children }) {
  const [patient, setPatient] = useState({
    patientInfo: { name: "hellow" },
    diagnosis_history: [],
    diagnostic_list: [],
    lab_results: [],
  });

  return (
    <PatientContext value={{ patient, setPatient }}>{children}</PatientContext>
  );
}
