"use client";
import { useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function EmergencyPage() {
  const emergencies = [
    {
      id: "covid",
      title: "COVID-19 Response",
      description:
        "During the global pandemic, FFP swiftly mobilized its teams to distribute hygiene kits, masks, sanitizers, and food supplies to families severely affected by lockdowns. Awareness sessions were also conducted to educate communities about preventive measures and vaccination.",
      images: [
        "/images/projects/covid-19.jpeg",
        "/images/projects/corona1.jpg",
        "/images/projects/covid rashan drive.jpg",
        "/images/projects/covid-19 taskforce.jpg",
        "/images/projects/covid-19 rashan.jpg",
      ],
    },
    {
      id: "floods",
      title: "Flood Relief Operations",
      description:
        "In response to Pakistan’s devastating floods, FFP launched extensive relief operations across Sindh and Balochistan, providing emergency food packs, tents, clean water, and medical care to displaced communities. Our teams worked tirelessly on-ground to rebuild homes and restore hope.",
      images: [
        "/images/projects/flood-relief.jpg",
        "/images/projects/desaster-managment.jpg",
      ],
    },
    {
      id: "earthquake",
      title: "Earthquake Emergency Support",
      description:
        "When earthquakes struck different regions of Pakistan, FFP teams were among the first responders — delivering food, shelter materials, and medical aid. We continue to assist affected families with long-term rehabilitation and mental health support.",
      images: [
        "/images/emergency/earthquake1.jpg",
        "/images/emergency/earthquake2.jpg",
        "/images/emergency/earthquake3.jpg",
      ],
    },
    {
      id: "firstaid",
      title: "First Aid & Emergency Training",
      description:
        "Preparedness saves lives. FFP organizes first aid, disaster response, and emergency preparedness workshops to equip individuals with critical life-saving skills and the confidence to act effectively in crisis situations.",
      images: [
        "/images/emergency/firstaid1.jpg",
        "/images/emergency/firstaid2.jpg",
        "/images/emergency/firstaid3.jpg",
      ],
    },
    {
      id: "refugee",
      title: "Refugee Assistance Program",
      description:
        "With compassion and commitment, FFP supports refugees and internally displaced persons (IDPs) through access to education, healthcare, and shelter. Our aim is to restore dignity, safety, and opportunities for those forced to flee their homes.",
      images: [
        "/images/emergency/refugee1.jpg",
        "/images/emergency/refugee2.jpg",
        "/images/emergency/refugee3.jpg",
      ],
    },
  ];

  // Track active image index for each section
  const [activeIndex, setActiveIndex] = useState<number[]>(new Array(emergencies.length).fill(0));

  const handlePrev = (index: number, total: number) => {
    setActiveIndex((prev) =>
      prev.map((val, i) => (i === index ? (val - 1 + total) % total : val))
    );
  };

  const handleNext = (index: number, total: number) => {
    setActiveIndex((prev) =>
      prev.map((val, i) => (i === index ? (val + 1) % total : val))
    );
  };

  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      {/* Header Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-center text-white">
        <Image
          src="/images/projects/ffp emergency.jpg"
          alt="Emergency Relief"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Emergency Relief & Response
          </h1>
          <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto">
            Standing strong with communities in times of crisis — from disaster
            response to recovery and resilience.
          </p>
        </div>
      </section>

      {/* Emergency Sections */}
      <div className="max-w-7xl mx-auto px-6 py-20 space-y-24">
        {emergencies.map((item, index) => (
          <section
            key={item.id}
            id={item.id}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image Slider */}
            <div className="relative w-full md:w-1/2 h-80 rounded-2xl overflow-hidden shadow-lg">
              {item.images.map((img, imgIndex) => (
                <Image
                  key={imgIndex}
                  src={img}
                  alt={item.title}
                  fill
                  className={`object-cover absolute inset-0 transition-opacity duration-700 ${
                    activeIndex[index] === imgIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}

              {/* Left Arrow */}
              <button
                onClick={() => handlePrev(index, item.images.length)}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-[#009688] p-2 rounded-full shadow-md transition"
              >
                <FaChevronLeft />
              </button>

              {/* Right Arrow */}
              <button
                onClick={() => handleNext(index, item.images.length)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-[#EB6D3A] p-2 rounded-full shadow-md transition"
              >
                <FaChevronRight />
              </button>
            </div>

            {/* Text Content */}
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#EB6D3A] to-[#009688] bg-clip-text text-transparent mb-4">
                {item.title}
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {item.description}
              </p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
