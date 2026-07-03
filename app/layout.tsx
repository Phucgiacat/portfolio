import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ethan (Bùi Hồng Phúc) | AI Engineer & Data Scientist",
  description: "Portfolio of Bùi Hồng Phúc (Ethan). Data professional turning raw data into measurable business outcomes. Experienced in Machine Learning, NLP, and Data Analytics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
