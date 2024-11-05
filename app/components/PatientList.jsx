"use client";
import { useState } from "react";
import PatientCard from "./PatientCard";
import SearchInput from "./SearchInput";

export default function PatientList({
  patients,
  selectedPatient,
  onPatientSelect,
  searchQuery,
  onSearch,
}) {
  const [isInputVisible, setInputVisible] = useState(false);

  const handlePatientClick = (patient) => {
    onPatientSelect(patient.name);
  };

  const handleSearchClick = () => {
    setInputVisible((prev) => !prev);
  };

  return (
    <div className="sticky top-0 left-0 z-10 w-full max-w-lg mx-auto bg-white rounded-[16px] p-5 overflow-x-hidden overflow-y-hidden">
      <SearchInput
        isInputVisible={isInputVisible}
        searchQuery={searchQuery}
        onSearch={onSearch}
        handleSearchClick={handleSearchClick}
      />

      <div className="space-y-2 max-h-[calc(100vh-250px)] overflow-y-auto">
        {patients.map((patient) => (
          <PatientCard
            key={patient.name}
            patient={patient}
            isSelected={patient.name === selectedPatient.name}
            onPatientClick={handlePatientClick}
          />
        ))}
      </div>
    </div>
  );
}
