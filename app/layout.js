"use client";
import { Inter, Fira_Mono } from "next/font/google";
import "./globals.css";
import BottomNav from "./component/bottombar";
import { useState } from "react";
import { Hometab } from "./component/hometab";
import { Project } from "./component/Project";
import { About } from "./component/about";
import Experience from "./component/experience";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const firaMono = Fira_Mono({ variable: "--font-fira-mono", subsets: ["latin"], weight: ["400", "500", "700"] });

export default function RootLayout({ children }) {
  const [activeTab, setActiveTab] = useState("home");

  const renderTabContent = () => {
    switch (activeTab) {
      case "home":
        return <Hometab setActiveTab={setActiveTab} />;
        case "about":
        return <About setActiveTab={setActiveTab} />;
      case "project":
        return <Project setActiveTab={setActiveTab} />;
      case "resume":
        return <Experience setActiveTab={setActiveTab} />;
      
      default:
        return children;
    }
  };

  return (
    <html lang="en">
      <body className={`${inter.variable} ${firaMono.variable} antialiased`}>
        <main className="min-h-screen">{renderTabContent()}</main>
        <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
      </body>
    </html>
  );
}
