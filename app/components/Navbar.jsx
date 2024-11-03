"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { Menu, MoreHorizontal, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

const navItems = [
  { label: "Overview", iconSrc: "/home-icon.svg" },
  { label: "Patients", iconSrc: "/patients.svg" },
  { label: "Calendar", iconSrc: "/calendar.svg" },
  { label: "Message", iconSrc: "/chat_bubble.svg" },
  { label: "Transactions", iconSrc: "/credit_card.svg" },
];

function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {/* overlay */}
      <div
        className={`fixed inset-0 bg-green-900 bg-opacity-50 transition-opacity duration-300 ${
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
            <X size={24} />
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

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [visibleItems, setVisibleItems] = useState(navItems.length);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  const handleResize = () => {
    const width = window.innerWidth;
    if (width > 1270) {
      setVisibleItems(navItems.length);
      setSidebarOpen(false);
    } else if (width > 1000) {
      setVisibleItems(4);
    } else if (width > 800) {
      setVisibleItems(3);
    } else if (width > 600) {
      setVisibleItems(2);
    } else {
      setVisibleItems(1);
    }
  };

  const handleClickOutside = useCallback(
    (e) => {
      if (
        sidebarOpen &&
        !e.target.closest(".sidebar-content") &&
        !e.target.closest(".menu-icon")
      ) {
        setSidebarOpen(false);
      }
    },
    [sidebarOpen]
  );

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarOpen, handleClickOutside]);

  return (
    <>
      <div className="w-full flex items-center justify-between p-4 bg-white shadow-md md:rounded-[70px]">
        {/* Logo */}
        <div
          className={`${
            visibleItems < 3 && "flex-grow"
          } flex items-center text-xl font-bold`}
        >
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={160}
              height={160}
              className="mr-2"
              priority
            />
          </Link>
        </div>

        {/* Nav Items  */}
        <div className="hidden md:flex gap-6">
          {navItems.slice(0, visibleItems).map((item, index) => (
            <div
              key={index}
              className={`text-gray-800 duration-300 rounded-[41px] cursor-pointer hover:bg-gray-100 px-6 py-3 flex items-center gap-3 ${
                item.label === "Patients"
                  ? "bg-teal-400 text-white hover:bg-teal-600"
                  : ""
              }`}
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

        {/* User Profile  */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4">
            <Image
              src="/doctor-profile.png"
              alt="Dr. Jose Simmons"
              width={32}
              height={32}
              className="rounded-full"
            />
            <div>
              <div className="text-sm font-semibold text-gray-800">
                Dr. Jose Simmons
              </div>
              <div className="text-xs ">General Practitioner</div>
            </div>
          </div>
          <Separator
            variant="horizontal"
            className={` ${
              visibleItems !== navItems.length && "hidden"
            } h-10 w-px bg-black`}
          />
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
                className={` ${visibleItems !== navItems.length && "hidden"}`}
              >
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem>Copy Patient Id</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Delete Patient Record</DropdownMenuItem>
                <DropdownMenuItem>Edit Patient Record</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Mobile Menu Button */}
        {visibleItems !== navItems.length && (
          <div className={`flex menu-icon`}>
            <Button variant="ghost" onClick={toggleSidebar}>
              <Menu size={24} />
            </Button>
          </div>
        )}
      </div>

      {/* Sidebar for mobile view */}
      <Sidebar isOpen={sidebarOpen} onClose={toggleSidebar} />
    </>
  );
}
