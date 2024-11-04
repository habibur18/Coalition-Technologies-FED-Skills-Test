"use client";
import { PatientContext } from "@/context/PatientProvider";
import { useContext, useState } from "react";
import BloodPressureChart from "./BloodPressureChart";
import VitalsCards from "./VitalsCards";

const DiagnosisHistory = ({ diagnosis_history }) => {
  const { patient, setPatient } = useContext(PatientContext);
  const [timeRange, setTimeRange] = useState("sixMonths");

  console.log(patient);
  // data will be pass to the bloodpressure chart and vitals cards this data will be come from the api  will pass them as props

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

  // Calculate averages from filtered data
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

/* 


 <div className="w-full p-4 rounded-lg xl:w-1/4 hidden">
        <div>
          <div className="flex items-center mb-2">
            <span className="inline-block w-3 h-3 bg-[#E66FD2] rounded-full mr-2"></span>
            <span className="font-bold text-sm">Systolic</span>
          </div>
          <div className="space-y-2">
            <p className="font-bold text-xl text-left">
              {averages.averageSystolic || "N/A"}
            </p>
            <p className="text-sm flex items-center gap-2">
              <Image
                src={
                  averages.averageSystolic > 130
                    ? "/ArrowUp.svg"
                    : "/ArrowDown.svg"
                }
                alt={averages.averageSystolic > 130 ? "arrow-up" : "arrow-down"}
                width={10}
                height={5}
              />
              <span>
                {averages.averageSystolic > 130
                  ? "Higher than Average"
                  : "Lower than Average"}
              </span>
            </p>
          </div>
        </div>
        <Separator orientation="horizontal" className="my-4 bg-[#CBC8D4]" />
        <div>
          <div className="flex items-center mb-2">
            <span className="inline-block w-3 h-3 bg-[#8C6FE6] rounded-full mr-2"></span>
            <span className="font-bold text-sm">Diastolic</span>
          </div>
          <div>
            <p className="font-bold text-xl text-left">
              {averages.averageDiastolic || "N/A"}
            </p>
            <p className="text-sm flex items-center gap-2">
              <Image
                src={
                  averages.averageDiastolic < 80
                    ? "/ArrowDown.svg"
                    : "/ArrowUp.svg"
                }
                alt={averages.averageDiastolic < 80 ? "arrow-down" : "arrow-up"}
                width={10}
                height={5}
              />
              <span>
                {averages.averageDiastolic < 80
                  ? "Lower than Average"
                  : "Higher than Average"}
              </span>
            </p>
          </div>
        </div>
      </div>
*/
