import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export const ProjectData = ({ image, title, description, tag }) => {
  return (
    <>
      <div className="w-[400px] h-[250px] rounded-xl overflow-hidden flex-shrink-0 relative">
        <Image src={image} alt="DMS" fill className="object-cover" />
      </div>
      <div className="flex-1">
        <h2 className="text-base font-semibold">{title}</h2>
        <p className="text-sm text-gray-400">{description}</p>
        <p className="text-xs text-gray-500 mt-1">{tag}</p>
      </div>
      <ChevronRight className="text-gray-400 hover:text-white" size={20} />
    </>
  );
};

export const Project = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-black text-white">
      <div className="max-w-4xl w-full flex flex-col gap-10">
        {/* Section Title */}
        <div>
          <h1 className="text-3xl font-bold mb-2">Projects</h1>
          <p className="text-sm text-gray-400 max-w-xl">
            Here are a few projects that showcase my work and creativity. While
            there are many more, I’ve curated a selection to keep this portfolio
            concise and focused.
          </p>
        </div>

        {/* Project Card */}
        <div className="bg-gradient-to-b from-neutral-900 to-black border border-neutral-800 p-4 rounded-2xl flex gap-4 items-center shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <ProjectData
            image="/images/dms.png"
            title="Digital Marketing Square"
            description="Designed a disruptive website, focusing on seamless user experience and interactive elements."
            tag="Framer, Feb 2023"
          />
        </div>
        <div className="bg-gradient-to-b from-neutral-900 to-black border border-neutral-800 p-4 rounded-2xl flex gap-4 items-center shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <ProjectData
            image="/images/olutumbi.png"
            title="OLUTUMBI BABAYOMI CHAMBERS"
            description="OLUTUMBI BABAYOMI CHAMBERS is a core litigation specialist Firm that offers topnotch, innovative and result driven services in multiple areas of law, servicing clients locally and internationally."
            tag="Framer, Feb 2023"
          />
        </div>
        <div className="bg-gradient-to-b from-neutral-900 to-black border border-neutral-800 p-4 rounded-2xl flex gap-4 items-center shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <ProjectData
            image="/images/spc.png"
            title="SpcNft"
            description="SpcNft is a crytocurrency and NFT marketplace that allows users to buy, sell, and trade digital assets securely."
            tag="Framer, Feb 2023"
          />
        </div>
        <div className="bg-gradient-to-b from-neutral-900 to-black border border-neutral-800 p-4 rounded-2xl flex gap-4 items-center shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <ProjectData
            image="/images/lifadoc.png"
            title="Lifadoc"
            description="SpcNft is a crytocurrency and NFT marketplace that allows users to buy, sell, and trade digital assets securely."
            tag="Framer, Feb 2023"
          />
        </div>
        <div className="bg-gradient-to-b from-neutral-900 to-black border border-neutral-800 p-4 rounded-2xl flex gap-4 items-center shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <ProjectData
            image="/images/ecosatisfaction.png"
            title="Ecosatisfaction"
            description="At Eco-Satisfaction, our mission is to continuously adapt to changing market trends while building strong alliances with world-class partners to enable us to consistently exceed our clients’ expectations."
            tag="Framer, Feb 2023"
          />
        </div>
        <div className="bg-gradient-to-b from-neutral-900 to-black border border-neutral-800 p-4 rounded-2xl flex gap-4 items-center shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <ProjectData
            image="/images/SpaczeGet.png"
            title="SpaczeGet"
            description="SpaczeGet is a plat."
            tag="Framer, Feb 2023"
          />
        </div>
      </div>
    </div>
  );
};
