"use client";

import { useEffect, useState } from "react";
import ProjectForm from "@/app/components/admin/ProjectForm";
import { supabase } from "@/lib/supabase";

export default function ProjectsPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [github, setGithub] = useState("");
  const [live, setLive] = useState("");
  const [technologies, setTechnologies] = useState("");

  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    loadProjects();
  }, []);

  async function loadProjects() {
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setProjects(data);
    }
  }

  async function saveProject() {
    const { error } = await supabase.from("projects").insert({
      title,
      description,
      github,
      live,
      technologies,
    });

    if (error) {
      alert(error.message);
      return;
    }

    alert("Project saved successfully!");

    setTitle("");
    setDescription("");
    setGithub("");
    setLive("");
    setTechnologies("");

    await loadProjects();
  }

  async function deleteProject(id: number) {
    const ok = confirm("Delete this project?");

    if (!ok) return;

    const { error } = await supabase
      .from("projects")
      .delete()
      .eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    await loadProjects();
  }

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="mb-8 text-3xl font-bold">
        Projects Manager
      </h1>

      <div className="max-w-2xl space-y-4">
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
          placeholder="Technologies (React, Next.js, Tailwind...)"
          value={technologies}
          onChange={(e) => setTechnologies(e.target.value)}
        />

        <button
          onClick={saveProject}
          className="rounded-lg bg-cyan-500 px-6 py-3 font-bold text-black"
        >
          Save Project
        </button>
      </div>

      <div className="mt-12 max-w-4xl space-y-4">
        <h2 className="text-2xl font-bold">
          Saved Projects
        </h2>

        {projects.length === 0 ? (
          <p className="text-gray-400">
            No projects found.
          </p>
        ) : (
          projects.map((project) => (
            <div
              key={project.id}
              className="rounded-xl border border-white/10 bg-zinc-900 p-5"
            >
              <h3 className="text-xl font-bold">
                {project.title}
              </h3>

              <p className="mt-2 text-gray-300">
                {project.description}
              </p>

              <p className="mt-3 text-cyan-400">
                {project.technologies}
              </p>

              <div className="mt-4 flex gap-3">
                <button className="rounded bg-yellow-500 px-4 py-2 font-semibold text-black">
                  Edit
                </button>

                <button
                  onClick={() => deleteProject(project.id)}
                  className="rounded bg-red-500 px-4 py-2 font-semibold text-white"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </main>
  );
}