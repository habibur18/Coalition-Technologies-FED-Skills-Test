import Image from "next/image";

export default function VitalsCards({ averages }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 justify-between gap-4">
      {/* Respiratory Rate Card */}
      <div className="w-full bg-[#E0F3FA] rounded-[12px] p-4 shadow-none flex flex-col justify-between">
        <div className="mb-4">
          <Image
            src="/respiratoryrate.svg"
            alt="lungs"
            width={96}
            height={96}
          />
          <h3 className="text-sm font-semibold">Respiratory Rate</h3>
        </div>
        <p className="text-2xl font-bold text-[#2C2A29]">
          {Math.round(averages.averageRespiratoryRate) || "N/A"} bpm
        </p>
        <p className="text-sm text-[#7D7B7B]">Breaths per minute</p>
      </div>

      {/* Temperature Card */}
      <div className="w-full  bg-[#E8E4F8] rounded-[12px] p-4 shadow-none flex flex-col justify-between">
        <div className="mb-4">
          <Image
            src="/temperature.svg"
            alt="temperature"
            width={96}
            height={96}
          />
          <h3 className="text-sm font-semibold">Temperature</h3>
        </div>
        <p className="text-2xl font-bold text-[#2C2A29]">
          {Math.round(averages.averageTemperature) || "N/A"} °F
        </p>
        <p className="text-sm text-[#7D7B7B]">Temperature</p>
      </div>

      {/* Heart Rate Card */}
      <div className="col-span-2 lg:col-span-1 w-full bg-[#FFE4E4] rounded-[12px] p-4 shadow-none flex flex-col justify-between">
        <div className="mb-4">
          <Image src="/HeartBPM.svg" alt="heart" width={96} height={96} />
          <h3 className="text-sm font-semibold">Heart Rate</h3>
        </div>
        <p className="text-2xl font-bold text-[#2C2A29]">
          {Math.round(averages.averageHeartRate) || "N/A"} bpm
        </p>
        <p className="text-sm text-[#7D7B7B]">Beats per minute</p>
      </div>
    </div>
  );
}
