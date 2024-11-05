import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVertical } from "lucide-react";
import Image from "next/image";

export default function PatientCard({ patient, isSelected, onPatientClick }) {
  return (
    <div
      className={`flex items-center justify-between p-3 rounded-lg cursor-pointer hover:bg-[#D8FCF7]/70 duration-300 ${
        isSelected ? "bg-[#D8FCF7] p-4" : ""
      }`}
      onClick={() => onPatientClick(patient)}
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
          <h3 className="font-medium">{patient.name}</h3>
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
  );
}
