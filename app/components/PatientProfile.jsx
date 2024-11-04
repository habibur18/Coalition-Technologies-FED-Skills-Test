import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import Image from "next/image";

const patientInfo = {
  name: "Emily Williams",
  gender: "Female",
  age: 18,
  profile_picture: "https://fedskillstest.ct.digital/1.png",
  date_of_birth: "2006-08-19",
  phone_number: "(711) 984-6696",
  emergency_contact: "(680) 653-9512",
  insurance_type: "Premier Auto Corporation",
};

export default function PatientProfile({ patientInfo }) {
  return (
    <Card className="w-full  mx-auto bg-white p-8 border-none shadow-none">
      <div className="flex flex-col items-center">
        {/* profile image */}
        <div className="rounded-full overflow-hidden">
          <Image
            src={patientInfo.profile_picture}
            alt="Profile"
            width={200}
            height={200}
            className="object-cover"
          />
        </div>

        {/* name */}
        <h2 className="text-xl mt-6 mb-8 font-semibold text-gray-900">
          {patientInfo.name}
        </h2>

        {/* info list */}
        <div className="w-full space-y-6">
          {/* date of birth */}
          <div className="flex items-center gap-3">
            <Image
              src="/BirthIcon.svg"
              alt="BirthIcon"
              width={40}
              height={40}
            />
            <div>
              <div className="text-sm ">Date Of Birth</div>
              {new Date(patientInfo.date_of_birth).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
          </div>

          {/* gender */}
          <div className="flex items-center gap-3">
            <Image
              src={
                patientInfo.gender.toLowerCase() === "male"
                  ? "/maleIcon.svg"
                  : "/FemaleIcon.svg"
              }
              alt={"GenderIcon"}
              width={40}
              height={40}
            />

            <div>
              <div className="text-sm ">Gender</div>
              <div className="text-sm font-medium">{patientInfo.gender}</div>
            </div>
          </div>

          {/* contact Info */}
          <div className="flex items-center gap-3">
            <Image
              src="/PhoneIcon.svg"
              alt="PhoneIcon"
              width={40}
              height={40}
            />

            <div>
              <div className="text-sm ">Contact Info</div>
              <div className="text-sm font-medium">
                {patientInfo.phone_number}
              </div>
            </div>
          </div>

          {/* emergency contacts */}
          <div className="flex items-center gap-3">
            <Image
              src="/PhoneIcon.svg"
              alt="PhoneIcon"
              width={40}
              height={40}
            />
            <div>
              <div className="text-sm ">Emergency Contacts</div>
              <div className="text-sm font-medium">
                {patientInfo.emergency_contact}
              </div>
            </div>
          </div>

          {/* Insurance Provider */}
          <div className="flex items-center gap-3">
            <Image
              src="/InsuranceIcon.svg"
              alt="InsuranceIcon"
              width={40}
              height={40}
            />
            <div>
              <div className="text-sm ">Insurance Provider</div>
              <div className="text-sm font-medium">
                {patientInfo.insurance_type}
              </div>
            </div>
          </div>
        </div>

        {/* show all Information button */}
        <Button className="w-full bg-[#00ffa6] hover:bg-[#00ffa6]/90  mt-10 rounded-[41px] py-[11px] px-[40px]">
          Show All Information
        </Button>
      </div>
    </Card>
  );
}
