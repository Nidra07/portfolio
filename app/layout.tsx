import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"

import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rudraaksh Singh - Full Stack Developer",
  description: "I'm a passionate Full Stack Developer specializing in React, Next.js, TypeScript and Tailwind CSS. I enjoy building modern, responsive web applications with clean code and beautiful user experiences.",
  keywords: [
    "Rudraaksh Singh",
    "Software Engineer",
    "UI/UX Designer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Web Designer",
    "WebHR Engineer",
    "Portfolio",
  ],
  authors: [{ name: "Rudraaksh Singh" }],
  creator: "Rudraaksh Singh",
  publisher: "Rudraaksh Singh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.instagram.com/singhh.rudraa",
    title: "Rudraaksh Singh - Full Stack Developer",
    description: "Full Stack Developer, Next.js Developer, UI/UX designer Creating meaningful and delightful digital products.",
    siteName: "Rudraaksh Singh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rudraaksh Singh - Full Stack Developer",
    description: "Full Stack Developer, Next.js Developer, UI/UX designer",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://www.instagram.com/singhh.rudraa" />
      </head>
      <body
        className={`${poppins.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
