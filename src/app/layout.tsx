import type { Metadata } from "next";
import { Geist, Orbitron, Space_Grotesk } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Vibhor Meshram // Digital Universe",
  description:
    "Vibhor Meshram — Java Full Stack Developer. A futuristic, immersive portfolio across IoT, SaaS, and fintech.",
  openGraph: {
    title: "Vibhor Meshram // Digital Universe",
    description:
      "Java Full Stack Developer crafting secure microservices, real-time data flows, and cloud-native systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/portfolio.png" />
        <meta name="theme-color" content="#03040a" />
      </head>
      <body
        className={`${geistSans.variable} ${orbitron.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
