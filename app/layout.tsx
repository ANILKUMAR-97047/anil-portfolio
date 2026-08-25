import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anil Kumar | Full Stack Developer",
  description:
    "Portfolio of Anil Kumar — Full Stack Developer specialising in Node.js, NestJS, React, and MySQL. Building robust backend systems and clean, responsive interfaces.",
  openGraph: {
    title: "Anil Kumar | Full Stack Developer",
    description:
      "Portfolio of Anil Kumar — Full Stack Developer specialising in Node.js, NestJS, React, and MySQL.",
    type: "website",
    locale: "en_US",
    siteName: "Anil Kumar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anil Kumar | Full Stack Developer",
    description:
      "Portfolio of Anil Kumar — Full Stack Developer specialising in Node.js, NestJS, React, and MySQL.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
