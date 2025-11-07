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

export const metadata: Metadata = {
  title: "Civika Digital",
  description: "Teknologi dari warga, untuk warga",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon/icon.png" type="image/png" sizes="62x62" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased border-border`}
      >
        {children}
      </body>
    </html>
  );
}
