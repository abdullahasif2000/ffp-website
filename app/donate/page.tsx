"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

import {
  FaUniversity,
  FaMoneyBill,
  FaBox,
  FaQuoteLeft,
  FaShieldAlt,
  FaHandsHelping,
  FaClock,
  FaGlobeAmericas,
} from "react-icons/fa";

const DocumentModal = ({ open, onClose, type, src, title }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999]">
      <div className="bg-white rounded-xl shadow-xl p-4 max-w-3xl w-full relative">
        <button
          className="absolute top-2 right-3 text-gray-600 text-2xl hover:text-black"
          onClick={onClose}
        >
          ×
        </button>

        <h3 className="text-xl font-bold text-[#009688] mb-4 text-center">{title}</h3>

        {type === "image" ? (
          <div className="w-full h-[400px] relative rounded-lg overflow-hidden">
            {/* Image Preview */}
            <Image src={src} alt={title} fill className="object-contain bg-gray-100" />
          </div>
        ) : (
          <div className="text-center py-10">
            {/* PDF preview button */}
            <a
              href={src}
              target="_blank"
              className="bg-[#EB6D3A] text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-600"
            >
              Open PDF in New Tab
            </a>
          </div>
        )}
      </div>
    </div>
  );
};


interface DrawerCardProps {
  title: string;
  icon: React.ElementType;
  color: string;
  children: React.ReactNode;
}

const DrawerCard = ({ title, icon: Icon, color, children }: DrawerCardProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="bg-white shadow-md rounded-2xl border-t-4 p-5 transition-all duration-300 hover:shadow-xl"
      style={{ borderColor: color }}
    >
      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full"
      >
        <div className="flex items-center gap-3">
          <Icon className="text-3xl" style={{ color }} />
          <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        </div>

        <span
          className={`text-xl font-bold transform transition-transform duration-300`}
          style={{ color, rotate: open ? "0deg" : "0deg" }}
          aria-hidden
        >
          {open ? "−" : "+"}
        </span>
      </button>

      {/* Drawer Body */}
      <div
        className={`grid transition-all duration-500 ease-in-out overflow-hidden ${
          open ? "grid-rows-[1fr] mt-4" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
};

export default function DonatePage() {
    const [doc, setDoc] = useState({
    open: false,
    src: "",
    type: "",
    title: "",
  });

  //  COUNTERS
  const counterData = [
    { label: "Families Supported", target: 3000000 },
    { label: "Ration Bags Distributed", target: 50000 },
    { label: "Students Helped", target: 1850 },
  ];
  const [counts, setCounts] = useState(counterData.map(() => 0));

  useEffect(() => {
    const intervals: number[] = [];
    counterData.forEach((item, idx) => {
      let start = 0;
      const step = Math.ceil(item.target / 60);
      const interval = window.setInterval(() => {
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
      intervals.push(interval);
    });

    return () => {
      intervals.forEach((i) => clearInterval(i));
    };
  }, []);

  return (
    <div className="bg-gradient-to-b from-white to-gray-100 min-h-screen pb-32">
      {/* HERO SECTION WITH OVERLAY */}
      <section className="relative h-[420px] md:h-[520px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/donate/donate hero.png"
            alt="Donation hero"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/25 to-black/20"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto h-full flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            #You Donate, We Serve
          </h1>
          <p className="mt-4 text-lg md:text-xl text-black max-w-4xl">
            Foundation Fighting Poverty Reg # DGSW(S))2123 has been serving
            humanity for over 16 years across 40+ cities in Pakistan — supporting
            education, ration drives, medical camps, women empowerment, and
            disaster relief programs.
          </p>

          <div className="mt-6 flex gap-4">
            <a
              href="#donate-section"
              className="inline-block bg-[#EB6D3A] text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform"
            >
              Donate Now
            </a>
            <a
  href="#documents"
  className="inline-block bg-[#009688] text-white px-5 py-3 rounded-full hover:bg-[#00796b] transition"
>
  View Documents
</a>

          </div>
        </div>
      </section>

      {/* WAVE DIVIDER */}
      <div className="w-full overflow-hidden leading-none -mt-1">
        <svg viewBox="0 0 1440 100" className="w-full h-20">
          <path
            d="M0,0 C300,100 600,0 900,50 C1200,100 1440,20 1440,20 L1440,100 L0,100 Z"
            className="fill-white"
          />
        </svg>
      </div>

      {/* COLLAGE GRID + TEXT */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          {/* LEFT GRID */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative w-full h-40 md:h-48 rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/projects/zero-hunger.jpeg"
                alt="zero-hunger"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-48 md:h-60 rounded-xl overflow-hidden shadow-md row-span-2">
              <Image
                src="/images/projects/flood-relief.jpg"
                alt="flood-relief"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-40 md:h-48 rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/projects/ramadan.jpeg"
                alt="ramadan"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-40 md:h-48 rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/donate/marketing -1.jpg"
                alt="ramadan"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* CENTER TEXT */}
          <div className="text-center px-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#009688] mb-4 leading-tight">
              Foundation Fighting Poverty
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              FFP is a registered non-profit organization Reg # DGSW(S))2123
              serving humanity for over 16 years. We are actively operating in
              40+ cities across Pakistan, driving sustainable change through
              education, ration support, medical camps, women empowerment
              initiatives, and disaster relief programs.
            </p>
            <p className="text-gray-600 mt-4">Every donation creates real impact across Pakistan.</p>
          </div>

          {/* RIGHT GRID */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative w-full h-48 md:h-60 rounded-xl overflow-hidden shadow-md row-span-2">
              <Image
                src="/images/projects/covid-19.jpeg"
                alt="covid-19"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-40 md:h-48 rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/projects/desaster-managment.jpg"
                alt="disaster-management"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-40 md:h-48 rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/projects/covid rashan drive.jpg"
                alt="covid-rashan"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-40 md:h-48 rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/donate/marketing-2.jpg"
                alt="covid-rashan"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WAVE DIVIDER (inverted) */}
      <div className="w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 100" className="w-full h-20">
          <path
            d="M0,0 C300,100 600,0 900,50 C1200,100 1440,20 1440,20 L1440,100 L0,100 Z"
            className="fill-gray-100"
          />
        </svg>
      </div>

      {/*  COUNTERS */}
<section
  className="
    py-20
    text-center
    border-b
    relative
    bg-[url('/images/donate/marketing.jpg')]
    bg-cover
    bg-center
    bg-no-repeat
  "
>
  {/* Light overlay to keep text readable */}
  <div className="absolute inset-0 bg-white/70"></div>

  <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
    {counterData.map((item, i) => (
      <div key={i}>
        <h2 className="text-5xl font-extrabold text-[#EB6D3A]">
          {counts[i].toLocaleString()}+
        </h2>
        <p className="text-gray-700 font-medium mt-2">{item.label}</p>
      </div>
    ))}
  </div>
</section>


      {/* TRUST BADGES */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center px-6">
          <div className="p-6 bg-white rounded-xl shadow-md border flex flex-col items-center gap-3">
            <FaShieldAlt className="text-3xl text-[#009688]" />
            <p className="mt-1 text-gray-700 font-semibold text-sm">Registered NGO</p>
            <p className="text-xs text-gray-400">Reg # DGSW(S))2123</p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-md border flex flex-col items-center gap-3">
            <FaHandsHelping className="text-3xl text-[#EB6D3A]" />
            <p className="mt-1 text-gray-700 font-semibold text-sm">Community Driven</p>
            <p className="text-xs text-gray-400">40+ cities reached</p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-md border flex flex-col items-center gap-3">
            <FaClock className="text-3xl text-[#009688]" />
            <p className="mt-1 text-gray-700 font-semibold text-sm">16+ Years Service</p>
            <p className="text-xs text-gray-400">Since 2009</p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-md border flex flex-col items-center gap-3">
            <FaGlobeAmericas className="text-3xl text-[#EB6D3A]" />
            <p className="mt-1 text-gray-700 font-semibold text-sm">Transparent Reporting</p>
            <p className="text-xs text-gray-400">Audited & Shariah Compalinced</p>
          </div>
        </div>
      </section>

      {/* WAVE DIVIDER */}
      <div className="w-full overflow-hidden leading-none -mt-1">
        <svg viewBox="0 0 1440 100" className="w-full h-20">
          <path
            d="M0,0 C300,100 600,0 900,50 C1200,100 1440,20 1440,20 L1440,100 L0,100 Z"
            className="fill-white"
          />
        </svg>
      </div>

      {/*  MAIN SECTION */}
      <div className="py-16 px-6">
        {/* HOW TO DONATE */}
<div
  id="donate-section"
  className="
    max-w-8xl mx-auto 
     relative 
    bg-[url('/images/donate/donate-bg-2.png')]
    bg-cover 
    bg-center 
    bg-no-repeat
    py-16
    px-6
    w-full
  "
>
  {/* Light overlay for readability */}
  <div className="absolute inset-0 bg-white/20 rounded-xl"></div>

  <div className="relative z-10">
    <h2 className="text-3xl font-bold text-[#EB6D3A] mt-6 mb-6 text-center">
      How to Donate
    </h2>

    <div className="space-y-6">
      {/* GENERAL CHARITY */}
      <DrawerCard title="General Charity Donations" icon={FaUniversity} color="#EB6D3A">
        <div className="flex justify-center mb-4">
          <Image
            src="/images/banks/ubl.png"
            alt="UBL Logo"
            width={90}
            height={90}
            className="object-contain"
          />
        </div>

        <div className="space-y-1 text-gray-700 text-sm border-t pt-3">
          <p><b>Account Title:</b> Foundation Fighting Poverty</p>
          <p><b>Bank:</b> UBL</p>
          <p><b>Account #:</b> 2009412649</p>
          <p><b>IBAN:</b> PK07UNIL0110002009412649</p>
          <p><b>Swift:</b> UNILPKKA</p>
        </div>
      </DrawerCard>

      {/* ZAKAT */}
      <DrawerCard title="Zakat Donations" icon={FaMoneyBill} color="#009688">
        <div className="flex justify-center mb-4">
          <Image
            src="/images/banks/ubl.png"
            alt="UBL Logo"
            width={90}
            height={90}
            className="object-contain"
          />
        </div>

        <div className="space-y-1 text-gray-700 text-sm border-t pt-3">
          <p><b>Account Title:</b> Foundation Fighting Poverty Zakat</p>
          <p><b>Bank:</b> UBL</p>
          <p><b>Account #:</b> 2010048063</p>
          <p><b>IBAN:</b> PK25UNIL0110002010048063</p>
          <p><b>Swift:</b> UNILPKKA</p>
        </div>
      </DrawerCard>

      {/* BOTH DONATIONS */}
      <DrawerCard title="Both Charity & Zakat" icon={FaBox} color="#EB6D3A">
        <div className="flex justify-center gap-5 mb-4">
          <Image
            src="/images/banks/easypaisa.png"
            alt="Easypaisa"
            width={70}
            height={70}
            className="object-contain"
          />
          <Image
            src="/images/banks/raast.png"
            alt="Raast"
            width={70}
            height={70}
            className="object-contain"
          />
        </div>

        <div className="space-y-1 text-gray-700 text-sm border-t pt-3">
          <p><b>Account Title:</b> Syed Muhammad Abdullah</p>
          <p><b>Bank:</b> UBL</p>
          <p><b>Branch:</b> Gulshan-e-Iqbal - 1768</p>
          <p><b>Account #:</b> 0230209745</p>
          <p><b>IBAN:</b> PK42UNIL0109000230209745</p>
          <p><b>Raast / Easypaisa:</b> 0335-2999636</p>
        </div>
      </DrawerCard>
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

        {/*  PROFESSIONAL IMPORTANT NOTE SECTION */}
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
<h2
  id="documents"
  className="text-3xl font-bold text-[#009688] mt-20 mb-6 text-center"
>
  Legal & Verification Documents
</h2>

<p className="text-center text-gray-700 max-w-2xl mx-auto mb-10">
  FFP is a <b>registered, audited, Shariah-compliant non-profit organization</b>.
  These documents are publicly available for complete donor transparency.
</p>

<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
  {/* Document 1 - Registration Certificate */}
  <div
    className="bg-white shadow-lg rounded-2xl p-6 border-t-4 border-[#009688] cursor-pointer hover:shadow-xl transition"
    onClick={() =>
      setDoc({
        open: true,
        title: "Registration Certificate",
        src: "/images/donate/ffp-reg-certificate.jpeg",
        type: "image",
      })
    }
  >
    <h3 className="text-xl font-semibold text-gray-800">Registration Certificate</h3>
    <p className="text-gray-600 mt-2">
      Verified government-issued NGO registration.
    </p>
  </div>

  {/* Document 2 - Shariah Compliance Certificate */}
  <div
    className="bg-white shadow-lg rounded-2xl p-6 border-t-4 border-[#EB6D3A] cursor-pointer hover:shadow-xl transition"
    onClick={() =>
      setDoc({
        open: true,
        title: "Shariah Compliance Certificate",
        src: "/images/donate/ffp-shariah-certificate.jpeg",
        type: "image",
      })
    }
  >
    <h3 className="text-xl font-semibold text-gray-800">Shariah Compliance</h3>
    <p className="text-gray-600 mt-2">
      Certified Shariah-compliant for Zakat & charity handling.
    </p>
  </div>

  {/* Document 3 - Audit Reports */}
  <div
    className="bg-white shadow-lg rounded-2xl p-6 border-t-4 border-[#009688] cursor-pointer hover:shadow-xl transition"
    onClick={() =>
      setDoc({
        open: true,
        title: "Audit Reports",
        src: "/documents/audit.pdf",
        type: "pdf",
      })
    }
  >
    <h3 className="text-xl font-semibold text-gray-800">Audit Reports</h3>
    <p className="text-gray-600 mt-2">
      Annual audit reports ensuring financial transparency.
    </p>
  </div>

  {/* Document 4 - Corporate Profile */}
  <div
    className="bg-white shadow-lg rounded-2xl p-6 border-t-4 border-[#EB6D3A] cursor-pointer hover:shadow-xl transition"
    onClick={() =>
      setDoc({
        open: true,
        title: "Corporate Profile",
        src: "/documents/profile.pdf",
        type: "pdf",
      })
    }
  >
    <h3 className="text-xl font-semibold text-gray-800">Corporate Profile</h3>
    <p className="text-gray-600 mt-2">
      Overview of FFP’s mission, programs & impact.
    </p>
  </div>
</div>

{/* MODAL COMPONENT */}
<DocumentModal
  open={doc.open}
  onClose={() => setDoc({ ...doc, open: false })}
  type={doc.type}
  src={doc.src}
  title={doc.title}
/>



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

      {/* FLOATING DONATE BUTTON */}
      <a
        href="#donate-section"
        className="fixed bottom-6 right-6 z-50 bg-[#EB6D3A] text-white font-bold px-6 py-3 rounded-full shadow-xl hover:scale-105 transition-transform"
        aria-label="Donate Now"
      >
        Donate Now
      </a>
    </div>
  );
}
