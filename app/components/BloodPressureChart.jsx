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

const BloodPressureChart = ({ data, setTimeRange }) => {
  const labels = data.map((entry) => `${entry.month}, ${entry.year}`);
  const systolicData = data.map((entry) => entry.blood_pressure.systolic.value);
  const diastolicData = data.map(
    (entry) => entry.blood_pressure.diastolic.value
  );

  const systolicAverage = Math.round(
    data.reduce((sum, entry) => sum + entry.blood_pressure.systolic.value, 0) /
      data.length
  );

  const diastolicAverage = Math.round(
    data.reduce((sum, entry) => sum + entry.blood_pressure.diastolic.value, 0) /
      data.length
  );

  const chartData = {
    labels,
    datasets: [
      {
        label: "Systolic",
        data: systolicData,
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
        data: diastolicData,
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

  const handleTimeRangeChange = (value) => {
    setTimeRange(value);
  };
  return (
    <div className=" flex gap-2 xl:gap-4 flex-col xl:flex-row bg-[#F4F0FE] p-3 rounded-xl  ">
      <div className="flex flex-col flex-grow  ">
        <div className="flex justify-between items-center mb-4 text-[#666]">
          <h3 className=" text-lg font-extrabold">Blood Pressure</h3>
          {/* filter dropdown */}
          <Select
            defaultValue="sixMonths"
            onValueChange={handleTimeRangeChange}
          >
            <SelectTrigger className="w-[180px] border-0 focus:outline-none focus:ring-0 shadow-none ">
              <SelectValue placeholder="Select A Month" />
            </SelectTrigger>
            <SelectContent className=" bg-white">
              <SelectGroup>
                <SelectItem value="sixMonths" className="hover:!bg-[#EDEAF7]">
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

        <Line data={chartData} options={options} />
      </div>

      {/* Right Section with Legend */}
      <div className=" w-full  p-4 rounded-lg xl:w-1/4  ">
        <div>
          <div className="flex items-center mb-2">
            <span className="inline-block w-3 h-3 bg-[#E66FD2] rounded-full mr-2"></span>
            <span className="font-bold text-sm ">Systolic</span>
          </div>
          <div className="space-y-2">
            {/* <p className="font-bold text-xl text-left">160</p> */}
            <p className="font-bold text-xl text-left">{systolicAverage}</p>
            {systolicAverage > 120 ? (
              <p className="text-sm flex items-center gap-2">
                <Image
                  src="/ArrowUp.svg"
                  alt="arrow-up"
                  width={10}
                  height={5}
                />
                <span>Higher than Average</span>
              </p>
            ) : (
              <p className="text-sm flex items-center gap-2">
                <Image
                  src="/ArrowDown.svg"
                  alt="arrow-down"
                  width={10}
                  height={5}
                />
                <span>Lower than Average</span>
              </p>
            )}
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
            {/* <p className="font-bold text-xl text-left">78</p> */}
            <p className="font-bold text-xl text-left">{diastolicAverage}</p>
            {diastolicAverage > 80 ? (
              <p className="text-sm flex items-center gap-2">
                <Image
                  src="/ArrowUp.svg"
                  alt="arrow-up"
                  width={10}
                  height={5}
                />
                <span>Higher than Average</span>
              </p>
            ) : (
              <p className="text-sm flex items-center gap-2">
                <Image
                  src="/ArrowDown.svg"
                  alt="arrow-down"
                  width={10}
                  height={5}
                />
                <span>Lower than Average</span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloodPressureChart;
