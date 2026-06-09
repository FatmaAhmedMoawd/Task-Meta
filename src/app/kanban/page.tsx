import Sidebar from "@/components/Sidebar";

export default function KanbanPage() {
  return (
    <main style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <section style={{ flex: 1, padding: 24 }}>
        <h1 className="text-5xl font-bold " style={{ marginBottom: 24 }}>
         Kanban
        </h1>
        <div
          style={{
            display: "flex",
            gap: 16,
            // alignItems: "flex-start",
            // justifyContent: "space-between",
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
                padding: 20,
                borderRadius: 12,
                border: "1px solid #e2e8f0",
                background: "#ffffff",
                boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
              }}
            >
              <h2 style={{ margin: 0, marginBottom: 12, fontSize: 18, fontWeight: 700 }}>
                {column.title}
              </h2>
              <p style={{ margin: 0, color: "#4b5563" }}>{column.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
