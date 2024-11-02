import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      {/* total 3 column layout */}
      <main>
        <div className="grid grid-cols-3 gap-4"></div>
      </main>
    </div>
  );
}
