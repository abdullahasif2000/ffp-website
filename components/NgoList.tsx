"use client";

import { useState, useMemo } from "react";
import { FaSearch, FaBuilding } from "react-icons/fa";
import { ngos } from "../data/ngos";

const PINNED_NGO = "Foundation Fighting Poverty (FFP)";

export default function NgoList() {
  const [search, setSearch] = useState("");

  const sortedAndFiltered = useMemo(() => {
    const pinned = ngos.filter(
      (name) =>
        name === PINNED_NGO &&
        name.toLowerCase().includes(search.toLowerCase())
    );

    const others = ngos
      .filter(
        (name) =>
          name !== PINNED_NGO &&
          name.toLowerCase().includes(search.toLowerCase())
      )
      .sort((a, b) => a.localeCompare(b));

    return [...pinned, ...others];
  }, [search]);

  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      {/* HEADER */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white">
          NGOs Directory
        </h1>
        <p className="text-white mt-2">
          Verified non-profit organizations working for social impact
        </p>
      </div>

      {/* SEARCH */}
      <div className="flex justify-center mb-10">
        <div className="relative w-full max-w-md">
          <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search NGO name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full pl-14 pr-5 py-3.5 rounded-full
              border border-gray-200 bg-white
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
        <div className="max-h-[520px] overflow-y-auto">
          <ul className="divide-y">
            {sortedAndFiltered.map((name, index) => (
              <li
                key={index}
                className={`flex items-center gap-5 px-6 py-5 transition hover:bg-gray-50
                  ${
                    name === PINNED_NGO
                      ? "bg-[#fff3ec]"
                      : ""
                  }
                `}
              >
                <div
                  className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0
                    ${
                      name === PINNED_NGO
                        ? "bg-[#EB6D3A] text-white"
                        : "bg-[#EB6D3A]/10 text-[#EB6D3A]"
                    }
                  `}
                >
                  <FaBuilding />
                </div>

                <p className="font-semibold text-gray-900 truncate">
                  {name}
                </p>

                {name === PINNED_NGO && (
                  <span className="ml-auto text-xs font-semibold text-[#EB6D3A] bg-[#EB6D3A]/10 px-3 py-1 rounded-full">
                    Pinned
                  </span>
                )}
              </li>
            ))}

            {sortedAndFiltered.length === 0 && (
              <li className="px-6 py-10 text-center text-gray-500">
                No NGOs found
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
