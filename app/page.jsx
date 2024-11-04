import DiagnosisHistory from "./components/DiagnosisHistory";
import DiagnosticList from "./components/DiagnosticList";
import LabResults from "./components/LabResults";
import Navbar from "./components/Navbar";
import PatientList from "./components/PatientList";
import PatientProfile from "./components/PatientProfile";

export default function Home() {
  return (
    <div className=" p-4">
      <Navbar />
      <main className="mt-8">
        <div className="grid gap-8 w-full grid-cols-1  md:grid-cols-6 lg:grid-cols-12">
          {/* patient List */}
          <div className="order-1 md:col-span-3 lg:order-1 lg:col-span-3">
            <PatientList />
          </div>

          {/* Diagnosis history */}
          <div className="order-3 md:col-span-6 lg:order-2 lg:col-span-6">
            <div className="w-3/4 lg:w-full">
              <DiagnosisHistory />
            </div>
            <div className="mb-8" />
            <DiagnosticList />
          </div>

          {/* profile Sectionp */}
          <div className="order-2 md:col-span-3 lg:order-3 lg:col-span-3">
            <PatientProfile />
            <div className="mb-8" />
            <LabResults />
          </div>
        </div>
      </main>
    </div>
  );
}
