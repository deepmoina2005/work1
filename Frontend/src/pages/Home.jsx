import { useState } from "react"; // Import useState for managing state
import { Progress } from "@/components/ui/progress";
import { ChevronDown, ListTodo, StickyNote } from "lucide-react";
import { BsCircle } from "react-icons/bs";
import { GoGoal } from "react-icons/go";
import GoalsCard from "@/components/card/GoalsCard";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [isWidgetVisible, setIsWidgetVisible] = useState(true);
  const navigate = useNavigate();

  const handleViewMoreClick = () => {
    navigate("/goals");
  };

  return (
    <div className="mt-2 ml-4 mr-4 mb-3">
      {/* Greeting Section */}
      <div className="flex flex-col items-start gap-1">
        <p className="text-[24px] font-medium text-[#393939]">
          Hello Sourabh Ghosh!
        </p>
        <p className="text-[16px] text-[#4B4B4B]">
          Every small step brings you closer to your big dreams.
        </p>
      </div>

      {/* Let's Get Started Card */}
      {isWidgetVisible && ( // Conditionally render the widget
        <div className="bg-white rounded-md mt-4 p-4 shadow-md">
          <div className="border-b border-gray-300 pb-2">
            <h1 className="text-black text-[20px] font-semibold">
              Let's Get Started!
            </h1>
          </div>
          <div className="flex flex-row gap-2 mt-2">
            <Progress />
            <Progress />
            <Progress />
          </div>

          {/* Create Todo */}
          <div className="flex items-center border border-gray-300 rounded-md mt-4 px-4 py-2 bg-white shadow-sm hover:shadow-md transition-shadow">
            <ListTodo className="w-6 h-6 text-gray-600 mr-4" />
            <h1 className="text-gray-700 font-medium text-md">Create Todo</h1>
            <div className="ml-auto">
              <BsCircle className="w-6 h-6 text-gray-600" />
            </div>
          </div>

          {/* Create Goal */}
          <div className="flex items-center border border-gray-300 rounded-md mt-4 px-4 py-2 bg-white shadow-sm hover:shadow-md transition-shadow">
            <GoGoal className="w-6 h-6 text-gray-600 mr-4" />
            <h1 className="text-gray-700 font-medium text-md">Create Goal</h1>
            <div className="ml-auto">
              <BsCircle className="w-6 h-6 text-gray-600" />
            </div>
          </div>

          {/* Create Memory */}
          <div className="flex items-center border border-gray-300 rounded-md mt-4 px-4 py-2 bg-white shadow-sm hover:shadow-md transition-shadow">
            <StickyNote className="w-6 h-6 text-gray-600 mr-4" />
            <h1 className="text-gray-700 font-medium text-md">Create Memory</h1>
            <div className="ml-auto">
              <BsCircle className="w-6 h-6 text-gray-600" />
            </div>
          </div>

          <button
            className="mt-4 text-blue-500 hover:underline"
            onClick={() => setIsWidgetVisible(false)} // Hide widget on button click
          >
            Hide this Widget
          </button>
        </div>
      )}

      {/* Pending Todo, Complete Todos, Complete Goal Card */}
      <div className="flex flex-row gap-4 mt-8">
        {/* Pending Todos Card */}
        <div className="flex flex-col bg-white rounded-lg shadow-md w-1/3 h-[160px]">
          <h1 className="text-[24px] font-semibold ml-4 mt-2 text-gray-800">
            Pending Todos
          </h1>
          <p className="text-[48px] ml-4 font-bold text-gray-900">0</p>
          <p className="text-[14px] ml-4 text-blue-500">0 from last month</p>
        </div>

        {/* Complete Todos Card */}
        <div className="flex flex-col bg-white rounded-lg shadow-md w-1/3 h-[160px]">
          <h1 className="text-[24px] font-semibold ml-4 mt-2 text-gray-800">
            Completed Todos
          </h1>
          <p className="text-[48px] ml-4 font-bold text-gray-900">0</p>
          <p className="text-[14px] ml-4 text-blue-500">0 from last month</p>
        </div>

        {/* Completed Goals Card */}
        <div className="flex flex-col bg-white rounded-lg shadow-md w-1/3 h-[160px]">
          <h1 className="text-[24px] font-semibold ml-4 mt-2 text-gray-800">
            Completed Goals
          </h1>
          <p className="text-[48px] font-bold ml-4 text-gray-900">0</p>
          <p className="text-[14px] text-blue-500 ml-4">0 from last month</p>
        </div>
      </div>

      {/* Top Todos For Today */}
      <div className="bg-white rounded-md mt-8 p-4 shadow-md h-[285px]">
        <div className="border-b border-gray-300 pb-2">
          <h1 className="text-black text-[20px] font-semibold">
            Top Todos for Today
          </h1>
        </div>
      </div>

      {/* Top Todos For Today */}
      <div className="bg-white rounded-md mt-8 p-4 shadow-md h-[1280px] lg:h-[500px]">
        <div className="border-b border-gray-300 pb-2">
          <h1 className="text-black text-[20px] font-semibold">
            Top Goals for Today
          </h1>
        </div>
        <div className="flex flex-col">
          {/* Row for Goals Cards */}
          <div className="lg:flex lg:justify-between flex flex-col lg:flex-row mt-4 gap-4">
            <GoalsCard />
            <GoalsCard />
            <GoalsCard />
          </div>
          {/* View More Section */}
          <div className="mt-3 flex justify-end items-center">
            <button
              onClick={handleViewMoreClick}
              className="text-[#1976D2] text-[12px] font-medium flex items-center"
            >
              View more{" "}
              <ChevronDown className="ml-1 w-[12px] mt-0.5 h-[12px]" />
            </button>
          </div>
        </div>
      </div>

      {/* Top Todos For Today */}
      <div className="bg-white rounded-md mt-8 p-4 shadow-md h-[285px]">
        <div className="border-b border-gray-300 pb-2">
          <h1 className="text-black text-[20px] font-semibold">
            Top Todos for Today
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
