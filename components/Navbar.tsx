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
      <div className="bg-[#EB6D3A] h-10 flex items-center justify-between px-4 md:px-6 text-white text-sm">
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
                  <span className="h-4 w-px bg-white/40 mx-1"></span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <nav className="bg-[#009688] text-white px-4 md:px-8 py-2 sticky top-0 z-50 font-medium shadow-md">
        <div className="flex items-center justify-between">

          {/* LOGO ON LEFT */}
          <Link href="/">
            <Image
              src="/images/logo/ffp-logo.png"
              width={150}
              height={150}
              alt="FFP Logo"
              className="h-14 w-auto cursor-pointer"
            />
          </Link>

          {/* DESKTOP NAV LINKS */}
          <ul className="hidden md:flex items-center gap-8 ml-10">
            {/* HOME */}
            <li
              className="relative cursor-pointer"
              onMouseEnter={() => setOpenDropdown("home")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link href="/" className={isActive("/") ? "text-orange-200" : ""}>
                Home
              </Link>

              <ul
                className={`absolute left-0 mt-2 bg-white text-[#009688] shadow-xl rounded-lg w-56 overflow-hidden transition-all duration-200 ${
                  openDropdown === "home" ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                {[
                  { href: "/#banners", label: "Banners" },
                  { href: "/#volunteer-form", label: "Volunteer Form" },
                  { href: "/#internship-form", label: "Internship Form" },
                  { href: "/#counter", label: "Counter" },
                  { href: "/#vision", label: "Vision" },
                  { href: "/#sdgs", label: "SDGs" },
                  { href: "/#existence", label: "Existence" },
                  { href: "/#chairman-note", label: "Chairman Note" },
                ].map((item) => (
                  <li
                    key={item.href}
                    className="px-5 py-2 hover:bg-gray-100 hover:text-[#EB6D3A] transition"
                  >
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </li>

            {/* WORK */}
            <li
              className="relative cursor-pointer"
              onMouseEnter={() => setOpenDropdown("work")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link href="/work" className={isActive("/work") ? "text-orange-200" : ""}>
                Work
              </Link>

              <ul
                className={`absolute mt-2 bg-white text-[#009688] shadow-xl rounded-lg w-56 transition-all duration-200 ${
                  openDropdown === "work" ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                <li className="px-5 py-2 hover:bg-gray-100">
                  <Link href="/work#projects">Programs (16 Projects)</Link>
                </li>
                <li className="px-5 py-2 hover:bg-gray-100">
                  <Link href="/work#covid">Covid</Link>
                </li>
                <li className="px-5 py-2 hover:bg-gray-100">
                  <Link href="/work#flood">Flood</Link>
                </li>
              </ul>
            </li>

            {/* STORY */}
            <li
              className="relative cursor-pointer"
              onMouseEnter={() => setOpenDropdown("story")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link href="/story" className={isActive("/story") ? "text-orange-200" : ""}>
                Story
              </Link>

              <ul
                className={`absolute mt-2 bg-white text-[#009688] shadow-xl rounded-lg w-56 transition-all duration-200 ${
                  openDropdown === "story" ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                <li className="px-5 py-2 hover:bg-gray-100"><Link href="/story#awards">Awards</Link></li>
                <li className="px-5 py-2 hover:bg-gray-100"><Link href="/story#heroes">Heroes</Link></li>
                <li className="px-5 py-2 hover:bg-gray-100"><Link href="/story#beneficiary">Beneficiary Stories</Link></li>
                <li className="px-5 py-2 hover:bg-gray-100"><Link href="/story#history">History</Link></li>
              </ul>
            </li>

            {/* EMERGENCY */}
            <li
              className="relative cursor-pointer"
              onMouseEnter={() => setOpenDropdown("emergency")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href="/emergency"
                className={isActive("/emergency") ? "text-orange-200" : ""}
              >
                Emergency
              </Link>

              <ul
                className={`absolute mt-2 bg-white text-[#009688] shadow-xl rounded-lg w-56 transition-all duration-200 ${
                  openDropdown === "emergency" ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                <li className="px-5 py-2 hover:bg-gray-100"><Link href="/emergency#covid">Covid</Link></li>
                <li className="px-5 py-2 hover:bg-gray-100"><Link href="/emergency#flood">Flood</Link></li>
                <li className="px-5 py-2 hover:bg-gray-100"><Link href="/emergency#earthquake">Earthquake</Link></li>
                <li className="px-5 py-2 hover:bg-gray-100"><Link href="/emergency#first-aid">First Aid</Link></li>
                <li className="px-5 py-2 hover:bg-gray-100"><Link href="/emergency#refugee">Refugee</Link></li>
              </ul>
            </li>

            {/* TEAM */}
            <li
              className="relative cursor-pointer"
              onMouseEnter={() => setOpenDropdown("team")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link href="/team" className={isActive("/team") ? "text-orange-200" : ""}>
                Team
              </Link>

              <ul
                className={`absolute mt-2 bg-white text-[#009688] shadow-xl rounded-lg w-56 transition-all duration-200 ${
                  openDropdown === "team" ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                <li className="px-5 py-2 hover:bg-gray-100"><Link href="/team#members">Members</Link></li>
                <li className="px-5 py-2 hover:bg-gray-100"><Link href="/team#interns">Interns</Link></li>
                <li className="px-5 py-2 hover:bg-gray-100"><Link href="/team#board">Board</Link></li>
                <li className="px-5 py-2 hover:bg-gray-100"><Link href="/team#management">Management</Link></li>
                <li className="px-5 py-2 hover:bg-gray-100"><Link href="/team#chairman-note">Chairman Note</Link></li>
              </ul>
            </li>

            {/* DONATE */}
            <li
              className="relative cursor-pointer"
              onMouseEnter={() => setOpenDropdown("donate")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link href="/donate" className={isActive("/donate") ? "text-orange-200" : ""}>
                Donate
              </Link>

              <ul
                className={`absolute mt-2 bg-white text-[#009688] shadow-xl rounded-lg w-60 transition-all duration-200 ${
                  openDropdown === "donate" ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                <li className="px-5 py-2 hover:bg-gray-100"><Link href="/donate#bank">Bank Accounts</Link></li>
                <li className="px-5 py-2 hover:bg-gray-100"><Link href="/donate#commodity">Commodity / Material</Link></li>
                <li className="px-5 py-2 hover:bg-gray-100"><Link href="/donate#cash">Cash Donation</Link></li>
                <li className="px-5 py-2 hover:bg-gray-100"><Link href="/donate#boxes">Donation Boxes</Link></li>
                <li className="px-5 py-2 hover:bg-gray-100"><Link href="/donate#documents">Documents</Link></li>
                <li className="px-5 py-2 hover:bg-gray-100"><Link href="/donate#testimonials">Testimonials</Link></li>
              </ul>
            </li>

            {/* PARTNERS */}
            <li
              className="relative cursor-pointer"
              onMouseEnter={() => setOpenDropdown("partners")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link href="/partners" className={isActive("/partners") ? "text-orange-200" : ""}>
                Partners
              </Link>

              <ul
                className={`absolute mt-2 bg-white text-[#009688] shadow-xl rounded-lg w-56 transition-all duration-200 ${
                  openDropdown === "partners" ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                <li className="px-5 py-2 hover:bg-gray-100"><Link href="/partners#partners">Partners</Link></li>
                <li className="px-5 py-2 hover:bg-gray-100"><Link href="/partners#media">Media</Link></li>
                <li className="px-5 py-2 hover:bg-gray-100"><Link href="/partners#blog">Blog</Link></li>
              </ul>
            </li>

            {/* CONTACT */}
            <li
              className="relative cursor-pointer"
              onMouseEnter={() => setOpenDropdown("contact")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link href="/contact" className={isActive("/contact") ? "text-orange-200" : ""}>
                Contact
              </Link>

              <ul
                className={`absolute mt-2 bg-white text-[#009688] shadow-xl rounded-lg w-56 transition-all duration-200 ${
                  openDropdown === "contact" ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                <li className="px-5 py-2 hover:bg-gray-100"><Link href="/contact#donation">For Donation</Link></li>
                <li className="px-5 py-2 hover:bg-gray-100"><Link href="/contact#cases">For Cases</Link></li>
                <li className="px-5 py-2 hover:bg-gray-100"><Link href="/contact#emergency">Emergency Numbers</Link></li>
                <li className="px-5 py-2 hover:bg-gray-100"><Link href="/contact#ngo-list">List of NGOs</Link></li>
                <li className="px-5 py-2 hover:bg-gray-100"><Link href="/contact#partnership">For Partnership</Link></li>
              </ul>
            </li>
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
