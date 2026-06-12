'use client';

import React from 'react';
import Chart from 'react-apexcharts';

export default function WeeklyLineChart() {
  const series = [
    {
      name: "Tasks Created",
      data: [1, 1, 1, 1, 0, 0, 0] 
    }
  ];

  const options: any = {
    chart: {
      type: 'line',
    },

    colors: ['#6366f1'], 
    stroke: {
      curve: 'smooth', 
      width: 4
    },
    markers: {
      size: 5,
      colors: ['#6366f1'],
      strokeColors: '#fff',
      strokeWidth: 2,
      hover: { size: 7 }
    },
    xaxis: {
      categories: ['Jun 05', 'Jun 06', 'Jun 07', 'Jun 08', 'Jun 09', 'Jun 10', 'Jun 11'],
      labels: {
        style: {
          colors: '#94a3b8',
          fontSize: '12px'
        }
      }
    },
    yaxis: {
      min: 0,
      max: 4, 
      tickAmount: 4,
      labels: {
        style: {
          colors: '#94a3b8',
          fontSize: '12px'
        }
      }
    },
    tooltip: {
      theme: 'light',
      y: {
        formatter: function (val: any) {
          return "count : " + val; 
        }
      }
    },
    grid: {
      borderColor: '#f1f5f9',
      strokeDasharray: 4, 
    }
  };

  return (
    <div className="w-full bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-[#0f172a] tracking-tight">Tasks Created (Last 7 Days)</h3>
        <p className="text-sm text-[#94a3b8] mt-1">Daily count of newly created tasks</p>
      </div>

      <Chart 
        options={options} 
        series={series} 
        type="line" 
        height={320} 
        width="100%"
      />
    </div>
  );
}