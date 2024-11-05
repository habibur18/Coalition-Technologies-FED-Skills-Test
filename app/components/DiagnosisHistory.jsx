"use client";
import { useState } from "react";
import BloodPressureChart from "./BloodPressureChart";
import VitalsCards from "./VitalsCards";

const DiagnosisHistory = ({ diagnosis_history }) => {
  // const { patient, setPatient } = useContext(PatientContext);
  const [timeRange, setTimeRange] = useState("sixMonths");

  // sort the diagnosis history by month and year
  const sortedDiagnosisHistory = diagnosis_history.sort((a, b) => {
    const dateA = new Date(`${a.year}-${a.month}-01`);
    const dateB = new Date(`${b.year}-${b.month}-01`);
    return dateA - dateB;
  });

  const getFilteredData = () => {
    const monthsToLookBack = timeRange === "sixMonths" ? 6 : 12;
    return sortedDiagnosisHistory.slice(-monthsToLookBack);
  };

  // calculate averages from filtered data
  const calculateAverages = (filteredData) => {
    if (filteredData.length === 0) return {};

    const totalRespiratoryRate = filteredData.reduce(
      (sum, entry) => sum + entry.respiratory_rate.value,
      0
    );
    const totalTemperature = filteredData.reduce(
      (sum, entry) => sum + entry.temperature.value,
      0
    );
    const totalHeartRate = filteredData.reduce(
      (sum, entry) => sum + entry.heart_rate.value,
      0
    );

    return {
      averageRespiratoryRate: (
        totalRespiratoryRate / filteredData.length
      ).toFixed(1),
      averageTemperature: (totalTemperature / filteredData.length).toFixed(1),
      averageHeartRate: (totalHeartRate / filteredData.length).toFixed(1),
    };
  };

  const filteredData = getFilteredData();
  const averages = calculateAverages(filteredData);

  return (
    <div className=" bg-white p-6 rounded-[16px] shadow-lg w-full">
      {/* left section with chart */}
      <h2 className="text-2xl font-extrabold mb-10">Diagnosis History</h2>
      {/* chart section */}
      <div className="mb-4">
        <BloodPressureChart data={filteredData} setTimeRange={setTimeRange} />
      </div>
      {/* vitalsCard  */}
      <VitalsCards averages={averages} />
    </div>
  );
};

export default DiagnosisHistory;
