import React, { useState } from 'react';
import { FaBars, FaUserCircle } from 'react-icons/fa'; // Using react-icons for menu and profile icons
// If you are using Redux, you can import and use it as you did before

const MobileMenu = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false); // State to control sidebar visibility

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="fixed top-0 left-0 right-0 flex justify-between p-4 bg-white z-50">
      {/* Left side - Menu Icon */}
      <div>
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-md focus:outline-none hover:bg-gray-200"
        >
          <FaBars size={30} />
        </button>
      </div>

      {/* Right side - Profile Icon */}
      <div>
      <img
              src="https://image.lexica.art/full_webp/71d66e6a-0e79-4749-af89-7f025146df91"
              alt="User Avatar"
              className="w-10 h-10 rounded-full object-cover border border-gray-600"
            />
      </div>

      {/* Sidebar - This can be either a component or a simple div */}
      {sidebarOpen && (
        <div
          className="fixed top-0 left-0 bottom-0 bg-gray-800 bg-opacity-50 z-40"
          onClick={() => setSidebarOpen(false)} // Close the sidebar when clicking outside
        >
          <div
            className="w-64 bg-white p-4 transform transition-transform duration-300 ease-in-out"
            style={{ transform: sidebarOpen ? 'translateX(0)' : 'translateX(-100%)' }}
            // The above transform animation is optional, to make the sidebar slide in
          >
            {/* Sidebar content goes here */}
            <ul>
              <li className="py-2">Menu Item 1</li>
              <li className="py-2">Menu Item 2</li>
              <li className="py-2">Menu Item 3</li>
              <li className="py-2">Menu Item 4</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
