import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose, AiOutlinePlus } from "react-icons/ai";
import { HiOutlineHome } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { BsArchive, BsShieldLock } from "react-icons/bs";
import { GoGoal } from "react-icons/go";
import { LuListTodo } from "react-icons/lu";
import { CiStickyNote } from "react-icons/ci";
import { Bot } from "lucide-react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    {
      name: "Home",
      icon: (
        <span className="text-[28px]">
          <HiOutlineHome />
        </span>
      ),
      link: "/",
    },
    {
      name: "Vaults",
      icon: (
        <span className="text-[28px]">
          <BsShieldLock />
        </span>
      ),
      link: "/vaults",
    },
    {
      name: "Goals",
      icon: (
        <span className="text-[28px]">
          <GoGoal />
        </span>
      ),
      link: "/goals",
    },
    {
      name: "To-Do Lists",
      icon: (
        <span className="text-[28px]">
          <LuListTodo />
        </span>
      ),
      link: "/todo-lists",
    },
    {
      name: "Memories",
      icon: <CiStickyNote />,
      link: "/memories",
      hasSubmenu: true,
      submenuItems: [
        { name: "Find Memory", link: "/find-memory", icon: <CiStickyNote /> },
        {
          name: "Add New Memory",
          link: "/add-new-memory",
          icon: <AiOutlinePlus className="text-blue-600" />,
          textClass: "text-blue-600",
        },
      ],
    },
    {
      name: "Settings",
      icon: (
        <span className="text-[28px]">
          <IoSettingsOutline />
        </span>
      ),
      link: "/settings-account",
    },
    {
      name: "Archive",
      icon: (
        <span className="text-[28px]">
          <BsArchive />
        </span>
      ),
      link: "/archive",
    },
    {
      name: "Subscription",
      icon: (
        <span className="text-[28px]">
          <MdOutlineRocketLaunch />
        </span>
      ),
      link: "/subscription",
    },
    {
      name: "Coach Becky",
      icon: (
        <span className="text-[36px]">
          <Bot />
        </span>
      ),
      link: "/insight",
    },
  ];

  return (
    <div className="relative p-2 mt-2">
      {/* Toggle button */}
      <div className="flex flex-row justify-between items-center">
        <button
          onClick={toggleMenu}
          className="text-2xl p-2 text-gray-800 rounded-md lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>

        <div className="flex items-center space-x-4">
          <img
            src="https://image.lexica.art/full_webp/0141d1f8-c79e-45da-8644-08f40a167e2f"
            alt="User Avatar"
            className="rounded-full object-cover w-11 h-11" // Corrected class name
          />
        </div>
      </div>

      {/* Sliding Menu */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        {/* Search Bar */}
        <div className="px-4 py-3 mt-4">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-2 pl-10 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search..."
            />
            <IoIosSearch className="absolute top-2.5 left-3 text-gray-500 text-xl" />
          </div>
        </div>

        {/* Menu Items */}
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.link}
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
              onClick={toggleMenu} // Close menu on navigation
            >
              <span className="mr-3">{item.icon}</span>
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
        />
      )}
    </div>
  );
};

export default MobileMenu;
