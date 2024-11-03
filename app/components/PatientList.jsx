import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVertical, Search } from "lucide-react";
import Image from "next/image";

export default function PatientList() {
  const patients = [
    {
      id: 1,
      name: "Emily Williams",
      gender: "Female",
      age: 18,
      image: "/placeholder.svg",
    },
    {
      id: 2,
      name: "Ryan Johnson",
      gender: "Male",
      age: 45,
      image: "/placeholder.svg",
    },
    {
      id: 3,
      name: "Brandon Mitchell",
      gender: "Male",
      age: 36,
      image: "/placeholder.svg",
    },
    {
      id: 4,
      name: "Jessica Taylor",
      gender: "Female",
      age: 28,
      image: "/placeholder.svg",
    },
    {
      id: 5,
      name: "Samantha Johnson",
      gender: "Female",
      age: 56,
      image: "/placeholder.svg",
    },
    {
      id: 6,
      name: "Ashley Martinez",
      gender: "Female",
      age: 54,
      image: "/placeholder.svg",
    },
    {
      id: 7,
      name: "Olivia Brown",
      gender: "Female",
      age: 32,
      image: "/placeholder.svg",
    },
    {
      id: 8,
      name: "Tyler Davis",
      gender: "Male",
      age: 19,
      image: "/placeholder.svg",
    },
    {
      id: 9,
      name: "Kevin Anderson",
      gender: "Female",
      age: 20,
      image: "/placeholder.svg",
    },
    {
      id: 10,
      name: "Kevin Anderson",
      gender: "Male",
      age: 21,
      image: "/placeholder.svg",
    },
    {
      id: 11,
      name: "Kevin Anderson",
      gender: "Male",
      age: 12,
      image: "/placeholder.svg",
    },
    {
      id: 12,
      name: "Kevin Anderson",
      gender: "Male",
      age: 13,
      image: "/placeholder.svg",
    },
    {
      id: 14,
      name: "Kevin Anderson",
      gender: "Female",
      age: 15,
      image: "/placeholder.svg",
    },
    {
      id: 16,
      name: "Kevin Anderson",
      gender: "Female",
      age: 17,
      image: "/placeholder.svg",
    },
    {
      id: 18,
      name: "Kevin Anderson",
      gender: "Female",
      age: 30,
      image: "/placeholder.svg",
    },
  ];

  return (
    <div className="w-full max-w-md mx-auto bg-[#FFFFFF] p-5">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Patients</h1>
        <Button variant="ghost" size="icon">
          <Search className="h-5 w-5" />
        </Button>
      </div>

      <div className="patient-list max-h-screen overflow-y-auto pr-2">
        <div className="space-y-2">
          {patients.map((patient) => (
            <div
              key={patient.id}
              className={`flex items-center justify-between p-3 rounded-lg hover:bg-[#D8FCF7]/70 duration-300 ${
                patient.name === "Jessica Taylor" ? "bg-[#D8FCF7] p-4" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <Image
                  src="/patient.png"
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
                  align="end"
                  className="bg-gray-100 rounded-xl shadow-lg "
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
    </div>
  );
}
