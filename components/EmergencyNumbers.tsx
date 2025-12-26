"use client";

import { useState } from "react";
import { FaSearch, FaPhoneAlt, FaFilter } from "react-icons/fa";

type Category =
  | "All"
  | "Emergency"
  | "Ambulance"
  | "Utilities"
  | "Government";

export default function EmergencyNumbers() {
  const emergencyNumbers = [
    {
      name: "Foundation Fighting Poverty (FFP)",
      number: "+92 337 8028418",
      category: "Emergency",
      highlight: true,
    },
    { name: "Karachi Police (Madadgar-15)", number: "15", category: "Emergency" },
    { name: "Traffic Police", number: "915", category: "Emergency" },
    { name: "Rescue 1122", number: "1122", category: "Ambulance" },
    { name: "Edhi Ambulance", number: "115", category: "Ambulance" },
    { name: "Chhipa Ambulance", number: "102 / 1020", category: "Ambulance" },
    { name: "Aman Ambulance", number: "1021", category: "Ambulance" },
    { name: "Pakistan Red Crescent Society", number: "111-733-257", category: "Government" },
    { name: "PM Sehat Tahafuz", number: "1166", category: "Government" },
    { name: "CPLC", number: "1102", category: "Emergency" },
    { name: "Pakistan Rangers", number: "1101", category: "Government" },
    { name: "Zainab Alert", number: "1099", category: "Emergency" },
    { name: "Fire Brigade", number: "16", category: "Emergency" },
    { name: "K-Electric", number: "118", category: "Utilities" },
    { name: "KW&SB", number: "133", category: "Utilities" },
    { name: "NDMA", number: "051-111-157-157", category: "Government" },
    { name: "St. John Ambulance", number: "021-32250500", category: "Ambulance" },
  ];

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<Category>("All");

  const highlightText = (text: string) => {
    if (!search) return text;
    const regex = new RegExp(`(${search})`, "gi");
    return text.replace(
      regex,
      `<mark class="bg-[#EB6D3A]/20 text-[#EB6D3A] rounded px-1">$1</mark>`
    );
  };

  const filteredList = emergencyNumbers.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.number.includes(search);

    const matchesCategory =
      category === "All" || item.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="max-w-6xl mx-auto px-6 mb-32">

      {/* HEADER */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-white mb-1">
          Emergency Contact Numbers
        </h2>
        <p className="text-white">
          Verified emergency services & helplines
        </p>
      </div>

      {/* FILTERS + SEARCH (SAME ROW) */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">

        {/* Categories */}
        <div className="flex flex-wrap gap-3">
          {["All", "Emergency", "Ambulance", "Utilities", "Government"].map(
            (cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat as Category)}
                className={`px-5 py-2 rounded-full text-sm font-semibold border transition
                  ${
                    category === cat
                      ? "bg-[#EB6D3A] text-white border-[#EB6D3A]"
                      : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
                  }
                `}
              >
                <FaFilter className="inline mr-2 text-xs" />
                {cat}
              </button>
            )
          )}
        </div>

        {/* Search Bar */}
        <div className="relative w-full sm:w-[320px]">
          <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search service or number..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full pl-14 pr-5 py-3 rounded-full
              bg-white border border-gray-200
              shadow-md
              text-gray-900
              placeholder:text-gray-400
              focus:outline-none focus:ring-2 focus:ring-[#EB6D3A]/40
            "
          />
        </div>
      </div>

      {/* LIST */}
      <div className="bg-white rounded-3xl shadow-xl border overflow-hidden">
        <div className="max-h-[420px] overflow-y-auto">
          <ul className="divide-y">
            {filteredList.map((item, i) => (
              <li
                key={i}
                className={`flex justify-between items-center gap-4 px-6 py-4
                  hover:bg-gray-50 transition
                  ${item.highlight ? "bg-[#fff3ec]" : ""}
                `}
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0
                      ${
                        item.highlight
                          ? "bg-[#EB6D3A] text-white"
                          : "bg-gray-100 text-gray-600"
                      }
                    `}
                  >
                    <FaPhoneAlt />
                  </div>

                  <span
                    className="font-semibold text-gray-900 truncate"
                    dangerouslySetInnerHTML={{
                      __html: highlightText(item.name),
                    }}
                  />
                </div>

                <span
                  className="font-semibold text-gray-700 text-sm whitespace-nowrap"
                  dangerouslySetInnerHTML={{
                    __html: highlightText(item.number),
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
