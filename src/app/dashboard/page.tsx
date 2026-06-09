import Sidebar from "@/components/Sidebar";
import MyChart from "@/components/Mycharts/MyChart";

export default function DashboardPage() {
  return (
    <main style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <section style={{ flex: 1, padding: 24 }}>
        <p className="text-sm text-slate-500 mb-2">Pages / Dashboard</p>
        <h1 className="text-4xl font-bold mb-6">Dashboard</h1>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 240px", background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 12, padding: 24 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 18 }}>
              <i className="fa-solid fa-chart-line text-3xl text-sky-600"></i>
              <p className="text-lg font-semibold">Total Task</p>
            </div>
            <p className="text-3xl font-semibold">0</p>
          </div>
          <div style={{ flex: "1 1 240px", background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 12, padding: 24 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 18 }}>
              <i className="fa-solid fa-check text-3xl text-sky-600"></i>
              <p className="text-lg font-semibold">Completed</p>
            </div>
            <p className="text-3xl font-semibold">0</p>
          </div>
          <div style={{ flex: "1 1 240px", background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 12, padding: 24 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 18 }}>
              <i className="fa-solid fa-triangle-exclamation text-3xl text-sky-600"></i>
              <p className="text-lg font-semibold">Overdue</p>
            </div>
            <p className="text-3xl font-semibold">0</p>
          </div>
        </div>
        <div style={{ marginTop: 24 }}>
          <MyChart />
        </div>
      </section>
    </main>
  );
}
