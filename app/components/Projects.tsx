"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link?: string;
}

const featuredProjects: Project[] = [
  {
    id: 1,
    title: "OGX Studio Web – Futuristic AI Website Landing Design",
    description:
      "A sleek, dark-themed AI-powered landing page concept built in Figma. Designed for modern startups and futuristic digital products, it features glowing neon visuals, immersive UI, and a dynamic tone. The design encapsulates the cutting-edge possibilities of AI and tech, offering a glimpse into the future of online experiences for tech-forward companies.",
    link: "https://www.instagram.com/singhh.rudraa",
    image: "/projects/project-1.png",
  },
  {
    id: 2,
    title: "Apple Vision Pro – HR Software Design",
    description:
      "A futuristic HR software concept designed for Apple Vision Pro, built in Figma to reimagine attendance, leave tracking, and employee experience—all in one immersive interface.",
    link: "https://www.instagram.com/singhh.rudraa",
    image: "/projects/project-2.png",
  },
];

export default function Projects(): React.JSX.Element {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold: 0.2,
      }
    );

    const section = document.getElementById("lab");

    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="lab"
      className={`projects-section py-20 px-6 ${
        visible ? "projects-visible" : ""
      }`}
    >
      <div className="container mx-auto max-w-7xl">

        <h2
          className={`projects-title text-5xl font-bold text-center text-white mb-20 ${
            visible ? "projects-title-visible" : ""
          }`}
        >
          Featured Projects
        </h2>

        {featuredProjects.map((project, index) => {
          const isEven = index % 2 === 1;

          return (
            <div
              key={project.id}
              className={`projects-item mb-20 last:mb-0 ${
                visible ? "projects-item-visible" : ""
              }`}
              style={{
                transitionDelay: `${index * 250}ms`,
              }}
            >
              <div
                className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  isEven ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Text Content */}

                <div className={`${isEven ? "lg:col-start-2" : ""}`}>

                  <p className="text-purple-400 text-lg lg:text-xl mb-2 font-medium">
                    Featured Project
                  </p>

                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                    {project.title}
                  </h3>

                  <div className="project-description-card relative z-10 mb-6">
                    <div
                      className={`bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/10 shadow-lg ${
                        isEven
                          ? "lg:ml-[-20%]"
                          : "lg:w-[calc(100%+20%)]"
                      }`}
                    >
                      <p className="text-white/90 text-base lg:text-lg leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {project.link && (
                    <div className="flex gap-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link text-white hover:text-purple-400 transition-colors duration-200"
                        aria-label="Visit project website"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-6 h-6"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <line x1="2" y1="12" x2="22" y2="12" />
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
                {/* Image Content */}
                <div
                  className={`${
                    isEven ? "lg:col-start-1 lg:row-start-1" : ""
                  }`}
                >
                  <div className="project-image-card relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-950 p-2 lg:p-3 shadow-2xl">

                    <div className="relative w-full h-full rounded-lg overflow-hidden">

                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover project-image"
                      />

                    </div>

                  </div>
                </div>

              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
}