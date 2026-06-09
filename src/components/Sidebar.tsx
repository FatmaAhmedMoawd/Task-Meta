"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 bg-white border-r h-screen p-4 pt-12">
      <nav>
        <ul className="space-y-3">
          <li>
            <Link href="/dashboard" className={`flex items-center gap-3 rounded px-3 py-3 whitespace-nowrap
               ${pathname === "/dashboard" ? "bg-sky-100" : "hover:bg-gray-100"}`}>
              <i className="fa-solid fa-house-chimney text-2xl"></i>
              <span className="font-bold">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link href="/kanban" className={`flex items-center gap-3 rounded px-3 py-3 whitespace-nowrap 
              ${pathname === "/kanban" ? "bg-sky-100" : "hover:bg-gray-100"}`}>
              <i className="fa-solid fa-chart-column text-2xl"></i>
              <span className="font-bold">Kanaban Dashboard</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
