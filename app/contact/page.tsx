import ContactForm from "@/components/ContactForm";
import EmergencyNumbers from "@/components/EmergencyNumbers";

import NgoList from "@/components/NgoList";

import {
  FaDonate,
  FaHandsHelping,
  FaUsers,
  FaPhoneAlt,
  FaFileAlt,
  FaArrowRight,
} from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fefefe] via-[#faf9f6] to-[#ffffff]">
      {/* HERO SECTION */}
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <section
          className="
      relative overflow-hidden
      min-h-[60vh] md:min-h-[70vh]

      flex items-center
    "
        >
          {/* BACKGROUND IMAGE */}
          <div
            className="
    absolute inset-0
    bg-[url('/images/contact/contact-hero.jpg')]
    bg-cover
    bg-center
    bg-no-repeat
  "
          ></div>

          {/* OVERLAYS */}
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#EB6D3A]/30 via-transparent to-black/20"></div>

         {/* FLOATING CTA */}
<div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20">
  <a
    href="#contact-form"
    className="
      inline-flex items-center justify-center
      px-12 py-4
      bg-[#EB6D3A]
      text-white
      rounded-full
      font-semibold
      text-lg
      shadow-xl
      hover:bg-[#d35d32]
      hover:scale-105
      transition
    "
  >
    Contact Us
  </a>
</div>

        </section>
      </div>

      {/* HERO  CONTACT SEPARATOR */}
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <div className="relative py-20 flex justify-center">
          {/* LINE WITH CIRCLES */}
          <div className="relative flex items-center w-full max-w-3xl px-6">
            {/* LEFT CIRCLE */}
            <span className="w-3 h-3 rounded-full bg-[#009688]"></span>

            {/* LINE */}
            <span className="flex-8 h-2 mx-4 bg-gradient-to-r from-[#009688] via-[#EB6D3A]/40 to-[#009688]"></span>

            {/* RIGHT CIRCLE */}
            <span className="w-3 h-3 rounded-full bg-[#009688]"></span>
          </div>
        </div>
      </div>

      {/* CONTACT PURPOSES */}
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-28">
        <section className="relative overflow-hidden py-28">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-[url('/images/contact/contact-cover.jpg')]
                 bg-cover bg-center"
          ></div>

          {/* Base Overlay */}
          <div className="absolute inset-0 bg-black/25"></div>

          {/* Content */}
          <div className="relative max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
              How Can We Help You?
            </h2>

            <p className="text-gray-200 text-center max-w-3xl mx-auto mb-16">
              Choose the purpose that best matches your need and connect with
              FFP.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {/* FOR DONATIONS */}
              <div
                className="bg-white/90 backdrop-blur rounded-2xl p-8 shadow-xl
                        hover:-translate-y-1 hover:shadow-2xl transition"
              >
                <div className="flex items-center gap-3 mb-4">
                  <FaDonate className="text-3xl text-[#EB6D3A]" />
                  <h3 className="text-xl font-bold text-gray-900">
                    For Donations
                  </h3>
                </div>

                <p className="text-gray-600 mb-6">
                  Support our welfare, education, healthcare, and emergency
                  relief programs.
                </p>

                <div className="flex flex-col gap-3">
                  <a
                    href="/donate"
                    className="inline-flex items-center justify-center gap-2
                         px-6 py-3 bg-[#EB6D3A] text-white rounded-full
                         font-semibold hover:bg-[#d35d32] transition"
                  >
                    Donate Now <FaArrowRight />
                  </a>

                  <a
                    href="#contact-form"
                    className="inline-flex items-center justify-center gap-2
                         text-sm font-semibold text-[#EB6D3A] hover:underline"
                  >
                    <FaFileAlt /> Donation Inquiry Form
                  </a>
                </div>
              </div>

              {/* FOR CASES */}
              <div
                className="bg-white/90 backdrop-blur rounded-2xl p-8 shadow-xl
                        hover:-translate-y-1 hover:shadow-2xl transition"
              >
                <div className="flex items-center gap-3 mb-4">
                  <FaHandsHelping className="text-3xl text-[#EB6D3A]" />
                  <h3 className="text-xl font-bold text-gray-900">For Cases</h3>
                </div>

                <p className="text-gray-600 mb-4">
                  Submit verified cases for medical, financial, or emergency
                  assistance.
                </p>

                <p className="flex items-center gap-2 text-sm font-semibold text-gray-800 mb-5">
                  <FaPhoneAlt className="text-[#EB6D3A]" />
                  <span className="text-[#EB6D3A]">+92 337 8028 418</span>
                </p>

                <a
                  href="#contact-form"
                  className="inline-flex items-center gap-2
                       text-sm font-semibold text-[#EB6D3A] hover:underline"
                >
                  <FaFileAlt /> Submit Case Request Form
                </a>
              </div>

              {/* FOR PARTNERSHIPS */}
              <div
                className="bg-white/90 backdrop-blur rounded-2xl p-8 shadow-xl
                        hover:-translate-y-1 hover:shadow-2xl transition"
              >
                <div className="flex items-center gap-3 mb-4">
                  <FaUsers className="text-3xl text-[#EB6D3A]" />
                  <h3 className="text-xl font-bold text-gray-900">
                    For Partnerships
                  </h3>
                </div>

                <p className="text-gray-600 mb-6">
                  Collaborate with FFP to create long-term social impact
                  initiatives.
                </p>

                <div className="flex flex-col gap-3">
                  <a
                    href="/partners"
                    className="inline-flex items-center justify-center gap-2
                         px-6 py-3 bg-gray-900 text-white rounded-full
                         font-semibold hover:bg-gray-800 transition"
                  >
                    View Partnerships <FaArrowRight />
                  </a>

                  <a
                    href="mailto:corporate@ffppk.org"
                    className="text-center text-sm font-semibold
                         text-[#EB6D3A] hover:underline"
                  >
                    corporate@ffppk.org
                  </a>

                  <a
                    href="#contact-form"
                    className="inline-flex items-center justify-center gap-2
                         text-sm font-semibold text-[#EB6D3A] hover:underline"
                  >
                    <FaFileAlt /> Partnership Inquiry Form
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* EMERGENCY + NGO SECTION WRAPPER */}
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <section
          className="
      relative overflow-hidden
      bg-gradient-to-br from-[#fff4ee] via-[#fffaf7] to-white
      py-20
    "
        >
          {/* TOP CURVE */}
          <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
            <svg viewBox="0 0 1440 120" className="w-full h-[120px]">
              <path
                fill="#ffffff"
                d="M0,40 C240,120 480,0 720,20 960,40 1200,100 1440,30 L1440,0 L0,0 Z"
              />
            </svg>
          </div>

          {/* BACKGROUND TEXTURE */}
          <div
            className="
        absolute inset-0
        bg-[radial-gradient(#EB6D3A1f_1px,transparent_1px)]
        bg-[size:28px_28px]
        opacity-40
        pointer-events-none
      "
          ></div>

          {/* CONTENT CONTAINER */}
          <div className="relative max-w-7xl mx-auto px-6">
            {/*  EMERGENCY CARD  */}
            <div
              className="
          relative
          bg-gray-800 backdrop-blur-xl
          rounded-[32px]
          shadow-[0_30px_80px_-25px_rgba(0,0,0,0.25)]
          border border-white/40
          px-6 md:px-5 py-5
          mb-24
          overflow-hidden
        "
            >
              {/* TOP ORANGE BAR */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-[#EB6D3A]" />

              {/* BOTTOM ORANGE BAR */}
              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#EB6D3A]" />

              <EmergencyNumbers />
            </div>

            {/*  NGO CARD  */}
            <div
              className="
          relative
          bg-gray-700 backdrop-blur-xl
          rounded-[32px]
          shadow-[0_30px_80px_-25px_rgba(0,0,0,0.25)]
          border border-white/40
          px-6 md:px-5 py-5
          overflow-hidden
        "
            >
              {/* TOP ORANGE BAR */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-[#EB6D3A]" />

              {/* BOTTOM ORANGE BAR */}
              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#EB6D3A]" />

              <NgoList />
            </div>
          </div>

          {/* BOTTOM CURVE */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
            <svg viewBox="0 0 1440 120" className="w-full h-[120px] rotate-180">
              <path
                fill="#ffffff"
                d="M0,40 C240,120 480,0 720,20 960,40 1200,100 1440,30 L1440,0 L0,0 Z"
              />
            </svg>
          </div>
        </section>
      </div>

      {/* CONTACT FORM SECTION */}
      <section
        id="contact-form"
        className="relative py-32 bg-gradient-to-br from-[#fff3ec] via-[#fffaf7] to-white"
      >
        {/* SOFT BACKGROUND TEXTURE */}
        <div
          className="
      absolute inset-0
      bg-[radial-gradient(#EB6D3A22_1px,transparent_1px)]
      bg-[size:26px_26px]
      opacity-40
      pointer-events-none
    "
        ></div>

        <div className="relative max-w-5xl mx-auto px-6">
          {/* SECTION HEADER */}
          <div className="text-center mb-14">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              Contact Foundation Fighting Poverty
            </h2>

            <div className="w-28 h-1 bg-[#EB6D3A] mx-auto rounded-full mb-6"></div>

            <p className="text-gray-700 max-w-2xl mx-auto">
              Please fill out the form below. Your response will be securely
              submitted to Foundation Fighting Poverty.
            </p>
          </div>

          {/* FORM CONTAINER */}
          <ContactForm/>
        </div>
      </section>
    </div>
  );
}
