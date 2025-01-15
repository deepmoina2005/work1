import { useState } from "react";
import { Link } from "react-router-dom";
import { GoGoal } from "react-icons/go";
import { LuListTodo } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { BsArchive } from "react-icons/bs";
import { HiOutlineHome } from "react-icons/hi2";
import { AiOutlinePlus } from "react-icons/ai";
import { CiStickyNote } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { LiaSearchengin } from "react-icons/lia";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { ChartLine } from "lucide-react";

const Sidebar = () => {
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleSubmenu = (menuName) => {
    setActiveSubmenu(activeSubmenu === menuName ? null : menuName);
  };

  const menuItems = [
    { name: "Home", icon: <HiOutlineHome />, link: "/" },
    { name: "Vaults", icon: <HiOutlineHome />, link: "/vaults" },
    { name: "Goals", icon: <GoGoal />, link: "/goals" },
    { name: "To-Do Lists", icon: <LuListTodo />, link: "/todo-lists" },
    { name: "Memories", icon: <CiStickyNote />, link: "/memories", hasSubmenu: true },
    { name: "Review", icon: <ChartLine />, link: "/review" },
    { name: "Settings", icon: <IoSettingsOutline />, link: "/settings-account" },
    { name: "Subscription", icon: <MdOutlineRocketLaunch />, link: "/subscription" },
    { name: "Archive", icon: <BsArchive />, link: "/archive" },
    { name: "Insight", icon: <LiaSearchengin />, link: "/insight" },
  ];

  const filteredMenuItems = menuItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-64 h-screen bg-white text-black flex flex-col rounded-lg mt-3 ml-3">
      {/* User Profile */}
      <div className="p-4 text-lg font-bold">
        <div className="flex items-center justify-between space-x-4">
          <div className="flex items-center space-x-4">
            <img
              src="https://image.lexica.art/full_webp/71d66e6a-0e79-4749-af89-7f025146df91"
              alt="User Avatar"
              className="w-10 h-10 rounded-full object-cover border border-gray-600"
            />
            <div className="text-black">
              <h3 className="text-[16px] font-semibold m-0 p-0">Sourabh Ghosh</h3>
              <p className="text-[12px] text-gray-600">sourabh34@gmail.com</p>
            </div>
          </div>
          <IoNotificationsOutline className="text-2xl mb-3.5 text-gray-600 cursor-pointer w-7 h-7 hover:text-black transition-colors" />
        </div>
      </div>

      {/* Search Bar */}
      <div className="p-4">
        <div className="flex items-center border border-slate-300 rounded-md p-2">
          <IoIosSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="ml-2 bg-transparent text-black placeholder-gray-400 focus:outline-none w-full"
          />
        </div>
      </div>

      {/* Menu */}
      <nav className="flex-grow overflow-auto block">
        <ul className="space-y-2 p-4">
          {filteredMenuItems.map((item) => (
            <li key={item.name} className="relative">
              {item.hasSubmenu ? (
                <div>
                  {/* Parent Menu Item */}
                  <button
                    onClick={() => toggleSubmenu(item.name)}
                    className={`flex items-center justify-between w-full px-4 py-2 rounded ${
                      activeSubmenu === item.name
                        ? "bg-slate-300 font-semibold"
                        : "hover:bg-slate-300"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-[16px]">{item.icon}</span>
                      <span>{item.name}</span>
                    </span>
                    <span>
                      {activeSubmenu === item.name ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </span>
                  </button>

                  {/* Submenu */}
                  <ul
                    className={`ml-6 mt-2 space-y-1 ${
                      activeSubmenu === item.name ? "block" : "hidden"
                    }`}
                  >
                    <li>
                      <Link
                        to="/find-memory"
                        className="flex items-center gap-2 px-4 py-2 rounded hover:bg-slate-300 hover:font-semibold"
                      >
                        <CiStickyNote className="w-5 h-5" />
                        <span className="text-[12px]">Find Memory</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/add-new-memory"
                        className="flex items-center gap-2 px-4 py-2 rounded hover:bg-slate-300 hover:font-semibold"
                      >
                        <AiOutlinePlus className="w-5 h-5 text-blue-600" />
                        <span className="text-[12px] text-blue-600">Add New Memory</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                <Link
                  to={item.link}
                  className="flex items-center gap-2 px-4 py-2 rounded hover:bg-slate-300 hover:font-semibold"
                >
                  {item.icon}
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 text-center text-gray-600 border-t border-gray-300">
        <div className="flex justify-center items-center gap-1 mb-2">
          <img
            src="https://image.lexica.art/full_webp/71d66e6a-0e79-4749-af89-7f025146df91" // Replace with actual profile picture URL
            alt="User Avatar"
            className="w-6 h-6 rounded-full object-cover border-2 border-gray-600"
          />
          <p className="font-semibold text-sm text-gray-900">Personal Coach</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
