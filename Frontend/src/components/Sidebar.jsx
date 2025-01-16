import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GoGoal } from "react-icons/go";
import { LuListTodo } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { BsArchive } from "react-icons/bs";
import { HiOutlineHome } from "react-icons/hi2";
import { AiOutlinePlus } from "react-icons/ai";
import { CiStickyNote } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoIosSearch, IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { LiaSearchengin } from "react-icons/lia";
import { ChartLine, Circle } from "lucide-react";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleSubmenu = (menuName) => {
    setActiveSubmenu(activeSubmenu === menuName ? null : menuName);
  };

  const menuItems = [
    { name: "Home", icon: <HiOutlineHome />, link: "/" },
    { name: "Vaults", icon: <Circle />, link: "/vaults" },
    { name: "Goals", icon: <GoGoal />, link: "/goals" },
    { name: "To-Do Lists", icon: <LuListTodo />, link: "/todo-lists" },
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
        <div className="space-y-2 p-4">
          {filteredMenuItems.map((item) => {
            const isActiveParent =
              location.pathname === item.link ||
              (item.hasSubmenu &&
                item.submenuItems.some((subItem) => location.pathname === subItem.link));

            return (
              <div key={item.name} className="relative">
                {item.hasSubmenu ? (
                  <div>
                    {/* Parent Menu Item */}
                    <button
                      onClick={() => navigate(item.link)}
                      className={`flex items-center justify-between w-full px-4 py-2 rounded ${
                        isActiveParent ? "bg-[#F3F3F3] font-semibold" : "hover:bg-[#F3F3F3]"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span className="text-[16px]">{item.icon}</span>
                        <span>{item.name}</span>
                      </span>
                      <span
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleSubmenu(item.name);
                        }}
                      >
                        {activeSubmenu === item.name ? <IoIosArrowUp /> : <IoIosArrowDown />}
                      </span>
                    </button>

                    {/* Submenu Items */}
                    <div
                      className={`ml-6 mt-2 space-y-1 ${
                        activeSubmenu === item.name ? "block" : "hidden"
                      }`}
                    >
                      {item.submenuItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.link}
                          className={`flex items-center gap-2 px-4 py-2 rounded hover:bg-[#F3F3F3] hover:font-semibold ${
                            subItem.textClass || ""
                          } ${location.pathname === subItem.link ? "bg-[#F3F3F3] font-semibold" : ""}`}
                        >
                          {subItem.icon}
                          <span className="text-[12px]">{subItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.link}
                    className={`flex items-center gap-2 px-4 py-2 rounded ${
                      location.pathname === item.link ? "bg-[#F3F3F3] font-semibold" : "hover:bg-[#F3F3F3]"
                    }`}
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </nav>

      {/* Footer */}
      <div className="p-4 text-center text-gray-600 border-t border-gray-300">
        <div className="flex justify-center items-center gap-1 mb-2">
          <img
            src="https://image.lexica.art/full_webp/71d66e6a-0e79-4749-af89-7f025146df91"
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