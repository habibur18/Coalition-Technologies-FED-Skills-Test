import Image from "next/image";
import { navItems } from "./Navbar";

export default function NavItems({ visibleItems }) {
  return (
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
  );
}
