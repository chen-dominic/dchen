/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import "./styles/globals.css";
import "../fontawesome";

export const metadata: Metadata = {
  title: "Dominic Chen",
  description:
    "Portfolio of Dominic Chen, a software engineer and Computer Science student in Toronto.",
  icons: [{ url: "/favicon.ico", rel: "icon" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="overflow-x-hidden bg-primary text-white antialiased">
        {children}
      </body>
    </html>
  );
}
