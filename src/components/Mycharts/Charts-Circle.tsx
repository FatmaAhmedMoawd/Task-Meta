"use client";

import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: 'High', value: 400 },
  { name: 'Medium', value: 300 },
  { name: 'Low', value: 200 },
];

const COLORS = ["#4f46e5", "#818cf8", "#cbd5e1"];

export default function ChartsCircle() {
  const [windowSize, setWindowSize] = useState({ width: 1024 });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getResponsiveValues = () => {
    const width = windowSize.width;

    if (width < 640) {
      return {
        containerWidth: "100%",
        containerHeight: 240,
        containerPadding: "12px",
        containerRadius: "10px",
        h1FontSize: "1.1rem",
        h3FontSize: "0.8rem",
        marginBottom: "8px",
      };
    } else if (width < 768) {
      return {
        containerWidth: "100%",
        containerHeight: 320,
        containerPadding: "16px",
        containerRadius: "11px",
        h1FontSize: "1.3rem",
        h3FontSize: "0.95rem",
        marginBottom: "12px",
      };
    } else if (width < 1024) {
      return {
        containerWidth: "100%",
        containerHeight: 360,
        containerPadding: "18px",
        containerRadius: "11px",
        h1FontSize: "1.4rem",
        h3FontSize: "1.05rem",
        marginBottom: "14px",
      };
    } else {
      return {
        containerWidth: "calc(50% - 12px)",
        containerHeight: 380,
        containerPadding: "20px",
        containerRadius: "12px",
        h1FontSize: "1.5rem",
        h3FontSize: "1.1rem",
        marginBottom: "15px",
      };
    }
  };

  const responsive = getResponsiveValues();

  return (
    <div
      style={{
        width: responsive.containerWidth,
        height: responsive.containerHeight,
        background: "#fff",
        padding: responsive.containerPadding,
        borderRadius: responsive.containerRadius,
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1
        style={{
          marginBottom: 4,
          fontWeight: 600,
          color: "#333",
          fontSize: responsive.h1FontSize,
        }}
      >
        Distribution Analysis
      </h1>
      <h3
        style={{
          marginBottom: responsive.marginBottom,
          fontWeight: 400,
          color: "#666",
          fontSize: responsive.h3FontSize,
        }}
      >
        Straight Angle Pie Chart Breakdown
      </h3>
      <div style={{ flex: 1, minHeight: 0, width: "100%" }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart
            margin={{
              top: 10,
              right: 10,
              bottom: 10,
              left: 10,
            }}
          >
            <Pie
              dataKey="value"
              startAngle={180}
              endAngle={0}
              data={data}
              cx="50%"
              cy="90%"
              outerRadius="85%"
              fill="#8884d8"
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}