import React from "react";
import logo from "../assets/abrina_logo.jpg";
import policeLogo from "../assets/police.jpg";
import postmortemLogo from "../assets/police.jpg";
import forensicLogo from "../assets/police.jpg";

export default function Explore() {
  const roles = [
    {
      id: 1,
      title: "Police Officer",
      description:
        "ABRINA assists police officers in identifying potential poisoning cases by analyzing early indicators and linking forensic data seamlessly. It helps officers decide whether a poisoning investigation should be initiated, ensuring faster decision-making and evidence-backed case handling.",
      icon: policeLogo,
    },
    {
      id: 2,
      title: "Postmortem Specialist",
      description:
        "Designed for medical and postmortem specialists, ABRINA simplifies the process of recording and analyzing toxicological data. The app intelligently flags abnormal results, helping doctors detect even rare or concealed cases of poisoning with higher accuracy and speed.",
      icon: postmortemLogo,
    },
    {
      id: 3,
      title: "Forensic Expert",
      description:
        "A specialized analytical environment that assists forensic experts in confirming the presence and type of poison in biological samples. ABRINA enhances accuracy, automates report generation, and connects experts to law enforcement in real time for transparent and efficient toxicology investigations.",
      icon: forensicLogo,
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#F8FAFC] to-[#E5E7EB] text-gray-900 font-sans">
     
      <nav className="w-full flex justify-between items-center px-8 md:px-16 py-4 bg-[#0F172A] shadow-lg sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="ABRINA Logo"
            className="w-14 h-14 md:w-16 md:h-16 object-cover rounded-full border-2 border-[#0891B2] shadow-[0_0_10px_#0891B2]"
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
          <a href="#contact" className="hover:text-[#0891B2] transition">
            Contact
          </a>
        </div>
      </nav>

<header className="text-center py-16 bg-gradient-to-r from-[#F8FAFC] via-[#E2ECF5] to-[#F8FAFC] text-[#1E3A5F] shadow-[inset_0_-1px_0_0_rgba(0,0,0,0.1)]">
  <h1 className="text-5xl font-extrabold mb-5 tracking-wide text-[#0F172A]">
    Explore Roles in ABRINA
  </h1>
  <p className="max-w-4xl mx-auto text-lg leading-relaxed text-gray-700">
    ABRINA provides specialized forensic tools tailored for every professional
    involved in toxicology and criminal investigation. Whether you're a{" "}
    <span className="font-semibold text-[#0891B2]">Police Officer</span> verifying
    evidence, a <span className="font-semibold text-[#0891B2]">Postmortem Specialist</span>{" "}
    analyzing results, or a{" "}
    <span className="font-semibold text-[#0891B2]">Forensic Expert</span> confirming
    toxic substances — ABRINA helps you identify and report poisoning cases with
    greater accuracy, speed, and collaboration.
  </p>
</header>


      <main
        id="roles"
        className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid gap-12"
      >
        {roles.map((role, index) => (
          <div
            key={role.id}
            className={`flex flex-col md:flex-row items-center justify-between gap-10 bg-white shadow-lg hover:shadow-2xl border border-gray-200 rounded-3xl p-8 md:p-12 transform hover:-translate-y-1 transition duration-500 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="md:w-1/2 space-y-4">
              <h2 className="text-3xl font-bold text-[#1E3A5F]">
                {role.title}
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                {role.description}
              </p>
              <button className="mt-4 bg-[#0891B2] text-white px-8 py-3 rounded-full font-semibold text-lg shadow-md hover:bg-[#0E7490] hover:scale-105 transition-all duration-300">
                Learn More
              </button>
            </div>

            <div className="md:w-1/3 flex justify-center">
              <div className="bg-[#F8FAFC] rounded-3xl shadow-inner p-6 hover:shadow-md transition w-full h-64 flex items-center justify-center">
                <img
                  src={role.icon}
                  alt={role.title}
                  className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        ))}
      </main>

      <footer className="py-12 bg-[#1E3A5F] text-white text-center">
  <h2 className="text-3xl font-bold mb-4">Learn More About ABRINA</h2>
  <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
    Access guides, documentation, and expert resources to make the most of ABRINA.
  </p>
  <div className="flex justify-center gap-6">
    <a href="/docs" className="hover:text-[#0891B2] font-semibold transition">Documentation</a>
    <a href="/guides" className="hover:text-[#0891B2] font-semibold transition">Guides</a>
    <a href="/faq" className="hover:text-[#0891B2] font-semibold transition">FAQ</a>
  </div>
</footer>//


        <p className="text-sm text-gray-400 mt-8">
          © 2025 Anmol Priyani • Alisha • Ananya
        </p>
      
    </section>
  );
}
