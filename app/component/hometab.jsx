"use client";
import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";

export const Hometab = () => {
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
  const today = new Date().toLocaleString('en-US', { weekday: 'long' });
  return (
    <>
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl w-full flex flex-col md:flex-row items-start gap-6 ">
          {/* Image */}
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="overflow-hidden rounded-lg">
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
                    Hello World, Spacze here!
                </h1>
                <p className="text-sm lg:text-[22px] text-gray-500 dark:text-[#F0F0F099] mt-2">
                    How was your {today}
                </p>
            </div>
            <p className="text-[#F0F0F099]-200/30 text-base leading-relaxed">
            I'm Seidu Tesleem, <span
                className={`inline-block transition-opacity duration-300 ${
                  fade ? "opacity-100" : "opacity-0"
                }`}
              >
                {words[index]}
              </span>{" "} with a strong background in web development and accounting. I specialize in building responsive, high-performance applications using React, Next.js, TypeScript, and Tailwind CSS, backed by PHP and MySQL. I combine clean design, scalable architecture, and business logic to deliver intuitive and impactful user experiences.
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {[
                "Frontend Development",
                "React",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "PHP",
                "MySQL",
                "Web Design",
                "Accounting",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm rounded-full bg-gray-200 text-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
