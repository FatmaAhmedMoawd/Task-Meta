"use client";

import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "السبت", tasks: 5 },
  { name: "الأحد", tasks: 8 },
  { name: "الإثنين", tasks: 12 },
  { name: "الثلاثاء", tasks: 7 },
  { name: "الأربعاء", tasks: 10 },
];

export default function MyChart() {
  return (
    <div style={{ width: "100%", height: 300, background: "#fff", padding: "20px", borderRadius: "12px" }}>
      <h3 style={{ marginBottom: "15px", fontWeight: 600, color: "#333" }}>إنتاجية الأسبوع (المهام المخلصة)</h3>
      
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip /> 
          
          <Bar dataKey="tasks" fill="#4f46e5" radius={[4, 4, 0, 0]} /> 
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}