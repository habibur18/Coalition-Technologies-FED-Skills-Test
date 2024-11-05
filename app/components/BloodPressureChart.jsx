"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
import { useMemo } from "react";
import ChartContent from "./ChartContent";
import ChartHeader from "./ChartHeader";
import ChartLegend from "./ChartLegend";

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
  const labels = useMemo(
    () => data.map((entry) => `${entry.month}, ${entry.year}`),
    [data]
  );
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
  const handleTimeRangeChange = (value) => setTimeRange(value);

  return (
    <div className="flex gap-2 xl:gap-4 flex-col xl:flex-row bg-[#F4F0FE] p-3 rounded-xl">
      {/* header with title and dropdown */}
      <div className="flex flex-col flex-grow  ">
        <div className="flex justify-between items-center mb-4 text-[#666]">
          <ChartHeader setTimeRange={setTimeRange} />
          <Select
            defaultValue="sixMonths"
            onValueChange={handleTimeRangeChange}
          >
            <SelectTrigger className="w-[180px] border-0 focus:outline-none focus:ring-0 shadow-none">
              <SelectValue placeholder="Select A Month" />
            </SelectTrigger>
            <SelectContent className="bg-white">
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
        {/* Line Chart */}
        <ChartContent
          labels={labels}
          systolicData={systolicData}
          diastolicData={diastolicData}
        />
      </div>

      {/* Right Section with Legend */}
      <ChartLegend
        systolicAverage={systolicAverage}
        diastolicAverage={diastolicAverage}
      />
    </div>
  );
};

export default BloodPressureChart;
