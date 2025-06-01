"use client";
import Image from "next/image";
import { useState } from "react";
import { Users, FileText } from "lucide-react";
import { FaLinkedin, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

const navItems = [
  {
    id: "home",
    icon: <Image src="/images/Home.png" width={20} height={20} alt="Home" />,
    label: "Home",
  },
  { id: "about", icon: <FileText size={20} />, label: "About" },
  { id: "project", icon: <Users size={20} />, label: "Project" },
  { id: "linkedin", icon: <FaLinkedin size={20} />, label: "LinkedIn" },
  { id: "instagram", icon: <FaInstagram size={20} />, label: "Instagram" },
  { id: "twitter", icon: <FaTwitter size={20} />, label: "Twitter" },
  { id: "github", icon: <FaGithub size={20} />, label: "GitHub" },
];

const BottomNav = ({ activeTab, setActiveTab }) => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <div className="flex justify-center">
        <nav className="flex items-center bg-gray-900/95 backdrop-blur-sm rounded-full px-4 py-2 mx-4 mb-4 shadow-lg gap-3">
          {navItems.map(({ id, icon, label }) => (
            <div
              key={id}
              className="relative flex flex-col items-center justify-center group"
              onMouseEnter={() => setHovered(id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Tooltip */}
              <div
                className={`absolute -top-8 bg-black text-white text-xs px-2 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                  hovered === id ? "translate-y-0" : "-translate-y-2"
                }`}
              >
                {label}
              </div>

              <button
                onClick={() => setActiveTab(id)}
                className={`flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full transition-transform duration-300 ease-in-out ${
                  activeTab === id
                    ? "bg-white text-black scale-110"
                    : "text-gray-400 hover:scale-110 hover:bg-gray-700"
                }`}
              >
                {icon}
              </button>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default BottomNav;
