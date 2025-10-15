import "./globals.css";
import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; // ✅ Add Footer import

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
        {/* 🔹 Navbar at top */}
        <Navbar />

        {/* 🔹 Page content */}
        <main>{children}</main>

        {/* 🔹 Footer added globally */}
        <Footer />
      </body>
    </html>
  );
}
