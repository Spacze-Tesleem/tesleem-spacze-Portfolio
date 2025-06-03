import React from "react";
import Image from "next/image";

export const Banner = () => {
  return (
    <div className="w-full relative h-48 md:h-64 rounded-xl overflow-hidden mb-8">
      <Image
        src="/images/banner.jpg"
        alt="Banner"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
};
