"use client";

import React from "react";

interface NavbarProps {
  brandText: string;
  onMenuToggle?: () => void;
}

export default function Navbar({ brandText, onMenuToggle }: NavbarProps) {
  return (
    <header
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
        marginBottom: 24,
        flexWrap: "wrap",
        width: "100%",
      }}
    >
      <div>
        <p style={{ fontSize: 13, color: "#94a3b8", fontWeight: 500, margin: 0 }}>
          Pages /{" "}
          <span style={{ color: "#475569" }}>{brandText}</span>
        </p>
        <h1
          style={{
            fontSize: 42,
            fontWeight: 800,
            color: "#1b254b",
            margin: 0,
            marginTop: 4,
            letterSpacing: "-1px",
          }}
        >
          {brandText}
        </h1>
      </div>

      {/* Right: Search  */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          background: "#ffffff",
          border: "1px solid #e2e8f0",
          borderRadius: 999,
          padding: "10px 14px",
          boxShadow: "14px 17px 40px 4px rgba(112, 144, 176, 0.08)",
          flexShrink: 0,
        }}
      >
        {/* Search Input */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            background: "#f4f7fe",
            borderRadius: 999,
            padding: "8px 16px",
            width: 220,
          }}
        >
          <i
            className="fa-solid fa-magnifying-glass"
            style={{ color: "#94a3b8", fontSize: 13 }}
          ></i>
          <input
            type="text"
            placeholder="Search..."
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

        {onMenuToggle && (
          <button
            onClick={onMenuToggle}
            className="flex items-center justify-center lg:hidden"
            aria-label="Toggle sidebar"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#475569",
              fontSize: 16,
              width: 32,
              height: 32,
              borderRadius: "50%",
              padding: 0,
            }}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        )}

        {/* Moon Icon */}
        <button
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#94a3b8",
            fontSize: 16,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 32,
            height: 32,
            borderRadius: "50%",
          }}
        >
          <i className="fa-solid fa-moon"></i>
        </button>

        {/* Avatar */}
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            background: "#4f46e5",
            color: "#ffffff",
            fontSize: 12,
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(79, 70, 229, 0.3)",
          }}
        >
          AP
        </div>
      </div>
    </header>
  );
}
