"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

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
    if (isMobile) setIsFlipped(prev => !prev);
  };

  return (
    <div
      className={`relative w-64 h-72 mx-auto cursor-pointer ${
        isMobile ? "" : "group"
      }`}
      onClick={handleFlip}
    >
      <div
        className={`
          transition-transform duration-700 transform w-full h-full relative preserve-3d
          ${
            isMobile
              ? isFlipped
                ? "rotate-y-180"
                : ""
              : "group-hover:rotate-y-180"
          }
        `}
      >

        {/*  FRONT SIDE */}
        <div className="
  absolute inset-0 backface-hidden 
  bg-[#f5f5f5] 
  rounded-3xl p-6
  shadow-[6px_6px_12px_#cccccc,-6px_-6px_12px_#ffffff]
  hover:shadow-[8px_8px_15px_#c9c9c9,-8px_-8px_15px_#ffffff]
  transition-all
  flex flex-col items-center justify-center
">

          <div className="w-32 h-44 rounded-[30%] overflow-hidden border-4 border-[#EB6D3A]/60">
            <Image
              src={image}
              alt={name}
              width={160}
              height={160}
              className="object-cover w-full h-full"
            />
          </div>

          <h3 className="text-lg font-bold mt-3 text-gray-800">{name}</h3>
          <p className="text-sm text-[#009688] font-medium">{designation}</p>

          <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-[#EB6D3A] to-[#FF9B59] rounded-b-3xl"></div>
        </div>

        {/* BACKSIDE */}
        <div
          className="
            absolute inset-0 backface-hidden rotate-y-180
            bg-white/80 backdrop-blur-md 
            border border-white/30
            rounded-3xl p-6 
            shadow-[0_4px_20px_rgba(0,0,0,0.08)]
            hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]
            flex items-center justify-center text-center
            transition-all
            hover:scale-105
          "
        >
          <p className="text-sm text-gray-700 leading-relaxed px-2">
            {bio}
          </p>

          <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-[#EB6D3A] to-[#FF9B59] rounded-b-3xl"></div>
        </div>

      </div>
    </div>
  );
}


export default function TeamPage() {
  const board = [
    {
      name: "Muhammad Hassan Rahim",
      designation: "Vice President",
      image: "/images/team/hassanrahim.png",
      bio: "Leading strategic commitments and nationwide operational support.",
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
      image: "/images/team/manager1.jpg",
      bio: "Oversees departments, operational planning, and strategic execution.",
    },
    {
      name: "Shahzar Shakeel",
      designation: "Operations Manager",
      image: "/images/team/shahzar_operationmanager.png",
      bio: "Manages field activities, response programs, and coordination.",
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
      designation: "GCC Facilitator",
      image: "/images/team/abdullah_image.png",
      bio: "Manages Google Career Certificates program & learner engagement.",
    },
    {
      name: "Atif Aziz",
      designation: "Sr Office Associate",
      image: "/images/team/atif_aziz-bg.png",
      bio: "Handles key administrative and field support functions.",
    },
    {
      name: "Abdul Raheem",
      designation: "Admin Officer",
      image: "/images/team/abdulraheem_admin.png",
      bio: "Responsible for inventory, logistics, and recordkeeping.",
    },
    {
      name: "Ali",
      designation: "Office Boy",
      image: "/images/team/member2.jpg",
      bio: "Provides support in daily office tasks and event logistics.",
    },
    {
      name: "Nadir",
      designation: "Office Boy",
      image: "/images/team/member3.jpg",
      bio: "Assists in operations and office coordination.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 text-gray-800">
      {/* Banner */}
      <section className="relative h-[55vh] flex items-center justify-center text-center text-white">
        <Image
          src="/images/team/team banner.jpg"
          alt="Team Banner"
          fill
          className="object-cover brightness-50"
          priority
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
        <p className="text-xl font-semibold text-gray-800">
          Abdullah Eshan Syed
        </p>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed">
          “At FFP, our journey is fueled by humanity and service. Together we
          create impact that lasts.”
        </p>
      </section>

      {/* Leadership */}
      <div className="h-1 bg-gradient-to-r from-[#EB6D3A] to-[#009688] w-1/3 mx-auto rounded-full my-16"></div>

      <section className="max-w-7xl mx-auto text-center mb-20 px-6">
        <h2 className="text-3xl font-extrabold mb-12 bg-gradient-to-r from-[#EB6D3A] to-[#009688] bg-clip-text text-transparent">
          Leadership
        </h2>

        <div className="flex flex-wrap justify-center gap-10">
          {board.map((person, index) => (
            <TeamCard key={index} {...person} />
          ))}
        </div>
      </section>

      {/* Management */}
      <div className="h-1 bg-gradient-to-r from-[#009688] to-[#EB6D3A] w-1/2 mx-auto rounded-full my-16"></div>

      <section className="max-w-7xl mx-auto text-center mb-20 px-6">
        <h2 className="text-3xl font-extrabold mb-12 bg-gradient-to-r from-[#009688] to-[#EB6D3A] bg-clip-text text-transparent">
          Management Team
        </h2>

        <div className="flex justify-center gap-10">
          {management.map((person, index) => (
            <TeamCard key={index} {...person} />
          ))}
        </div>
      </section>

      {/* Members */}
      <div className="h-1 bg-gradient-to-r from-[#EB6D3A] to-[#009688] w-2/3 mx-auto rounded-full my-16"></div>

      <section className="max-w-7xl mx-auto text-center mb-20 px-6">
        <h2 className="text-3xl font-extrabold mb-12 bg-gradient-to-r from-[#EB6D3A] to-[#009688] bg-clip-text text-transparent">
          Team Members
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-center">
          {members.map((person, index) => (
            <TeamCard key={index} {...person} />
          ))}
        </div>
      </section>

      {/* JOIN OUR MISSION CTA */}
<section className="py-20 bg-gradient-to-r from-[#EB6D3A]/10 to-[#009688]/10 text-center mt-10">
  <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
    Be a Part of Our Mission
  </h2>

  <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4 leading-relaxed">
    Want to contribute to meaningful social impact in Pakistan?
    Join our mission to empower communities, support education,
    and create sustainable change.
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

    </div>
  );
}
