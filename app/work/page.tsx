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
    sub: [
      "Patient Bed",
      "Wheel Chairs",
      " Washroom Chair ",
      "Nebulizer",
      "Medical Camps",
      "Blood Camps",
      "Medicines Support",
      "Health Awareness Camps ",
    ],
  },
  {
    title: "Environment",
    description: "Working towards a greener and cleaner planet.",
    image: "/images/projects/plantation.jpeg",
    sub: [
      "Urban Sustainable Farming (Green House)",
      "Plantation",
      "Climate Change Awareness Sessions ",
      " Sustainability Sessions",
    ],
  },
  {
    title: "FFP Information System (FIS)",
    description:
      "A centralized system to verify cases, address queries, and provide timely support to beneficiaries with efficiency and transparency",
    image: "/images/projects/FIS.jpeg",
    sub: [
      "Marriage Cases",
      " House Renovation Cases",
      "Rashan Cases",
      "Utility Bills Cases",
      " Rental Cases ",
      " Educational Cases",
      " Medical Cases",
      "Funeral Cases",
      "Behtar Mustaqbil Cases",
      "General Cases",
      "Sadqa/Haqiqa",
    ],
  },
  {
    title: "Collaboration & Organizational Support",
    description: "Partnering with organizations to maximize impact.",
    image: "/images/projects/collaboration.jpg",
    sub: [
      "NGO Correspondence",
      "Corporate Collaboration & Projects",
      "Sponsorships ",
      "Masjid Madrasa Building & Maintenance ",
    ],
  },
  {
    title: "Aqua Projects",
    description: "Access to clean drinking water for all.",
    image: "/images/projects/aqua.jpg",
    sub: ["Hand Pumps", " Water Boring ", ". Water Wells "],
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
    sub: [
      " Scholarships",
      " Libraries",
      "Computer Labs",
      "School Fees Support",
      "Career Counselling",
      "Internship Program",
      " Free Books & Uniform",
      "Google Career Certification",
    ],
  },
  {
    title: "Ramadan Projects",
    description: "Special programs during the month of Ramadan.",
    image: "/images/projects/ramadan.jpeg",
    sub: [
      "Iftar Drives",
      " Iftar Boxes Distribution",
      "Iftar Dasturkhwan",
      "Rashan Distribution",
      "Old Age Home Visits",
      "Orphanage Visits",
      "Masjid/Madaris",
      "Eid Bazar",
      "Eidi Distribution",
    ],
  },
  {
    title: "Religion",
    description: "Support for religious and spiritual activities.",
    image: "/images/projects/religion.jpg",
    sub: [
      "Eid-ul-Adha (Waqf Ijtimai Qurbani)",
      " Masjid Support",
      "Madaris Support",
      "Quran Pak",
      " Fitra",
      " Shariah Free Consultancy",
      " Shariah Internships",
    ],
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
    sub: [
      "Heat Wave",
      "Winter Clothes Drive",
      " Summer Clothes Drive ",
      " Awareness Sessions & Camps",
      " Workshops",
      "Food Distribution",
      "Internships",
      " Disability Programs",
      "Special Education",
      " UN Days",
      "Outreach Campaigns ",
      "On Request Projects",
      "Orphanage Visits",
      "Old Age Home Visits",
      " Plantation",
      " Health Camps",
    ],
  },
  {
    title: "Transgender",
    description: "Programs to empower the transgender community.",
    image: "/images/projects/transgender.jpg",
    sub: ["Skill Training", " Awareness Sessions", " Essential Support"],
  },
  {
    title: "Women Empowerment",
    description: "Helping women achieve economic independence.",
    image: "/images/projects/women empoverment.jpeg",
    sub: [
      "Woman Hygiene",
      "Education Support",
      " Beautician Courses",
      " Stitching",
      "Hand Craft",
    ],
  },
  {
    title: "CSR Project",
    description: "Corporate partnerships for social impact.",
    image: "/images/projects/csr.png",
    sub: [
      " Seminars",
      " National Housing Program ",
      "Business Support ",
      " Medical Camps with TBS ",
      " Roshan Mustaqbil Program",
      "Hand Pumps",
    ],
  },
  {
    title: "Widow Support",
    description: "Providing financial & social support to widows.",
    image: "/images/projects/widow support.jpg.png",
    sub: [" Cash Distribution", ". BM/BD", " Legal Support"],
  },
];

export default function WorkPage() {
  const [visibleCount, setVisibleCount] = useState(8);

  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  return (
    <div className="bg-gray-50">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[70vh] min-h-[520px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/contact/main-hero-cover.jpg" 
            alt="Foundation Fighting Poverty work"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Soft Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
        <div className="relative max-w-4xl mx-auto text-center px-6 text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-lg">
            Our Work at FFP
          </h1>

          <p className="mt-4 text-base md:text-lg font-light text-gray-100 max-w-2xl mx-auto leading-relaxed">
            Building a better tomorrow through impactful projects, rapid
            emergency responses, and community empowerment.
          </p>

          {/* CTA */}
          <div className="mt-7">
            <a
              href="#projects"
              className="inline-flex items-center gap-2
        px-6 py-2.5 rounded-full
        border border-white/80
        text-sm font-semibold
        backdrop-blur-sm
        hover:bg-white hover:text-[#009688]
        transition-all duration-300"
            >
              Explore Projects →
            </a>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS SECTION ================= */}
      <section
        id="projects"
        className="relative py-24 px-6 overflow-hidden
  bg-gradient-to-br from-[#0f766e]/25 via-white to-[#EB6D3A]/25"
      >
        {/* subtle texture */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, rgba(0,0,0,0.5) 0, rgba(0,0,0,0.5) 1px, transparent 1px, transparent 7px)",
          }}
        />

        <div className="relative max-w-7xl mx-auto">
          {/* Heading */}
          <h2
            className="text-3xl md:text-4xl font-extrabold text-center
      bg-gradient-to-r from-[#EB6D3A] to-[#009688]
      bg-clip-text text-transparent mb-6"
          >
            Our Projects
          </h2>

          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-14">
            Sustainable initiatives designed to uplift communities with dignity
            and impact.
          </p>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {projects.slice(0, visibleCount).map((project, index) => {
              const isOpen = openDropdown === index;

              return (
                <div key={index} className="relative perspective">
                  <div
                    className={`relative w-full h-[380px] transition-transform duration-700
              [transform-style:preserve-3d]
              ${isOpen ? "rotate-y-180" : ""}`}
                  >
                    {/* ================= FRONT ================= */}
                    <div
                      className="absolute inset-0 backface-hidden rounded-3xl overflow-hidden
                bg-white/15 backdrop-blur-2xl
                border border-white/25
                shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
                    >
                      {/* Image */}
                      <div className="relative w-full h-44">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30" />
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col h-[calc(100%-176px)]">
                        <h3 className="text-lg font-semibold text-[#0f766e]">
                          {project.title}
                        </h3>

                        <p className="text-gray-700 text-sm mt-2 flex-grow">
                          {project.description}
                        </p>

                        {project.sub?.length > 0 && (
                          <button
                            onClick={() =>
                              setOpenDropdown(isOpen ? null : index)
                            }
                            className="mt-4 text-sm font-medium
                      text-[#EB6D3A] hover:text-orange-600 transition"
                          >
                            View Details →
                          </button>
                        )}
                      </div>
                    </div>

                    {/* ================= BACK ================= */}
                    <div
                      className="absolute inset-0 backface-hidden rotate-y-180
                rounded-3xl overflow-hidden
                bg-white/15 backdrop-blur-2xl
                border border-white/25
                shadow-[0_12px_40px_rgba(0,0,0,0.12)]"
                    >
                      <div className="p-6 flex flex-col h-full">
                        <h4 className="text-lg font-semibold text-[#0f766e] mb-5">
                          {project.title}
                        </h4>

                        {/* TEXT-ONLY sub projects */}
                        <ul className="space-y-3 flex-grow">
                          {project.sub?.map((sub, i) => (
                            <li
                              key={i}
                              className="text-sm text-gray-700
                        leading-snug tracking-wide"
                            >
                              • {sub}
                            </li>
                          ))}
                        </ul>

                        <button
                          onClick={() => setOpenDropdown(null)}
                          className="mt-6 text-sm font-medium
                    text-[#EB6D3A] hover:text-orange-600 transition"
                        >
                          ← Back
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Load More */}
          {projects.length > 8 && (
            <div className="text-center mt-14">
              <button
                onClick={() =>
                  setVisibleCount(visibleCount === 8 ? projects.length : 8)
                }
                className="px-6 py-2.5 rounded-full
          bg-[#EB6D3A] text-white text-sm font-medium
          shadow-md hover:bg-orange-500 transition"
              >
                {visibleCount === 8 ? "Load More" : "Show Less"}
              </button>
            </div>
          )}
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
      {/*  Section: Covid */}
      <section
        id="covid"
        className="relative bg-gradient-to-r from-orange-100 to-orange-50 py-20"
      >
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
      <section
        id="flood"
        className="relative bg-gradient-to-r from-blue-100 to-blue-50 py-20"
      >
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
