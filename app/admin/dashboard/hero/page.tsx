"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function HeroEditor() {
  const [hero, setHero] = useState({
    title: "",
    subtitle: "",
    description: "",
    button_text: "",
    button_link: "",
    image: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadHero();
  }, []);

  async function loadHero() {
    const { data } = await supabase
      .from("hero")
      .select("*")
      .limit(1)
      .single();

    if (data) {
      setHero(data);
    }
  }

  async function saveHero() {
    setLoading(true);

    await supabase
      .from("hero")
      .update({
        title: hero.title,
        subtitle: hero.subtitle,
        description: hero.description,
        button_text: hero.button_text,
        button_link: hero.button_link,
        image: hero.image,
      })
      .eq("id", 1);

    alert("Hero updated successfully!");

    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-black p-8 text-white">
      <h1 className="mb-8 text-4xl font-bold">
        Hero Editor
      </h1>

      <div className="mx-auto max-w-3xl space-y-4">

        <input
          className="w-full rounded-lg bg-white/10 p-3"
          placeholder="Title"
          value={hero.title}
          onChange={(e) =>
            setHero({ ...hero, title: e.target.value })
          }
        />

        <input
          className="w-full rounded-lg bg-white/10 p-3"
          placeholder="Subtitle"
          value={hero.subtitle}
          onChange={(e) =>
            setHero({ ...hero, subtitle: e.target.value })
          }
        />

        <textarea
          className="w-full rounded-lg bg-white/10 p-3"
          rows={5}
          placeholder="Description"
          value={hero.description}
          onChange={(e) =>
            setHero({ ...hero, description: e.target.value })
          }
        />

        <input
          className="w-full rounded-lg bg-white/10 p-3"
          placeholder="Button Text"
          value={hero.button_text}
          onChange={(e) =>
            setHero({ ...hero, button_text: e.target.value })
          }
        />

        <input
          className="w-full rounded-lg bg-white/10 p-3"
          placeholder="Button Link"
          value={hero.button_link}
          onChange={(e) =>
            setHero({ ...hero, button_link: e.target.value })
          }
        />

        <input
          className="w-full rounded-lg bg-white/10 p-3"
          placeholder="Image URL"
          value={hero.image}
          onChange={(e) =>
            setHero({ ...hero, image: e.target.value })
          }
        />

        <button
          onClick={saveHero}
          disabled={loading}
          className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-black"
        >
          {loading ? "Saving..." : "Save Hero"}
        </button>

      </div>
    </main>
  );
}