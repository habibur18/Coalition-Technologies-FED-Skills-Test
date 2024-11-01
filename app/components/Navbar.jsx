import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
export default function Navbar() {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center text-xl font-bold">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={150}
          height={150}
          className="mr-2"
          priority
        />
      </div>

      {/* Nav Items */}
      <div className="flex gap-6">
        <div className="text-gray-800 cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-md flex items-center gap-3">
          <Image src="/home-icon.svg" alt="Home-icon" width={20} height={20} />
          <span>Overview</span>
        </div>
        <div className="text-white bg-teal-400 cursor-pointer px-3 py-2 rounded-md flex items-center gap-3">
          <Image
            src="/patients.svg"
            alt="Patients-icon"
            width={20}
            height={20}
          />
          <span>Patients</span>
        </div>
        <div className="text-gray-800 cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-md flex items-center gap-3">
          <Image
            src="/calendar.svg"
            alt="Calendar-icon"
            width={20}
            height={20}
          />
          <span>Calendar</span>
        </div>
        <div className="text-gray-800 cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-md flex items-center gap-3">
          <Image
            src="/chat_bubble.svg"
            alt="chat_buble"
            width={20}
            height={20}
          />
          <span>Message</span>
        </div>
        <div className="text-gray-800 cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-md flex items-center gap-3">
          <Image
            src="/credit_card.svg"
            alt="credit_card"
            width={20}
            height={20}
          />
          <span>Transactions</span>
        </div>
      </div>

      {/* User Profile */}
      <div className="flex items-center gap-4">
        {/* Profile Image */}
        <Image
          src="/doctor-profile.png"
          alt="Dr. Jose Simmons"
          width={32}
          height={32}
          className="rounded-full"
        />
        <div className="text-right">
          <div className="text-sm font-semibold text-gray-800">
            Dr. Jose Simmons
          </div>
          <div className="text-xs text-gray-500">General Practitioner</div>
        </div>

        {/* Dropdown Menu : */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
            // onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy Patient Id
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Delete Patient Record</DropdownMenuItem>
            <DropdownMenuItem>Edit Patient Record</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
