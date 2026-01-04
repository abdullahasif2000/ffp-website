"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPhone,
  FaLinkedinIn,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <>
      {/* TOP BAR */}
      <div className="bg-white h-10 flex items-center justify-between px-4 md:px-6 text-[#EB6D3A] text-sm">
        <div className="flex items-center space-x-2">
          <FaPhone />
          <span>0337-8028418</span>
        </div>

        <div className="hidden md:block font-semibold tracking-wide">
          #YouDonateWeServe
        </div>

        {/* Social Icons */}
        <div className="flex items-center">
          {[
            { icon: FaFacebookF, href: "https://facebook.com/ffppk" },
            {
              icon: FaInstagram,
              href: "https://instagram.com/foundationfightingpoverty",
            },
            {
              icon: FaYoutube,
              href: "https://www.youtube.com/@foundationfightingpoverty3323",
            },
            {
              icon: FaLinkedinIn,
              href: "https://www.linkedin.com/company/foundation-fighting-poverty/",
            },
          ].map((social, idx, arr) => {
            const Icon = social.icon;
            return (
              <div key={idx} className="flex items-center">
                <a
                  href={social.href}
                  target="_blank"
                  className="px-2 text-lg transition-all duration-300 transform hover:scale-125"
                >
                  <Icon />
                </a>
                {idx !== arr.length - 1 && (
                  <span className="h-4 w-px bg-amber-700/40 mx-1"></span>
                )}
              </div>
            );
          })}
        </div>
      </div>

    {/* MAIN NAVBAR */}
<nav className="bg-gray-700 border-b border-orange-500 text-white px-4 md:px-8 py-3 sticky top-0 z-50 font-normal shadow-sm">
  <div className="flex items-center justify-between">

    {/* LEFT NAV LINKS */}
    <ul className="hidden md:flex items-center gap-6">
      {[
        {
          key: "home",
          label: "Home",
          href: "/",
          items: [
            { href: "/#banners", label: "Banners" },
            { href: "/#volunteer-form", label: "Volunteer Form" },
            { href: "/#internship-form", label: "Internship Form" },
            { href: "/#counter", label: "Counter" },
            { href: "/#vision", label: "Vision" },
            { href: "/#sdgs", label: "SDGs" },
            { href: "/#existence", label: "Existence" },
            { href: "/#chairman-note", label: "Chairman Note" },
          ],
        },
        {
          key: "work",
          label: "Work",
          href: "/work",
          items: [
            { href: "/work#projects", label: "Programs (16 Projects)" },
            { href: "/work#covid", label: "Covid" },
            { href: "/work#flood", label: "Flood" },
          ],
        },
        {
          key: "story",
          label: "Story",
          href: "/story",
          items: [
            { href: "/story#awards", label: "Awards" },
            { href: "/story#heroes", label: "Heroes" },
            { href: "/story#beneficiary", label: "Beneficiary Stories" },
            { href: "/story#history", label: "History" },
          ],
        },
        {
          key: "emergency",
          label: "Emergency",
          href: "/emergency",
          items: [
            { href: "/emergency#covid", label: "Covid" },
            { href: "/emergency#flood", label: "Flood" },
            { href: "/emergency#earthquake", label: "Earthquake" },
            { href: "/emergency#first-aid", label: "First Aid" },
            { href: "/emergency#refugee", label: "Refugee" },
          ],
        },
      ].map(menu => (
        <li key={menu.key}>
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown(menu.key)}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <Link
              href={menu.href}
              className={isActive(menu.href) ? "text-[#EB6D3A]" : ""}
            >
              {menu.label}
            </Link>
          </div>
        </li>
      ))}
    </ul>

    {/* CENTER LOGO */}
    <Link href="/">
      <Image
        src="/images/logo/ffp-logo.png"
        width={150}
        height={150}
        alt="FFP Logo"
        className="h-16 w-auto hover:scale-105 transition-transform duration-300"
      />
    </Link>

    {/* RIGHT NAV LINKS */}
    <ul className="hidden md:flex items-center gap-8">
      {[
        {
          key: "team",
          label: "Team",
          href: "/team",
          items: [
            { href: "/team#members", label: "Members" },
            { href: "/team#interns", label: "Interns" },
            { href: "/team#board", label: "Board" },
            { href: "/team#management", label: "Management" },
            { href: "/team#chairman-note", label: "Chairman Note" },
          ],
        },
        {
          key: "donate",
          label: "Donate",
          href: "/donate",
          items: [
            { href: "/donate#bank", label: "Bank Accounts" },
            { href: "/donate#commodity", label: "Commodity / Material" },
            { href: "/donate#cash", label: "Cash Donation" },
            { href: "/donate#boxes", label: "Donation Boxes" },
            { href: "/donate#documents", label: "Documents" },
            { href: "/donate#testimonials", label: "Testimonials" },
          ],
        },
        {
          key: "partners",
          label: "Partners",
          href: "/partners",
          items: [
            { href: "/partners#partners", label: "Partners" },
            { href: "/partners#media", label: "Media" },
            { href: "/partners#blog", label: "Blog" },
          ],
        },
        {
          key: "contact",
          label: "Contact",
          href: "/contact",
          items: [
            { href: "/contact#donation", label: "For Donation" },
            { href: "/contact#cases", label: "For Cases" },
            { href: "/contact#emergency", label: "Emergency Numbers" },
            { href: "/contact#ngo-list", label: "List of NGOs" },
            { href: "/contact#partnership", label: "For Partnership" },
          ],
        },
      ].map(menu => (
        <li key={menu.key}>
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown(menu.key)}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <Link
              href={menu.href}
              className={
                menu.key === "donate"
                  ? "bg-[#EB6D3A] text-white px-4 py-2 rounded-full font-semibold shadow-md hover:bg-orange-600 transition-all"
                  : isActive(menu.href)
                  ? "text-[#EB6D3A]"
                  : ""
              }
            >
              {menu.label}
            </Link>

            <ul
              className={`absolute right-0 mt-3 bg-white text-[#009688] shadow-xl rounded-xl w-56 transition-all duration-200 ${
                openDropdown === menu.key
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
              }`}
            >
              {menu.items.map(item => (
                <li
                  key={item.href}
                  className="px-5 py-2 hover:bg-gray-100 hover:text-[#EB6D3A]"
                >
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ul>
          {/* MOBILE MENU TOGGLE */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        {mobileMenu && (
          <div className="md:hidden bg-[#009688] text-white text-center py-4 space-y-4 font-medium">
            <Link href="/" onClick={() => setMobileMenu(false)}>
              <p className="py-2">Home</p>
            </Link>
            <Link href="/work" onClick={() => setMobileMenu(false)}>
              <p className="py-2">Work</p>
            </Link>
            <Link href="/story" onClick={() => setMobileMenu(false)}>
              <p className="py-2">Story</p>
            </Link>
            <Link href="/emergency" onClick={() => setMobileMenu(false)}>
              <p className="py-2">Emergency</p>
            </Link>
            <Link href="/team" onClick={() => setMobileMenu(false)}>
              <p className="py-2">Team</p>
            </Link>
            <Link href="/donate" onClick={() => setMobileMenu(false)}>
              <p className="py-2">Donate</p>
            </Link>
            <Link href="/partners" onClick={() => setMobileMenu(false)}>
              <p className="py-2">Partners</p>
            </Link>
            <Link href="/contact" onClick={() => setMobileMenu(false)}>
              <p className="py-2">Contact</p>
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
