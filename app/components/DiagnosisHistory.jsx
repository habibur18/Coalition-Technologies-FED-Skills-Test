"use client";
import { PatientContext } from "@/context/PatientProvider";
import { useContext, useState } from "react";
import BloodPressureChart from "./BloodPressureChart";
import VitalsCards from "./VitalsCards";

const DiagnosisHistory = () => {
  const { patient, setPatient } = useContext(PatientContext);
  const [timeRange, setTimeRange] = useState("sixMonths"); // Default to 6 months

  console.log(patient);
  // data will be pass to the bloodpressure chart and vitals cards this data will be come from the api I will pass them as props
  const diagnosis_history = [
    {
      month: "November",
      year: 2024,
      blood_pressure: {
        systolic: {
          value: 110,
          levels: "Higher than Average",
        },
        diastolic: {
          value: 70,
          levels: "Normal",
        },
      },
      heart_rate: {
        value: 79,
        levels: "Lower than Average",
      },
      respiratory_rate: {
        value: 27,
        levels: "Normal",
      },
      temperature: {
        value: 103,
        levels: "Higher than Average",
      },
    },
    {
      month: "Octobor",
      year: 2024,
      blood_pressure: {
        systolic: {
          value: 90,
          levels: "Higher than Average",
        },
        diastolic: {
          value: 70,
          levels: "Normal",
        },
      },
      heart_rate: {
        value: 79,
        levels: "Lower than Average",
      },
      respiratory_rate: {
        value: 27,
        levels: "Normal",
      },
      temperature: {
        value: 103,
        levels: "Higher than Average",
      },
    },
    {
      month: "September",
      year: 2024,
      blood_pressure: {
        systolic: {
          value: 130,
          levels: "Higher than Average",
        },
        diastolic: {
          value: 150,
          levels: "Normal",
        },
      },
      heart_rate: {
        value: 79,
        levels: "Lower than Average",
      },
      respiratory_rate: {
        value: 27,
        levels: "Normal",
      },
      temperature: {
        value: 103,
        levels: "Higher than Average",
      },
    },
    {
      month: "August",
      year: 2024,
      blood_pressure: {
        systolic: {
          value: 163,
          levels: "Higher than Average",
        },
        diastolic: {
          value: 95,
          levels: "Normal",
        },
      },
      heart_rate: {
        value: 79,
        levels: "Lower than Average",
      },
      respiratory_rate: {
        value: 27,
        levels: "Normal",
      },
      temperature: {
        value: 103,
        levels: "Higher than Average",
      },
    },
    {
      month: "July",
      year: 2024,
      blood_pressure: {
        systolic: {
          value: 163,
          levels: "Higher than Average",
        },
        diastolic: {
          value: 95,
          levels: "Normal",
        },
      },
      heart_rate: {
        value: 79,
        levels: "Lower than Average",
      },
      respiratory_rate: {
        value: 27,
        levels: "Normal",
      },
      temperature: {
        value: 103,
        levels: "Higher than Average",
      },
    },
    {
      month: "Jun",
      year: 2024,
      blood_pressure: {
        systolic: {
          value: 163,
          levels: "Higher than Average",
        },
        diastolic: {
          value: 95,
          levels: "Normal",
        },
      },
      heart_rate: {
        value: 79,
        levels: "Lower than Average",
      },
      respiratory_rate: {
        value: 27,
        levels: "Normal",
      },
      temperature: {
        value: 103,
        levels: "Higher than Average",
      },
    },
    {
      month: "May",
      year: 2024,
      blood_pressure: {
        systolic: {
          value: 163,
          levels: "Higher than Average",
        },
        diastolic: {
          value: 95,
          levels: "Normal",
        },
      },
      heart_rate: {
        value: 79,
        levels: "Lower than Average",
      },
      respiratory_rate: {
        value: 27,
        levels: "Normal",
      },
      temperature: {
        value: 103,
        levels: "Higher than Average",
      },
    },
    {
      month: "April",
      year: 2024,
      blood_pressure: {
        systolic: {
          value: 163,
          levels: "Higher than Average",
        },
        diastolic: {
          value: 95,
          levels: "Normal",
        },
      },
      heart_rate: {
        value: 79,
        levels: "Lower than Average",
      },
      respiratory_rate: {
        value: 27,
        levels: "Normal",
      },
      temperature: {
        value: 103,
        levels: "Higher than Average",
      },
    },
    {
      month: "March",
      year: 2024,
      blood_pressure: {
        systolic: {
          value: 163,
          levels: "Higher than Average",
        },
        diastolic: {
          value: 95,
          levels: "Normal",
        },
      },
      heart_rate: {
        value: 79,
        levels: "Lower than Average",
      },
      respiratory_rate: {
        value: 27,
        levels: "Normal",
      },
      temperature: {
        value: 103,
        levels: "Higher than Average",
      },
    },
    {
      month: "February",
      year: 2024,
      blood_pressure: {
        systolic: {
          value: 151,
          levels: "Higher than Average",
        },
        diastolic: {
          value: 120,
          levels: "Normal",
        },
      },
      heart_rate: {
        value: 88,
        levels: "Normal",
      },
      respiratory_rate: {
        value: 27,
        levels: "Normal",
      },
      temperature: {
        value: 99,
        levels: "Normal",
      },
    },
    {
      month: "January",
      year: 2024,
      blood_pressure: {
        systolic: {
          value: 168,
          levels: "Higher than Average",
        },
        diastolic: {
          value: 77,
          levels: "Lower than Average",
        },
      },
      heart_rate: {
        value: 82,
        levels: "Normal",
      },
      respiratory_rate: {
        value: 17,
        levels: "Normal",
      },
      temperature: {
        value: 97,
        levels: "Normal",
      },
    },
    {
      month: "December",
      year: 2023,
      blood_pressure: {
        systolic: {
          value: 158,
          levels: "Higher than Average",
        },
        diastolic: {
          value: 92,
          levels: "Normal",
        },
      },
      heart_rate: {
        value: 60,
        levels: "Lower than Average",
      },
      respiratory_rate: {
        value: 21,
        levels: "Normal",
      },
      temperature: {
        value: 99,
        levels: "Normal",
      },
    },
    {
      month: "November",
      year: 2023,
      blood_pressure: {
        systolic: {
          value: 117,
          levels: "Normal",
        },
        diastolic: {
          value: 95,
          levels: "Normal",
        },
      },
      heart_rate: {
        value: 100,
        levels: "Normal",
      },
      respiratory_rate: {
        value: 21,
        levels: "Normal",
      },
      temperature: {
        value: 103,
        levels: "Higher than Average",
      },
    },
    {
      month: "October",
      year: 2023,
      blood_pressure: {
        systolic: {
          value: 115,
          levels: "Normal",
        },
        diastolic: {
          value: 80,
          levels: "Lower than Average",
        },
      },
      heart_rate: {
        value: 63,
        levels: "Lower than Average",
      },
      respiratory_rate: {
        value: 14,
        levels: "Normal",
      },
      temperature: {
        value: 100,
        levels: "Normal",
      },
    },
    {
      month: "September",
      year: 2023,
      blood_pressure: {
        systolic: {
          value: 133,
          levels: "Higher than Average",
        },
        diastolic: {
          value: 68,
          levels: "Lower than Average",
        },
      },
      heart_rate: {
        value: 91,
        levels: "Normal",
      },
      respiratory_rate: {
        value: 13,
        levels: "Normal",
      },
      temperature: {
        value: 99,
        levels: "Normal",
      },
    },
    {
      month: "August",
      year: 2023,
      blood_pressure: {
        systolic: {
          value: 149,
          levels: "Higher than Average",
        },
        diastolic: {
          value: 70,
          levels: "Lower than Average",
        },
      },
      heart_rate: {
        value: 69,
        levels: "Lower than Average",
      },
      respiratory_rate: {
        value: 14,
        levels: "Normal",
      },
      temperature: {
        value: 100,
        levels: "Normal",
      },
    },
    {
      month: "July",
      year: 2023,
      blood_pressure: {
        systolic: {
          value: 165,
          levels: "Higher than Average",
        },
        diastolic: {
          value: 95,
          levels: "Normal",
        },
      },
      heart_rate: {
        value: 71,
        levels: "Lower than Average",
      },
      respiratory_rate: {
        value: 14,
        levels: "Normal",
      },
      temperature: {
        value: 100,
        levels: "Normal",
      },
    },
    {
      month: "June",
      year: 2023,
      blood_pressure: {
        systolic: {
          value: 165,
          levels: "Higher than Average",
        },
        diastolic: {
          value: 95,
          levels: "Normal",
        },
      },
      heart_rate: {
        value: 71,
        levels: "Lower than Average",
      },
      respiratory_rate: {
        value: 14,
        levels: "Normal",
      },
      temperature: {
        value: 100,
        levels: "Normal",
      },
    },
    {
      month: "May",
      year: 2023,
      blood_pressure: {
        systolic: {
          value: 165,
          levels: "Higher than Average",
        },
        diastolic: {
          value: 95,
          levels: "Normal",
        },
      },
      heart_rate: {
        value: 71,
        levels: "Lower than Average",
      },
      respiratory_rate: {
        value: 14,
        levels: "Normal",
      },
      temperature: {
        value: 100,
        levels: "Normal",
      },
    },
  ];

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
    <div className=" bg-white p-6 rounded-[16px] w-full shadow-lg">
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
