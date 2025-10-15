"use client";
import Image from "next/image";

export default function TeamPage() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 text-gray-800">
      {/* 🏁 Hero Banner */}
      <section className="relative h-[60vh] flex items-center justify-center text-center text-white">
        <Image
          src="/images/team/team-hero.jpg"
          alt="Our Team"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg">
            Our Team
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mt-4">
            Meet the people who lead, manage, and serve with dedication.
          </p>
        </div>
      </section>

      {/* 🪶 Chairman Note */}
      <section id="chairman-note" className="py-20 px-6 bg-gradient-to-r from-[#009688]/10 to-[#EB6D3A]/10 text-center">
        <div className="max-w-5xl mx-auto">
          <Image
            src="/images/team/chairman.jpg"
            alt="Chairman"
            width={180}
            height={180}
            className="rounded-full mx-auto mb-6 object-cover border-4 border-[#EB6D3A]/70 shadow-lg"
          />
          <h2 className="text-3xl font-bold bg-gradient-to-r from-[#EB6D3A] to-[#009688] bg-clip-text text-transparent mb-4">
            Chairman
          </h2>
          <p className="text-xl font-semibold text-gray-800">Syed Ammar Ashrafi</p>
          <p className="text-gray-600 mt-4 text-lg max-w-3xl mx-auto leading-relaxed">
            “At FFP, we strive to build hope and deliver impact that transforms lives.
            Our mission thrives through the dedication and compassion of every team member.”
          </p>
        </div>
      </section>

      {/* Separator Line */}
      <div className="h-[4px] bg-gradient-to-r from-[#EB6D3A] to-[#009688] w-1/3 mx-auto rounded-full mb-16"></div>

      {/* 🧠 Board Section */}
      <section id="board" className="max-w-7xl mx-auto px-6 text-center mb-20">
        <h2 className="text-3xl font-extrabold mb-10 bg-gradient-to-r from-[#EB6D3A] to-[#009688] bg-clip-text text-transparent">
          Board of Directors
        </h2>
        <div className="flex flex-wrap justify-center gap-10">
          {[
            { name: "Imdad Ullah Madni", image: "/images/team/board1.jpg" },
            { name: "Muneer Ahmed", image: "/images/team/board2.jpg" },
            { name: "Wazir Ahmed", image: "/images/team/board3.jpg" },
          ].map((member, index) => (
            <div
              key={index}
              className="w-56 bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition-transform hover:-translate-y-2"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={128}
                height={128}
                className="rounded-full mx-auto h-32 w-32 object-cover border-4 border-[#EB6D3A]/60"
              />
              <h3 className="text-lg font-semibold mt-4 text-gray-800">{member.name}</h3>
              <p className="text-sm text-[#009688]">Board Member</p>
            </div>
          ))}
        </div>
      </section>

      {/* Separator Line */}
      <div className="h-[4px] bg-gradient-to-r from-[#009688] to-[#EB6D3A] w-1/2 mx-auto rounded-full mb-16"></div>

      {/* 🏢 Management Section */}
      <section id="management" className="max-w-7xl mx-auto px-6 text-center mb-20">
        <h2 className="text-3xl font-extrabold mb-10 bg-gradient-to-r from-[#009688] to-[#EB6D3A] bg-clip-text text-transparent">
          Management Team
        </h2>
        <div className="flex flex-wrap justify-center gap-10">
          {[
            { name: "Inam Ul Haq", image: "/images/team/manager1.jpg" },
            { name: "Ali Ahmed", image: "/images/team/manager2.jpg" },
            { name: "Iqra Abrar", image: "/images/team/manager3.jpg" },
          ].map((manager, index) => (
            <div
              key={index}
              className="w-52 bg-white border border-gray-200 rounded-2xl p-5 shadow-md hover:shadow-xl transition-transform hover:-translate-y-2"
            >
              <Image
                src={manager.image}
                alt={manager.name}
                width={120}
                height={120}
                className="rounded-full mx-auto h-28 w-28 object-cover border-4 border-[#009688]/60"
              />
              <h3 className="text-lg font-semibold mt-3 text-gray-800">{manager.name}</h3>
              <p className="text-sm text-[#EB6D3A]">Management</p>
            </div>
          ))}
        </div>
      </section>

      {/* Separator Line */}
      <div className="h-[4px] bg-gradient-to-r from-[#EB6D3A] to-[#009688] w-2/3 mx-auto rounded-full mb-16"></div>

      {/* 👥 Members Section */}
      <section id="members" className="max-w-7xl mx-auto px-6 text-center mb-20">
        <h2 className="text-3xl font-extrabold mb-10 bg-gradient-to-r from-[#EB6D3A] to-[#009688] bg-clip-text text-transparent">
          Members
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-center">
          {[
            "Abdul Rasheed",
            "Danish Khilji",
            "Naveera Tabassum",
            "Haseena Mugheri",
            "Imdad Ullah Madni",
            "Muneer Ahmed",
            "Iqra Abrar",
          ].map((name, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-5 text-center shadow-md hover:shadow-lg transition-transform hover:-translate-y-1"
            >
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-[#EB6D3A] to-[#009688] p-[3px]">
                <Image
                  src={`/images/team/member${(index % 3) + 1}.jpg`}
                  alt={name}
                  width={100}
                  height={100}
                  className="rounded-full object-cover h-full w-full"
                />
              </div>
              <h3 className="text-sm font-semibold mt-3">{name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Separator Line */}
      <div className="h-[4px] bg-gradient-to-r from-[#009688] to-[#EB6D3A] w-3/4 mx-auto rounded-full mb-16"></div>

      {/* 👩‍💼 Interns Section */}
      <section id="interns" className="max-w-7xl mx-auto px-6 text-center mb-20">
        <h2 className="text-3xl font-extrabold mb-10 bg-gradient-to-r from-[#009688] to-[#EB6D3A] bg-clip-text text-transparent">
          Interns
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-center">
          {[
            "Ali Raza",
            "Aisha Ahmed",
            "Bilal Khan",
            "Sara Malik",
            "Wazir Ahmed",
            "Fatima Noor",
          ].map((name, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-5 text-center shadow-md hover:shadow-lg transition-transform hover:-translate-y-1"
            >
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-[#009688] to-[#EB6D3A] p-[3px]">
                <Image
                  src={`/images/team/intern${(index % 3) + 1}.jpg`}
                  alt={name}
                  width={100}
                  height={100}
                  className="rounded-full object-cover h-full w-full"
                />
              </div>
              <h3 className="text-sm font-semibold mt-3">{name}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
