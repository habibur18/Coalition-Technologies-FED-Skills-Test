"use client";

import useDebounce from "@/hooks/useDebounch";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import DiagnosisHistory from "./components/DiagnosisHistory";
import DiagnosticList from "./components/DiagnosticList";
import LabResults from "./components/LabResults";
import Navbar from "./components/Navbar";
import PatientList from "./components/PatientList";
import PatientProfile from "./components/PatientProfile";

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [userInput, setUserInput] = useState("");
  const [searchQuery, setSearchQuery] = useState(null);

  // debounced search function using custom hook
  const debouncedHandleSearch = useDebounce((value) => {
    setSearchQuery(value);
  }, 400);
  const fetchPatients = async () => {
    const username = "coalition";
    const password = "skills-test";
    const auth = btoa(`${username}:${password}`);

    try {
      const response = await fetch(
        "https://fedskillstest.coalitiontechnologies.workers.dev",
        {
          method: "GET",
          headers: {
            Authorization: `Basic ${auth}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch patients");
      }

      const data = await response.json();
      setPatients(data);

      const defaultPatientName = "Jessica Taylor";
      const queryPatient = searchParams.get("patient");

      // Find the patient based on query or default to Jessica Taylor or first patient
      const initialPatient =
        data.find((p) => p.name === queryPatient) ||
        data.find((p) => p.name === defaultPatientName) ||
        data[0];

      setSelectedPatient(initialPatient);

      // If no patient in the query, set the default one as query param
      if (!queryPatient) {
        const params = new URLSearchParams(searchParams.toString());
        params.set("patient", initialPatient.name);
        router.push(`?${params.toString()}`, undefined, { shallow: true });
      }
    } catch (error) {
      console.error("Error fetching patients:", error);
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  const handlePatientSelect = (patientName) => {
    const patientDetails = patients.find(
      (patient) => patient.name === patientName
    );
    setSelectedPatient(patientDetails);

    const params = new URLSearchParams(searchParams.toString());
    params.set("patient", patientName);
    router.push(`?${params.toString()}`, undefined, { shallow: true });
  };

  const handleSearchChange = (event) => {
    const value = event.target.value.toLowerCase();
    setUserInput(value);
  };
  // trigger on userInput change and debounced search
  useEffect(() => {
    debouncedHandleSearch(userInput.trim());
  }, [userInput]);
  // apply filter based on debounced search query and selected patient just reduce one 2 extra code & logic
  const filteredPatients = searchQuery
    ? patients.filter((patient) =>
        patient.name.toLowerCase().includes(searchQuery)
      )
    : patients;
  if (!selectedPatient) return null;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="p-4">
        <Navbar />
        <main className="mt-8">
          <div className="grid gap-8 w-full grid-cols-1  md:grid-cols-6 lg:grid-cols-12">
            <div className="order-1 md:col-span-3 lg:order-1 lg:col-span-3">
              <PatientList
                patients={filteredPatients}
                selectedPatient={selectedPatient}
                onPatientSelect={handlePatientSelect}
                searchQuery={userInput}
                onSearch={handleSearchChange}
              />
            </div>
            <div className="order-3 md:col-span-6 lg:order-2 lg:col-span-6">
              <DiagnosisHistory
                diagnosis_history={selectedPatient.diagnosis_history}
              />
              <div className="my-8" />
              <DiagnosticList
                diagnostic_list={selectedPatient.diagnostic_list}
              />
            </div>
            <div className="order-2 md:col-span-3 lg:order-3 lg:col-span-3">
              <PatientProfile patientInfo={selectedPatient} />
              <div className="my-8" />
              <LabResults lab_results={selectedPatient.lab_results} />
            </div>
          </div>
        </main>
      </div>
    </Suspense>
  );
}
