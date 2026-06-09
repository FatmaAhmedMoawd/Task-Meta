import Sidebar from "../components/Sidebar";
import MyChart from "@/components/MyChart";

export default function Page() {
  return (
    <main style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <section style={{ flex: 1, padding: 24 }}>
        <h1 className="font-size:">Welcome Dashboard</h1>
      </section>
    </main>
  );
}
