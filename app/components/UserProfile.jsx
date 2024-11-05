import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { navItems } from "./Navbar";

export default function UserProfile({ visibleItems }) {
  return (
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
          <div className="text-xs">General Practitioner</div>
        </div>
      </div>
      <Separator
        variant="horizontal"
        className={`${
          visibleItems !== navItems.length && "hidden"
        } h-10 w-px bg-[#EDEDED]`}
      />
    </div>
  );
}
