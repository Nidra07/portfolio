"use client";

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">
        Projects Manager
      </h1>

      <button className="px-5 py-3 rounded-lg bg-violet-600 hover:bg-violet-700 text-white font-semibold">
        + Add Project
      </button>

      <div className="mt-8 rounded-xl border border-white/10 p-6">
        <p className="text-white/70">
          No projects added yet.
        </p>
      </div>
    </div>
  );
}