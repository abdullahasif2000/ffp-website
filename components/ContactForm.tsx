"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";

interface FormData {
  name: string;
  email: string;
  phone: string;
  province: string;
  city: string;
  inquiryType: string;
  message: string;
  source: string;
}

const provinces: string[] = [
  "Azad Jammu & Kashmir (AJK)",
  "Balochistan",
  "Gilgit-Baltistan (GB)",
  "Islamabad Capital Territory (ICT)",
  "Khyber Pakhtunkhwa (KP)",
  "Punjab",
  "Sindh",
];

const cities: string[] = [
   "Karachi", "Lahore", "Islamabad", "Rawalpindi", "Faisalabad", "Multan",
  "Hyderabad", "Peshawar", "Quetta", "Sialkot", "Gujranwala", "Bahawalpur",
  "Sargodha", "Sukkur", "Larkana", "Sheikhupura", "Rahim Yar Khan", "Jhang",
  "Dera Ghazi Khan", "Gujrat", "Sahiwal", "Mardan", "Kasur", "Okara",
  "Mingora", "Nawabshah", "Chiniot", "Kotri", "Hafizabad", "Kohat",
  "Jacobabad", "Shikarpur", "Muzaffargarh", "Khanewal", "Khairpur",
  "Dera Ismail Khan", "Abbottabad", "Mirpur Khas", "Turbat", "Dadu",
  "Gojra", "Mandi Bahauddin", "Tando Adam", "Tando Allahyar", "Badin",
  "Umerkot", "Thatta", "Sanghar", "Naushahro Feroze", "Jamshoro",
  "Khuzdar", "Gwadar", "Hub", "Kalat", "Mastung", "Chaman", "Zhob",
  "Loralai", "Panjgur", "Awaran", "Gilgit", "Skardu", "Hunza",
  "Chilas", "Diamer", "Ghizer", "Astore", "Muzaffarabad", "Mirpur (AJK)",
  "Kotli", "Bhimber", "Rawalakot", "Bagh", "Hattian Bala", "Neelum",
  "Attock", "Chakwal", "Jhelum", "Mianwali", "Bhakkar", "Layyah",
  "Vehari", "Pakpattan", "Arifwala", "Burewala", "Khanpur", "Lodhran",
  "Bahawalnagar", "Hasilpur", "Fort Abbas", "Narowal", "Shakargarh",
  "Sambrial", "Pasrur", "Daska", "Wazirabad", "Kharian", "Jaranwala",
  "Samundri", "Toba Tek Singh", "Kamoke", "Nankana Sahib", "Murree",
  "Taxila", "Hangu", "Bannu", "Swabi", "Charsadda", "Nowshera",
  "Haripur", "Mansehra", "Batkhela", "Timergara", "Upper Dir",
  "Lower Dir", "Tank", "Lakki Marwat", "Karak", "Shahdadkot",
  "Qambar", "Uch Sharif", "Alipur", "Jatoi", "Rajanpur", "Taunsa",
  "Kot Addu", "Kabirwala", "Shujaabad", "Kahror Pakka",
  "Jalalpur Pirwala", "Pir Mahal", "Gambat", "Rohri", "Pano Aqil",
  "Moro", "Sehwan", "Hala", "Matli", "Talhar", "Keti Bandar",
  "Ormara", "Pasni", "Kharan", "Dalbandin", "Nushki",
  "Dera Murad Jamali", "Usta Mohammad", "Sibi", "Duki", "Kohlu",
  "Ziarat", "Parachinar", "Qila Saifullah", "Chitral", "Garhi Yasin",
  "Shahpur Chakar", "Lakki", "Dera Allah Yar", "Gadani", "Jiwani",
  "Astore City", "Gulmit", "Aliabad", "Skardu City",
];

const inquiryTypes: string[] = [
  "General Information",
  "Feedback / Suggestion",
  "Internship Opportunities",
  "Volunteer Opportunities",
  "Job Opportunities",
  "Case / Support Request",
  "Partnership / Collaboration",
  "Other",
];

const ContactForm: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    province: "",
    city: "",
    inquiryType: "",
    message: "",
    source: "Website",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setFormSubmitted(true);

    const formEl = e.currentTarget;
    const formDataObj = new FormData(formEl);
    console.debug("Submitting payload to Google Forms:");
    for (const [key, value] of formDataObj.entries()) {
      console.debug(`${key}: ${value}`);
    }

    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        province: "",
        city: "",
        inquiryType: "",
        message: "",
        source: "Website",
      });
    }, 800);
  };

  return (
    <div className="flex justify-center px-4 py-16">
      {/* SUCCESS POPUP */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white rounded-xl p-8 text-center max-w-sm w-full">
            <h3 className="text-xl font-bold mb-2 text-black"> Thank You!</h3>
            <p className="text-gray-900 mb-4">
              Your response has been submitted successfully, Our Team will contact You.
            </p>
            <button
              onClick={() => setShowSuccess(false)}
              className="px-6 py-2 rounded-full bg-[#EB6D3A] text-white font-semibold hover:opacity-90"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* CARD */}
      <div className="flex w-full max-w-5xl rounded-2xl overflow-hidden border-4 border-[#EB6D3A] shadow-xl bg-white flex-col md:flex-row">
        {/* LEFT */}
        <div className="md:w-2/5 w-full bg-gradient-to-br from-[#0b3c5d] to-[#1abc9c] text-white flex flex-col items-center justify-center px-8 py-12 text-center">
          <Image
            src="/images/logo/logo-png.png"
            alt="FFP Logo"
            width={300}
            height={300}
            priority
            className="mb-60"
          />
      
        </div>

        {/* RIGHT */}
        <div className="md:w-3/5 w-full p-8">
          <iframe
            ref={iframeRef}
            name="hidden_iframe"
            className="hidden"
            onLoad={() => {
              if (formSubmitted) {
                console.debug("Iframe loaded after submission.");
                setShowSuccess(true);
                setFormSubmitted(false);
              }
            }}
          />

          <form
            action="https://docs.google.com/forms/d/e/1FAIpQLSck8DlwtrMy3YuLFmdsAektyelK6twVwi_jlmVXSTLitdSQ0Q/formResponse"
            method="POST"
            target="hidden_iframe"
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input
              name="entry.206188482"
              placeholder="Full Name"
              required
              className="input"
            />
            <input
              name="entry.333203355"
              type="email"
              placeholder="Email Address"
              required
              className="input"
            />
            <input
              name="entry.2141082132"
              placeholder="Phone Number"
              required
              className="input"
            />

            <select name="entry.1972229044" required className="input">
              <option value="">Select Province</option>
              {provinces.map((p) => (
                <option key={p}>{p}</option>
              ))}
            </select>

            <select name="entry.1911189609" required className="input">
              <option value="">Select City</option>
              {cities.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>

            <select name="entry.1348057789" required className="input">
              <option value="">Type of Inquiry / Request</option>
              {inquiryTypes.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>

            <textarea
              name="entry.1579847828"
              rows={4}
              placeholder="Please describe your request"
              required
              className="input resize-none"
            />

            <input type="hidden" name="entry.1315536895" value="Website" />
            <input
              type="hidden"
              name="entry.221402376"
              value="I consent to my information being used by FFP to respond to my query."
            />

            {/* NEW FIELD: How did you hear about FFP? */}
            <select name="entry.1324695560" required className="input">
              <option value="">How did you hear about FFP?</option>
              <option value="Website">Website</option>
              <option value="Social Media">Social Media</option>
              <option value="Friend / Family">Friend / Family</option>
              <option value="Other">Other</option>
            </select>

            {/* Consent */}
            <label className="flex items-start gap-2 text-black text-sm">
              <input type="checkbox" required className="mt-1" />
              <span>I consent to my information being used by FFP.</span>
            </label>

            <button
              type="submit"
              className="w-full py-3 rounded-full bg-[#EB6D3A] text-white font-semibold text-lg hover:opacity-90 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Input utility */}
      <style jsx global>{`
        .input {
          width: 100%;
          padding: 12px;
          border-radius: 0.75rem;
          border: 1px solid #d1d5db;
          color: #000;
        }
        .input::placeholder {
          color: #000;
        }
      `}</style>
    </div>
  );
};

export default ContactForm;
