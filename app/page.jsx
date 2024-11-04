// "use client";
// import { getPatientByName } from "@/utils/fetchPatients";
// import { useEffect, useState } from "react";
// import DiagnosisHistory from "./components/DiagnosisHistory";
// import DiagnosticList from "./components/DiagnosticList";
// import LabResults from "./components/LabResults";
// import Navbar from "./components/Navbar";
// import PatientList from "./components/PatientList";
// import PatientProfile from "./components/PatientProfile";

// export default function Home() {
//   const [patients, setPatients] = useState([]);
//   const [selectedPatient, setSelectedPatient] = useState(null);

//   // Fetch the patient list on mount
//   const loadPatients = async () => {
//     try {
//       const data = await fetchPatients();
//       setPatients(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   // Handle patient selection
//   const onPatientClick = async (patientName) => {
//     const patientDetails = await getPatientByName(patientName);
//     setSelectedPatient(patientDetails);
//   };

//   useEffect(() => {
//     loadPatients();
//   }, []);
//   return (
//     <div className=" p-4">
//       <Navbar />
//       <main className="mt-8">
//         <div className="grid gap-8 w-full grid-cols-1  md:grid-cols-6 lg:grid-cols-12">
//           {/* patient List */}
//           <div className="order-1 md:col-span-3 lg:order-1 lg:col-span-3">
//             {/* <PatientList {...{ patients }} /> */}
//             <PatientList patients={patients} onPatientClick={onPatientClick} />
//           </div>

//           {/* Diagnosis history */}
//           <div className="order-3 md:col-span-6 lg:order-2 lg:col-span-6">
//             <div className="w-3/4 lg:w-full">
//               <DiagnosisHistory
//                 diagnosis_history={selectedPatient.diagnosis_history}
//               />
//             </div>
//             <div className="mb-8" />
//             <DiagnosticList diagnostic_list={selectedPatient.diagnostic_list} />
//           </div>

//           {/* profile Sectionp */}
//           <div className="order-2 md:col-span-3 lg:order-3 lg:col-span-3">
//             <PatientProfile patientInfo={selectedPatient} />

//             <div className="mb-8" />
//             <LabResults lab_results={selectedPatient.lab_results} />
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }
// "use client";
// import { useEffect, useState } from "react";
// import DiagnosisHistory from "./components/DiagnosisHistory";
// import DiagnosticList from "./components/DiagnosticList";
// import LabResults from "./components/LabResults";
// import Navbar from "./components/Navbar";
// import PatientList from "./components/PatientList";
// import PatientProfile from "./components/PatientProfile";

// export default function Home() {
//   const [patients, setPatients] = useState([]);
//   const [selectedPatient, setSelectedPatient] = useState(null);
//   const [selectedPatientName, setSelectedPatientName] =
//     useState("Jessica Taylor");

//   // Fetch the patient list
//   const fetchPatients = async () => {
//     const username = "coalition";
//     const password = "skills-test";
//     const auth = btoa(`${username}:${password}`);

//     const response = await fetch(
//       "https://fedskillstest.coalitiontechnologies.workers.dev",
//       {
//         method: "GET",
//         headers: {
//           Authorization: `Basic ${auth}`,
//         },
//       }
//     );

//     if (!response.ok) {
//       throw new Error("Failed to fetch patients");
//     }

//     const data = await response.json();
//     setPatients(data);
//   };

//   // Handle patient selection
//   const onPatientClick = (patientName) => {
//     const patientDetails = patients.find(
//       (patient) => patient.name === patientName
//     );
//     setSelectedPatient(patientDetails);
//     setSelectedPatientName(patientName);
//   };

//   useEffect(() => {
//     fetchPatients();
//   }, []);
//   console.log(patients);
//   console.log(selectedPatient);
//   if (!selectedPatient) return null;
//   return (
//     <div className=" p-4">
//       <Navbar />
//       <main className="mt-8">
//         <div className="grid gap-8 w-full grid-cols-1  md:grid-cols-6 lg:grid-cols-12">
//           {/* patient List */}
//           <div className="order-1 md:col-span-3 lg:order-1 lg:col-span-3">
//             {/* <PatientList {...{ patients }} /> */}
//             <PatientList patients={patients} onPatientClick={onPatientClick} />
//           </div>

//           {/* Diagnosis history */}
//           <div className="order-3 md:col-span-6 lg:order-2 lg:col-span-6">
//             <div className="w-3/4 lg:w-full">
//               <DiagnosisHistory
//                 diagnosis_history={selectedPatient.diagnosis_history}
//               />
//             </div>
//             <div className="mb-8" />
//             <DiagnosticList diagnostic_list={selectedPatient.diagnostic_list} />
//           </div>

//           {/* profile Sectionp */}
//           <div className="order-2 md:col-span-3 lg:order-3 lg:col-span-3">
//             <PatientProfile patientInfo={selectedPatient} />

//             <div className="mb-8" />
//             <LabResults lab_results={selectedPatient.lab_results} />
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// "use client";

// import { useRouter, useSearchParams } from "next/navigation";
// import { Suspense, useEffect, useState } from "react";
// import DiagnosisHistory from "./components/DiagnosisHistory";
// import DiagnosticList from "./components/DiagnosticList";
// import LabResults from "./components/LabResults";
// import Navbar from "./components/Navbar";
// import PatientList from "./components/PatientList";
// import PatientProfile from "./components/PatientProfile";

// export default function Home() {
// const [patients, setPatients] = useState([]);
// const [selectedPatient, setSelectedPatient] = useState(null);
// const searchParams = useSearchParams();

// const fetchPatients = async () => {
//   const username = "coalition";
//   const password = "skills-test";
//   const auth = btoa(`${username}:${password}`);

//   try {
//     const response = await fetch(
//       "https://fedskillstest.coalitiontechnologies.workers.dev",
//       {
//         method: "GET",
//         headers: {
//           Authorization: `Basic ${auth}`,
//         },
//       }
//     );

//     if (!response.ok) {
//       throw new Error("Failed to fetch patients");
//     }

//     const data = await response.json();
//     setPatients(data);

//     // Set default selected patient or use URL param
//     const defaultPatient = searchParams.get("patient") || "Jessica Taylor";
//     const initialPatient =
//       data.find((p) => p.name === defaultPatient) || data[0];
//     setSelectedPatient(initialPatient);
//   } catch (error) {
//     console.error("Error fetching patients:", error);
//   }
// };

// useEffect(() => {
//   fetchPatients();
// }, []);

// const handlePatientSelect = (patientName) => {
//   const patientDetails = patients.find(
//     (patient) => patient.name === patientName
//   );
//   setSelectedPatient(patientDetails);
// };

// if (!selectedPatient) return null;

//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const [patients, setPatients] = useState([]);
//   const [selectedPatient, setSelectedPatient] = useState(null);

//   const fetchPatients = async () => {
//     const username = "coalition";
//     const password = "skills-test";
//     const auth = btoa(`${username}:${password}`);

//     try {
//       const response = await fetch(
//         "https://fedskillstest.coalitiontechnologies.workers.dev",
//         {
//           method: "GET",
//           headers: {
//             Authorization: `Basic ${auth}`,
//           },
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Failed to fetch patients");
//       }

//       const data = await response.json();
//       setPatients(data);

//       // Set default selected patient or use URL param
//       const defaultPatient = searchParams.get("patient");
//       if (!defaultPatient) {
//         // if no patient in the URL, then set jessica taylor as default in the URL
//         const params = new URLSearchParams(searchParams.toString());
//         params.set("patient", "Jessica Taylor");
//         router.push(`?${params.toString()}`, undefined, { shallow: true });
//       }

//       console.log("Default patient:", defaultPatient);
//       const initialPatient =
//         data.find((p) => p.name === defaultPatient) || data[0];
//       setSelectedPatient(initialPatient);
//     } catch (error) {
//       console.error("Error fetching patients:", error);
//     }
//   };

//   useEffect(() => {
//     fetchPatients();
//   }, []);

//   const handlePatientSelect = (patientName) => {
//     const patientDetails = patients.find(
//       (patient) => patient.name === patientName
//     );
//     setSelectedPatient(patientDetails);

//     // Use URLSearchParams to update the query string
//     const params = new URLSearchParams(searchParams.toString());
//     params.set("patient", patientName);
//     router.push(`?${params.toString()}`, undefined, { shallow: true });
//   };

//   if (!selectedPatient) return null;

//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <div className="container mx-auto p-4">
//         <Navbar />
//         <main className="mt-8">
//           <div className="grid gap-8 grid-cols-1 md:grid-cols-12">
//             <div className="md:col-span-3">
//               <PatientList
//                 patients={patients}
//                 selectedPatient={selectedPatient}
//                 onPatientSelect={handlePatientSelect}
//               />
//             </div>
//             <div className="md:col-span-6">
//               <DiagnosisHistory
//                 diagnosis_history={selectedPatient.diagnosis_history}
//               />
//               <div className="my-8" />
//               <DiagnosticList
//                 diagnostic_list={selectedPatient.diagnostic_list}
//               />
//             </div>
//             <div className="md:col-span-3">
//               <PatientProfile patientInfo={selectedPatient} />
//               <div className="my-8" />
//               <LabResults lab_results={selectedPatient.lab_results} />
//             </div>
//           </div>
//         </main>
//       </div>
//     </Suspense>
//   );
// }

"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import DiagnosisHistory from "./components/DiagnosisHistory";
import DiagnosticList from "./components/DiagnosticList";
import LabResults from "./components/LabResults";
import Navbar from "./components/Navbar";
import PatientList from "./components/PatientList";
import PatientProfile from "./components/PatientProfile";

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);

  const fetchPatients = async () => {
    const username = "coalition";
    const password = "skills-test";
    const auth = btoa(`${username}:${password}`);

    try {
      const response = await fetch(
        "https://fedskillstest.coalitiontechnologies.workers.dev",
        {
          method: "GET",
          headers: {
            Authorization: `Basic ${auth}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch patients");
      }

      const data = await response.json();
      setPatients(data);

      const defaultPatientName = "Jessica Taylor";
      const queryPatient = searchParams.get("patient");

      // Find the patient based on query or default to Jessica Taylor or first patient
      const initialPatient =
        data.find((p) => p.name === queryPatient) ||
        data.find((p) => p.name === defaultPatientName) ||
        data[0];

      setSelectedPatient(initialPatient);

      // If no patient in the query, set the default one as query param
      if (!queryPatient) {
        const params = new URLSearchParams(searchParams.toString());
        params.set("patient", initialPatient.name);
        router.push(`?${params.toString()}`, undefined, { shallow: true });
      }
    } catch (error) {
      console.error("Error fetching patients:", error);
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  const handlePatientSelect = (patientName) => {
    const patientDetails = patients.find(
      (patient) => patient.name === patientName
    );
    setSelectedPatient(patientDetails);

    const params = new URLSearchParams(searchParams.toString());
    params.set("patient", patientName);
    router.push(`?${params.toString()}`, undefined, { shallow: true });
  };

  if (!selectedPatient) return null;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="container mx-auto p-4">
        <Navbar />
        <main className="mt-8">
          <div className="grid gap-8 grid-cols-1 md:grid-cols-12">
            <div className="md:col-span-3">
              <PatientList
                patients={patients}
                selectedPatient={selectedPatient}
                onPatientSelect={handlePatientSelect}
              />
            </div>
            <div className="md:col-span-6">
              <DiagnosisHistory
                diagnosis_history={selectedPatient.diagnosis_history}
              />
              <div className="my-8" />
              <DiagnosticList
                diagnostic_list={selectedPatient.diagnostic_list}
              />
            </div>
            <div className="md:col-span-3">
              <PatientProfile patientInfo={selectedPatient} />
              <div className="my-8" />
              <LabResults lab_results={selectedPatient.lab_results} />
            </div>
          </div>
        </main>
      </div>
    </Suspense>
  );
}
