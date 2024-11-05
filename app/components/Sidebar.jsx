import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { navItems } from "./Navbar";

function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {/* overlay */}
      <div
        className={`fixed inset-0 z-20 bg-green-900 bg-opacity-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      ></div>

      {/* sidebar content */}
      <div
        className={`sidebar-content fixed inset-y-0 left-0 z-40 w-60 bg-gray-50 p-6 shadow-md transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mb-6">
          <Link href="/">
            <Image src="/logo.svg" alt="logo" width={110} height={110} />
          </Link>
          <Button variant="ghost" onClick={onClose}>
            <X size={30} />
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="text-gray-800 cursor-pointer hover:bg-gray-100 p-3 rounded-md flex items-center gap-3"
            >
              <Image
                src={item.iconSrc}
                alt={`${item.label}-icon`}
                width={20}
                height={20}
              />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
