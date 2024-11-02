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
        <BloodPressureChart />
      </div>
      {/* vitalsCard  */}
      <VitalsCards />
    </div>
  );
};

export default DiagnosisHistory;
