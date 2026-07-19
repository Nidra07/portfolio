import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import MouseGlow from "./components/MouseGlow";
import ScrollReveal from "./components/ScrollReveal";

import "./globals.css";
import ClientLayout from "./components/ClientLayout";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rudraaksh Singh - Full Stack Developer",
  description:
    "I'm a passionate Full Stack Developer specializing in React, Next.js, TypeScript and Tailwind CSS. I enjoy building modern, responsive web applications with clean code and beautiful user experiences.",
  keywords: [
    "Rudraaksh Singh",
    "Software Engineer",
    "UI/UX Designer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Web Designer",
    "Portfolio",
  ],
  authors: [{ name: "Rudraaksh Singh" }],
  creator: "Rudraaksh Singh",
  publisher: "Rudraaksh Singh",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="canonical"
          href="https://www.instagram.com/singhh.rudraa"
        />
      </head>

      <body className={`${poppins.variable} font-sans antialiased`}>
        <ClientLayout>
          <MouseGlow />
          <ScrollReveal />
          {children}
        </ClientLayout>

        <Analytics />
      </body>
    </html>
  );
}