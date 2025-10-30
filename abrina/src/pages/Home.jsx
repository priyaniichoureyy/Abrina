import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/abrina_logo.jpg";

export default function Home() {
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex flex-col bg-[#F8FAFC] text-gray-900 font-sans">
      <nav className="w-full flex justify-between items-center px-10 py-4 bg-[#0F172A] shadow-lg sticky top-0 z-50">
        <img
          src={logo}
          alt="ABRINA Logo"
          className="w-28 h-28 object-cover rounded-full border-4 border-[#0891B2] shadow-[0_0_25px_#0891B2]"
        />

        <div className="space-x-10 text-lg font-medium text-gray-200">
          <button
            className="hover:text-[#0891B2] transition-all duration-200"
            onClick={() => scrollToSection("one")}
          >
            Home
          </button>
          <button
            className="hover:text-[#0891B2] transition-all duration-200"
            onClick={() => scrollToSection("about")}
          >
            About
          </button>
        </div>
      </nav>

      <div className="h-12 bg-[#F8FAFC]"></div>

      <div
        id="one"
        className="flex flex-col items-center justify-center bg-[#1E3A5F] text-white py-24 px-6 rounded-t-3xl shadow-2xl mx-10 relative -mt-4"
      >
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-wide text-[#0891B2] mb-4">
          ABRINA
        </h1>
        <p className="text-xl md:text-2xl text-gray-100 max-w-2xl leading-relaxed mb-10 text-center">
          Explore ABRINA’s tools designed for your role, assisting police,
          forensic experts, postmortem teams, and doctors in identifying
          potential poisoning cases quickly and accurately.
        </p>

        <button
          onClick={() => navigate("/explore")}
          className="bg-[#0891B2] text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-[#0E7490] hover:scale-105 transition-all duration-300"
        >
          Explore Now
        </button>
      </div>

      <div
        id="about"
        className="bg-white text-gray-800 py-20 px-8 text-center shadow-inner mx-10 mt-12 rounded-3xl"
      >
        <h2 className="text-4xl font-bold text-[#1E3A5F] mb-6">
          What is ABRINA?
        </h2>
        <p className="max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 mt-4">
          ABRINA is a smart forensic tool designed to enhance the process of
          poison detection in the human body. It assists{" "}
          <span className="font-semibold text-[#1E3A5F]">
            forensic experts
          </span>{" "}
          in increasing accuracy and speed during toxicology analysis, supports{" "}
          <span className="font-semibold text-[#1E3A5F]">
            medical professionals
          </span>{" "}
          in identifying rare poisoning cases, and helps{" "}
          <span className="font-semibold text-[#1E3A5F]">police personnel</span>{" "}
          determine whether poisoning is involved in a case with scientific
          precision.
        </p>
      </div>
    </section>
  );
}
