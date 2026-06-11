"use client";

import React from "react";

interface NavbarProps {
  brandText: string;
  onMenuToggle?: () => void;
}

export default function Navbar({ brandText, onMenuToggle }: NavbarProps) {
  return (
    <header className="flex flex-col gap-3 sm:flex-row sm:items-center justify-between mb-5 w-full">
      <div>
        <p className="text-xs text-slate-400 font-medium m-0">
          Pages / <span className="text-slate-600">{brandText}</span>
        </p>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1b254b] m-0 mt-0.5 tracking-tight">
          {brandText}
        </h1>
      </div>

      {/* Right: Search & Controls */}
      <div className="flex items-center gap-2.5 bg-white border border-slate-100 rounded-full px-3 py-2 shadow-sm w-full sm:w-auto justify-between sm:justify-end">
        {/* Search Input */}
        <div className="flex items-center gap-2 bg-[#f4f7fe] rounded-full px-3.5 py-1.5 flex-1 sm:flex-none sm:w-48 md:w-56 lg:w-64 min-w-0">
          <i className="fa-solid fa-magnifying-glass text-slate-400 text-xs shrink-0"></i>
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent border-none outline-none text-sm text-slate-700 w-full min-w-0"
          />
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          {onMenuToggle && (
            <button
              onClick={onMenuToggle}
              className="flex items-center justify-center lg:hidden bg-transparent border-none cursor-pointer text-slate-600 text-base w-8 h-8 rounded-full hover:bg-slate-50 transition-colors"
              aria-label="Toggle sidebar"
            >
              <i className="fa-solid fa-bars"></i>
            </button>
          )}

          {/* Moon Icon */}
          <button
            className="flex items-center justify-center bg-transparent border-none cursor-pointer text-slate-400 text-base w-8 h-8 rounded-full hover:bg-slate-50 transition-colors"
            aria-label="Toggle dark mode"
          >
            <i className="fa-solid fa-moon"></i>
          </button>

          {/* Avatar */}
          <div className="w-8 h-8 rounded-full bg-[#4f46e5] text-white text-xs font-bold flex items-center justify-center cursor-pointer shadow-sm hover:opacity-90 transition-opacity">
            AP
          </div>
        </div>
      </div>
    </header>
  );
}
