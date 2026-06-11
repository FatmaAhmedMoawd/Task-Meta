"use client";

import React, { useState, useEffect } from "react";
import { ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

// #region Sample data
const data = [
  {
    name: 'Jun ',
    uv: 590,
    pv: 800,
    amt: 1400,
  },
  {
    name: 'Jun 6',
    uv: 868,
    pv: 967,
    amt: 1506,
  },
  {
    name: 'Jun 7',
    uv: 1397,
    pv: 1098,
    amt: 989,
  },
  {
    name: 'Jun 8',
    uv: 1480,
    pv: 1200,
    amt: 1228,
  },
  {
    name: 'Jun 9',
    uv: 1520,
    pv: 1108,
    amt: 1100,
  },
  {
    name: 'Jun 10',
    uv: 1400,
    pv: 680,
    amt: 1700,
  },
  {
    name: 'Jun 11',
    uv: 1400,
    pv: 680,
    amt: 1700,
  },
];
// #endregion

export default function MyChart() {
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

    if (width < 1024) {
      return {
        containerWidth: "100%",
        containerHeight: 380,
        containerPadding: "20px",
        containerRadius: "12px",
        h1FontSize: "1.5rem",
        h3FontSize: "1.1rem",
        marginBottom: "15px",
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
   Tasks Created (Last 7 Days)
      </h1>
      <h3
        style={{
          marginBottom: responsive.marginBottom,
          fontWeight: 400,
          color: "#666",
          fontSize: responsive.h3FontSize,
        }}
      >
        Daily count of newly created tasks
      </h3>
      <div style={{ flex: 1, minHeight: 0 }}>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={data}
            margin={{
              top: 20,
              right: 5,
              bottom: 5,
              left: 5,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" label={{ value: 'Pages', position: 'insideBottomRight', offset: -5 }} scale="band" />
            <YAxis label={{ value: 'Index', angle: -90, position: 'insideLeft', offset: 10 }} width={60} />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" opacity={0.6} />
            <Bar dataKey="pv" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="uv" stroke="#ff7300" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}