"use client";

import { useCallback, useEffect, useState } from "react";
import MobileMenuButton from "./MobileMenuButton";
import NavItems from "./NavItems";
import NavLogo from "./NavLogo";
import SettingsMenu from "./SettingsMenu";
import Sidebar from "./Sidebar";
import UserProfile from "./UserProfile";

export const navItems = [
  { label: "Overview", iconSrc: "/home-icon.svg" },
  { label: "Patients", iconSrc: "/patients.svg" },
  { label: "Calendar", iconSrc: "/calendar.svg" },
  { label: "Message", iconSrc: "/chat_bubble.svg" },
  { label: "Transactions", iconSrc: "/credit_card.svg" },
];

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
        <NavLogo visibleItems={visibleItems} />
        <NavItems visibleItems={visibleItems} />
        <div className="flex items-center gap-4">
          <UserProfile visibleItems={visibleItems} />
          <SettingsMenu visibleItems={visibleItems} />
        </div>
        {visibleItems !== navItems.length && (
          <MobileMenuButton toggleSidebar={toggleSidebar} />
        )}
      </div>
      <Sidebar isOpen={sidebarOpen} onClose={toggleSidebar} />
    </>
  );
}
