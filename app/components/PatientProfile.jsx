import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function PatientProfile() {
  return (
    <Card className="w-full  mx-auto bg-white p-8 border-none shadow-none">
      <div className="flex flex-col items-center">
        {/* Profile Image */}
        <div className="rounded-full overflow-hidden">
          <Image
            src="/patient-placeholder.png"
            alt="Profile"
            width={400}
            height={400}
            className="object-cover"
          />
        </div>

        {/* Name */}
        <h2 className="text-xl mt-6 mb-8 font-semibold text-gray-900">
          Jessica Taylor
        </h2>

        {/* Info List */}
        <div className="w-full space-y-6">
          {/* Date of Birth */}
          <div className="flex items-center gap-3">
            <Image
              src="/BirthIcon.svg"
              alt="BirthIcon"
              width={40}
              height={40}
            />
            <div>
              <div className="text-sm ">Date Of Birth</div>
              <div className="text-sm font-bold">August 23, 1996</div>
            </div>
          </div>

          {/* Gender */}
          <div className="flex items-center gap-3">
            <Image
              src="/FemaleIcon.svg"
              alt="FemaleIcon"
              width={40}
              height={40}
            />

            <div>
              <div className="text-sm ">Gender</div>
              <div className="text-sm font-medium">Female</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex items-center gap-3">
            <Image
              src="/PhoneIcon.svg"
              alt="PhoneIcon"
              width={40}
              height={40}
            />

            <div>
              <div className="text-sm ">Contact Info</div>
              <div className="text-sm font-medium">(415) 555-1234</div>
            </div>
          </div>

          {/* Emergency Contacts */}
          <div className="flex items-center gap-3">
            <Image
              src="/PhoneIcon.svg"
              alt="PhoneIcon"
              width={40}
              height={40}
            />
            <div>
              <div className="text-sm ">Emergency Contacts</div>
              <div className="text-sm font-medium">(415) 555-5678</div>
            </div>
          </div>

          {/* Insurance Provider */}
          <div className="flex items-center gap-3">
            {/* <div className="size-10 bg-[#F6F7F8] flex items-center justify-center rounded-full">
              
            </div> */}
            <Image
              src="/InsuranceIcon.svg"
              alt="InsuranceIcon"
              width={40}
              height={40}
            />
            <div>
              <div className="text-sm ">Insurance Provider</div>
              <div className="text-sm font-medium">
                Sunrise Health Assurance
              </div>
            </div>
          </div>
        </div>

        {/* Show All Information Button */}
        <Button className="w-full bg-[#00ffa6] hover:bg-[#00ffa6]/90  mt-10 rounded-[41px] py-[11px] px-[40px]">
          Show All Information
        </Button>
      </div>
    </Card>
  );
}
