"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

import {
  FaUniversity,
  FaMoneyBill,
  FaBox,
  FaFileDownload,
  FaQuoteLeft,
} from "react-icons/fa";

export default function DonatePage() {
  //  COUNTERS
  const counterData = [
    { label: "Families Supported", target: 1500 },
    { label: "Ration Bags Distributed", target: 50000 },
    { label: "Students Helped", target: 1850 },
  ];
  const [counts, setCounts] = useState(counterData.map(() => 0));

  useEffect(() => {
    counterData.forEach((item, idx) => {
      let start = 0;
      const step = Math.ceil(item.target / 60);
      const interval = setInterval(() => {
        start += step;
        if (start >= item.target) {
          start = item.target;
          clearInterval(interval);
        }
        setCounts((prev) => {
          const updated = [...prev];
          updated[idx] = start;
          return updated;
        });
      }, 40);
    });
  }, []);

  return (
    <div className="bg-gradient-to-b from-white to-gray-100 min-h-screen pb-20">
      {/*  INTRODUCTION + INSPIRATION SECTION */}
      <section className="w-full bg-gradient-to-b from-white to-gray-100 py-16 px-8 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#009688] mb-4">
            Together, We Can Fight Poverty
          </h1>
          <p className="text-gray-700 leading-relaxed max-w-xl mx-auto md:mx-0 text-lg">
            Foundation Fighting Poverty (FFP) is a registered non-profit
            organization committed to empowering underprivileged communities
            through education, ration drives, healthcare, and sustainable
            livelihoods.
          </p>
          <p className="text-gray-600 mt-4 max-w-lg mx-auto md:mx-0">
            Your donations help us transform lives and create long-term change
            across Pakistan.
          </p>
        </div>

        {/* Right Image Grid */}
        <div className="flex-1 grid grid-cols-2 gap-4">
          {[
            "/images/projects/zero-hunger.jpeg",
            "/images/projects/covid-19.jpeg",
            "/images/projects/flood-relief.jpg",
            "/images/projects/desaster-managment.jpg",
            "/images/projects/madical camp.jpg",
            "/images/projects/widow support.jpg",
            "/images/projects/covid rashan drive.jpg",
            "/images/projects/ramadan.jpeg",
          ].map((src, i) => (
            <div
              key={i}
              className="relative w-full h-48 rounded-xl overflow-hidden shadow-md"
            >
              <Image
                src={src}
                alt={`FFP project ${i + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ✅ COUNTERS */}
      <section className="py-14 bg-white text-center border-b">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
          {counterData.map((item, i) => (
            <div key={i}>
              <h2 className="text-5xl font-extrabold text-[#EB6D3A] animate-pulse">
                {counts[i].toLocaleString()}+
              </h2>
              <p className="text-gray-700 font-medium mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ MAIN SECTION */}
      <div className="py-16 px-6">
        {/* Section A: HOW TO DONATE */}
        <h2 className="text-3xl font-bold text-[#EB6D3A] mt-6 mb-6 text-center">
          How to Donate
        </h2>

        {/* BANK ACCOUNTS */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* General Charity */}
          <div className="bg-white shadow-lg rounded-2xl p-7 border-t-4 border-[#EB6D3A] hover:shadow-xl transition">
            <FaUniversity className="text-5xl text-[#EB6D3A] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-center text-gray-800">
              General Charity Donations
            </h3>
            <div className="mt-4 space-y-2 text-gray-700 text-sm border-t pt-4">
              <p>
                <b>Account Title:</b> Foundation Fighting Poverty
              </p>
              <p>
                <b>Bank:</b> UBL
              </p>
              <p>
                <b>Account #:</b> 2009412649
              </p>
              <p>
                <b>IBAN:</b> PK07UNIL0110002009412649
              </p>
              <p>
                <b>Swift:</b> UNILPKKA
              </p>
            </div>
          </div>

          {/* Zakat */}
          <div className="bg-white shadow-lg rounded-2xl p-7 border-t-4 border-[#009688] hover:shadow-xl transition">
            <FaMoneyBill className="text-5xl text-[#009688] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-center text-gray-800">
              Zakat Donations
            </h3>
            <div className="mt-4 text-gray-700 text-sm border-t pt-4">
              <p>
                <b>Account Title:</b> Foundation Fighting Poverty Zakat
              </p>
              <p>
                <b>Bank:</b> UBL
              </p>
              <p>
                <b>Account #:</b> 2010048063
              </p>
              <p>
                <b>IBAN:</b> PK25UNIL0110002010048063
              </p>
              <p>
                <b>Swift:</b> UNILPKKA
              </p>
            </div>
          </div>

          {/* Both Donations */}
          <div className="bg-white shadow-lg rounded-2xl p-7 border-t-4 border-[#EB6D3A] hover:shadow-xl transition">
            <FaBox className="text-5xl text-[#EB6D3A] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-center text-gray-800">
              Both Charity & Zakat
            </h3>

            <div className="mt-4 text-gray-700 text-sm border-t pt-4">
              <p>
                <b>Account Title:</b> Syed Muhammad Abdullah
              </p>
              <p>
                <b>Bank:</b> UBL
              </p>
              <p>
                <b>Branch:</b> Gulshan-e-Iqbal - 1768
              </p>
              <p>
                <b>Account #:</b> 0230209745
              </p>
              <p>
                <b>IBAN:</b> PK42UNIL0109000230209745
              </p>
              <p>
                <b>Raast / Easypaisa:</b> 0335-2999636
              </p>
            </div>
          </div>
        </div>

        {/* OTHER WAYS */}
        <h2 className="text-3xl font-bold text-[#009688] mt-20 mb-6 text-center">
          Other Ways to Donate
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Commodity */}
          <div className="bg-white shadow-lg rounded-2xl p-7 border-t-4 border-[#009688] hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-center text-gray-800">
              Commodity / Material
            </h3>
            <p className="text-gray-600 text-center mt-2">
              Ration, clothes, books, hygiene kits & relief goods.
            </p>
            <div className="mt-4 text-gray-700 text-sm border-t pt-4 text-center">
              <p>
                <b>Drop-off:</b> C-250, PECHS Block 6, Karachi
              </p>
              <p>
                <b>WhatsApp:</b> 0337-8028418
              </p>
              <p>
                <b>Landline:</b> 0213-4320544
              </p>
            </div>
          </div>

          {/* Cash */}
          <div className="bg-white shadow-lg rounded-2xl p-7 border-t-4 border-[#EB6D3A] hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-center text-gray-800">
              Cash Donation
            </h3>
            <p className="text-gray-600 text-center mt-2">
              Submit cash personally at our office.
            </p>
            <div className="mt-4 text-gray-700 text-sm border-t pt-4 text-center">
              <p>
                <b>Address:</b> C-250, PECHS Block 6
              </p>
              <p>
                <b>Timings:</b> 10 AM – 6 PM
              </p>
              <p>
                <b>WhatsApp:</b> 0337-8028418
              </p>
            </div>
          </div>

          {/* Donation Boxes */}
          <div className="bg-white shadow-lg rounded-2xl p-7 border-t-4 border-[#009688] hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-center text-gray-800">
              Donation Boxes
            </h3>
            <p className="text-gray-600 text-center mt-2">
              Keep donation box at home, shop, office.
            </p>
            <div className="mt-4 text-gray-700 text-sm border-t pt-4 text-center">
              <p>
                <b>Pickup:</b> Available in Karachi
              </p>
              <p>
                <b>WhatsApp:</b> 0337-8028418
              </p>
              <p>
                <b>Landline:</b> 0213-4320544
              </p>
            </div>
          </div>
        </div>

        {/* ✅ PROFESSIONAL IMPORTANT NOTE SECTION */}
        <div className="max-w-5xl mx-auto mt-20 bg-white border rounded-2xl shadow-md p-8">
          <h3 className="text-2xl font-bold text-[#EB6D3A] text-center mb-6">
            Important Donation Guidelines
          </h3>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#EB6D3A] rounded-full mt-2"></div>
              <p className="text-gray-700 text-sm">
                Donations must only be made to the official Foundation Fighting
                Poverty bank accounts.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#009688] rounded-full mt-2"></div>
              <p className="text-gray-700 text-sm">
                After transferring funds, please share the transaction
                screenshot on WhatsApp for verification.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#EB6D3A] rounded-full mt-2"></div>
              <p className="text-gray-700 text-sm">
                Required details after donation: Name, Contact, Amount,
                Zakat/Charity, and Purpose of Donation.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#009688] rounded-full mt-2"></div>
              <p className="text-gray-700 text-sm">
                Doorstep donation pickup service is available within Karachi
                upon request.
              </p>
            </div>
          </div>

          <p className="text-center text-gray-600 text-xs mt-6">
            These steps ensure transparency, accurate record-keeping, and
            issuance of receipts.
          </p>
        </div>

        {/* DOCUMENTS */}
        <h2 className="text-3xl font-bold text-[#009688] mt-20 mb-6 text-center">
          Legal & Verification Documents
        </h2>

        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-7 border-t-4 border-[#009688] text-center">
          <FaFileDownload className="text-5xl text-[#009688] mx-auto mb-4" />
          <div className="space-y-3">
            <a href="#" className="block text-[#EB6D3A] hover:underline">
              Registration Certificate
            </a>
            <a href="#" className="block text-[#EB6D3A] hover:underline">
              Tax Exemption Letter
            </a>
            <a href="#" className="block text-[#EB6D3A] hover:underline">
              Audit Reports
            </a>
            <a href="#" className="block text-[#EB6D3A] hover:underline">
              Corporate Profile
            </a>
          </div>
        </div>

        {/* TESTIMONIALS */}
        <h2 className="text-3xl font-bold text-[#EB6D3A] mt-20 mb-6 text-center">
          What People Say
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "FFP distributes ration and supports needy families regularly.",
            "Highly transparent and trustworthy organization.",
            "They helped us during floods when no one else was willing.",
          ].map((text, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-xl p-6 border border-gray-200 hover:shadow-xl transition"
            >
              <FaQuoteLeft className="text-[#EB6D3A] text-3xl mb-2" />
              <p className="text-gray-700 text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        {/* Footer Contact */}
        <div className="text-center mt-16">
          <p className="text-gray-700 text-lg">
            For international donations & pickup service:
          </p>
          <p className="text-[#009688] font-bold text-xl">contact@ffppk.org</p>
        </div>
      </div>
    </div>
  );
}
