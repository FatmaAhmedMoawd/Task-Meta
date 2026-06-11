"use client";

import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import MyChart from "@/components/Mycharts/MyChart";
import ChartsCircle from "@/components/Mycharts/Charts-Circle";
import Navbar from "@/components/Navbar";

export default function Page() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <main style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <section style={{ flex: 1, padding: 24, backgroundColor: "#f4f7fe" }}>
        <Navbar brandText="Main Dashboard" onMenuToggle={() => setSidebarOpen((prev) => !prev)} />
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
          <MyChart />
          <ChartsCircle />
        </div>
      </section>
    </main>
  );
}
