"use client";

import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export default function KanbanPage() {
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
          brandText="Kanban"
          onMenuToggle={() => setSidebarOpen((prev) => !prev)}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
            marginBottom: 16,
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
              flex: 1,
              minWidth: 0,
              maxWidth: 420,
              boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
            }}
          >
            <i
              className="fa-solid fa-magnifying-glass"
              style={{ color: "#94a3b8", fontSize: 14, flexShrink: 0 }}
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
                minWidth: 0,
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
              padding: "12px 24px",
              fontSize: 14,
              fontWeight: 700,
              cursor: "pointer",
              boxShadow: "0 4px 14px rgba(79, 70, 229, 0.35)",
              whiteSpace: "nowrap",
              transition: "background 0.2s",
              flexShrink: 0,
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
            gap: 12,
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
                padding: 16,
                borderRadius: 12,
                border: "1px solid #e2e8f0",
                background: "#ffffff",
                boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
              }}
            >
              <h2 style={{ margin: 0, marginBottom: 8, fontSize: 16, fontWeight: 700 }}>
                {column.title}
              </h2>
              <p style={{ margin: 0, color: "#4b5563", fontSize: 14 }}>{column.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
