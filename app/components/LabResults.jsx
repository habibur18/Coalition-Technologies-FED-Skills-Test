import Image from "next/image";

const lab_results = [
  "Ultrasound",
  "Urinalysis",
  "Lipid Panel",
  "Radiology Report",
  "Bone Density Scan",
  "Prostate-Specific Antigen (PSA)",
];
export default function LabResults({ lab_results }) {
  return (
    <div className="w-full bg-white rounded-[16px]">
      <div className="p-4 ">
        <h2 className="text-[1.50rem] font-extrabold text-gray-900 mb-4">
          Lab Results
        </h2>
        <ul className="space-y-2 max-h-[200px] overflow-y-auto">
          {lab_results.map((result, index) => (
            <li
              key={index}
              className={`flex items-center justify-between cursor-pointer p-2 ${
                index === 1 ? "bg-[#F6F7F8] rounded-md" : ""
              }`}
            >
              <span className="">{result}</span>
              <Image
                src="/downloadicon.svg"
                alt="downloadicon"
                width={20}
                height={20}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
