import React from "react";

const ProgressBar = ({ progress, value }) => {

  return (
    <div className="bg-slate-50 backdrop-blur-md shadow-lg rounded-xl p-6 lg:col-span-2">
      <h3 className="font-semibold text-lg text-gray-700 mb-2">Overall Progress</h3>
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-950 font-semibold text-3xl ">{progress}% <span className="text-sm text-blue-600">This Year</span></span>
      </div>
      <div className="w-full bg-gray-400 rounded-full h-2.5 mb-2">
        <div
          className="bg-slate-950 h-2.5 rounded-full transition-all duration-300"
          style={{ width: `${value}%` }}
        ><span></span></div>
      </div>
    </div>
  );
};

export default ProgressBar;
