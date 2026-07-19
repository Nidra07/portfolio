"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function About(): React.JSX.Element {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold: 0.25,
      }
    );

    const section = document.getElementById("about");

    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className={`about-section py-20 px-6 ${
        visible ? "about-visible" : ""
      }`}
    >
      <div className="container mx-auto max-w-6xl">

        <div
          className={`text-center mb-16 about-content ${
            visible ? "about-content-visible" : ""
          }`}
        >
          <h2 className="text-5xl font-bold text-white mb-8">
            About Me
          </h2>

          <p className="text-2xl leading-relaxed max-w-4xl mx-auto text-white/90">
            I&apos;m currently looking to join a{" "}
            <span className="text-purple-400">
              cross-functional team
            </span>

            <br />

            <span className="text-base text-white/70">
              that values improving people&apos;s lives through
              accessible design and modern web technologies.
            </span>
          </p>
        </div>

        <div className="relative flex justify-center">

          <div className="about-glow" />

          <Image
            src="/assets/illustration.png"
            alt="Skills Illustration"
            width={800}
            height={800}
            priority
            className={`object-cover mx-auto about-image ${
              visible ? "about-image-visible" : ""
            }`}
            style={{
              width: "auto",
              height: "auto",
            }}
          />

        </div>

      </div>
    </section>
  );
}