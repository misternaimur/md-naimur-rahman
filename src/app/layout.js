/** @format */

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ),
  title: "Md Naimur Rahman | Full Stack Web Developer",
  description:
    "Md Naimur Rahman is a Full Stack Web Developer building scalable, modern web applications with React, Next.js, Node.js, and MongoDB.",
  keywords: [
    "Md Naimur Rahman",
    "Full Stack Web Developer",
    "React Developer",
    "Next.js Developer",
    "MERN Stack Developer",
    "Web Developer Bangladesh",
  ],
  authors: [{ name: "Md Naimur Rahman" }],
  creator: "Md Naimur Rahman",
  publisher: "Md Naimur Rahman",
  icons: {
    icon: "/asset/logo.png",
    shortcut: "/asset/logo.png",
    apple: "/asset/logo.png",
  },
  openGraph: {
    title: "Md Naimur Rahman | Full Stack Web Developer",
    description:
      "Explore the portfolio, skills, projects, and experience of Md Naimur Rahman, a Full Stack Web Developer.",
    type: "website",
    locale: "en_US",
    siteName: "Md Naimur Rahman Portfolio",
    images: [
      {
        url: "/asset/logo.png",
        width: 72,
        height: 36,
        alt: "Md Naimur Rahman logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Md Naimur Rahman | Full Stack Web Developer",
    description:
      "Full Stack Web Developer building scalable and modern web applications.",
    images: ["/asset/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className=" min-h-full flex flex-col bricolage-grotesque-font">
        {children}
      </body>
    </html>
  );
}
