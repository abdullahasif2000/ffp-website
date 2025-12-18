import Link from "next/link";

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

 {/* PAGE HEADER */}
<div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
  <section className="
    relative overflow-hidden
    bg-gradient-to-br from-[#ffe8dc] via-[#fff1e8] to-[#ffffff]
    py-24
  ">

    {/* Dotted texture */}
    <div className="
      absolute inset-0
      bg-[radial-gradient(#eb6d3a33_1px,transparent_1px)]
      bg-[size:22px_22px]
      opacity-40
      pointer-events-none
    "></div>


    {/* Content */}
    <div className="relative max-w-7xl mx-auto px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
        Contact Foundation Fighting Poverty
      </h1>

      {/* Accent divider */}
      <div className="w-28 h-1 bg-[#EB6D3A] mx-auto my-6 rounded-full"></div>

      <p className="text-gray-700 max-w-3xl mx-auto text-lg">
        Reach out to us for donations, verified cases, partnerships, or emergency
        assistance. We’re committed to transparency and impact.
      </p>
    </div>

  </section>
</div>




   {/* CONTACT PURPOSES */}
<div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-28">
  <section className="relative overflow-hidden py-28">

    {/* Background Image */}
    <div
      className="absolute inset-0 bg-[url('/images/contact/contact-cover.jpg')]
                 bg-cover bg-center"
    ></div>

    {/* Overlay */}
    <div className="absolute inset-0 bg-black/20"></div>

    {/* Content */}
    <div className="relative max-w-7xl mx-auto px-6">

      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
        How Can We Help You?
      </h2>

      <p className="text-gray-200 text-center max-w-3xl mx-auto mb-16">
        Choose the purpose that best matches your need and connect with FFP.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* FOR DONATIONS */}
        <div className="bg-white/90 backdrop-blur rounded-2xl p-8 shadow-xl
                        hover:-translate-y-1 hover:shadow-2xl transition">
          <div className="flex items-center gap-3 mb-4">
            <FaDonate className="text-3xl text-[#EB6D3A]" />
            <h3 className="text-xl font-bold text-gray-900">
              For Donations
            </h3>
          </div>

          <p className="text-gray-600 mb-6">
            Support our welfare, education, healthcare, and emergency relief programs.
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
        <div className="bg-white/90 backdrop-blur rounded-2xl p-8 shadow-xl
                        hover:-translate-y-1 hover:shadow-2xl transition">
          <div className="flex items-center gap-3 mb-4">
            <FaHandsHelping className="text-3xl text-[#EB6D3A]" />
            <h3 className="text-xl font-bold text-gray-900">
              For Cases
            </h3>
          </div>

          <p className="text-gray-600 mb-4">
            Submit verified cases for medical, financial, or emergency assistance.
          </p>

          <p className="flex items-center gap-2 text-sm font-semibold text-gray-800 mb-5">
            <FaPhoneAlt className="text-[#EB6D3A]" />
          
            <span className="text-[#EB6D3A]"> +92 337 8028 418</span>
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
        <div className="bg-white/90 backdrop-blur rounded-2xl p-8 shadow-xl
                        hover:-translate-y-1 hover:shadow-2xl transition">
          <div className="flex items-center gap-3 mb-4">
            <FaUsers className="text-3xl text-[#EB6D3A]" />
            <h3 className="text-xl font-bold text-gray-900">
              For Partnerships
            </h3>
          </div>

          <p className="text-gray-600 mb-6">
            Collaborate with FFP to create long-term social impact initiatives.
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
              href="mailto:partnerships@ffp.org.pk"
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


      {/* EMERGENCY NUMBERS */}
      <section className="max-w-5xl mx-auto px-6 mb-24">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Emergency Contact Numbers
        </h2>

        <div className="bg-white rounded-3xl shadow-lg p-8 space-y-4 border">

          <div className="flex justify-between border-b pb-3">
            <span className="font-semibold text-[#EB6D3A]">
              Foundation Fighting Poverty (FFP)
            </span>
            <span className="font-semibold">+92 333 0000000</span>
          </div>

          <div className="flex justify-between">
            <span>Police Emergency</span>
            <span>15</span>
          </div>

          <div className="flex justify-between">
            <span>Fire Brigade</span>
            <span>16</span>
          </div>

          <div className="flex justify-between">
            <span>Rescue / Ambulance</span>
            <span>1122</span>
          </div>

          <div className="flex justify-between">
            <span>Edhi Ambulance</span>
            <span>115</span>
          </div>

          <div className="flex justify-between">
            <span>Chhipa Ambulance</span>
            <span>1020</span>
          </div>

          <div className="flex justify-between">
            <span>Highway Police</span>
            <span>130</span>
          </div>

          <div className="flex justify-between">
            <span>CPLC</span>
            <span>1102</span>
          </div>

        </div>
      </section>

      {/* NGO DIRECTORY (SEO OPTIMIZED) */}
      <section className="max-w-6xl mx-auto px-6 mb-24">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Non-Governmental Organizations (NGOs) in Pakistan
        </h2>

        <p className="text-gray-600 mb-8">
          Alphabetically listed non-governmental organizations, welfare trusts,
          and charity foundations operating across Pakistan.
        </p>

        <div className="bg-white rounded-3xl shadow-lg p-8 border text-gray-700 leading-relaxed columns-1 sm:columns-2 lg:columns-3 gap-6">

          <ul className="space-y-2">
            <li>Akhuwat Foundation</li>
            <li>Al-Khidmat Foundation Pakistan</li>
            <li>Ansar Burney Trust</li>
            <li>Behbud Association</li>
            <li>Bait-ul-Maal Pakistan</li>
            <li>Care Foundation Pakistan</li>
            <li>Chhipa Welfare Association</li>
            <li>Citizens Foundation (TCF)</li>
            <li>Edhi Foundation</li>
            <li>Fauji Foundation</li>
            <li>Helping Hand for Relief & Development</li>
            <li>Indus Hospital & Health Network</li>
            <li>Kashf Foundation</li>
            <li>LRBT Eye Hospital</li>
            <li>National Rural Support Programme</li>
            <li>Pakistan Bait-ul-Maal</li>
            <li>Pakistan Red Crescent Society</li>
            <li>Saylani Welfare Trust</li>
            <li>Shahid Afridi Foundation</li>
            <li>Shaukat Khanum Memorial Hospital</li>
            <li>SOS Children’s Villages Pakistan</li>
            <li>Transparent Hands</li>
            <li>Tameer-e-Millat Foundation</li>
            <li>Ummah Welfare Trust</li>
            <li>UNICEF Pakistan</li>
            <li>World Vision Pakistan</li>
          </ul>

        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 bg-[#EB6D3A]/10">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Want to Work With FFP?
        </h2>
        <p className="text-gray-700 mb-8 max-w-xl mx-auto">
          Whether you’re an individual, organization, or media house — we welcome collaboration.
        </p>

        <Link
          href="/contact"
          className="inline-block px-10 py-4 bg-[#EB6D3A] text-white rounded-full shadow-lg hover:bg-[#d35d32] transition font-semibold text-lg"
        >
          Get in Touch
        </Link>
      </section>

    </div>
  );
}
