"use client";

import Image from "next/image";
import Slider from "react-slick";
import { FaHandsHelping, FaUserGraduate, FaBriefcase, FaCertificate } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HomePage() {
  const banners = [
    "/images/logo/16-years.jpg",
    "/images/logo/BANNER-1.jpeg",
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
    <section id="banners" className="relative h-[90vh] w-full">
  <Slider {...settings}>
    {banners.map((banner, index) => (
      <div key={index} className="relative h-[90vh] w-full">
        <Image
          src={banner}
          alt={`Banner ${index + 1}`}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        {/* Overlay + Content */}
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Foundation Fighting Poverty
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
            You Donate, We Serve!
          </p>
          <button className="bg-[#EB6D3A] px-6 py-3 rounded-full font-semibold hover:bg-orange-500 transition">
            Learn More
          </button>
        </div>
      </div>
    ))}
  </Slider>
</section>

<div className="relative">
  <svg
    className="w-full h-20 text-[#EB6D3A]"
    viewBox="0 0 1440 320"
    preserveAspectRatio="none"
  >
    <path
      fill="currentColor"
      d="M0,224L48,202.7C96,181,192,139,288,122.7C384,107,480,117,576,128C672,139,768,149,864,144C960,139,1056,117,1152,122.7C1248,128,1344,160,1392,176L1440,192L1440,320L0,320Z"
    ></path>
  </svg>
</div>




  {/* ✅ Combined Forms Section */}
<section id="forms" className="py-16 px-6 bg-gray-50">
  <h2 className="text-3xl md:text-4xl font-extrabold text-[#009688] mb-12 text-center tracking-wide">
    Be A Part Of Our Mission
  </h2>

  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
    {/* Volunteer Form */}
    <div className="bg-white rounded-2xl border border-gray-100 shadow-md 
                    flex flex-col p-8 transition-all duration-300 
                    hover:shadow-2xl hover:-translate-y-2 hover:border-[#EB6D3A]">
      <div className="flex items-center mb-5">
        <div className="bg-gradient-to-r from-[#EB6D3A] to-orange-500 p-4 rounded-full text-white mr-4 shadow-md">
          <FaHandsHelping size={26} />
        </div>
        <h3 className="text-2xl font-semibold text-[#009688]">
          Become a Volunteer
        </h3>
      </div>
      <p className="text-gray-600 mb-6 leading-relaxed flex-grow text-base">
        Join us as a volunteer and contribute your time, skills, and energy 
        towards serving communities in need. We welcome individuals from 
        all backgrounds who want to make a difference.
      </p>
      <a
        href="https://forms.gle/your-volunteer-form-link"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-block bg-[#EB6D3A] text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-500 shadow hover:shadow-lg transition transform hover:scale-105 text-center"
      >
        Fill Volunteer Form
      </a>
    </div>

    {/* Internship Form */}
    <div className="bg-white rounded-2xl border border-gray-100 shadow-md 
                    flex flex-col p-8 transition-all duration-300 
                    hover:shadow-2xl hover:-translate-y-2 hover:border-[#EB6D3A]">
      <div className="flex items-center mb-5">
        <div className="bg-gradient-to-r from-[#EB6D3A] to-orange-500 p-4 rounded-full text-white mr-4 shadow-md">
          <FaUserGraduate size={26} />
        </div>
        <h3 className="text-2xl font-semibold text-[#009688]">
          Internship Program
        </h3>
      </div>
      <p className="text-gray-600 mb-6 leading-relaxed flex-grow text-base">
        Looking for practical experience? Apply for our internship program 
        and gain hands-on exposure while working on impactful projects that 
        help communities across Pakistan.
      </p>
      <a
        href="https://forms.gle/your-internship-form-link"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-block bg-[#EB6D3A] text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-500 shadow hover:shadow-lg transition transform hover:scale-105 text-center"
      >
        Fill Internship Form
      </a>
    </div>

    {/* Job Application */}
    <div className="bg-white rounded-2xl border border-gray-100 shadow-md 
                    flex flex-col p-8 transition-all duration-300 
                    hover:shadow-2xl hover:-translate-y-2 hover:border-[#EB6D3A]">
      <div className="flex items-center mb-5">
        <div className="bg-gradient-to-r from-[#EB6D3A] to-orange-500 p-4 rounded-full text-white mr-4 shadow-md">
          <FaBriefcase size={26} />
        </div>
        <h3 className="text-2xl font-semibold text-[#009688]">
          Job Application
        </h3>
      </div>
      <p className="text-gray-600 mb-6 leading-relaxed flex-grow text-base">
        Apply for open positions at our foundation and become part of a 
        passionate team working to uplift underprivileged communities.
      </p>
      <a
        href="https://forms.gle/your-job-form-link"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-block bg-[#EB6D3A] text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-500 shadow hover:shadow-lg transition transform hover:scale-105 text-center"
      >
        Apply for Jobs
      </a>
    </div>

    {/* Google Career Certificate */}
    <div className="bg-white rounded-2xl border border-gray-100 shadow-md 
                    flex flex-col p-8 transition-all duration-300 
                    hover:shadow-2xl hover:-translate-y-2 hover:border-[#EB6D3A]">
      <div className="flex items-center mb-5">
        <div className="bg-gradient-to-r from-[#EB6D3A] to-orange-500 p-4 rounded-full text-white mr-4 shadow-md">
          <FaCertificate size={26} />
        </div>
        <h3 className="text-2xl font-semibold text-[#009688]">
          Google Career Certification
        </h3>
      </div>
      <p className="text-gray-600 mb-6 leading-relaxed flex-grow text-base">
        Gain in-demand skills with Google Career Certificates. Register 
        now and start your journey toward professional growth and better 
        opportunities.
      </p>
      <a
        href="https://forms.gle/your-google-career-form-link"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-block bg-[#EB6D3A] text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-500 shadow hover:shadow-lg transition transform hover:scale-105 text-center"
      >
        Register Now
      </a>
    </div>
  </div>
</section>



    </div>
  );
}
