"use client";

import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

const formatDate = (dateString?: string) => {
  if (!dateString) return "";
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch (e) {
    return dateString;
  }
};

const isOverdue = (dateString?: string) => {
  if (!dateString) return false;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const dueDate = new Date(dateString);
  dueDate.setHours(0, 0, 0, 0);
  return dueDate < today;
};

interface Task {
  id: string;
  title: string;
  description: string;
  status: "To Do" | "In Progress" | "Done";
  dueDate?: string;
}

export default function KanbanPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Design Landing Page",
      description: "Create high-fidelity mockups for the new homepage design.",
      status: "To Do",
      dueDate: "2026-06-15",
    },
    {
      id: "2",
      title: "Implement Auth Flow",
      description: "Set up login and signup pages using NextAuth.",
      status: "In Progress",
      dueDate: "2026-06-20",
    },
    {
      id: "3",
      title: "Fix Navigation Bar",
      description: "Correct spacing issues in the navigation links on mobile devices.",
      status: "Done",
      dueDate: "2026-06-10",
    },
  ]);

  const handleSubmitTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const status = formData.get("status") as Task["status"];
    const dueDate = formData.get("dueDate") as string;

    if (!title.trim()) return;

    const newTask: Task = {
      id: Date.now().toString(),
      title,
      description,
      status,
      dueDate: dueDate || undefined,
    };

    setTasks((prev) => [...prev, newTask]);
    setIsDialogOpen(false);
  };

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

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
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
            </DialogTrigger>
            
            <DialogContent className="sm:max-w-md bg-white border border-slate-200 rounded-2xl shadow-xl p-6">
              <DialogHeader className="mb-4">
                <DialogTitle className="text-xl font-bold text-slate-800">Add New Task</DialogTitle>
                <DialogDescription className="text-slate-500">
                  Create a new task for your Kanban board. Fill in the details below.
                </DialogDescription>
              </DialogHeader>
              
              <form onSubmit={handleSubmitTask} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="task-title" className="text-xs font-semibold text-slate-600">
                    Task Title
                  </label>
                  <input
                    id="task-title"
                    name="title"
                    type="text"
                    required
                    placeholder="Enter task title..."
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm outline-hidden focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 bg-white text-slate-800"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="task-desc" className="text-xs font-semibold text-slate-600">
                    Description
                  </label>
                  <textarea
                    id="task-desc"
                    name="description"
                    placeholder="Enter task description..."
                    rows={3}
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm outline-hidden focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 resize-none bg-white text-slate-800"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="task-status" className="text-xs font-semibold text-slate-600">
                    Status
                  </label>
                  <select
                    id="task-status"
                    name="status"
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm outline-hidden focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 bg-white text-slate-800"
                  >
                    <option value="To Do">To Do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Done">Done</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="task-due-date" className="text-xs font-semibold text-slate-600">
                    Due Date
                  </label>
                  <input
                    id="task-due-date"
                    name="dueDate"
                    type="date"
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm outline-hidden focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 bg-white text-slate-800"
                  />
                </div>
                
                <DialogFooter className="mt-4 flex gap-2 justify-end">
                  <DialogClose asChild>
                    <button
                      type="button"
                      className="px-4 py-2 text-sm font-semibold text-slate-500 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
                    >
                      Cancel
                    </button>
                  </DialogClose>
                  <button
                    type="submit"
                    className="rounded-xl bg-[#4f46e5] px-4 py-2 text-sm font-semibold text-white hover:bg-[#4338ca] transition-colors cursor-pointer"
                  >
                    Save Task
                  </button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
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

              {/* Tasks List */}
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 16 }}>
                {tasks
                  .filter((task) => task.status === column.title)
                  .map((task) => (
                    <div
                      key={task.id}
                      style={{
                        padding: 14,
                        borderRadius: 10,
                        border: "1px solid #f1f5f9",
                        background: "#f8fafc",
                        boxShadow: "0 1px 3px rgba(0,0,0,0.02)",
                      }}
                    >
                      <h3 style={{ margin: 0, fontSize: 14, fontWeight: 600, color: "#1e293b" }}>
                        {task.title}
                      </h3>
                      {task.description && (
                        <p style={{ margin: 0, marginTop: 4, fontSize: 12, color: "#64748b" }}>
                          {task.description}
                        </p>
                      )}
                      {task.dueDate && (
                        <div
                          className={`mt-3 flex items-center gap-1.5 text-[11px] font-semibold px-2 py-0.5 rounded-md w-fit border ${
                            isOverdue(task.dueDate) && task.status !== "Done"
                              ? "bg-rose-50 text-rose-600 border-rose-100"
                              : task.status === "Done"
                              ? "bg-emerald-50 text-emerald-600 border-emerald-100"
                              : "bg-slate-50 text-slate-600 border-slate-100"
                          }`}
                        >
                          <i className="fa-regular fa-calendar text-[12px]"></i>
                          <span>{formatDate(task.dueDate)}</span>
                        </div>
                      )}
                    </div>
                  ))}
                {tasks.filter((task) => task.status === column.title).length === 0 && (
                  <div
                    style={{
                      padding: "24px 16px",
                      borderRadius: 10,
                      border: "1px dashed #cbd5e1",
                      color: "#94a3b8",
                      fontSize: 12,
                      textAlign: "center",
                    }}
                  >
                    No tasks yet
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}