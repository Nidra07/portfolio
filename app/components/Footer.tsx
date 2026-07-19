"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Footer(): React.JSX.Element {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = document.getElementById("contact");
    if (!section) return;

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

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      id="contact"
      className={`footer-section py-12 px-6 border-t border-white/10 ${
        visible ? "footer-visible" : ""
      }`}
    >
      <div className="container mx-auto max-w-6xl">

        <div className="text-center mb-12">

          <h2
            className={`footer-title text-4xl lg:text-5xl font-bold text-white mb-6 ${
              visible ? "footer-title-visible" : ""
            }`}
          >
            Contact
          </h2>

          <p className="text-md text-white/80 max-w-2xl mx-auto mb-8">
            I&apos;m currently looking to join a cross-functional team that
            values improving people&apos;s lives through accessible design,
            or have a project in mind? Let&apos;s connect.
          </p>

          <a
            href="mailto:sonukr620377@gmail.com"
            className="text-md text-purple-400 hover:text-purple-300 transition-colors duration-300"
          >
            sonukr620377@gmail.com
          </a>

        </div>

        <div
          className={`footer-socials flex justify-center gap-6 mt-12 ${
            visible ? "footer-socials-visible" : ""
          }`}
        >

          <Link
            href="https://www.instagram.com/singhh.rudraa/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="footer-icon w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-purple-500/30"
          >
            <Image
              src="/assets/insta.webp"
              alt="Instagram"
              width={20}
              height={20}
              className="w-5 h-5"
            />
          </Link>

          <Link
            href="https://github.com/Nidra07"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="footer-icon w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-purple-500/30"
          >
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.562 21.8 24 17.302 24 12 24 5.373 18.627 0 12 0z"/>
            </svg>
          </Link>

          <Link
            href="https://www.linkedin.com/in/purushottam-kumar-b192a441b"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="footer-icon w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-purple-500/30"
          >
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/>
            </svg>
          </Link>

        </div>

        <div
          className={`footer-bottom text-center mt-12 pt-8 border-t border-white/10 ${
            visible ? "footer-bottom-visible" : ""
          }`}
        >
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Rudraaksh Singh. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}