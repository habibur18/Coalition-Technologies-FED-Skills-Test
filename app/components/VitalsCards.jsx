import Image from "next/image";

function getStatus(value, label) {
  if (label === "Respiratory Rate") {
    if (value > 20)
      return { status: "Higher than Average", arrow: "/ArrowUp.svg" };
    if (value < 12)
      return { status: "Lower than Average", arrow: "/ArrowDown.svg" };
  } else if (label === "Temperature") {
    if (value > 99.5)
      return { status: "Higher than Average", arrow: "/ArrowUp.svg" };
    if (value < 97.5)
      return { status: "Lower than Average", arrow: "/ArrowDown.svg" };
  } else if (label === "Heart Rate") {
    if (value > 100)
      return { status: "Higher than Average", arrow: "/ArrowUp.svg" };
    if (value < 60)
      return { status: "Lower than Average", arrow: "/ArrowDown.svg" };
  }
  return { status: "Normal", arrow: null };
}

//  custom vitalCard component
function VitalCard({
  iconSrc,
  altText,
  label,
  value,
  unit,
  bgColor,
  extraClasses,
}) {
  const { status, arrow } = getStatus(value, label);
  return (
    <div
      className={`w-full ${bgColor} rounded-[12px] p-4 shadow-none flex flex-col justify-between ${extraClasses}`}
    >
      <div className="mb-4">
        <Image src={iconSrc} alt={altText} width={96} height={96} />
      </div>
      <div className="flex flex-col flex-grow justify-between">
        <div className="mb-2">
          <h3 className="text-[16px] ">{label}</h3>
          <p className="text-3xl font-bold text-[#2C2A29]">
            {Math.round(value) || "N/A"} {unit}
          </p>
        </div>

        <p className="text-sm flex items-center gap-2 text-[#7D7B7B]">
          {arrow && <Image src={arrow} alt="arrow" width={10} height={5} />}
          <span>{status}</span>
        </p>
      </div>
    </div>
  );
}

export default function VitalsCards({ averages }) {
  // configure vitals cards array
  const vitalsConfig = [
    {
      iconSrc: "/respiratoryrate.svg",
      altText: "lungs",
      label: "Respiratory Rate",
      value: averages.averageRespiratoryRate,
      unit: "bpm",
      bgColor: "bg-[#E0F3FA]",
    },
    {
      iconSrc: "/temperature.svg",
      altText: "temperature",
      label: "Temperature",
      value: averages.averageTemperature,
      unit: "°F",
      bgColor: "bg-[#E8E4F8]",
    },
    {
      iconSrc: "/HeartBPM.svg",
      altText: "heart",
      label: "Heart Rate",
      value: averages.averageHeartRate,
      unit: "bpm",
      bgColor: "bg-[#FFE4E4]",
      extraClasses: "col-span-2 lg:col-span-1",
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 justify-between gap-4">
      {vitalsConfig.map((config, index) => (
        <VitalCard key={index} {...config} />
      ))}
    </div>
  );
}
