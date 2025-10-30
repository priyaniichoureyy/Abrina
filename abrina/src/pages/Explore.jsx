import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/abrina_logo.jpg";
import policeLogo from "../assets/police.jpg";
import postmortemLogo from "../assets/postmortem.jpg";
import forensicLogo from "../assets/forensic.jpg";
import doctorLogo from "../assets/doctor.jpg";

export default function Explore() {
  const navigate = useNavigate();

  const roles = [
    {
      id: 1,
      title: "Police Officer",
      key: "police",
      description:
        "Helps police identify whether a case may involve poisoning using observed evidence and witness data.",
      icon: policeLogo,
    },
    {
      id: 2,
      title: "Postmortem Team",
      key: "postmortem",
      description:
        "Assists postmortem teams in analyzing symptoms and internal findings to decide if the death was due to poisoning.",
      icon: postmortemLogo,
    },
    {
      id: 3,
      title: "Forensic Expert",
      key: "forensic",
      description:
        "Supports forensic experts in confirming poison types and suggesting chemical tests.",
      icon: forensicLogo,
    },
    {
      id: 4,
      title: "Doctor",
      key: "doctor",
      description:
        "Helps doctors identify poisoning symptoms for faster emergency treatment.",
      icon: doctorLogo,
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#F8FAFC] to-[#E5E7EB] text-gray-900 font-sans">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center px-8 md:px-16 py-4 bg-[#0F172A] shadow-lg sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="ABRINA Logo"
            className="w-14 h-14 object-cover rounded-full border-2 border-[#0891B2]"
          />
          <h1 className="text-white font-bold text-2xl tracking-wide">
            ABRINA
          </h1>
        </div>
        <div className="space-x-6 text-lg font-medium text-gray-200">
          <a href="/" className="hover:text-[#0891B2] transition">
            Home
          </a>
          <a href="#roles" className="hover:text-[#0891B2] transition">
            Roles
          </a>
        </div>
      </nav>

      {/* Header */}
      <header className="text-center py-16 bg-gradient-to-r from-[#F8FAFC] via-[#E2ECF5] to-[#F8FAFC] text-[#1E3A5F]">
        <h1 className="text-5xl font-extrabold mb-5 text-[#0F172A]">
          Explore Roles in ABRINA
        </h1>
        <p className="max-w-4xl mx-auto text-lg text-gray-700">
          ABRINA provides dedicated workflows for each professional role involved in toxicology and crime investigation.
        </p>
      </header>

      {/* Roles */}
      <main
        id="roles"
        className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid gap-12"
      >
        {roles.map((role, index) => (
          <div
            key={role.id}
            className={`flex flex-col md:flex-row items-center justify-between gap-10 bg-white shadow-lg border border-gray-200 rounded-3xl p-8 md:p-12 hover:shadow-2xl transform hover:-translate-y-1 transition duration-500 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="md:w-1/2 space-y-4">
              <h2 className="text-3xl font-bold text-[#1E3A5F]">{role.title}</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                {role.description}
              </p>
              <button
                onClick={() => navigate(`/role/${role.key}`)}
                className="mt-4 bg-[#0891B2] text-white px-8 py-3 rounded-full font-semibold text-lg shadow-md hover:bg-[#0E7490] hover:scale-105 transition-all duration-300"
              >
                Explore Role
              </button>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <img
                src={role.icon}
                alt={role.title}
                className="w-full h-64 object-cover rounded-3xl hover:scale-105 transition-all duration-300 shadow-md"
              />
            </div>
          </div>
        ))}
      </main>
    </section>
  );
}
