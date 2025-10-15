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
    sub: ["Patient Bed","Wheel Chairs"," Washroom Chair "," Suction Unit","Nebulizer","Oximeter","Medical Camps", "Blood Camps", "Medicines Support","Health Awareness Camps "],
  },
  {
    title: "Environment",
    description: "Working towards a greener and cleaner planet.",
    image: "/images/projects/plantation.jpeg",
    sub: ["Urban Sustainable Farming (Green House)","Plantation", "Climate Change Awareness Sessions "," Sustainability Sessions"],
  },
  {
    title: "FFP Information System (FIS)",
    description: "A centralized system to verify cases, address queries, and provide timely support to beneficiaries with efficiency and transparency",
    image: "/images/projects/FIS.jpeg",
    sub: ["Marriage Cases", " House Renovation Cases","Rashan Cases","Utility Bills Cases"," Rental Cases "," Educational Cases"," Medical Cases","Funeral Cases","Behtar Mustaqbil Cases","General Cases","Sadqa/Haqiqa"],
  },
  {
    title: "Collaboration & Organizational Support",
    description: "Partnering with organizations to maximize impact.",
    image: "/images/projects/collaboration.jpg",
    sub: ["NGO Correspondence", "Corporate Collaboration & Projects","Sponsorships ","Masjid Madrasa Building & Maintenance "],
  },
  {
    title: "Aqua Projects",
    description: "Access to clean drinking water for all.",
    image: "/images/projects/aqua.jpg",
    sub: ["Hand Pumps", " Water Boring ",". Water Wells "],
  },
  {
    title: "Zero Hunger",
    description: "Food distribution programs for needy families.",
    image: "/images/projects/zero-hunger.jpeg",
    sub: [" Food Distribution", "Rashan Support"],
  },
  {
    title: "EduTech",
    description: "Educational support using modern technology.",
    image: "/images/projects/edu-tech.jpeg",
    sub: [" Scholarships", " Libraries","Computer Labs","School Fees Support","Career Counselling","Internship Program"," Free Books & Uniform","Google Career Certification"],
  },
  {
    title: "Ramadan Projects",
    description: "Special programs during the month of Ramadan.",
    image: "/images/projects/ramadan.jpeg",
    sub: ["Iftar Drives", " Iftar Boxes Distribution","Iftar Dasturkhwan","Rashan Distribution","Old Age Home Visits","Orphanage Visits","Masjid/Madaris","Eid Bazar","Eidi Distribution"],
  },
  {
    title: "Religion",
    description: "Support for religious and spiritual activities.",
    image: "/images/projects/religion.jpg",
    sub: ["Eid-ul-Adha (Waqf Ijtimai Qurbani)", " Masjid Support","Madaris Support","Quran Pak"," Fitra"," Shariah Free Consultancy"," Shariah Internships"],
  },
  {
    title: "Behtar Mustaqbil Project",
    description: "Skill development for a better future.",
    image: "/images/projects/Behtar mustaqbil.png",
    sub: ["Small Business Startups (Micro Financing)"],
  },
  {
    title: "Disaster Management",
    description: "Rapid response to natural and man-made disasters.",
    image: "/images/projects/desaster-managment.jpg",
    sub: ["Covid-19 ", "Flood "],
  },
  {
    title: "Campaigns",
    description: "Awareness and fundraising campaigns.",
    image: "/images/projects/campaign.jpg",
    sub: ["Heat Wave", "Winter Clothes Drive"," Summer Clothes Drive "," Awareness Sessions & Camps"," Workshops","Food Distribution","Internships"," Disability Programs","Special Education"," UN Days","Outreach Campaigns ","On Request Projects","Orphanage Visits","Old Age Home Visits"," Plantation"," Health Camps"],
  },
  {
    title: "Transgender",
    description: "Programs to empower the transgender community.",
    image: "/images/projects/transgender.jpg",
    sub: ["Skill Training", " Awareness Sessions"," Essential Support"],
  },
  {
    title: "Women Empowerment",
    description: "Helping women achieve economic independence.",
    image: "/images/projects/women empoverment.jpeg",
    sub: ["Woman Hygiene", "Education Support"," Beautician Courses"," Stitching","Hand Craft"],
  },
  {
    title: "CSR Project",
    description: "Corporate partnerships for social impact.",
    image: "/images/projects/csr.png",
    sub: [" Seminars", " National Housing Program ","Business Support "," Medical Camps with TBS "," Roshan Mustaqbil Program","Hand Pumps"],
  },
  {
    title: "Widow Support",
    description: "Providing financial & social support to widows.",
    image: "/images/projects/widow support.jpg.png",
    sub: [" Cash Distribution", ". BM/BD"," Legal Support"],
  },
];

export default function WorkPage() {
  const [visibleCount, setVisibleCount] = useState(8); 

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
      {/*  Section: Programs */}
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

    {/* Sub Projects */}
    <div
      className={`transition-all duration-500 ease-in-out ${
        openDropdown === index ? "mt-4" : "hidden"
      }`}
    >
      <div className="flex flex-wrap gap-2">
        {project.sub.map((sub, i) => (
          <span
            key={i}
            className="px-4 py-1.5 text-sm rounded-full 
                       bg-gradient-to-r from-[#EB6D3A]/10 to-[#009688]/10 
                       border border-[#EB6D3A]/40
                       text-gray-700 font-medium 
                       hover:from-[#EB6D3A]/20 hover:to-[#009688]/20 
                       transition"
          >
            {sub}
          </span>
        ))}
      </div>
    </div>
  </div>
)}

        </div>
      </div>
    ))}
  </div>

  {/* Load More Button */}
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

    </div>
  );
}
