import Image from "next/image";

export default function VitalsCards() {
  return (
    <div className="flex justify-between gap-4">
      {/* Respiratory Rate Card */}
      <div className="w-full lg:max-w-[228px] bg-[#E0F3FA] rounded-[12px] p-4 shadow-none  flex flex-col justify-between">
        <div className="mb-4">
          <Image src="respiratoryrate.svg" alt="lungs" width={96} height={96} />
        </div>
        <div className=" flex flex-col flex-grow justify-between ">
          <div className="b-2">
            <h3 className="text-[16px] font-medium">Respiratory Rate</h3>
            <p className="text-3xl font-extrabold">20 bpm</p>
          </div>
          <p className="text-sm rder-green-500">Normal</p>
        </div>
      </div>

      {/* Temperature Card */}
      <div className="w-full lg:max-w-[228px] bg-[#FFE6E9] rounded-[12px] p-4 shadow-none  flex flex-col justify-between">
        <div className="mb-4">
          <Image
            src="temperature.svg"
            alt=" temperature"
            width={96}
            height={96}
          />
        </div>
        <div className=" flex flex-col flex-grow justify-between ">
          <div className="mb-2">
            <h3 className="text-[16px] font-medium">Temperature</h3>
            <p className="text-3xl font-extrabold">98.6°F</p>
          </div>
          <p className="text-sm ">Normal</p>
        </div>
      </div>

      {/* Heart Rate Card */}

      <div className="w-full lg:max-w-[228px] bg-[#FFE6E9] rounded-[12px] p-4 shadow-none  flex flex-col justify-between">
        <div className="mb-4">
          <Image src="HeartBPM.svg" alt="HeartBPM" width={96} height={96} />
        </div>
        <div className=" flex flex-col flex-grow justify-between ">
          <div className="mb-2">
            <h3 className="text-[16px] font-medium">Heart Rate</h3>
            <p className="text-3xl font-extrabold">78 bpm</p>
          </div>
          <span>
            <Image
              src="/ArrowDown.svg"
              alt="arrow-down"
              width={10}
              height={5}
              className="inline-block w-3 h-3 mr-2"
            />
            <span className="text-sm ">Lower than Average</span>
          </span>
        </div>
      </div>
    </div>
  );
}
