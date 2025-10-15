"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-gray-300 py-14 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left - Logo & Info */}
        <div>
          <img
            src="/images/logo/ffp-logo.png"
            alt="FFP Logo"
            className="w-70 mb-6"
          />
          <p className="text-sm mb-2">
            📍 Head Office: 250-C, PECHS Block-06, Karachi, Pakistan
          </p>
          <p className="text-sm mb-2">📞 +92 300 1234567</p>
          <p className="text-sm">✉️ contact@ffp.org</p>
        </div>

        {/* Middle - Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-5">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#about" className="hover:text-[#EB6D3A] transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#mission" className="hover:text-[#EB6D3A] transition">
                Mission
              </a>
            </li>
            <li>
              <a href="#vision" className="hover:text-[#EB6D3A] transition">
                Vision
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#EB6D3A] transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Right - Social Media */}
        <div>
          <div className="flex space-x-5">
            <a
              href="facebook.com/ffppk"
              target="_blank"
              className="hover:text-[#1877F2] text-3xl transition-transform transform hover:scale-110"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="instagram.com/foundationfightingpoverty"
              target="_blank"
              className="hover:text-[#E1306C] text-3xl transition-transform transform hover:scale-110"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/foundation-fighting-poverty"
              target="_blank"
              className="hover:text-[#0A66C2] text-3xl transition-transform transform hover:scale-110"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="youtube.com/foundationfightingpoverty"
              target="_blank"
              className="hover:text-[#FF0000] text-3xl transition-transform transform hover:scale-110"
            >
              <i className="fab fa-youtube"></i>
            </a>
            <a
              href="twitter.com/ffpforyou"
              target="_blank"
              className="hover:text-[#1DA1F2] text-3xl transition-transform transform hover:scale-110"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 text-center text-xs text-gray-400 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()}{" "}
        <span className="text-[#EB6D3A] font-semibold">
          Foundation Fighting Poverty
        </span>
        . All rights reserved.
      </div>
    </footer>
  );
}
