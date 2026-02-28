import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

// ✅ Import Inter
const font = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter", // fixed variable name
});

export const metadata: Metadata = {
  title: "Ibeh Blessing Ifunanya",
  description:
    "Professional Social Media Manager specializing in content strategy, brand growth, audience engagement, and performance-driven marketing campaigns.",
  keywords: [
    "Social Media Manager",
    "Content Strategy",
    "Digital Marketing",
    "Brand Growth",
    "Community Management",
    "Portfolio",
  ],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Ibeh Blessing Ifunanya",
    description:
      "Helping brands grow through strategic content, audience engagement, and data-driven social media marketing.",
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
      <body className={`${font.className} antialiased`}>
          {children}
      </body>
    </html>
  );
}