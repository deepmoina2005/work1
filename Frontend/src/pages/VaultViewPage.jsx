import React, { useState } from "react";
import GoalsCard from "@/components/card/GoalsCard";
import ToDoTable from "@/components/ToDo/ToDoTable";
import MemoryTable from "@/components/Memory/MemoriesTable";
import CreateNewGoals from "@/components/Goals/CreateNewGoals";
import {
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ListTodo,
  CopyPlus,
} from "lucide-react";
import { BsShieldLock } from "react-icons/bs";
import { GoGoal } from "react-icons/go";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const VaultViewPage = () => {

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

  const navigate = useNavigate(); // Initialize the navigate function
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [showTodoAndMemories, setShowTodoAndMemories] = useState(false);

  const handleCreateNewGoal = () => setIsPopupOpen(true); // Open modal
  const handleModalClose = () => setIsPopupOpen(false); // Close modal
  const toggleTodoAndMemories = () =>
    setShowTodoAndMemories(!showTodoAndMemories);

  return (
    <div className="m-4 mb-5">
      <div className="flex items-center gap-2 px-4 py-4">
        <button
          className="flex-row flex gap-2 items-center"
          onClick={() => navigate(-1)} // Navigate to the previous page
        >
          <ChevronLeft className="w-[14px] h-[14px]" />
          <p className="text-[14px]">Back</p>
        </button>
      </div>

      <div className="px-4">
        <div className="flex items-center gap-2">
          <BsShieldLock className="w-[28px] h-[32px]" />
          <h1 className="text-[24px] font-medium text-[#393939]">Life</h1>
        </div>

        <div className="mt-4 mr-6 ml-6">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full border border-slate-300 max-h-min">
            <div className="flex flex-row justify-between mb-2">
              <div className="flex items-center gap-2">
                <GoGoal className="text-[25.33px]" />
                <p className="text-[25.33px] font-medium text-[#393939]">
                  Goals
                </p>
              </div>
              {isPopupOpen && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
                  <div className="bg-white p-6 rounded-lg shadow-lg w-[100vh] max-h-min">
                    <CreateNewGoals onClose={handleModalClose} />
                  </div>
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
            <div className="px-7 mt-4">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-8">
                {goals.map((goal, index) => (
                  <GoalsCard key={index} goal={goal} />
                ))}
              </div>
            </div>
            <div className="mt-3 flex justify-end items-center">
              <button
                className="text-[#1976D2] text-[12px] font-medium flex items-center"
                onClick={toggleTodoAndMemories}
              >
                {showTodoAndMemories ? (
                  <>
                    View less{" "}
                    <ChevronUp className="ml-1 w-[12px] mt-0.5 h-[12px]" />
                  </>
                ) : (
                  <>
                    View more{" "}
                    <ChevronDown className="ml-1 w-[12px] mt-0.5 h-[12px]" />
                  </>
                )}
              </button>
            </div>
          </div>

          {showTodoAndMemories && (
            <>
              <div className="mt-4">
                <div className="bg-white p-6 rounded-lg shadow-lg w-full border border-slate-300 max-h-min">
                  <div className="flex flex-row justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <ListTodo className="text-[25.33px]" />
                      <p className="text-[25.33px] font-medium text-[#393939]">
                        Todos
                      </p>
                    </div>
                    <button
                      className="flex items-center gap-2 text-blue-500 hover:text-blue-700 font-medium"
                      onClick={handleCreateNewGoal}
                    >
                      <CopyPlus className="text-[20px]" />
                      <span>Create Todo</span>
                    </button>
                  </div>
                  <div className="border border-slate-300 rounded-md">
                    <ToDoTable />
                  </div>
                </div>
              </div>

              <div className="mt-4 mb-5">
                <div className="bg-white p-6 rounded-lg shadow-lg w-full border border-slate-300 max-h-min">
                  <div className="flex flex-row justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <ListTodo className="text-[25.33px]" />
                      <p className="text-[25.33px] font-medium text-[#393939]">
                        Memories
                      </p>
                    </div>
                    <button
                      className="flex items-center gap-2 text-blue-500 hover:text-blue-700 font-medium"
                      onClick={handleCreateNewGoal}
                    >
                      <CopyPlus className="text-[20px]" />
                      <span>Create Memory</span>
                    </button>
                  </div>
                  <div className="border border-slate-300 rounded-md">
                    <MemoryTable />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default VaultViewPage;
