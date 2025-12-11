"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function PartnersMedia() {
  const partnerLogos = [
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

  const mediaLogos = [
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <h1 className="text-4xl font-extrabold text-center mb-16 tracking-tight text-gray-900">
          Partners • Media • Blog
        </h1>

        {/* =============================================
            PARTNER LOGOS SLIDER
        ============================================= */}
        <section className="mb-24">
          <h2 className="text-2xl font-semibold mb-8 text-gray-800">Our Partners</h2>

          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            speed={3000}
            loop={true}
            slidesPerView={3}
            breakpoints={{
              640: { slidesPerView: 4 },
              768: { slidesPerView: 5 },
              1024: { slidesPerView: 7 },
            }}
            spaceBetween={20}
          >
            {partnerLogos.map((src, i) => (
              <SwiperSlide key={i}>
                <div className="flex justify-center">
                  <Image
                    src={src}
                    alt="Partner Logo"
                    width={140}
                    height={140}
                    className="opacity-80 hover:opacity-100 transition duration-200"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* =============================================
            MEDIA LOGOS SLIDER
        ============================================= */}
        <section className="mb-24">
          <h2 className="text-2xl font-semibold mb-8 text-gray-800">Media Partners</h2>

          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            speed={3000}
            loop={true}
            slidesPerView={3}
            breakpoints={{
              640: { slidesPerView: 4 },
              768: { slidesPerView: 5 },
              1024: { slidesPerView: 7 },
            }}
            spaceBetween={20}
          >
            {mediaLogos.map((src, i) => (
              <SwiperSlide key={i}>
                <div className="flex justify-center">
                  <Image
                    src={src}
                    alt="Media Logo"
                    width={140}
                    height={140}
                    className="opacity-80 hover:opacity-100 transition duration-200"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* BLOG SECTION */}
        <section>
          <h2 className="text-2xl font-semibold mb-8 text-gray-800">Blog</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-white/90 p-6 rounded-3xl shadow-md border border-gray-200 hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-gray-900">How FFP Impacts Communities</h3>
              <p className="text-gray-500 text-sm mt-1">Jan 2025</p>
              <p className="text-gray-700 mt-4 leading-relaxed">
                A quick summary of how FFP initiatives are driving community impact and sustainable change.
              </p>
            </div>

            <div className="bg-white/90 p-6 rounded-3xl shadow-md border border-gray-200 hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-gray-900">Upcoming Projects & Expansion</h3>
              <p className="text-gray-500 text-sm mt-1">Dec 2024</p>
              <p className="text-gray-700 mt-4 leading-relaxed">
                An inside look at future plans and educational programs coming soon.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
