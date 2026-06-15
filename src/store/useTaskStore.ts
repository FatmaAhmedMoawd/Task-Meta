import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Task {
  id: string;
  title: string;
  description: string;
  status: "To Do" | "In Progress" | "Done";
  dueDate?: string;
}

interface TaskState {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
  addTask: (task: Task) => void;
}

export const useTaskStore = create<TaskState>()(
  persist(
    (set) => ({
      tasks: [
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
      ],
      setTasks: (newTasks) => set({ tasks: newTasks }),
      addTask: (newTask) => set((state) => ({ tasks: [...state.tasks, newTask] })),
    }),
    {
      name: "kanban-tasks-storage",
      // 👇 السطرين دول هما الحل السحري لمشاكل Next.js
      skipHydration: true, 
    }
  )
);