"use client";

import { useState } from "react";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";


// Project Data
const projects = [
  {
    title: "Health",
    description: "Providing healthcare services and medical aid.",
    image: "/images/projects/madical camp.jpg",
    sub: ["Medical Camps", "Blood Donation", "Vaccination Drives"],
  },
  {
    title: "Environment",
    description: "Working towards a greener and cleaner planet.",
    image: "/images/projects/plantation.jpeg",
    sub: ["Tree Plantation", "Clean Water Initiatives"],
  },
  {
    title: "FFP Information System (FIS)",
    description: "Digital systems to improve management & outreach.",
    image: "/images/projects/FIS.jpeg",
    sub: ["Donor Portal", "Project Tracking"],
  },
  {
    title: "Collaboration & Organizational Support",
    description: "Partnering with organizations to maximize impact.",
    image: "/images/projects/collaboration.jpg",
    sub: ["NGO Partnerships", "Volunteer Support"],
  },
  {
    title: "Aqua Projects",
    description: "Access to clean drinking water for all.",
    image: "/images/projects/aqua.jpg",
    sub: ["Hand Pumps", "Filtration Plants"],
  },
  {
    title: "Zero Hunger",
    description: "Food distribution programs for needy families.",
    image: "/images/projects/zero-hunger.jpeg",
    sub: ["Food Drives", "Monthly Rations"],
  },
  {
    title: "EduTech",
    description: "Educational support using modern technology.",
    image: "/images/projects/edu-tech.jpeg",
    sub: ["Online Courses", "Digital Literacy"],
  },
  {
    title: "Ramadan Projects",
    description: "Special programs during the month of Ramadan.",
    image: "/images/projects/ramadan.jpeg",
    sub: ["Iftar Drives", "Zakat Distribution"],
  },
  {
    title: "Religion",
    description: "Support for religious and spiritual activities.",
    image: "/images/projects/religion.jpg",
    sub: ["Mosque Support", "Religious Education"],
  },
  {
    title: "Behtar Mustaqbil Project",
    description: "Skill development for a better future.",
    image: "/images/projects/Behtar mustaqbil.png",
    sub: ["Vocational Training", "Career Counseling"],
  },
  {
    title: "Disaster Management",
    description: "Rapid response to natural and man-made disasters.",
    image: "/images/projects/desaster-managment.jpg",
    sub: ["Relief Camps", "Emergency Kits"],
  },
  {
    title: "Campaigns",
    description: "Awareness and fundraising campaigns.",
    image: "/images/projects/campaign.jpg",
    sub: ["Health Awareness", "Fundraising Events"],
  },
  {
    title: "Transgender",
    description: "Programs to empower the transgender community.",
    image: "/images/projects/transgender.jpg",
    sub: ["Skill Training", "Awareness Drives"],
  },
  {
    title: "Women Empowerment",
    description: "Helping women achieve economic independence.",
    image: "/images/projects/women empoverment.jpeg",
    sub: ["Entrepreneurship Programs", "Education Support"],
  },
  {
    title: "CSR Project",
    description: "Corporate partnerships for social impact.",
    image: "/images/projects/csr.png",
    sub: ["Employee Volunteering", "CSR Partnerships"],
  },
  {
    title: "Widow Support",
    description: "Providing financial & social support to widows.",
    image: "/images/projects/widow support.jpg.png",
    sub: ["Monthly Stipends", "Skill Programs"],
  },
];

export default function WorkPage() {
  const [visibleCount, setVisibleCount] = useState(8); // show 8 first

  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  return (
    <div className="bg-gray-50">
      {/*  Hero Section */}
<section className="relative bg-gradient-to-r from-[#EB6D3A] to-[#009688] text-white py-20">
  <div className="relative max-w-4xl mx-auto text-center px-6">
    <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg tracking-tight">
      Our Work at FFP
    </h1>
    <p className="mt-4 text-base md:text-lg font-light text-gray-100 max-w-2xl mx-auto leading-relaxed">
      Building a better tomorrow through impactful projects, rapid emergency
      responses, and community empowerment.
    </p>

    {/* CTA Button */}
    <div className="mt-6">
      <a
        href="#projects"
        className="inline-block px-6 py-2 rounded-full border border-white text-white font-semibold shadow-md hover:bg-white hover:text-[#009688] transition-all duration-300"
      >
        Explore Projects
      </a>
    </div>
  </div>
</section>

<div className="relative -mt-1 overflow-hidden">
        <svg
          className="w-full h-3 block"
          viewBox="0 0 1440 10"
          preserveAspectRatio="none"
          shapeRendering="geometricPrecision"
        >
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#009688" />
              <stop offset="100%" stopColor="#EB6D3A" />
            </linearGradient>
          </defs>
          <rect width="1440" height="10" fill="url(#lineGradient)" />
        </svg>
      </div>
      {/* ✅ Section: Programs */}
      <section id="projects" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl md:text-3xl font-extrabold text-center bg-gradient-to-r from-[#EB6D3A] to-[#009688] bg-clip-text text-transparent mb-6">
  Our Projects
</h2>
<p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
  Explore the wide range of initiatives we are driving to create lasting impact in communities.
</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {projects.slice(0, visibleCount).map((project, index) => (

            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative w-full h-44">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  {project.description}
                </p>

                {/* Dropdown */}
                {project.sub && project.sub.length > 0 && (
                  <div className="mt-4">
                    <button
                      onClick={() =>
                        setOpenDropdown(openDropdown === index ? null : index)
                      }
                      className="flex items-center gap-2 text-[#EB6D3A] font-medium hover:text-orange-700 transition"
                    >
                      View More
                      <FaChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          openDropdown === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`transition-all overflow-hidden duration-500 ease-in-out ${
                        openDropdown === index ? "max-h-40 mt-2" : "max-h-0"
                      }`}
                    >
                      <ul className="pl-5 list-disc text-sm text-gray-700">
                        {project.sub.map((sub, i) => (
                          <li key={i} className="py-1">
                            {sub}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                  </div>

                  
                )}
              </div>
            </div>
          ))}
        </div>
        {projects.length > 8 && (
  <div className="text-center mt-10">
  <button
    onClick={() =>
      setVisibleCount(visibleCount === 8 ? projects.length : 8)
    }
    className="px-5 py-2.5 rounded-full 
               bg-[#EB6D3A] text-white font-medium text-sm
               shadow-md hover:shadow-lg
               hover:bg-orange-500 
               transition-all duration-300 ease-in-out
               hover:scale-105"
  >
    {visibleCount === 8 ? "Load More" : "Show Less"}
  </button>
</div>

)}

      </section>
<div className="relative -mt-1 overflow-hidden">
        <svg
          className="w-full h-3 block"
          viewBox="0 0 1440 10"
          preserveAspectRatio="none"
          shapeRendering="geometricPrecision"
        >
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#009688" />
              <stop offset="100%" stopColor="#EB6D3A" />
            </linearGradient>
          </defs>
          <rect width="1440" height="10" fill="url(#lineGradient)" />
        </svg>
      </div>
      {/*  Section: Covid */}
      <section id="covid" className="relative bg-gradient-to-r from-orange-100 to-orange-50 py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full h-72 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/projects/covid-19.jpeg"
              alt="Covid Response"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Covid Response
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              During the Covid-19 pandemic, FFP launched multiple initiatives
              including ration distribution, medical support, awareness drives,
              and vaccination facilitation. Thousands of families benefitted
              from these efforts.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Flood */}
      <section id = "flood" className="relative bg-gradient-to-r from-blue-100 to-blue-50 py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full h-72 rounded-xl overflow-hidden shadow-lg md:order-2">
            <Image
              src="/images/projects/flood-relief.jpg"
              alt="Flood Relief"
              fill
              className="object-cover"
            />
          </div>
          <div className="md:order-1">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Flood Relief
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              In response to devastating floods, FFP provided immediate relief
              through food, shelter, and medical aid. Rehabilitation projects
              were also initiated to help communities rebuild their lives after
              the disaster.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
<footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-gray-300 py-14 px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

    {/* Left - Logo & Info */}
    <div>
      <img
        src="/images/logo/ffp-logo.png"
        alt="FFP Logo"
        className="w-70 mb-6"
      />
      <p className="text-sm mb-2">📍 Head Office: 250-C, PECHS Block-06, Karachi, Pakistan</p>
      <p className="text-sm mb-2">📞 +92 300 1234567</p>
      <p className="text-sm">✉️ contact@ffp.org</p>
    </div>

    {/* Middle - Quick Links */}
    <div>
      <h3 className="text-lg font-semibold text-white mb-5">Quick Links</h3>
      <ul className="space-y-2 text-sm">
        <li><a href="#about" className="hover:text-[#EB6D3A] transition">About Us</a></li>
        <li><a href="#mission" className="hover:text-[#EB6D3A] transition">Mission</a></li>
        <li><a href="#vision" className="hover:text-[#EB6D3A] transition">Vision</a></li>
        <li><a href="#contact" className="hover:text-[#EB6D3A] transition">Contact</a></li>
      </ul>
    </div>

    {/* Right - Social Media */}
    <div>
      {/* <h3 className="text-lg font-semibold text-white mb-5">Follow Us</h3> */}
      <div className="flex space-x-5">
        <a href="https://facebook.com" target="_blank" className="hover:text-[#1877F2] text-3xl transition-transform transform hover:scale-110">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://instagram.com" target="_blank" className="hover:text-[#E1306C] text-3xl transition-transform transform hover:scale-110">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" className="hover:text-[#0A66C2] text-3xl transition-transform transform hover:scale-110">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://youtube.com" target="_blank" className="hover:text-[#FF0000] text-3xl transition-transform transform hover:scale-110">
          <i className="fab fa-youtube"></i>
        </a>
        <a href="https://twitter.com" target="_blank" className="hover:text-[#1DA1F2] text-3xl transition-transform transform hover:scale-110">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="mt-12 text-center text-xs text-gray-400 border-t border-gray-700 pt-4">
    © {new Date().getFullYear()} <span className="text-[#EB6D3A] font-semibold">Foundation Fighting Poverty</span>. All rights reserved.
  </div>
</footer>
    </div>
  );
}
