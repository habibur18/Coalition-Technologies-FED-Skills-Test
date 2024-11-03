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

import BloodPressureChart from "./BloodPressureChart";
import VitalsCards from "./VitalsCards";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const DiagnosisHistory = () => {
  return (
    <div className=" bg-white p-6 rounded-[16px] w-full shadow-lg">
      {/* left section with chart */}
      <h2 className="text-2xl font-extrabold mb-10">Diagnosis History</h2>
      {/* chart section */}
      <div className="mb-4">
        <BloodPressureChart />
      </div>
      {/* vitalsCard  */}
      <VitalsCards />
    </div>
  );
};

export default DiagnosisHistory;
