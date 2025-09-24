import "./globals.css";
import type { Metadata } from "next";
import Navbar from "../components/Navbar";



export const metadata: Metadata = {
  title: "FFP Website",
  description: "Foundation Fighting Poverty",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        {/* Top bar + Logo are inside Navbar */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
