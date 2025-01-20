import { GoGoal } from "react-icons/go";
import { ArrowDownWideNarrow, CopyPlus } from "lucide-react";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import GoalsCard from "../components/card/GoalsCard";
import CreateNewGoals from "../components/Goals/CreateNewGoals";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const Goal = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState({
    goalType: false,
    impact: false,
  });
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Example list of goals
  const goals = [
    {
      title: "Learn New Language",
      date: "12/22/2024",
      progress: 50,
      priority: "high",
      tasksCompleted: 3,
      totalTasks: 5,
      type: "Yearly",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam libero excepturi, omnis aliquam similique cumque facere porro officia quos at voluptate, nulla dolorem esse iusto odio maiores! Odio, tempora earum.",
    },
    {
      title: "Achieve Fitness Goals",
      date: "11/15/2024",
      progress: 10,
      priority: "medium",
      tasksCompleted: 1,
      totalTasks: 5,
      type: "Monthly",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam libero excepturi, omnis aliquam similique cumque facere porro officia quos at voluptate, nulla dolorem esse iusto odio maiores! Odio, tempora earum.",
    },
    {
      title: "Complete Project",
      date: "10/30/2024",
      progress: 75,
      priority: "high",
      tasksCompleted: 7,
      totalTasks: 5,
      type: "Weekly",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam libero excepturi, omnis aliquam similique cumque facere porro officia quos at voluptate, nulla dolorem esse iusto odio maiores! Odio, tempora earum.",
    },
    {
      title: "Read 12 Books",
      date: "12/31/2024",
      progress: 0,
      priority: "low",
      tasksCompleted: 3,
      totalTasks: 5,
      type: "Yearly",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam libero excepturi, omnis aliquam similique cumque facere porro officia quos at voluptate, nulla dolorem esse iusto odio maiores! Odio, tempora earum.",
    },
    {
      title: "Travel to 5 Countries",
      date: "09/01/2025",
      progress: 10,
      priority: "medium",
      tasksCompleted: 0,
      totalTasks: 5,
      type: "Lifetime",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam libero excepturi, omnis aliquam similique cumque facere porro officia quos at voluptate, nulla dolorem esse iusto odio maiores! Odio, tempora earum.",
    },
    {
      title: "Travel to 5 Countries",
      date: "09/01/2025",
      progress: 80,
      priority: "medium",
      tasksCompleted: 8,
      totalTasks: 10,
      type: "Lifetime",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam libero excepturi, omnis aliquam similique cumque facere porro officia quos at voluptate, nulla dolorem esse iusto odio maiores! Odio, tempora earum.",
    },
  ];

  const handleCreateNewGoal = () => setIsPopupOpen(true); // Open modal
  const handleModalClose = () => setIsPopupOpen(false); // Close modal
  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const toggleSubMenu = (menuName) => {
    setSubMenuOpen((prev) => ({
      ...prev,
      [menuName]: !prev[menuName],
    }));
  };

  return (
    <div className="mt-4">
      <div className="flex justify-between items-center px-7 py-4">
        <div className="flex items-center gap-2">
          <GoGoal className="text-[25.33px]" />
          <p className="text-[25.33px] font-medium text-[#393939]">Goals</p>
        </div>
        <div className="flex items-center gap-4 relative">
          {/* Popup Modal */}
          {isPopupOpen && (
            <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg w-[100vh] max-h-min">
                <CreateNewGoals onClose={handleModalClose} />
              </div>
            </div>
          )}

          <button
            className="p-2 text-gray-500 hover:text-gray-700"
            onClick={toggleMenu}
          >
            <ArrowDownWideNarrow className="text-[20px]" />
          </button>
          {menuOpen && (
            <div className="absolute right-0 top-10 bg-white shadow-lg rounded-md border w-40">
              <ul className="text-gray-700">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Title
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Due Date
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer relative flex items-center justify-between"
                  onClick={() => toggleSubMenu("goalType")}
                >
                  Goal Type
                  <IoIosArrowForward
                    className={`transform transition-transform ${
                      subMenuOpen.goalType ? "rotate-90" : ""
                    }`}
                  />
                  {subMenuOpen.goalType && (
                    <div className="absolute right-full top-0 bg-white shadow-lg rounded-md border w-40">
                      <ul className="text-gray-700">
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                          Yearly
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                          Monthly
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                          Weekly
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer relative flex items-center justify-between"
                  onClick={() => toggleSubMenu("impact")}
                >
                  Impact
                  <IoIosArrowForward
                    className={`transform transition-transform ${
                      subMenuOpen.impact ? "rotate-90" : ""
                    }`}
                  />
                  {subMenuOpen.impact && (
                    <div className="absolute right-full top-0 bg-white shadow-lg rounded-md border w-40">
                      <ul className="text-gray-700">
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                          High
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                          Medium
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                          Low
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
              </ul>
            </div>
          )}
          <button
            className="flex items-center gap-2 text-blue-500 hover:text-blue-700 font-medium"
            onClick={handleCreateNewGoal}
          >
            <CopyPlus className="text-[20px]" />
            <span>Create Goal</span>
          </button>
        </div>
      </div>
      <main className="px-7 mt-4">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-8">
          {goals.map((goal, index) => (
            <GoalsCard key={index} goal={goal} />
          ))}
        </div>

        <div className="flex justify-center items-center pb-8">
          <Pagination>
            <PaginationContent>
              {/* Previous Button */}
              <PaginationItem>
                <PaginationPrevious
                  className="border text-[#C6C6C6] rounded-md bg-white w-[42px] h-[42px] hover:bg-[#868686] hover:text-[#C6C6C6]"
                  href="#"
                  aria-label="Previous Page"
                />
              </PaginationItem>

              {/* Page Numbers */}
              <PaginationItem>
                {[1, 2].map((page) => (
                  <PaginationLink
                    key={page}
                    className={`rounded-md border bg-white text-black w-[42px] h-[42px] hover:border-black ${
                      page === 1
                        ? "bg-white text-black border border-black"
                        : ""
                    }`}
                    href="#"
                  >
                    {page}
                  </PaginationLink>
                ))}
              </PaginationItem>

              {/* Ellipsis */}
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>

              {/* Next Button */}
              <PaginationItem>
                <PaginationNext
                  className="border text-[#C6C6C6] rounded-md bg-white w-[42px] h-[42px] hover:bg-[#868686] hover:text-[#C6C6C6]"
                  href="#"
                  aria-label="Next Page"
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </main>
    </div>
  );
};

export default Goal;
