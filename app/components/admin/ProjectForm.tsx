"use client";

interface ProjectFormProps {
  title: string;
  setTitle: (value: string) => void;
  description: string;
  setDescription: (value: string) => void;
  github: string;
  setGithub: (value: string) => void;
  live: string;
  setLive: (value: string) => void;
  technologies: string;
  setTechnologies: (value: string) => void;
  image: string;
  setImage: (value: string) => void;
  featured: boolean;
  setFeatured: (value: boolean) => void;
  onSubmit: () => void;
  buttonText: string;
}

export default function ProjectForm({
  title,
  setTitle,
  description,
  setDescription,
  github,
  setGithub,
  live,
  setLive,
  technologies,
  setTechnologies,
  image,
  setImage,
  featured,
  setFeatured,
  onSubmit,
  buttonText,
}: ProjectFormProps) {
  return (
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
        placeholder="Technologies"
        value={technologies}
        onChange={(e) => setTechnologies(e.target.value)}
      />

      <input
        className="w-full rounded-lg bg-zinc-900 p-3"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <label className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={featured}
          onChange={(e) => setFeatured(e.target.checked)}
        />
        Featured Project
      </label>

      <button
        onClick={onSubmit}
        className="rounded-lg bg-cyan-500 px-6 py-3 font-bold text-black"
      >
        {buttonText}
      </button>
    </div>
  );
}