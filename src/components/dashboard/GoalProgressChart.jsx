import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useState, useEffect, useRef } from "react";

// Monthly goal data
const monthlyGoalData = [
  { month: "Jan", Progress: 20 },
  { month: "Mar", Progress: 60 },
  { month: "May", Progress: 10 },
];

// Goal Progress Chart Component
const GoalProgressChart = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState("This Month");
  const [isVisible, setIsVisible] = useState(false);
  const chartRef = useRef(null);

  useEffect(() => {
    // Trigger animation on component mount
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  // Calculate the highest goal achieved (maximum value from the data)
  const highestGoal = Math.max(...monthlyGoalData.map((data) => data.Progress));

  return (
    <div>
      {/* Time Range Selector */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex bg-white space-x-2 rounded-md p-2 mb-1">
          {["Yearly", "Monthly", "Weekly"].map((range) => (
            <button
              key={range}
              onClick={() => setSelectedTimeRange(range)}
              className={`px-3 py-1 rounded-md font-medium ${
                selectedTimeRange === range
                  ? "bg-gray-300 text-gray-900"
                  : "bg-slate-50 text-gray-900"
              } focus:outline-none focus:ring-2 focus:ring-gray-300`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* Animated div for the chart container */}
      <div
        ref={chartRef}
        className={`bg-slate-50 backdrop-blur-md shadow-lg rounded-xl p-6 mb-8 transform transition-all duration-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        {/* Header */}
        <h2 className="text-xl font-semibold text-gray-900 mt-1">Yearly Goal Progress</h2>
        <h1 className="font-semibold text-lg text-gray-900 mt-1">
          {highestGoal}%<span className="text-sm text-blue-600"> Highest Goal</span>
        </h1>

        {/* Chart */}
        <div className="w-full h-80 mt-4">
          <ResponsiveContainer>
            <AreaChart data={monthlyGoalData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#D1D5DB" /> {/* Light gray grid */}
              <XAxis dataKey="month" stroke="#6B7280" /> {/* Gray axis */}
              <YAxis
                stroke="#6B7280" // Gray axis
                domain={[0, 100]}
                tickFormatter={(value) => `${value}%`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(55, 65, 81, 0.8)", // Dark gray background
                  borderColor: "#4B5563", // Gray border
                }}
                itemStyle={{ color: "#E5E7EB" }} // Light gray text
                formatter={(value) => `${value}%`}
              />
              <Area
                type="monotone"
                dataKey="Progress"
                stroke="#1F2937" // Black stroke
                fill="#6B7280" // Gray fill
                fillOpacity={0.3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default GoalProgressChart;
