"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { useEffect, useState } from "react";

const storyImages = [
  "/images/partners/iqra mou.jpg",
  "/images/partners/jazzcashmou.jpg",
  "/images/partners/jazzcashmou.jpg",
  "/images/partners/techvalleymou.jpg",
  "/images/partners/tms.jpg",
  "/images/partners/hopfelt.jpg",
];

function StoryImageSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % storyImages.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[320px] md:h-[420px] rounded-3xl overflow-hidden shadow-xl">
      {storyImages.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-800 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={img}
            alt="FFP Impact"
            fill
            priority={i === 0}
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      ))}
    </div>
  );
}

export default function PartnersMedia() {
  const partnerLogos: string[] = [
    "/images/partners/1C.png",
    "/images/partners/A.N capital.jpg",
    "/images/partners/ahmed brothers.jpeg",
    "/images/partners/al jadeed sweets.jpg",
    "/images/partners/al jannat dates.jpg",
    "/images/partners/AshreiTech.png",
    "/images/partners/askari life.png",
    "/images/partners/azakaw.png",
    "/images/partners/blue sea.jpeg",
    "/images/partners/brand republic.png",
    "/images/partners/careem.png",
    "/images/partners/clarks.jpeg",
    "/images/partners/deutsche bank.png",
    "/images/partners/farhan brothers.png",
    "/images/partners/fay.jpg",
    "/images/partners/fitcon.png",
    "/images/partners/fix her crown.jpg",
    "/images/partners/foodpanda.png",
    "/images/partners/hamdard.png",
    "/images/partners/iba.png",
    "/images/partners/inclusive artisans market place.png",
    "/images/partners/instant courier service.png",
    "/images/partners/iobm.png",
    "/images/partners/IQ Essentials.png",
    "/images/partners/Iqra university.png",
    "/images/partners/jazzcash.png",
    "/images/partners/meiji.png",
    "/images/partners/mona.png",
    "/images/partners/nafees foods.png",
    "/images/partners/nibd.png",
    "/images/partners/NIC.png",
    "/images/partners/noor bridal cone.jpg",
    "/images/partners/offer blood.jpeg",
    "/images/partners/ola.jpg",
    "/images/partners/organic energy solution.png",
    "/images/partners/panache.jpg",
    "/images/partners/rahat kada hospice.jpg",
    "/images/partners/royal tourism pakistan.png",
    "/images/partners/salman and raheel chartered accountants.png",
    "/images/partners/shoesin.png",
    "/images/partners/soorty.png",
    "/images/partners/soul brothers pakistan.jpg",
    "/images/partners/techvalley.png",
    "/images/partners/the body shop.svg",
    "/images/partners/the chef lab.jpg",
    "/images/partners/unique caterers.jpeg",
    "/images/partners/unique fusion.jpeg",
    "/images/partners/unique perfumes.jpeg",
    "/images/partners/walkeaze.png",
    "/images/partners/ziauddin university.jpg",
  ];
  const mediaLogos: string[] = [
    "/images/Media Partners/aaj news.png",
    "/images/Media Partners/abb takk.png",
    "/images/Media Partners/ary news.jpg",
    "/images/Media Partners/atv news.jpg",
    "/images/Media Partners/baqa.jpg",
    "/images/Media Partners/Business Recorder.png",
    "/images/Media Partners/c21.jpg",
    "/images/Media Partners/dawn news.jpg",
    "/images/Media Partners/dharti tv.jpg",
    "/images/Media Partners/geo news.png",
    "/images/Media Partners/gnn.jpg",
    "/images/Media Partners/gtv.jpg",
    "/images/Media Partners/hum.jpg",
    "/images/Media Partners/international the news.png",
    "/images/Media Partners/k21.jpg",
    "/images/Media Partners/ktn news.jpg",
    "/images/Media Partners/metro1.jpg",
    "/images/Media Partners/ptv.jpg",
    "/images/Media Partners/Roznama Parwan.jpg",
    "/images/Media Partners/saach news.jpg",
    "/images/Media Partners/samaa.jpg",
    "/images/Media Partners/sindh tv.jpg",
    "/images/Media Partners/vsh news.jpg",
  ];
  const splitInThree = <T,>(arr: T[]): T[][] => {
    const size = Math.ceil(arr.length / 3);
    return [arr.slice(0, size), arr.slice(size, size * 2), arr.slice(size * 2)];
  };

  const splitInTwo = <T,>(arr: T[]): T[][] => {
    const size = Math.ceil(arr.length / 2);
    return [arr.slice(0, size), arr.slice(size)];
  };

  const partnerRows = splitInThree(partnerLogos);
  const mediaRows = splitInTwo(mediaLogos);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#fefefe] via-[#faf9f6] to-[#ffffff]">
      {/* FLOATING DONATE BUTTON */}
      <a
        href="/donate"
        className="fixed bottom-6 right-6 z-50 bg-[#EB6D3A] text-white px-6 py-3 rounded-full shadow-lg hover:bg-[#d45b2f] transition font-semibold text-lg"
      >
        Donate
      </a>

      {/* STORY INTRO */}
      <section className="py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* LEFT: STORY */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Building Impact Through
              <span className="text-[#EB6D3A]"> Meaningful Partnerships</span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
              For over 16 years, FFP has worked hand-in-hand with organizations,
              institutions, and media partners to uplift communities, respond to
              crises, and create long-term social change across Pakistan.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="px-8 py-4 bg-[#EB6D3A] text-white rounded-full shadow-lg hover:bg-[#d35d32] transition font-semibold"
              >
                Become a Partner
              </a>

              <a
                href="work"
                className="px-8 py-4 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100 transition font-semibold"
              >
                Learn About FFP
              </a>
            </div>
          </div>

          {/* RIGHT: IMAGE SLIDER */}
          <StoryImageSlider />
        </div>
      </section>

      {/* BODY CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 py-20">
       {/* OUR PARTNERS SECTION */}
<div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-24">
  <section className="
    relative overflow-hidden
    bg-gradient-to-br from-[#fff5ef] via-[#fff9f5] to-[#ffffff]
    py-20
  ">

    {/* subtle dot pattern */}
    <div className="
      absolute inset-0
      bg-[radial-gradient(#eb6d3a22_1px,transparent_1px)]
      bg-[size:20px_20px]
      pointer-events-none
    "></div>

    {/* constrained content */}
    <div className="relative max-w-7xl mx-auto px-6">

      <h2 className="text-3xl font-bold text-gray-900 mb-1">
        Our Partners
      </h2>

      <div className="w-16 h-1 bg-[#EB6D3A] mb-6 rounded-full"></div>

      <p className="text-gray-600 mb-12">
        Trusted by 50+ leading companies & institutions.
      </p>

      <div className="space-y-10">
        {partnerRows.map((row, rowIndex) => (
          <Swiper
            key={rowIndex}
            modules={[Autoplay, FreeMode]}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            freeMode
            speed={2600}
            loop
            slidesPerView={4}
            breakpoints={{
              640: { slidesPerView: 5 },
              768: { slidesPerView: 7 },
              1024: { slidesPerView: 10 },
            }}
            spaceBetween={24}
          >
            {row.map((src, i) => (
              <SwiperSlide key={i}>
                <div className="
                  bg-white p-4 rounded-xl border shadow-sm
                  hover:shadow-lg hover:-translate-y-1
                  hover:ring-1 hover:ring-[#EB6D3A]/20
                  transition duration-300 flex justify-center
                ">
                  <Image
                    src={src}
                    alt="Partner Logo"
                    width={120}
                    height={120}
                    className="object-contain opacity-80 hover:opacity-100 transition"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ))}
      </div>

    </div>
  </section>
</div>



        {/* MEDIA PARTNERS SECTION */}
<div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-24">
  <section className="
    relative overflow-hidden
    bg-gradient-to-br from-[#f3f8ff] via-[#f8fbff] to-[#ffffff]
    py-20
  ">

    {/* grid pattern */}
    <div className="
      absolute inset-0
      bg-[linear-gradient(90deg,#00000008_1px,transparent_1px),
          linear-gradient(#00000008_1px,transparent_1px)]
      bg-[size:26px_26px]
      pointer-events-none
    "></div>

    {/* constrained content */}
    <div className="relative max-w-7xl mx-auto px-6">

      <h2 className="text-3xl font-bold text-gray-900 mb-1">
        Media Partners
      </h2>

      <div className="w-16 h-1 bg-[#EB6D3A] mb-6 rounded-full"></div>

      <p className="text-gray-600 mb-12">
        Media houses amplifying our mission nationwide.
      </p>

      <div className="space-y-10">
        {mediaRows.map((row, rowIndex) => (
          <Swiper
            key={rowIndex}
            modules={[Autoplay, FreeMode]}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            freeMode
            speed={2600}
            loop
            slidesPerView={4}
            breakpoints={{
              640: { slidesPerView: 5 },
              768: { slidesPerView: 7 },
              1024: { slidesPerView: 10 },
            }}
            spaceBetween={24}
          >
            {row.map((src, i) => (
              <SwiperSlide key={i}>
                <div className="
                  bg-white p-4 rounded-xl border shadow-sm
                  hover:shadow-lg hover:-translate-y-1
                  hover:ring-1 hover:ring-[#EB6D3A]/20
                  transition duration-300 flex justify-center
                ">
                  <Image
                    src={src}
                    alt="Media Logo"
                    width={120}
                    height={120}
                    className="object-contain opacity-80 hover:opacity-100 transition"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ))}
      </div>

    </div>
  </section>
</div>



        {/* BLOG */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-1">Blog</h2>
          <div className="w-16 h-1 bg-[#EB6D3A] mb-6 rounded-full"></div>

          <p className="text-gray-600 mb-10">
            Stories & updates from our initiatives.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div className="bg-white rounded-3xl shadow-lg hover:-translate-y-1 transition overflow-hidden">
              <Image
                src="/images/blog1.jpg"
                alt="Blog 1"
                width={600}
                height={350}
                className="object-cover w-full h-56"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">
                  How FFP Impacts Communities
                </h3>
                <p className="text-gray-500 text-sm mt-1">Jan 2025</p>
                <p className="text-gray-700 mt-4">
                  A quick summary of how FFP initiatives are driving community
                  impact.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-lg hover:-translate-y-1 transition overflow-hidden">
              <Image
                src="/images/blog2.jpg"
                alt="Blog 2"
                width={600}
                height={350}
                className="object-cover w-full h-56"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">
                  Upcoming Projects & Expansion
                </h3>
                <p className="text-gray-500 text-sm mt-1">Dec 2024</p>
                <p className="text-gray-700 mt-4">
                  An inside look at new programs and upcoming initiatives.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FULL-WIDTH CTA WITH BACKGROUND */}
        <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw]">
          <section className="relative overflow-hidden h-[380px] flex items-center justify-center">
            {/* Background Image */}
            <Image
              src="/images/partners/join hands.jpg"
              alt="Become a Partner"
              fill
              className="object-cover w-full h-full blur-[1px] brightness-65"
            />

            {/* Content */}
            <div className="relative z-10 text-center px-6 text-white">
              <h2 className="text-4xl font-bold mb-3">
                Want to Partner With FFP?
              </h2>
              <p className="max-w-xl mx-auto mb-8">
                Join hands with Foundation Fighting Poverty-FFP to support under
                privlidged families and communities across Pakistan.
              </p>

              <a
                href="/contact"
                className="px-10 py-4 bg-[#EB6D3A] text-white rounded-full shadow-xl hover:bg-[#d35d32] transition text-lg font-semibold"
              >
                Become a Partner
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
