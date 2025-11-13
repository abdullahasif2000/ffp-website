"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

// ✅ TEAM CARD
interface TeamCardProps {
  name: string;
  designation: string;
  image: string;
  bio: string;
}

function TeamCard({ name, designation, image, bio }: TeamCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleFlip = () => {
    if (isMobile) setIsFlipped((prev) => !prev);
  };

  return (
    <div
      className={`relative w-64 h-72 mx-auto cursor-pointer ${
        isMobile ? "" : "group"
      }`}
      onClick={handleFlip}
    >
      <div
        className={`w-full h-full transition-transform duration-700 transform preserve-3d relative ${
          isMobile
            ? isFlipped
              ? "rotate-y-180"
              : ""
            : "group-hover:rotate-y-180"
        }`}
      >
        {/* FRONT */}
        <div
          className="
            absolute inset-0 backface-hidden 
            bg-white rounded-3xl p-6
            shadow-[6px_6px_12px_#d4d4d4,-6px_-6px_12px_#ffffff]
            hover:shadow-lg
            flex flex-col items-center justify-center
            transition-all
          "
        >
          <div className="w-32 h-44 rounded-[30%] overflow-hidden border-4 border-[#EB6D3A]/60">
            <Image
              src={image}
              alt={name}
              width={160}
              height={200}
              className="object-cover w-full h-full"
            />
          </div>

          <h3 className="text-lg font-bold mt-3 text-gray-800">{name}</h3>
          <p className="text-sm text-[#009688] font-medium">{designation}</p>

          <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-[#EB6D3A] to-[#FF9B59] rounded-b-3xl"></div>
        </div>

        {/* BACK */}
        <div
          className="
            absolute inset-0 backface-hidden rotate-y-180
            bg-white/90 backdrop-blur-md
            rounded-3xl p-6
            border border-white/40
            shadow-lg
            flex items-center justify-center text-center
          "
        >
          <p className="text-sm text-gray-700 leading-relaxed px-3">{bio}</p>
          <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-[#EB6D3A] to-[#FF9B59] rounded-b-3xl"></div>
        </div>
      </div>
    </div>
  );
}

// ✅ MAIN PAGE
export default function TeamPage() {
  const [showPopup, setShowPopup] = useState(false);
  const ctaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setShowPopup(true);
      },
      { threshold: 0.3 }
    );
    if (ctaRef.current) observer.observe(ctaRef.current);
    return () => observer.disconnect();
  }, []);

  // DATA
  const board = [
    {
      name: "Muhammad Hassan Rahim",
      designation: "Vice President",
      image: "/images/team/hassanrahim.png",
      bio: "Leads nationwide planning and organizational expansion.",
    },
    {
      name: "Talha Ahmed",
      designation: "General Secretary",
      image: "/images/team/talhaahmed.png",
      bio: "Responsible for organizational coordination and planning.",
    },
    {
      name: "Muhammad Sabih",
      designation: "Joint Secretary",
      image: "/images/team/sabih.jpg",
      bio: "Supports management functions and welfare operations.",
    },
  ];

  const management = [
    {
      name: "Syed Muhammad Ghous",
      designation: "Country Manager",
      image: "/images/team/smg.png",
      bio: "Oversees departments, operational planning & strategic execution.",
    },
    {
      name: "Shahzar Shakeel",
      designation: "Operations Manager",
      image: "/images/team/shahzar_operationmanager.png",
      bio: "Manages field activities, response programs & logistics.",
    },
  ];

  const members = [
    {
      name: "Muhammad Bilal",
      designation: "Shariah Advisor",
      image: "/images/team/bilal_shariah.png",
      bio: "Ensures compliance of welfare activities with Shariah principles.",
    },
    {
      name: "Abdullah Asif",
      designation: "Facilitator Google Career Certificates",
      image: "/images/team/abdullah_image.png",
      bio: "Handles GCC program, learner support & training.",
    },
    {
      name: "Atif Aziz",
      designation: "Sr Office Associate",
      image: "/images/team/atif_aziz-bg.png",
      bio: "Administrative coordination & operational support.",
    },
    {
      name: "Abdul Raheem",
      designation: "Admin Officer",
      image: "/images/team/abdulraheem_admin.png",
      bio: "Responsible for inventory, logistics, and coordination.",
    },
    {
      name: "Muhammad Ali",
      designation: "Office Boy",
      image: "/images/team/member2.jpg",
      bio: "Assists daily office operations and field support.",
    },
    {
      name: "Nadir Ali",
      designation: "Office Boy",
      image: "/images/team/member3.jpg",
      bio: "Support in office work & logistics.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 text-gray-800">

      {/* BANNER */}
      <section className="relative h-[55vh] flex items-center justify-center text-center text-white">
        <Image
          src="/images/team/team banner.jpg"
          alt="Team Banner"
          fill
          className="object-cover brightness-50"
        />
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold">Our Team</h1>
          <p className="text-lg md:text-xl mt-3">
            The people turning compassion into action.
          </p>
        </div>
      </section>

      {/* CHAIRMAN */}
      <section className="py-20 text-center bg-gradient-to-r from-[#009688]/10 to-[#EB6D3A]/10">
        <Image
          src="/images/team/AES.png"
          alt="Chairman"
          width={200}
          height={200}
          className="rounded-[30%] mx-auto border-4 border-[#EB6D3A]/60 shadow-xl"
        />
        <h2 className="text-3xl font-bold mt-6 mb-1">Founder & President</h2>
        <p className="text-xl font-semibold">Abdullah Eshan Syed</p>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed">
          “At FFP, our journey is fueled by humanity and service.”
        </p>
      </section>

      {/* BOARD */}
      <div className="h-1 bg-gradient-to-r from-[#EB6D3A] to-[#009688] w-1/3 mx-auto rounded-full my-16"></div>
      <section className="max-w-7xl mx-auto text-center mb-20 px-6">
        <h2 className="text-3xl font-extrabold mb-12 bg-gradient-to-r from-[#EB6D3A] to-[#009688] bg-clip-text text-transparent">
          Leadership
        </h2>
        <div className="flex flex-wrap justify-center gap-10">
          {board.map((p, i) => (
            <TeamCard key={i} {...p} />
          ))}
        </div>
      </section>

      {/* MANAGEMENT */}
      <div className="h-1 bg-gradient-to-r from-[#009688] to-[#EB6D3A] w-1/2 mx-auto rounded-full my-16"></div>
      <section className="max-w-7xl mx-auto text-center mb-20 px-6">
        <h2 className="text-3xl font-extrabold mb-12 bg-gradient-to-r from-[#009688] to-[#EB6D3A] bg-clip-text text-transparent">
          Management Team
        </h2>
        <div className="flex justify-center gap-10">
          {management.map((p, i) => (
            <TeamCard key={i} {...p} />
          ))}
        </div>
      </section>

      {/* MEMBERS */}
      <div className="h-1 bg-gradient-to-r from-[#EB6D3A] to-[#009688] w-2/3 mx-auto rounded-full my-16"></div>
      <section className="max-w-7xl mx-auto text-center mb-20 px-6">
        <h2 className="text-3xl font-extrabold mb-12 bg-gradient-to-r from-[#EB6D3A] to-[#009688] bg-clip-text text-transparent">
          Team Members
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-center">
          {members.map((p, i) => (
            <TeamCard key={i} {...p} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        ref={ctaRef}
        className="py-20 bg-gradient-to-r from-[#EB6D3A]/10 to-[#009688]/10 text-center mt-10"
      >
        <h2 className="text-3xl font-extrabold text-gray-800">
          Be a Part of Our Mission
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
          Want to contribute to meaningful social impact in Pakistan?
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfk9-dj5bBT8O1eYErHWF_eXhIDUtIfPJBwqOzdtgiO6CIXPw/viewform"
          target="_blank"
          className="inline-block mt-8 bg-gradient-to-r from-[#EB6D3A] to-[#FF9B59]
            text-white font-bold px-10 py-3 rounded-full shadow-lg hover:shadow-2xl
            hover:scale-105 transition-transform duration-200"
        >
          Apply Now
        </a>
        <p className="text-sm text-gray-500 mt-3">
          Internship • Volunteer • Full-Time Roles
        </p>
      </section>

      {/* POPUP */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[200]">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md text-center relative animate-scaleIn">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
              onClick={() => setShowPopup(false)}
            >
              ✕
            </button>
            <h2 className="text-2xl font-extrabold text-gray-800">
              Join Our Mission
            </h2>
            <p className="text-gray-600 mt-3">
              Become part of Pakistan’s most dedicated social impact efforts.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfk9-dj5bBT8O1eYErHWF_eXhIDUtIfPJBwqOzdtgiO6CIXPw/viewform"
              target="_blank"
              className="inline-block mt-6 bg-gradient-to-r from-[#EB6D3A] to-[#FF9B59]
                text-white font-bold px-8 py-2 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-transform"
            >
              Apply Now
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
