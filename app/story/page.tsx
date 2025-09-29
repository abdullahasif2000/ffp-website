"use client";

import Image from "next/image";

export default function StoryPage() {
  return (
    <div className="bg-gray-50">
      {/* ✅ Hero Banner */}
      <section className="relative bg-gradient-to-r from-[#009688] to-[#EB6D3A] text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">
            Our Story
          </h1>
          <p className="mt-4 text-lg font-light text-gray-100">
            Journey of impact, recognition, and transformation at FFP.
          </p>
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

      {/* 🏆 Awards Section */}
<section
  id="awards"
  className="max-w-7xl mx-auto px-6 py-20 bg-gradient-to-b from-gray-50 to-white"
>
  <h2 className="text-4xl font-extrabold text-center bg-gradient-to-r from-[#EB6D3A] to-[#009688] bg-clip-text text-transparent mb-6">
    Awards & Recognitions
  </h2>
  <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
    Honoring our contributions towards community service and development.
  </p>

  {/* Scrollable Awards Gallery */}
  <div className="flex gap-8 overflow-x-auto scrollbar-thin scrollbar-thumb-[#EB6D3A]/70 scrollbar-track-gray-200 pb-6">
    {[
      {
        image: "/images/awards/Hands for help.png",
        title: "Hands For Help",
        description:
          "For collaboration & active participation throughout the course of “Naimat-e-Iftaar”.",
      },
      {
        image: "/images/awards/Iftar fest.png",
        title: "Iftar Fest – Friends Of Gaza",
        description: "In appreciation of esteemed contribution.",
      },
      {
        image: "/images/awards/rotract club support.png",
        title: "Rotaract Club of Karachi Sunrise",
        description:
          "In gratitude and appreciation for unmatched and valuable support to our club FY-2021-22.",
      },
      {
        image: "/images/awards/sbc legacy award.png",
        title: "SBC Legacy Awards 2025",
        description: "Public choice SBC legacy awards Social Worker NGO.",
      },
      {
        image: "/images/awards/rising youth.png",
        title: "Rising Youth",
        description: "Token of Appreciation.",
      },
      {
        image: "/images/awards/rotract club breast cancer.png",
        title: "Rotaract Club – Breast Cancer",
        description:
          "In recognition of valuable support in organizing breast cancer awareness.",
      },
      {
        image: "/images/awards/gia.png",
        title: "Gender Interactive Alliance (GIA)",
        description:
          "In appreciation of service for transgender community of Pakistan on World AIDS Day 2020.",
      },
      {
        image: "/images/awards/young team leader.png",
        title: "Young Team Leader Award",
        description: "Token of Appreciation.",
      },
      {
        image: "/images/awards/5th sawera social worker.png",
        title: "5th SAWERA Award",
        description: "On World NGO Day Pakistan 2022.",
      },
      {
        image: "/images/awards/dwa.png",
        title: "DWA Recognition Award",
        description:
          "Commitment towards supporting persons with disabilities in Pakistan, 2022.",
      },
      {
        image: "/images/awards/ibtida safe house.png",
        title: "IBTIDA Safe House",
        description:
          "Presented by Minister for Women Development, Govt. of Sindh.",
      },
      {
        image: "/images/awards/social change campaign.png",
        title: "Social Change Campaign",
        description: "By College of Media Sciences, Ziauddin University.",
      },
      {
        image: "/images/awards/1st sawera.png",
        title: "1st SAWERA Award",
        description: "On National Award Conference 2022.",
      },
      {
        image: "/images/awards/nasda green energy.png",
        title: "NASDA Green Energy Limited",
        description:
          "Wind Power Project – In appreciation of collaboration & support.",
      },
      {
        image: "/images/awards/together towards tomorrow.png",
        title: "Together Towards Tomorrow",
        description:
          "In recognition of enthusiasm and for making incomparable difference in lives.",
      },
      {
        image: "/images/awards/social impact connect.png",
        title: "The Social Impact Connect",
        description: "By IBA Career Development Center.",
      },
      {
        image: "/images/awards/bird of paradise conf 0.1.png",
        title: "Bird Of Paradise Conf 0.1",
        description: "On the occasion of International Women’s Day.",
      },
    ].map((award, index) => (
      <div
        key={index}
        className="min-w-[260px] bg-white/70 backdrop-blur-lg border border-[#EB6D3A]/30 rounded-2xl p-6 text-center shadow-md hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300"
      >
        {/* Award Image (Circular Medal Style) */}
        <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-[#EB6D3A] to-[#009688] p-[3px]">
          <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
            <Image
              src={award.image}
              alt={award.title}
              width={100}
              height={100}
              className="rounded-full object-contain h-24 w-24"
            />
          </div>
        </div>

        {/* Title & Description */}
        <h3 className="text-lg font-semibold text-gray-800 mt-4">
          {award.title}
        </h3>
        <p className="text-sm text-gray-600 mt-2">{award.description}</p>
      </div>
    ))}
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

      {/*  Heroes Section */}
      <section id="heroes" className="bg-gray-50 py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center bg-gradient-to-r from-[#EB6D3A] to-[#009688] bg-clip-text text-transparent mb-6">
            Our Heroes
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
            Meet the incredible people nation-wide who make our mission
            possible.
          </p>

          {/* Scrollable Hero List */}
          <div className="flex gap-6 overflow-x-auto scrollbar-thin scrollbar-thumb-[#EB6D3A]/70 scrollbar-track-gray-200 pb-4">
            {[
              {
                name: "Abdul Rasheed",
                year: "Since 2022",
                image: "/images/heroes/abdul rasheed.jpeg",
              },
              {
                name: "Danish Khilji",
                year: "Since 2018",
                image: "/images/heroes/danish khilji.jpeg",
              },
              {
                name: "Imdad Ullah Madni",
                year: "Since 2022",
                image: "/images/heroes/imdad ullah madni.jpeg",
              },
              {
                name: "Inam Ul Haq",
                year: "Since 2023",
                image: "/images/heroes/inam ul haq.jpeg",
              },
              {
                name: "Iqra Abrar",
                year: "Since 2024",
                image: "/images/heroes/iqra abrar.jpeg",
              },
              {
                name: "Muneer Ahmed",
                year: "Since 2024",
                image: "/images/heroes/muneer ahmed.jpeg",
              },
              {
                name: "Naveera Tabassum",
                year: "Since 2022",
                image: "/images/heroes/naveera tabassum.jpeg",
              },
              {
                name: "Syed Ammar Ashrafi",
                year: "Since 2021",
                image: "/images/heroes/syed ammar ashrafi.jpeg",
              },
              {
                name: "Wazir Ahmed",
                year: "Since 2022",
                image: "/images/heroes/wazir ahmed.jpeg",
              },
              {
                name: "Haseena Mugheri",
                year: "Since 2023",
                image: "/images/heroes/haseena mugheri.jpeg",
              },
              {
                name: "Sain Bakhish",
                year: "Since 2023",
                image: "/images/heroes/sain bakhish.jpeg",
              },
              {
                name: "Faheem Khan",
                year: "Since 2023",
                image: "/images/heroes/faheem khan.jpeg",
              },
              {
                name: "Amna Akbar",
                year: "Since 2020",
                image: "/images/heroes/dumy.jpeg",
              },
              {
                name: "Daniyal Uddin Hashmi",
                year: "Since 2021",
                image: "/images/heroes/daniyal uddin hashmi.jpeg",
              },
              {
                name: "Alishba Noor",
                year: "Since 2023",
                image: "/images/heroes/alishba noor.jpeg",
              },
              {
                name: "Uniba Malik",
                year: "Since 2023",
                image: "/images/heroes/uniba malik.jpeg",
              },
              {
                name: "Afrah Sadia",
                year: "Since 2023",
                image: "/images/heroes/afrah sadia.jpeg",
              },
              {
                name: "Rija Batool Hashmi",
                year: "Since 2021",
                image: "/images/heroes/rija batool hashmi.jpeg",
              },
              {
                name: "Fatima Batool",
                year: "Since 2021",
                image: "/images/heroes/fatima batool.jpg",
              },
              {
                name: "Tambreen Afzal",
                year: "Since 2021",
                image: "/images/heroes/f.jpeg",
              },
              {
                name: "Syed Umais Nadeem",
                year: "Since 2023",
                image: "/images/heroes/syed umais nadeem.jpeg",
              },
              {
                name: "Alexia Melissa D'souza",
                year: "Since 2024",
                image: "/images/heroes/Alexia Melissa D'souza.jpeg",
              },
              {
                name: "Hadi Mujtaba",
                year: "Since 2014",
                image: "/images/heroes/hadi mujtaba.jpeg",
              },
              {
                name: "Arif Qureshi",
                year: "Since 2023",
                image: "/images/heroes/arif qureshi.jpeg",
              },
              {
                name: "Tambreen Afzal",
                year: "Since 2019",
                image: "/images/heroes/tambreen afzal.jpeg",
              },
            ].map((hero, index) => (
              <div
                key={index}
                className="min-w-[220px] bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              >
                {/* Hero Image with Glow Border */}
                <div className="relative mx-auto w-32 h-32">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#EB6D3A] to-[#009688] p-[3px]">
                    <Image
                      src={hero.image}
                      alt={hero.name}
                      width={200}
                      height={200}
                      className="rounded-full h-full w-full object-cover border-4 border-white"
                    />
                  </div>
                </div>

                {/* Hero Info */}
                <h3 className="text-lg font-semibold text-gray-800 mt-5">
                  {hero.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{hero.year}</p>
              </div>
            ))}
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

      {/* 🔹 Beneficiary Story */}
      <section id="beneficiary" className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full h-72 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/stories/story1.jpg"
              alt="Beneficiary Story"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#009688] mb-4">
              Beneficiary Story
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Meet Fatima, a mother of three, whose life changed after receiving
              monthly rations and skill training from FFP. Today, she runs her
              own small business and supports her children’s education.
            </p>
          </div>
        </div>
      </section>

      {/* 🔹 History Section */}
      <section id="history" className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#009688] mb-6">
            Our History
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
            Since its founding, FFP has been working tirelessly to eradicate
            poverty, provide healthcare, education, and relief to communities
            across Pakistan. Our journey is filled with resilience, growth, and
            hope.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
              <h3 className="text-lg font-semibold text-[#EB6D3A]">
                2009 - The Beginning
              </h3>
              <p className="text-gray-600 mt-2">
                FFP was established with the mission to serve underprivileged
                communities in Karachi.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
              <h3 className="text-lg font-semibold text-[#EB6D3A]">
                2025 - Expanding Impact
              </h3>
              <p className="text-gray-600 mt-2">
                With multiple programs and nationwide projects, FFP extended its
                services across Pakistan.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
