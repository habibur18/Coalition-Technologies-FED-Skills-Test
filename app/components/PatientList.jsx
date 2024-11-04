"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVertical, Search } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function PatientList({
  patients,
  selectedPatient,
  onPatientSelect,
  searchQuery,
  onSearch,
}) {
  const [isInputVisible, setInputVisible] = useState(false);
  const inputRef = useRef(null);
  const handlePatientClick = (patient) => {
    onPatientSelect(patient.name);
  };

  const handleSearchClick = () => {
    setInputVisible((prev) => !prev);
  };

  useEffect(() => {
    if (isInputVisible && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isInputVisible]);

  // only alphanumeric characters are allowed
  const handleInputChange = (e) => {
    const { value } = e.target;
    if (/^[a-zA-Z0-9]*$/.test(value)) {
      onSearch(e);
    }
  };

  // prevent typing special characters like # and @ or the dot in input field
  const handleKeyDown = (e) => {
    if (/[^a-zA-Z0-9]/.test(e.key)) {
      e.preventDefault();
    }
  };
  return (
    <div className="sticky top-0 left-0 z-10 w-full max-w-lg mx-auto bg-white rounded-[16px] p-5 overflow-x-hidden overflow-y-hidden">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Patients</h1>
        <Button
          className={`${isInputVisible ? "hidden" : ""}`}
          variant="ghost"
          size="icon"
          onClick={handleSearchClick}
        >
          <Search className="h-5 w-5" />
        </Button>
        {isInputVisible && (
          <input
            type="text"
            value={searchQuery || ""}
            ref={inputRef}
            // onChange={onSearch}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Search patients..."
            className="ml-4 p-2 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        )}
      </div>

      <div className="space-y-2 max-h-[calc(100vh-250px)] overflow-y-auto">
        {patients.map((patient) => (
          <div
            key={patient.name}
            className={`flex items-center justify-between p-3 rounded-lg cursor-pointer hover:bg-[#D8FCF7]/70 duration-300 ${
              patient.name === selectedPatient.name ? "bg-[#D8FCF7] p-4" : ""
            }`}
            onClick={() => handlePatientClick(patient)}
          >
            <div className="flex items-center gap-3">
              <Image
                src={patient.profile_picture}
                alt={patient.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <h3 className="font-medium ">{patient.name}</h3>
                <p className="text-sm text-secondary">
                  {patient.gender}, {patient.age}
                </p>
              </div>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-5 w-5 transform rotate-90" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="left"
                className="bg-gray-100 rounded-xl shadow-lg max-w-[150px] overflow-hidden"
              >
                <DropdownMenuItem className="hover:!bg-white p-2">
                  View profile
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:!bg-white p-2 !rounded-xl">
                  Edit details
                </DropdownMenuItem>
                <DropdownMenuItem className="text-red-500 hover:!bg-white hover:!text-red-700 font-bold rounded-xl p-2">
                  Remove patient
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ))}
      </div>
    </div>
  );
}
