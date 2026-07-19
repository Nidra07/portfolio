"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface ExperienceCard {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const experienceCards: ExperienceCard[] = [
  {
    id: 1,
    title: "OGX Studio- Web Developer",
    description: "OGX Studio automates all of your company's HR processes such as Recruitment, Onboarding, Payroll, Time & Attendance, Leaves & PTO, Performance, and much more.",
    icon: "/cards/card-1.png",
  },
  {
    id: 2,
    title: "OGX Studio Kiosk - Time Clock Kiosk",
    description: "OGX Studio Kiosk is a time clock kiosk that allows you to clock in and out of your work. It is a simple and easy to use app that allows you to clock in and out of your work.",
    icon: "/cards/card-2.png",
  },
  {
    id: 3,
    title: "Somezing - AI-Powered Agents",
    description: "Somezing is a AI-Powered Agents to Automate Your Workflows. It is a simple and easy to use app that allows you to automate your workflows.",
    icon: "/cards/card-3.png",
  },
  {
    id: 4,
    title: "FileIT - File Sharing App",
    description: "FileIT is a file sharing app that allows you to share files with your friends and family. It is a simple and easy to use app that allows you to share files with your friends and family.",
    icon: "/cards/card-4.png",
  },
];

export default function Experience(): React.JSX.Element {
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

  const section = document.getElementById("experience");

  if (section) observer.observe(section);

  return () => observer.disconnect();
}, []);
  return (
    <section
  id="experience"
  className={`experience-section py-20 px-6 ${
    visible ? "experience-visible" : ""
  }`}
>
      <div className="container mx-auto max-w-6xl">
        <h2
  className={`experience-title text-4xl lg:text-5xl font-bold text-white mb-12 text-center ${
    visible ? "experience-title-visible" : ""
  }`}
>
          Work Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experienceCards.map((card) => (
            <div
              key={card.id}
              className={`experience-card bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950 backdrop-blur-sm rounded-xl p-6 border-t-3 border-purple-700 flex items-center gap-4 ${
  visible ? "experience-card-visible" : ""
}`}
style={{
  transitionDelay: `${card.id * 180}ms`,
}}
              <div className="mb-4 ">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </div>
              <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {card.title}
              </h3>
              <p className="text-white/70 text-sm mb-4">
                {card.description}
              </p>
              <Link
                href="https://www.instagram
com/singhh.rudraa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 font-medium text-sm transition-colors inline-block"
              >
                LEARN MORE →
              </Link>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

