"use client";

import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import MyChart from "@/components/Mycharts/MyChart";
import ChartsCircle from "@/components/Mycharts/Charts-Circle";
import Navbar from "@/components/Navbar";

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <main style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <section
        style={{
          flex: 1,
          backgroundColor: "#f4f7fe",
          minWidth: 0,
          overflowY: "auto",
          overflowX: "hidden",
          padding: "24px",
        }}
      >
        <Navbar
          brandText="Dashboard"
          onMenuToggle={() => setSidebarOpen((prev) => !prev)}
        />

        {/* Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full">
          {/* Card 1: Total Task */}
          <div className="bg-[#f8fafc] border border-slate-200/60 rounded-2xl p-5 flex flex-col justify-between min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <i className="fa-solid fa-chart-line text-lg md:text-2xl text-sky-600 shrink-0"></i>
              <p className="m-0 text-xs md:text-sm font-semibold text-slate-600 truncate">Total Task</p>
            </div>
            <p className="m-0 text-xl md:text-2xl font-bold text-slate-800">0</p>
          </div>

          {/* Card 2: Completed */}
          <div className="bg-[#f8fafc] border border-slate-200/60 rounded-2xl p-5 flex flex-col justify-between min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <i className="fa-solid fa-check text-lg md:text-2xl text-emerald-600 shrink-0"></i>
              <p className="m-0 text-xs md:text-sm font-semibold text-slate-600 truncate">Completed</p>
            </div>
            <p className="m-0 text-xl md:text-2xl font-bold text-slate-800">0</p>
          </div>

          {/* Card 3: Overdue */}
          <div className="bg-[#f8fafc] border border-slate-200/60 rounded-2xl p-5 flex flex-col justify-between min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <i className="fa-solid fa-triangle-exclamation text-lg md:text-2xl text-rose-500 shrink-0"></i>
              <p className="m-0 text-xs md:text-sm font-semibold text-slate-600 truncate">Overdue</p>
            </div>
            <p className="m-0 text-xl md:text-2xl font-bold text-slate-800">0</p>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 w-full">
          <MyChart />
          <ChartsCircle />
        </div>
      </section>
    </main>
  );
}
