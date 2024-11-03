import Image from "next/image";

export default function LabResults() {
  const results = [
    { name: "Blood Tests" },
    { name: "CT Scans" },
    { name: "Radiology Reports" },
    { name: "X-Rays" },
    { name: "Urine Test" },
  ];

  return (
    <div className="w-full">
      <div className="p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-[1.50rem] font-extrabold text-gray-900 mb-4">
          Lab Results
        </h2>
        <ul className="space-y-2 max-h-[200px] overflow-y-auto">
          {results.map((result, index) => (
            <li
              key={index}
              className={`flex items-center justify-between cursor-pointer p-2 ${
                index === 1 ? "bg-[#F6F7F8] rounded-md" : ""
              }`}
            >
              <span className="">{result.name}</span>
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
