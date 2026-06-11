"use client";

import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import MyChart from "@/components/Mycharts/MyChart";
import ChartsCircle from "@/components/Mycharts/Charts-Circle";
import Navbar from "@/components/Navbar";

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <main style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <section
        style={{ flex: 1, padding: 24, backgroundColor: "#f4f7fe", minWidth: 0 }}
      >
        <Navbar
          brandText="Dashboard"
          onMenuToggle={() => setSidebarOpen((prev) => !prev)}
        />
        <div className="flex flex-col md:flex-row" style={{ gap: 16 }}>
          <div style={{ flex: 1, background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 12, padding: 24 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 18 }}>
              <i className="fa-solid fa-chart-line text-3xl text-sky-600"></i>
              <p className="text-lg font-semibold">Total Task</p>
            </div>
            <p className="text-3xl font-semibold">0</p>
          </div>
          <div style={{ flex: 1, background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 12, padding: 24 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 18 }}>
              <i className="fa-solid fa-check text-3xl text-sky-600"></i>
              <p className="text-lg font-semibold">Completed</p>
            </div>
            <p className="text-3xl font-semibold">0</p>
          </div>
          <div style={{ flex: 1, background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 12, padding: 24 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 18 }}>
              <i className="fa-solid fa-triangle-exclamation text-3xl text-sky-600"></i>
              <p className="text-lg font-semibold">Overdue</p>
            </div>
            <p className="text-3xl font-semibold">0</p>
          </div>
        </div>
        <div style={{ marginTop: 24, display: "flex", gap: 24, flexWrap: "wrap" }}>
          <MyChart />
          <ChartsCircle />
        </div>
      </section>
    </main>
  );
}
