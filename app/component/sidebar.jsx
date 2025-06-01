import Link from "next/link";
import { FaLaptop } from "react-icons/fa";

const NavItem = ({ href, icon, isActive = false, text }) => (
  <Link
    href={href}
    className={`flex items-center justify-center p-3 rounded-md transition-colors
          ${isActive ? "text-white" : "text-gray-400 hover:text-gray-200"}`}
  >
    {icon}
    <span className="text-xs mt-1 block">{text}</span>
  </Link>
);

export const Sidebar = () => {
  const currentPath = "/";
  return (
    <div className="fixed top-[10rem] left-0 right-0 z-50">
      <nav className="w-13 lg:w-18 bg-gray-900/95 justify-center items-center backdrop-blur-sm rounded-full shadow-lg flex flex-col items-center mx-5 py-6 space-y-4">
        <NavItem
          href="/services"
          className="rounded-lg hover:bg-darkbg transition"
          icon={<FaLaptop size={20}/>}
          isActive={currentPath === "/services"}
        //   text="Services"
        />
        <NavItem
          href="/services"
          className="rounded-lg hover:bg-darkbg transition"
          icon={<FaLaptop size={20}/>}
          isActive={currentPath === "/services"}
        //   text="Services"
        />
        <NavItem
          href="/services"
          className="rounded-lg hover:bg-darkbg transition"
          icon={<FaLaptop size={20}/>}
          isActive={currentPath === "/services"}
        //   text="Services"
        />
      </nav>
    </div>
  );
};
