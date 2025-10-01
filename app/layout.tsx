import type { Metadata } from "next";
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
export const metadataBase = new URL("https://www.instituteoflearningdesign.com/")
export const metadata = {
  title: "ILD — Better Learning. Better Business.",
  description:
    "Practical, business-focused workshops and mentorship for L&D, Customer Education, and Enablement pros.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  // --- social share image ---
  openGraph: {
    title: "ILD — Better Learning. Better Business.",
    description:
      "Practical, business-focused workshops and mentorship for L&D, Customer Education, and Enablement pros.",
    url: "/",
    siteName: "ILD",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "ILD share image" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ILD — Better Learning. Better Business.",
    description:
      "Practical, business-focused workshops and mentorship for L&D, Customer Education, and Enablement pros.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
