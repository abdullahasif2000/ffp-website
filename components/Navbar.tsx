"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaPhone,
  FaLinkedinIn,
  FaHeart,
} from "react-icons/fa";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#EB6D3A] h-10 flex items-center justify-between px-6 text-white text-sm">
        {/* Left - Phone */}
        <div className="flex items-center space-x-2">
          <FaPhone className="text-white" />
          <span>0337-8028418</span>
        </div>
        {/* Center - Hashtag */}
        <div className="hidden md:block text-center font-semibold tracking-wide">
          #YouDonateWeServe
        </div>
        {/* Right - Social Icons */}
        <div className="flex items-center">
          {[
            { icon: FaFacebookF, color: "hover:text-[#1877F2]" },
            { icon: FaInstagram, color: "hover:text-[#E1306C]" },
            { icon: FaYoutube, color: "hover:text-[#FF0000]" },
            { icon: FaTiktok, color: "hover:text-gray-200" },
            { icon: FaLinkedinIn, color: "hover:text-[#0A66C2]" },
          ].map((social, idx, arr) => {
            const Icon = social.icon;
            return (
              <div key={idx} className="flex items-center">
                <a
                  href="#"
                  className={`px-2 text-lg transition-all duration-300 transform hover:scale-125 ${social.color}`}
                >
                  <Icon />
                </a>
                {idx !== arr.length - 1 && (
                  <span className="h-4 w-px bg-white/40 mx-1"></span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Logo + Contact Info */}
      <div className="flex flex-wrap items-center justify-between px-4 py-3 bg-white shadow-sm relative z-20">
        <div className="flex items-center space-x-2 text-[#009688] font-medium">
          <FaEnvelope className="text-[#EB6D3A]" />
          <span>contact@ffppk.org</span>
        </div>

        <div className="flex justify-center flex-shrink-0">
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

      {/* Navigation */}
      <nav className="bg-[#009688] shadow-lg px-4 md:px-8 py-2 flex flex-wrap items-center justify-between sticky top-0 z-50 font-sans">
        <ul className="flex flex-wrap gap-6 md:gap-10 text-white font-medium text-sm md:text-base relative">
          {/* Home Dropdown */}
          <li
            className="relative cursor-pointer"
            onMouseEnter={() => setOpenDropdown("home")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <span
              onClick={() => toggleDropdown("home")}
              className="relative inline-block pb-1 hover:text-orange-200 transition-colors"
            >
              Home
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300"></span>
            </span>
            <ul
              className={`absolute left-0 top-full mt-3 bg-white text-[#009688] shadow-xl rounded-lg w-60 max-w-[90vw] overflow-hidden transition-all duration-300 ${
                openDropdown === "home" ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              {[
                { id: "banners", label: "Banners" },
                { id: "volunteer-form", label: "Volunteer Form" },
                { id: "internship-form", label: "Internship Form" },
                { id: "Google Career Certification-form", label: "Google Career Certification" },
                { id: "FFP job opening-form", label: "FFP Job Opening Form" },
                { id: "counters", label: "Counter" },
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

          {/* Work Dropdown */}
          <li
            className="relative cursor-pointer"
            onMouseEnter={() => setOpenDropdown("work")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <span
              onClick={() => toggleDropdown("work")}
              className="relative inline-block pb-1 hover:text-orange-200 transition-colors"
            >
              Work
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300"></span>
            </span>
            <ul
              className={`absolute left-0 top-full mt-3 bg-white text-[#009688] shadow-xl rounded-lg w-56 max-w-[90vw] overflow-hidden transition-all duration-300 ${
                openDropdown === "work" ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              {[
                { href: "/work#projects", label: "Projects" },
                { href: "/work#covid", label: "Covid-19" },
                { href: "/work#flood", label: "Flood Relief" },
              ].map((item) => (
                <li
                  key={item.href}
                  className="px-5 py-3 hover:bg-gray-100 hover:text-[#EB6D3A] transition-colors"
                >
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </li>

          {/* Other main links */}
          {["Story", "Emergency", "Team", "Donate", "Partners", "Forms", "Contact"].map((link) => (
            <li key={link}>
              <Link
                href={`/${link.toLowerCase()}`}
                className="relative inline-block pb-1 hover:text-orange-200 transition-colors"
              >
                {link}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: Donate Now Button */}
        <div className="mt-2 md:mt-0">
          <Link
            href="/donate"
            className="group flex items-center gap-2 px-6 py-2 rounded-full font-semibold uppercase tracking-wide
             text-white bg-gradient-to-r from-[#EB6D3A] to-orange-500
             shadow-md hover:shadow-xl hover:scale-105 transform transition-all duration-300"
          >
            <span>Donate Now</span>
            <FaHeart className="w-5 h-5 text-white transition-transform duration-300 group-hover:scale-125" />
          </Link>
        </div>
      </nav>
    </>
  );
}
