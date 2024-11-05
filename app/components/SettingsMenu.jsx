import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import Image from "next/image";
import { navItems } from "./Navbar";

export default function SettingsMenu({ visibleItems }) {
  return (
    <div className="flex items-center">
      <Image
        src="settingsicon.svg"
        alt="settingsicon"
        width={20}
        height={20}
        className="mr-2"
      />
      <DropdownMenu>
        <DropdownMenuTrigger
          asChild
          className={`${visibleItems !== navItems.length && "hidden"}`}
        >
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="!bg-green-200">
          <DropdownMenuLabel className="bg-gray-200 text-red-500">
            Actions
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="bg-gray-200 hover:!bg-gray-300 cursor-pointer">
            Delete Patient Record
          </DropdownMenuItem>
          <DropdownMenuItem className="bg-gray-200 hover:!bg-gray-300 cursor-pointer">
            Edit Patient Record
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
