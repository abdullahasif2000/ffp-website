"use client";

import Image from "next/image";
import Slider from "react-slick";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
  FaHandsHelping,
  FaUserGraduate,
  FaBriefcase,
  FaCertificate,
  FaTree,
  FaBook,
  FaHospital,
  FaUtensils,
  FaMoneyBill,
  FaFlag,
  FaWater,
  FaUsers,
  FaGoogle,
} from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CounterCardProps {
  icon: React.ElementType;
  label: string;
  value: number;
}

function CounterCard({ icon: Icon, label, value }: CounterCardProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div ref={ref} className="relative flex items-center justify-center">
      {/* Gradient border wrapper */}
      <div className="rounded-full p-[3px] bg-gradient-to-r from-[#009688] to-[#EB6D3A]">
        {/* Inner circle */}
        <div
          className="bg-white rounded-full shadow-lg w-36 h-36 flex flex-col 
                     items-center justify-center p-6 transition-all duration-400 
                     hover:shadow-2xl hover:-translate-y-1"
        >
          {/* Icon */}
          <div className="bg-gradient-to-br from-[#EB6D3A] to-[#009688] text-white 
                          p-3 rounded-full mb-2 shadow-md group-hover:scale-110 
                          transition-transform duration-300">
            <Icon size={22} />
          </div>

          {/* Number Counter */}
          <h3 className="text-xl md:text-2xl font-extrabold text-[#EB6D3A] mb-1 drop-shadow-sm">
            {inView ? <CountUp end={value} duration={2.5} separator="," /> : 0}
          </h3>

          {/* Label */}
          <p className="text-gray-700 font-medium text-xs md:text-sm text-center leading-snug">
            {label}
          </p>
        </div>
      </div>
    </div>
  );
}


export default function HomePage() {
  const banners = ["/images/logo/16-years.jpg", "/images/logo/BANNER-1.jpeg"];

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

      {/*  Combined Forms Section */}
<section id="forms" className="py-14 px-6 bg-gray-50">
  <h2 className="text-2xl md:text-3xl font-extrabold text-[#009688] mb-10 text-center tracking-wide">
    Be A Part Of Our Mission
  </h2>

  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Volunteer Form */}
    <div
      className="bg-white rounded-xl border border-gray-100 shadow-md 
              flex flex-col p-6 transition-all duration-300 
              hover:shadow-xl hover:-translate-y-1 hover:border-[#EB6D3A]"
    >
      <div className="flex items-center mb-4">
        <div className="bg-gradient-to-r from-[#EB6D3A] to-orange-500 p-3 rounded-full text-white mr-3 shadow">
          <FaHandsHelping size={22} />
        </div>
        <h3 className="text-xl font-semibold text-[#009688]">
          Become a Volunteer
        </h3>
      </div>
      <p className="text-gray-600 mb-5 leading-relaxed flex-grow text-sm">
        Join us as a volunteer and contribute your time, skills, and
        energy towards serving communities in need. We welcome individuals
        from all backgrounds who want to make a difference.
      </p>
      <a
        href="https://forms.gle/your-volunteer-form-link"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-block bg-[#EB6D3A] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-orange-500 shadow hover:shadow-md transition transform hover:scale-105 text-center"
      >
        Fill Volunteer Form
      </a>
    </div>

    {/* Internship Form */}
    <div
      className="bg-white rounded-xl border border-gray-100 shadow-md 
              flex flex-col p-6 transition-all duration-300 
              hover:shadow-xl hover:-translate-y-1 hover:border-[#EB6D3A]"
    >
      <div className="flex items-center mb-4">
        <div className="bg-gradient-to-r from-[#EB6D3A] to-orange-500 p-3 rounded-full text-white mr-3 shadow">
          <FaUserGraduate size={22} />
        </div>
        <h3 className="text-xl font-semibold text-[#009688]">
          Internship Program
        </h3>
      </div>
      <p className="text-gray-600 mb-5 leading-relaxed flex-grow text-sm">
        Looking for practical experience? Apply for our internship program
        and gain hands-on exposure while working on impactful projects
        that help communities across Pakistan.
      </p>
      <a
        href="https://forms.gle/your-internship-form-link"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-block bg-[#EB6D3A] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-orange-500 shadow hover:shadow-md transition transform hover:scale-105 text-center"
      >
        Fill Internship Form
      </a>
    </div>

    {/* Job Application */}
    <div
      className="bg-white rounded-xl border border-gray-100 shadow-md 
              flex flex-col p-6 transition-all duration-300 
              hover:shadow-xl hover:-translate-y-1 hover:border-[#EB6D3A]"
    >
      <div className="flex items-center mb-4">
        <div className="bg-gradient-to-r from-[#EB6D3A] to-orange-500 p-3 rounded-full text-white mr-3 shadow">
          <FaBriefcase size={22} />
        </div>
        <h3 className="text-xl font-semibold text-[#009688]">
          Job Application
        </h3>
      </div>
      <p className="text-gray-600 mb-5 leading-relaxed flex-grow text-sm">
        Apply for open positions at our foundation and become part of a
        passionate team working to uplift underprivileged communities.
      </p>
      <a
        href="https://forms.gle/your-job-form-link"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-block bg-[#EB6D3A] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-orange-500 shadow hover:shadow-md transition transform hover:scale-105 text-center"
      >
        Apply for Jobs
      </a>
    </div>

    {/* Google Career Certificate */}
    <div
      className="bg-white rounded-xl border border-gray-100 shadow-md 
              flex flex-col p-6 transition-all duration-300 
              hover:shadow-xl hover:-translate-y-1 hover:border-[#EB6D3A]"
    >
      <div className="flex items-center mb-4">
        <div className="bg-gradient-to-r from-[#EB6D3A] to-orange-500 p-3 rounded-full text-white mr-3 shadow">
          <FaCertificate size={22} />
        </div>
        <h3 className="text-xl font-semibold text-[#009688]">
          Google Career Certification
        </h3>
      </div>
      <p className="text-gray-600 mb-5 leading-relaxed flex-grow text-sm">
        Gain in-demand skills with Google Career Certificates. Register
        now and start your journey toward professional growth and better
        opportunities.
      </p>
      <a
        href="https://forms.gle/your-google-career-form-link"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-block bg-[#EB6D3A] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-orange-500 shadow hover:shadow-md transition transform hover:scale-105 text-center"
      >
        Register Now
      </a>
    </div>
  </div>
</section>

{/* border */}
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

{/* counter section */}
      <section id="counters" className="py-16 px-6 bg-white">
  <h2 className="text-3xl md:text-4xl font-extrabold mb-7 text-center tracking-wide bg-gradient-to-r from-[#009688] to-[#EB6D3A] bg-clip-text text-transparent">
    Our Impact So Far
  </h2>

  {/* Decorative underline */}
  <div className="w-50 h-1 bg-gradient-to-r from-[#009688] to-[#EB6D3A] mx-auto rounded-full mb-12"></div>

  <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
    {[
      { label: "Total Years Served", value: 16, icon: FaFlag },
      { label: "Total Beneficiaries", value: 12500, icon: FaUsers },
      { label: "Rashan Served", value: 8300, icon: FaUtensils },
      { label: "Marriage & Rent Support", value: 420, icon: FaMoneyBill },
      { label: "Trees Planted", value: 950, icon: FaTree },
      { label: "Education Cases", value: 3100, icon: FaBook },
      { label: "Medical Cases", value: 2100, icon: FaHospital },
      { label: "Food Served", value: 5400, icon: FaUtensils },
      { label: "Income Support", value: 780, icon: FaMoneyBill },
      { label: "Campaigns in Pakistan", value: 65, icon: FaFlag },
      { label: "Water Boring Beneficiaries", value: 1200, icon: FaWater },
      { label: "Total Members", value: 350, icon: FaUsers },
      {
        label: "Google Career Certifications",
        value: 150,
        icon: FaGoogle,
      },
    ].map((counter, index) => (
      <CounterCard
        key={index}
        label={counter.label}
        value={counter.value}
        icon={counter.icon}
      />
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

  {/*  Vision & Mission Section */}
<section id="vision-mission" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-gray-100">
  <div className="max-w-6xl mx-auto space-y-20">

{/* Vision Section */}
<div className="bg-white shadow-lg rounded-2xl p-8 text-center md:text-left">
  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
    {/* Logo */}
    <img
      src="/images/logo/logo-png.png"
      alt="Foundation Logo"
      className="w-40 md:w-52 drop-shadow-lg"
    />

    {/* Text */}
    <div>
      <h2 className="text-2xl md:text-3xl font-extrabold text-[#009688] mb-3">
        Our Vision
      </h2>

      {/* Gradient Bar */}
      <div className="w-24 h-1 bg-gradient-to-r from-[#009688] to-[#EB6D3A] mb-4 rounded-full mx-auto md:mx-0"></div>

      {/* Paragraph */}
      <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl">
        Empowering people for a green, sustainable, and happy life.
        <br /><br />
        FFPs mission is to alleviate poverty in Pakistan by advancing 
        <span className="font-semibold text-[#EB6D3A]"> sustainable livelihood opportunities </span>
        and enhancing the resilience of vulnerable communities. We are committed to supporting 
        underprivileged families through initiatives that improve 
        <span className="font-semibold text-[#009688]"> income generation, education, and overall well-being. </span>
        <br /><br />
        By fostering <span className="font-semibold text-[#EB6D3A]">self-reliance</span> and promoting 
        <span className="font-semibold text-[#009688]"> community-driven development,</span> we aim to contribute 
        to a more equitable, sustainable, and prosperous society.
      </p>
    </div>
  </div>
</div>



    {/* Mission */}
    <div>
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#009688] text-center mb-6">
        Scope Of Our Mission
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-[#009688] to-[#EB6D3A] mb-10 rounded-full mx-auto"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {[
          { icon: "🌍", title: "Better Pakistan", desc: "Building a sustainable and inclusive future for our nation." },
          { icon: "📚", title: "Educational Awareness", desc: "Spreading knowledge and opportunities for lifelong learning." },
          { icon: "🍞", title: "Basic Needs", desc: "Providing food, shelter, and healthcare to those in need." },
          { icon: "🗣️", title: "Social Awareness", desc: "Raising voices for equality, justice, and community strength." },
          { icon: "🌱", title: "Environment Welfare", desc: "Promoting eco-friendly practices for a greener tomorrow." },
          { icon: "⚖️", title: "Gender Equality", desc: "Ensuring equal opportunities and dignity for all genders." },
          { icon: "💧", title: "Water Sanitation", desc: "Improving access to clean water and hygienic practices." },
          { icon: "🛠️", title: "Skill Development", desc: "Equipping youth with skills for employment and growth." },
          { icon: "🍽️", title: "No Hunger Initiative", desc: "Fighting hunger through food drives and sustainable aid." }
        ].map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center bg-white p-4 rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1"
          >
            <div className="text-2xl bg-gradient-to-br from-[#EB6D3A] to-[#009688] text-white w-12 h-12 flex items-center justify-center rounded-full mb-3 shadow">
              {item.icon}
            </div>
            <h3 className="font-semibold text-[#EB6D3A] text-sm mb-1">{item.title}</h3>
            <p className="text-gray-600 text-xs leading-snug">{item.desc}</p>
          </div>
        ))}
      </div>
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

{/*  SDGs Section */}
<section id="sdgs" className="py-16 px-6 bg-gray-50">
  <div className="max-w-6xl mx-auto">
    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-extrabold text-[#009688] text-center mb-4">
      Our SDG Commitment
    </h2>
    <div className="w-24 h-1 mx-auto mb-10 bg-gradient-to-r from-[#009688] to-[#EB6D3A] rounded-full"></div>

    {/* SDG Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { num: "01", title: "No Poverty", desc: "End poverty in all its forms everywhere." },
        { num: "02", title: "Zero Hunger", desc: "Ensure food security and better nutrition." },
        { num: "03", title: "Health", desc: "Promote healthy lives and well-being." },
        { num: "04", title: "Education", desc: "Inclusive and equitable quality education." },
        { num: "05", title: "Equality", desc: "Achieve gender equality and empower women." },
        { num: "06", title: "Clean Water", desc: "Ensure access to safe water and sanitation." },
        { num: "07", title: "Clean Energy", desc: "Affordable and sustainable energy for all." },
        { num: "08", title: "Growth", desc: "Promote sustained growth and decent work." },
        { num: "13", title: "Climate", desc: "Take urgent action against climate change." },
        { num: "16", title: "Peace & Justice", desc: "Promote peaceful and inclusive societies." },
        { num: "17", title: "Partnerships", desc: "Strengthen global partnerships for goals." },
      ].map((goal, idx) => (
        <div
          key={idx}
          className="flex items-center bg-white p-4 rounded-xl shadow hover:shadow-md transition"
        >
          {/* Icon */}
          <img
            src={`/images/sdgs/Goal-${goal.num}.png`}
            alt={goal.title}
            className="w-14 h-14 object-contain mr-4 flex-shrink-0"
          />
          {/* Text */}
          <div>
            <h3 className="text-base font-semibold text-[#009688]">
              {goal.title}
            </h3>
            <p className="text-gray-600 text-xs">{goal.desc}</p>
          </div>
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
{/* Our Existence Section */}
<section id="existence" className="py-20 px-6 bg-gray-50">
  <div className="max-w-5xl mx-auto text-center">
    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-extrabold text-[#009688] mb-6">
      Our Existence
    </h2>
    <div className="w-24 h-1 mx-auto mb-12 bg-gradient-to-r from-[#009688] to-[#EB6D3A] rounded-full"></div>

    {/* Map Container */}
    <div className="relative w-full max-w-3xl mx-auto">
      {/* Pakistan Map */}
      <img
        src="/images/logo/pk-map.svg"
        alt="Pakistan Map"
        className="w-full h-auto scale-90"
      />

      {/* Karachi */}
      <div className="absolute top-[75%] left-[40%] transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-4 h-4 bg-[#EB6D3A] rounded-full border-2 border-white shadow-md"></div>
        <p className="text-xs font-semibold text-gray-800 mt-1">Karachi</p>
      </div>

      {/* Lahore */}
      <div className="absolute top-[46%] left-[57%] transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-4 h-4 bg-[#009688] rounded-full border-2 border-white shadow-md"></div>
        <p className="text-xs font-semibold text-gray-800 mt-1">Lahore</p>
      </div>

      {/* Islamabad */}
      <div className="absolute top-[32%] left-[54%] transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-4 h-4 bg-[#007ACC] rounded-full border-2 border-white shadow-md"></div>
        <p className="text-xs font-semibold text-gray-800 mt-1">Islamabad</p>
      </div>

      {/* Faisalabad */}
      <div className="absolute top-[50%] left-[54%] transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-4 h-4 bg-[#FFC107] rounded-full border-2 border-white shadow-md"></div>
        <p className="text-xs font-semibold text-gray-800 mt-1">Faisalabad</p>
      </div>
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

{/*  Chairman's Note Section */}
<section id="chairman-note" className="py-20 px-6 bg-white">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-05 items-center">
    
    {/* Left - Chairman Image */}
    <div className="flex justify-start">
      <img
        src="/images/logo/abdullah-image.jpg"
        alt="Chairman"
        className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-lg border-4 border-[#009688]"
      />
    </div>

    {/* Right - Note */}
    <div>
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#009688] mb-4">
        Chairman’s Note
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-[#009688] to-[#EB6D3A] mb-6 rounded-full"></div>
      
      <p className="text-lg text-gray-700 leading-relaxed line-clamp-14">
        In the name of Allah, the most merciful and the most beneficent. 
        It is an honour to represent such a prestigious NGO globally.{" "}
        <span className="font-semibold text-[#EB6D3A]">Foundation Fighting Poverty</span>{" "} 
        has flourished on the shoulders of its well-wishers and those who put humanity 
        before their own needs. I want to thank, encourage and appreciate all of our members 
        for their hard work. I see FFP growing stronger and more influential than ever with 
        each passing year and my hope is that one day we can make a lasting change towards 
        the poverty situation in our country and globally. “Happiness is the only key to success.” 
        The reason I founded FFP was to bring happiness to others by helping each other. 
        FFP has a strong motto to build an educated and healthy world by working on sectors 
        like climate change, education, water & sanitation, no hunger initiative, healthy life, 
        gender equality & social awareness.
      </p>

      {/* Signature */}
      <p className="mt-6 font-semibold text-[#EB6D3A] text-lg italic">
        — Abdullah Ehsan Syed <br />
        <span className="text-[#009688] font-bold not-italic">
          Chairman & Founder, FFP
        </span>
      </p>
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
      
    </div>
  );
}
