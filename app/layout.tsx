import "./globals.css";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaPhone,
  FaLinkedinIn,
  FaHeart
} from "react-icons/fa";

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
      <body>
        {/* ✅ Top Bar */}
<div className="bg-[#EB6D3A] h-10 flex items-center justify-between px-6 text-white text-sm">
  <div className="flex items-center space-x-2">
    <FaPhone className="text-white" />
    <span>0337-8028418</span>
  </div>

  {/* ✅ Social Icons */}
  <div className="flex space-x-3">
    <a
      href="#"
      className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-400/50 transition-all transform hover:scale-110"
    >
      <FaFacebookF className="text-white text-sm" />
    </a>
    <a
      href="#"
      className="p-2 rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 hover:opacity-90 hover:shadow-lg hover:shadow-pink-400/50 transition-all transform hover:scale-110"
    >
      <FaInstagram className="text-white text-sm" />
    </a>
    <a
      href="#"
      className="p-2 rounded-full bg-red-600 hover:bg-red-700 hover:shadow-lg hover:shadow-red-400/50 transition-all transform hover:scale-110"
    >
      <FaYoutube className="text-white text-sm" />
    </a>
    <a
      href="#"
      className="p-2 rounded-full bg-black hover:bg-gray-800 hover:shadow-lg hover:shadow-gray-600/50 transition-all transform hover:scale-110"
    >
      <FaTiktok className="text-white text-sm" />
    </a>
    <a
      href="#"
      className="p-2 rounded-full bg-blue-500 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-300/50 transition-all transform hover:scale-110"
    >
      <FaLinkedinIn className="text-white text-sm" />
    </a>
  </div>
</div>

        {/* ✅ Logo + Contact Info */}
        <div className="flex items-center justify-between px-4 py-3 bg-white shadow-sm relative z-20">
          <div className="flex items-center space-x-2 text-[#009688] font-medium">
            <FaEnvelope className="text-[#EB6D3A]" />
            <span>contact@ffppk.org</span>
          </div>

          <div className="flex justify-center">
            <Image
              src="/images/logo/ffp-logo.png"
              alt="FFP Logo"
              width={160}
              height={160}
              priority
              className="h-20 w-auto"
            />
          </div>

          <div className="flex items-start space-x-2 text-[#009688] font-medium text-right max-w-xs">
            <FaMapMarkerAlt className="text-[#EB6D3A] mt-1" />
            <p className="leading-snug">
              Head Office: 250-C, PECHS Block-06 <br />
              Karachi, Pakistan
            </p>
          </div>
        </div>

     {/*  Navigation */}
<nav className="bg-[#009688] shadow-lg px-8 py-4 flex items-center justify-between sticky top-0 z-50 font-sans">
  {/* Left: Main Nav Links */}
  <ul className="flex space-x-10 text-white font-medium text-sm md:text-base relative">
    {/* Home Dropdown */}
    <li className="group relative cursor-pointer">
      <span className="relative inline-block pb-1 hover:text-orange-200 transition-colors">
        Home
        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300"></span>
      </span>
      {/* Dropdown */}
      <ul className="absolute left-0 top-full mt-3 hidden group-hover:block bg-white text-[#009688] shadow-xl rounded-lg w-60 overflow-hidden">
        {[
          { id: "banners", label: "Banners" },
          { id: "volunteer-form", label: "Volunteer Form" },
          { id: "internship-form", label: "Internship Form" },
          { id: "Google Career Certification-form", label: "Google Career Certification" },
          { id: "FFP job opening-form", label: "FFP Job Opening Form" },
          { id: "counter", label: "Counter" },
          { id: "vision", label: "Vision" },
          { id: "sdgs", label: "SDGs" },
          { id: "existence", label: "Existence" },
          { id: "chairman-note", label: "Chairman Note" },
        ].map((item) => (
          <li
            key={item.id}
            className="px-5 py-3 hover:bg-gray-100 hover:text-[#EB6D3A] transition-colors"
          >
            <Link href={`/#${item.id}`}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </li>

    {/* Other main links */}
    {["Work", "Story", "Emergency", "Team", "Donate", "Partners", "Forms", "Contact"].map(
      (link) => (
        <li key={link}>
          <Link
            href={`/${link.toLowerCase()}`}
            className="relative inline-block pb-1 hover:text-orange-200 transition-colors"
          >
            {link}
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white hover:w-full transition-all duration-300"></span>
          </Link>
        </li>
      )
    )}
  </ul>

 {/* Right: Donate Now Button */}
<div>
  <Link
    href="/donate"
    className="flex items-center gap-2 bg-gradient-to-r from-[#EB6D3A] to-orange-500 text-white px-6 py-3 rounded-full font-bold uppercase tracking-wide shadow-md hover:shadow-lg hover:scale-105 transform transition-all duration-300"
  >
    <span>Donate Now</span>
    <FaHeart className="w-5 h-5 text-white animate-pulse" />
  </Link>
</div>
</nav>



        {/* ✅ Page-specific content */}
        {children}
      </body>
    </html>
  );
}
