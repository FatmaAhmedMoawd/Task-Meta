import Sidebar from "../components/Sidebar";
import MyChart from "@/components/Mycharts/MyChart";
import ChartsCircle from "@/components/Mycharts/Charts-Circle";
import Navbar from "@/components/Navbar";

export default function Page() {
  return (
    <main style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <section style={{ flex: 1, padding: 24, backgroundColor: "#f4f7fe" }}>
        <Navbar brandText="Main Dashboard" />
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
          <MyChart />
          <ChartsCircle />
        </div>
      </section>
    </main>
  );
}
