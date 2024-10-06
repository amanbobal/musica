import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Musica",
  description: "An online music streaming web app",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
