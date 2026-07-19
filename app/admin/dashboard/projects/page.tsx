"use client";

import { useState } from "react";

export default function ProjectsPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [github, setGithub] = useState("");
  const [live, setLive] = useState("");
  const [technologies, setTechnologies] = useState("");

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-8">Projects Manager</h1>

      <div className="space-y-4 max-w-2xl">

        <input
          className="w-full rounded-lg bg-zinc-900 p-3"
          placeholder="Project Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="w-full rounded-lg bg-zinc-900 p-3"
          placeholder="Description"
          rows={5}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          className="w-full rounded-lg bg-zinc-900 p-3"
          placeholder="GitHub URL"
          value={github}
          onChange={(e) => setGithub(e.target.value)}
        />

        <input
          className="w-full rounded-lg bg-zinc-900 p-3"
          placeholder="Live Demo URL"
          value={live}
          onChange={(e) => setLive(e.target.value)}
        />

        <input
          className="w-full rounded-lg bg-zinc-900 p-3"
          placeholder="Technologies (React, Next.js...)"
          value={technologies}
          onChange={(e) => setTechnologies(e.target.value)}
        />

        <button
          className="rounded-lg bg-cyan-500 px-6 py-3 font-bold text-black"
        >
          Save Project
        </button>

      </div>
    </main>
  );
}