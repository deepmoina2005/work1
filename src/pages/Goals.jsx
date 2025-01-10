import { GoGoal } from "react-icons/go";
import { AiOutlinePlus } from "react-icons/ai";
import { ArrowDownWideNarrow } from "lucide-react";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import GoalsCard from '../webcomponents/card/GoalsCard';
import CreateNewGoals from '../webcomponents/Goals/CreateNewGoals';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"


const Goal = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState({
    goalType: false,
    impact: false,
  });
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleCreateNewGoal = () => setIsPopupOpen(true); // Open modal

  const handleModalClose = () => setIsPopupOpen(false); // Close modal

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

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
          <button
            className="flex items-center gap-2 text-blue-500 hover:text-blue-700 font-medium"
            onClick={handleCreateNewGoal}
          >
            <AiOutlinePlus className="text-[20px]" />
            <span>Create New Goal</span>
          </button>

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
        </div>
      </div>
      <main className="px-7 mt-4">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-8">
          <GoalsCard />
          <GoalsCard />
          <GoalsCard />
          <GoalsCard />
          <GoalsCard />
          <GoalsCard />
        </div>
      </main>
      <div>
      <Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious className='border borer-[4px] text-[#C6C6C6] rounded-md bg-white w-[42px] h-[42px] hover:bg-[#868686] hover:text-[#C6C6C6]' href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink className='rounded-md border borer-[4px] bg-white text-black hover:border-black w-[42px] h-[42px] hover:bg-white hover:text-black' href="#">1</PaginationLink>
      <PaginationLink className='rounded-md border borer-[4px] bg-white text-black hover:border-black w-[42px] h-[42px] hover:bg-white hover:text-black' href="#">2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis className='rounded-md border borer-[4px] bg-white text-black hover:border-black w-[42px] h-[42px] hover:bg-white hover:text-black' />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext className='border borer-[4px] text-[#C6C6C6] rounded-md bg-white w-[42px] h-[42px] hover:bg-[#868686] hover:text-[#C6C6C6]' href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>

      </div>
    </div>
  );
};

export default Goal;
