'use client';

import React from 'react';
import Chart from 'react-apexcharts';

export default function PriorityDonut() {
  // 1. البيانات ثابتة (High, Medium, Low)
  const series = [35, 45, 20];

  // 2. الإعدادات بنفس الألوان البنفسجية المتناسقة مع الصورة
  const options = {
    chart: { type: 'donut' },
    labels: ['High', 'Medium', 'Low'],
    
    // الألوان: البنفسجي الأساسي للصورة، ثم درجة أفتح، ثم درجة هادئة جداً
    colors: ['#6366f1', '#a5b4fc', '#e0e7ff'], 
    
    legend: { position: 'bottom' },
    dataLabels: { enabled: false }, 
    plotOptions: {
      pie: {
        donut: { size: '70%' }
      }
    }
  };

  return (
    <div className="w-full bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-[#0f172a] tracking-tight">Tasks by Priority</h3>
        <p className="text-sm text-[#94a3b8] mt-1">Distribution of tasks by urgency level</p>
      </div>
      <Chart 
        options={options} 
        series={series} 
        type="donut" 
        height={320} 
      />
    </div>
  );
}