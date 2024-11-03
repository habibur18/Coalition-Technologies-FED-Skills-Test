import DiagnosisHistory from "./components/DiagnosisHistory";
import DiagnosticList from "./components/DiagnosticList";
import LabResults from "./components/LabResults";
import Navbar from "./components/Navbar";
import PatientList from "./components/PatientList";
import PatientProfile from "./components/PatientProfile";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      {/* total 3 column layout */}
      {/* <main className="max-h-screen p:calc(100vh-64px)"> */}
      <main className="">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-3">
            <PatientList />
          </div>
          <div className="col-span-5">
            <div>
              <DiagnosisHistory />
              <DiagnosticList />
            </div>
          </div>
          <div className="col-span-3">
            <div>
              <PatientProfile />
              <LabResults />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
