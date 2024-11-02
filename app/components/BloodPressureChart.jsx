"use client";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import Image from "next/image";
import { Line } from "react-chartjs-2";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const BloodPressureChart = () => {
  const data = {
    labels: [
      "Oct, 2023",
      "Nov, 2023",
      "Dec, 2023",
      "Jan, 2024",
      "Feb, 2024",
      "Mar, 2024",
    ],
    datasets: [
      {
        label: "Systolic",
        data: [120, 118, 160, 112, 145, 157],
        borderColor: "#E66FD2",
        backgroundColor: "#DDA0DD",
        pointBorderColor: "#E66FD2",
        pointBackgroundColor: "#E66FD2",
        pointBorderWidth: 4,
        tension: 0.4,
        pointRadius: 5,
      },
      {
        label: "Diastolic",
        data: [110, 64, 110, 85, 68, 78],
        borderColor: "#8C6FE6",
        backgroundColor: "#8C6FE6",
        pointBorderColor: "#8C6FE6",
        pointBackgroundColor: "#8C6FE6",
        pointBorderWidth: 4,
        tension: 0.4,
        pointRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.dataset.label}: ${context.raw}`,
        },
      },
    },
    scales: {
      y: {
        min: 60,
        max: 180,
        ticks: {
          stepSize: 20,
          color: "#4A4A4A",
        },
        grid: {
          color: "#E0E0E0",
          drawBorder: false,
        },
      },
      x: {
        ticks: {
          color: "#4A4A4A",
          padding: 10,
        },
        grid: {
          // IT's gonna remove the vertical line x cross the x-axis issue
          lineWidth: (context) => {
            return context.index === 0 && context.label === "Oct, 2023" ? 0 : 0;
          },
          z: 1,
          // removes the border of the x-axis
          drawBorder: false,
          // prevents the vertical line from being crossed the x-axis
          clip: false,
        },
      },
    },
  };

  return (
    <div className=" bg-white p-6 rounded-[16px] w-full max-w-xl shadow-lg">
      {/* left section with chart */}
      <h2 className="text-2xl font-extrabold mb-10">Diagnosis History</h2>
      {/* chart section */}
      <div className="mb-4">
        <div className="flex gap-8 w-full flex-col sm:flex-row bg-[#F4F0FE] p-3 rounded-xl  ">
          <div className="flex flex-col flex-grow w-full ">
            <div className="flex justify-between items-center mb-4 text-[#666]">
              <h3 className=" text-lg font-semibold">Blood Pressure</h3>
              {/* filter dropdown */}
              <Select defaultValue="sixMonths">
                <SelectTrigger className="w-[180px] border-0 focus:outline-none focus:ring-0 shadow-none ">
                  <SelectValue placeholder="Select A Month" />
                </SelectTrigger>
                <SelectContent className=" bg-white">
                  <SelectGroup>
                    <SelectItem
                      value="sixMonths"
                      className="hover:!bg-[#EDEAF7]"
                    >
                      Last 6 months
                    </SelectItem>
                    <SelectItem
                      value="twelveMonths"
                      className="hover:!bg-[#EDEAF7]"
                    >
                      Last 12 months
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <Line data={data} options={options} />
          </div>

          {/* Right Section with Legend */}
          <div className="overflow-hidden flex flex-col items-start  bg-gray-100 p-4 rounded-lg w-full md:w-1/3  ">
            <div>
              <div className="flex items-center mb-2">
                <span className="inline-block w-3 h-3 bg-[#E66FD2] rounded-full mr-2"></span>
                <span className="font-bold text-sm ">Systolic</span>
              </div>
              <div className="space-y-2">
                <p className="font-bold text-xl text-left">160</p>
                <p className="text-sm flex items-center gap-2">
                  <Image
                    src="/ArrowUp.svg"
                    alt="arrow-up"
                    width={10}
                    height={5}
                  />
                  <span>Higher than Average</span>
                </p>
              </div>
            </div>
            {/* should be one seperator */}
            <Separator orientation="horizontal" className="my-4 bg-[#CBC8D4]" />
            <div>
              <div className="flex items-center mb-2">
                <span className="inline-block w-3 h-3 bg-[#8C6FE6] rounded-full mr-2"></span>
                <span className="font-bold text-sm ">Diastolic</span>
              </div>
              <div>
                <p className="font-bold text-xl text-left">78</p>
                <p className="text-sm flex items-center gap-2">
                  <Image
                    src="/ArrowDown.svg"
                    alt="arrow-down"
                    width={10}
                    height={5}
                  />

                  <span>Lower than Average</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="flex justify-between gap-4">
        {/* Respiratory Rate Card */}
        <div className="w-full lg:max-w-[228px] bg-[#E0F3FA] rounded-[12px] p-4 shadow-none  flex flex-col justify-between">
          <div className="mb-4">
            <Image
              src="respiratoryrate.svg"
              alt="lungs"
              width={96}
              height={96}
            />
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
    </div>
  );
};

export default BloodPressureChart;
