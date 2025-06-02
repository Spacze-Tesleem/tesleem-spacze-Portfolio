"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export const About = () => {
  const words = [
    "a Web Developer",
    "an Accountant",
    "a Tech Enthusiast",
    "a Frontend Engineer",
  ];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

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
        {image: "/images/react.png", name: "React"},
        {image: "/images/nextjs.svg", name: "Next.js"}, 
        {image: "/images/typescript.png", name: "TypeScript"},
        {image: "/images/tailwindcss.svg", name: "Tailwind CSS"},
        {image: "/images/js.png", name: "JavaScript"},
        {image: "/images/html.png", name: "HTML"},
        {image: "/images/bootstrap.svg", name: "Bootstrap"}, 
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
        // { image: "data:image/png;base64,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", name: "Terminal" },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
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
            using React, Next.js, TypeScript, and Tailwind CSS, backed by PHP
            and MySQL. I combine clean design, scalable architecture, and
            business logic to deliver intuitive and impactful user experiences.
          </p>

          <div className="flex flex-wrap gap-4 mt-6">
            {skillCards.map((item) => (
              <div
                key={item.title}
                className="relative w-[350px] h-[400px] rounded-2xl shadow-xl overflow-hidden bg-gray-900/95 flex flex-col justify-end p-6"
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
                {/* Tools Icons */}
                <div className="relative z-20 flex flex-wrap gap-3 mt-2">
                  {item.tools.map((tool) => (
                    <div key={tool.name} className="flex flex-col items-center">
                      <Image
                        src={tool.image}
                        alt={tool.name}
                        width={40}
                        height={40}
                        className="w-10 h-10 object-contain mb-1" />
                      <span className="text-xs text-white/80 mt-1">
                        {tool.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};