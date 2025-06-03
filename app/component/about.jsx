"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Banner } from "./banner";

export const About = () => {
  const stackItems = [
    {
      name: "Html",
      description: "Frontend",
      image: "/images/html.png",
      preview: "/images/html.png",
    },
    {
      name: "Css3",
      description: "Stylesheet",
      image: "/images/css3.svg",
      preview: "/images/css3.svg",
    },
    {
      name: "Bootstrap",
      description: "Framework",
      image: "/images/bootstrap.svg",
      preview: "/images/bootstrap.svg",
    },
    {
      name: "Tailwind",
      description: "Framework",
      image: "/images/tailwindcss.svg",
      preview: "/images/tailwindcss.svg",
    },
    {
      name: "Javascript",
      description: "Framework",
      image: "/images/js.png",
      preview: "/images/js.png",
    },
    {
      name: "React Js",
      description: "Framework",
      image: "/images/react.png",
      preview: "/images/react.png",
    },
    {
      name: "Next Js",
      description: "Framework",
      image: "/images/next.svg",
      preview: "/images/next.svg",
    },
    {
      name: "Typescript",
      description: "Framework",
      image: "/images/typescript.png",
      preview: "/images/typescript.png",
    },
  ];

  const words = [
    "a Web Developer",
    "an Accountant",
    "a Tech Enthusiast",
    "a Frontend Engineer",
  ];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  // const [selected, setSelected] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setFade(true);
      }, 700);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const skillCards = [
    {
      title: "Frontend",
      subtitle: "Languages, frameworks and libraries I use for UI/UX",
      badge: "Stack",
      image: "/images/coding-night.jpg",
      tools: [
        { image: "/images/react.png", name: "React" },
        { image: "/images/nextjs.svg", name: "Next.js" },
        { image: "/images/typescript.png", name: "TypeScript" },
        { image: "/images/tailwindcss.svg", name: "Tailwind CSS" },
        { image: "/images/js.png", name: "JavaScript" },
        { image: "/images/html.png", name: "HTML" },
        { image: "/images/bootstrap.svg", name: "Bootstrap" },
      ],
    },
    {
      title: "Tools",
      subtitle: "My favorite development tools and platforms",
      badge: "Tools",
      image: "/images/items.jpg",
      tools: [
        { image: "/images/git.svg", name: "Git" },
        { image: "/images/fithub.png", name: "GitHub" },
        { image: "/images/vs-code.svg", name: "VS Code" },
        { image: "/images/npm.svg", name: "npm" },
        { image: "/images/vite.svg", name: "Vite" },
      ],
    },
  ];

  return (
    <>
      <Banner />
      <div className="min-h-screen py-15 justify-center p-4">
        <div className="flex items-center justify-center px-4">
          <div className="max-w-7xl w-full flex flex-col md:flex-row items-start gap-6">
            {/* Image */}
            <div className="p-4 md:w-1/3 flex justify-center">
              <div className="overflow-hidden rounded-lg w-full h-full flex items-center justify-center">
                <Image
                  src="/images/Spacze.jpg"
                  alt="Profile photo"
                  width={200}
                  height={200}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
            {/* Content */}
            <div className="flex-1">
              <div className="mb-5">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Meet Tesleem
                </h1>
              </div>
              <p className="text-[#F0F0F099]-200/30 text-base leading-relaxed">
                I'm Seidu Tesleem,{" "}
                <span
                  className={`inline-block transition-opacity duration-300 ${
                    fade ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {words[index]}
                </span>{" "}
                with a strong background in web development and accounting. I
                specialize in building responsive, high-performance applications
                using React, Next.js, TypeScript, and Tailwind CSS, backed by
                PHP and MySQL. I combine clean design, scalable architecture,
                and business logic to deliver intuitive and impactful user
                experiences.
              </p>

              {/* Profile Badge */}
              <div className="profile-badge mb-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
                  {[
                    { title: "Degree", description: "B.sc. Accounting" },
                    { title: "Location", description: "Lagos, Nigeria" },
                    { title: "Email", description: "seidutesleem72@gmail.com" },
                    { title: "Phone", description: "+234 816 118 1020" },
                    { title: "Open to work", description: "Available" },
                    { title: "Birthday", description: "March 14th" },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="bg-gray-800/80 p-2 rounded-lg shadow-lg flex flex-col gap-1"
                    >
                      <span className="text-gray-400 text-xs uppercase tracking-wide font-semibold mb-1">
                        {item.title}
                      </span>
                      <span className="text-white text-base font-medium break-all">
                        {item.description}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Stack Preview and List */}
        {/* <div className="max-w-7xl w-full flex flex-col md:flex-row items-start gap-6 mt-10">

          <div className="hover-stack flex-1 flex items-center justify-center min-h-[300px]">
            <div className="w-full h-full flex flex-col items-center justify-center">
              <Image
                src={stackItems[selected].preview}
                alt={stackItems[selected].name}
                width={320}
                height={200}
                className="rounded-xl object-cover shadow-lg mb-4"
                style={{ maxHeight: 220, background: "#222" }}
              />
              <div className="text-white text-2xl font-bold mb-1">
                {stackItems[selected].name}
              </div>
              <div className="text-gray-400 text-base">
                {stackItems[selected].description}
              </div>
            </div>
          </div>

          <div className="stack-skill flex-1">
            <h2 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
              <span className="inline-block bg-gray-800 px-4 py-2 rounded-lg flex items-center gap-2">
                My stack
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  className="inline-block"
                >
                  <rect
                    x="3"
                    y="3"
                    width="14"
                    height="14"
                    rx="2"
                    strokeWidth="2"
                  />
                  <path d="M7 7h6v6H7z" strokeWidth="2" />
                </svg>
              </span>
            </h2>
            <p className="text-gray-400 mb-6">
              The tools I use daily for work and managing my business.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
              {stackItems.map((item, idx) => (
                <button
                  key={item.name}
                  onClick={() => setSelected(idx)}
                  onMouseEnter={() => setSelected(idx)}
                  className={`bg-[#18181b] rounded-xl p-5 flex items-center gap-4 shadow-lg transition-all duration-200 outline-none
                ${
                  selected === idx
                    ? "ring-2 ring-blue-500 scale-105"
                    : "hover:ring-2 hover:ring-blue-700"
                }
              `}
                  style={{ textAlign: "left" }}
                  type="button"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-lg"
                  />
                  <div>
                    <div className="text-white font-medium">{item.name}</div>
                    <div className="text-gray-400 text-sm">
                      {item.description}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div> */}
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-start gap-6 mt-10">
          {/* Left: Preview Image */}
          <div className="hidden md:flex flex-1 items-center justify-center">
            {[
              {
                title: "Frontend",
                subtitle: "Languages, frameworks and libraries I use for UI/UX",
                badge: "Stack",
                image: "/images/coding-night.jpg",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="relative w-[500px] h-[400px] items-center rounded-2xl shadow-xl overflow-hidden bg-gray-900/95 flex flex-col justify-end p-6"
                style={{
                  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                }}
              >
                {/* Background Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover absolute inset-0 z-0"
                  style={{ filter: "brightness(0.7)" }}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
                {/* Badge */}
                <span className="relative z-20 inline-block bg-white/30 text-white text-xs px-3 py-1 rounded-full mb-2 backdrop-blur-sm">
                  {item.badge}
                </span>
                {/* Title and Subtitle */}
                <div className="relative z-20 mb-4">
                  <h1 className="text-3xl font-bold text-white mb-2">
                    {item.title}
                  </h1>
                  <p className="text-lg text-white/80 leading-tight">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* Right: Stack Grid */}
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-white mb-4">My Stack</h2>
            <p className="text-gray-400 mb-6">
              The tools I use daily for work and managing my business.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stackItems.map((item, idx) => (
                <div
                  key={item.name}
                  className="bg-[#18181b] rounded-xl p-3 flex items-center gap-4 shadow-lg transition-all duration-200 cursor-pointer"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-lg"
                  />
                  <div>
                    <div className="text-white font-medium">{item.name}</div>
                    <div className="text-gray-400 text-sm">
                      {item.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
