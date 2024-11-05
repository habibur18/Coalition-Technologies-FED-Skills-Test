// "use client";

// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Separator } from "@/components/ui/separator";
// import { Menu, MoreHorizontal } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { useCallback, useEffect, useState } from "react";
// import Sidebar from "./Sidebar";

// export const navItems = [
//   { label: "Overview", iconSrc: "/home-icon.svg" },
//   { label: "Patients", iconSrc: "/patients.svg" },
//   { label: "Calendar", iconSrc: "/calendar.svg" },
//   { label: "Message", iconSrc: "/chat_bubble.svg" },
//   { label: "Transactions", iconSrc: "/credit_card.svg" },
// ];

// export default function Navbar() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [visibleItems, setVisibleItems] = useState(navItems.length);

//   const toggleSidebar = () => setSidebarOpen((prev) => !prev);

//   const handleResize = () => {
//     const width = window.innerWidth;
//     if (width > 1270) {
//       setVisibleItems(navItems.length);
//       setSidebarOpen(false);
//     } else if (width > 1000) {
//       setVisibleItems(4);
//     } else if (width > 800) {
//       setVisibleItems(3);
//     } else if (width > 600) {
//       setVisibleItems(2);
//     } else {
//       setVisibleItems(1);
//     }
//   };

//   const handleClickOutside = useCallback(
//     (e) => {
//       if (
//         sidebarOpen &&
//         !e.target.closest(".sidebar-content") &&
//         !e.target.closest(".menu-icon")
//       ) {
//         setSidebarOpen(false);
//       }
//     },
//     [sidebarOpen]
//   );

//   useEffect(() => {
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [sidebarOpen, handleClickOutside]);

//   return (
//     <>
//       <div className="w-full flex items-center justify-between p-4 bg-white shadow-md md:rounded-[70px]">
//         {/* logo */}
//         <div
//           className={`${
//             visibleItems < 3 && "flex-grow"
//           } flex items-center text-xl font-bold`}
//         >
//           <Link href="/">
//             <Image
//               src="/logo.svg"
//               alt="Logo"
//               width={160}
//               height={160}
//               className="mr-2"
//               priority
//             />
//           </Link>
//         </div>

//         {/* nav Items  */}
//         <div className="hidden md:flex gap-6">
//           {navItems.slice(0, visibleItems).map((item, index) => (
//             <div
//               key={index}
//               className={`text-gray-800 duration-300 rounded-[41px] cursor-pointer hover:bg-gray-100 px-6 py-3 flex items-center gap-3 ${
//                 item.label === "Patients"
//                   ? "bg-teal-400 text-white hover:bg-teal-600"
//                   : ""
//               }`}
//             >
//               <Image
//                 src={item.iconSrc}
//                 alt={`${item.label}-icon`}
//                 width={20}
//                 height={20}
//               />
//               <span>{item.label}</span>
//             </div>
//           ))}
//         </div>

//         {/* user profile  */}
//         <div className="flex items-center gap-4">
//           <div className="flex items-center gap-4">
//             <Image
//               src="/doctor-profile.png"
//               alt="Dr. Jose Simmons"
//               width={32}
//               height={32}
//               className="rounded-full"
//             />
//             <div>
//               <div className="text-sm font-semibold text-gray-800">
//                 Dr. Jose Simmons
//               </div>
//               <div className="text-xs ">General Practitioner</div>
//             </div>
//           </div>
//           <Separator
//             variant="horizontal"
//             className={` ${
//               visibleItems !== navItems.length && "hidden"
//             } h-10 w-px bg-[#EDEDED]`}
//           />
//           <div className="flex items-center">
//             <Image
//               src="settingsicon.svg"
//               alt="settingsicon"
//               width={20}
//               height={20}
//               className="mr-2"
//             />
//             <DropdownMenu>
//               <DropdownMenuTrigger
//                 asChild
//                 className={` ${visibleItems !== navItems.length && "hidden"}`}
//               >
//                 <Button variant="ghost" className="h-8 w-8 p-0">
//                   <span className="sr-only">Open menu</span>
//                   <MoreHorizontal className="h-4 w-4" />
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent align="end" className="!bg-green-200">
//                 <DropdownMenuLabel className="bg-gray-200 text-red-500">
//                   Actions
//                 </DropdownMenuLabel>
//                 <DropdownMenuSeparator />
//                 <DropdownMenuItem className="bg-gray-200 hover:!bg-gray-300 cursor-pointer">
//                   Delete Patient Record
//                 </DropdownMenuItem>
//                 <DropdownMenuItem className="bg-gray-200 hover:!bg-gray-300 cursor-pointer">
//                   Edit Patient Record
//                 </DropdownMenuItem>
//               </DropdownMenuContent>
//             </DropdownMenu>
//           </div>
//         </div>

//         {/* mobile Menu Button */}
//         {visibleItems !== navItems.length && (
//           <div className={`flex menu-icon`}>
//             <Button variant="ghost" onClick={toggleSidebar}>
//               <Menu size={24} />
//             </Button>
//           </div>
//         )}
//       </div>

//       {/* sidebar for mobile view */}
//       <Sidebar isOpen={sidebarOpen} onClose={toggleSidebar} />
//     </>
//   );
// }

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
