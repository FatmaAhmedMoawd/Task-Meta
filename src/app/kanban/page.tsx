"use client";

import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export default function KanbanPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <main style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <section
        style={{ flex: 1, padding: 24, backgroundColor: "#f4f7fe", minWidth: 0 }}
      >
        <Navbar
          brandText="Kanban"
          onMenuToggle={() => setSidebarOpen((prev) => !prev)}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            marginBottom: 24,
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              background: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: 999,
              padding: "10px 20px",
              width: 420,
              maxWidth: "100%",
              boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
            }}
          >
            <i
              className="fa-solid fa-magnifying-glass"
              style={{ color: "#94a3b8", fontSize: 14 }}
            ></i>
            <input
              type="text"
              placeholder="Filter by title or assignee..."
              style={{
                background: "transparent",
                border: "none",
                outline: "none",
                fontSize: 14,
                color: "#1e293b",
                width: "100%",
              }}
            />
          </div>

          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              background: "#4f46e5",
              color: "#ffffff",
              border: "none",
              borderRadius: 999,
              padding: "12px 28px",
              fontSize: 14,
              fontWeight: 700,
              cursor: "pointer",
              boxShadow: "0 4px 14px rgba(79, 70, 229, 0.35)",
              whiteSpace: "nowrap",
              transition: "background 0.2s",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.background = "#4338ca")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.background = "#4f46e5")
            }
          >
            + Add Task
          </button>
        </div>

        <div
          className="flex flex-col md:flex-row"
          style={{
            gap: 16,
          }}
        >
          {[
            { title: "To Do", description: "Tasks to start." },
            { title: "In Progress", description: "To In Progress" },
            { title: "Done", description: "Completed tasks Done." },
          ].map((column) => (
            <div
              key={column.title}
              style={{
                flex: 1,
                minWidth: 0,
                padding: 20,
                borderRadius: 12,
                border: "1px solid #e2e8f0",
                background: "#ffffff",
                boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
              }}
            >
              <h2 style={{ margin: 0, marginBottom: 12, fontSize: 18, fontWeight: 700 }}>
                {column.title}
              </h2>
              <p style={{ margin: 0, color: "#4b5563" }}>{column.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
