"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`fixed lg:relative w-72 bg-white border-r border-slate-100 h-screen p-6 flex flex-col justify-between transition-transform duration-300 z-30 ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex flex-col gap-10">
          {/* Logo & Brand Header */}
          <div className="flex items-center gap-3.5">
            <div className="flex items-center justify-center w-12 h-12 bg-[#4f46e5] rounded-2xl shadow-md shadow-indigo-100 flex-shrink-0">
              <i className="fa-solid fa-table-cells-large text-white text-xl"></i>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold text-[#1e1b4b]">TaskFlow</span>
            </div>
          </div>

          <nav>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/dashboard"
                  onClick={onClose}
                  className={`relative flex items-center gap-3.5 rounded-xl px-4 py-3 whitespace-nowrap overflow-hidden transition-all duration-200 ${
                    pathname === "/dashboard"
                      ? "bg-[#f3f4ff] text-[#1e1b4b] font-bold"
                      : "text-slate-400 hover:text-slate-600 hover:bg-slate-50 font-medium"
                  }`}
                >
                  <i className={`fa-solid fa-house text-xl ${pathname === "/dashboard" ? "text-[#4f46e5]" : "text-slate-400"}`}></i>
                  <span>Dashboard</span>
                  {pathname === "/dashboard" && (
                    <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-[#4f46e5] rounded-r-xl" />
                  )}
                </Link>
              </li>
              <li>
                <Link
                  href="/kanban"
                  onClick={onClose}
                  className={`relative flex items-center gap-3.5 rounded-xl px-4 py-3 whitespace-nowrap overflow-hidden transition-all duration-200 ${
                    pathname === "/kanban"
                      ? "bg-[#f3f4ff] text-[#1e1b4b] font-bold"
                      : "text-slate-400 hover:text-slate-600 hover:bg-slate-50 font-medium"
                  }`}
                >
                  <i className={`fa-solid fa-square-poll-vertical text-xl ${pathname === "/kanban" ? "text-[#4f46e5]" : "text-slate-400"}`}></i>
                  <span>Kanban</span>
                  {pathname === "/kanban" && (
                    <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-[#4f46e5] rounded-r-xl" />
                  )}
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="bg-[#f5f3ff] border border-purple-100 rounded-2xl p-5 shadow-sm">
          <p className="text-xs text-slate-500 font-medium leading-relaxed">
            Manage tasks, track progress, and view analytics — all in one place.
          </p>
        </div>
      </aside>

      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-white bg-opacity-80 backdrop-blur-sm lg:hidden z-20"
        />
      )}
    </>
  );
}
