import { CircleCheck, Tags, Bell, FileText } from "lucide-react";

const NotesCard = ({ heading, progress, name, status, description, time }) => {
  return (
    <div className="bg-white backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-gray-200 hover:shadow-2xl hover:translate-y-[-5px] transition-transform">
      {/* Top Section: Progress and Name */}
      <div className="flex items-center px-4 py-2 bg-gray-50 gap-2">
        <span className="flex items-center gap-1 text-sm font-medium text-gray-700 bg-gray-200 px-2 py-1 rounded-md">
          <CircleCheck className="w-4 h-4 text-blue-600" /> {progress}
        </span>
        <span className="flex items-center gap-1 text-sm font-medium text-gray-700 bg-gray-200 px-2 py-1 rounded-md">
          <Tags className="w-4 h-4" /> {name}
        </span>
      </div>

      {/* Main Content */}
      <div className="px-4 py-5 sm:p-6">
        {/* Heading */}
        <h3 className="text-lg font-semibold text-gray-800">{heading}</h3>

        {/* Status Section */}
        <div className="flex items-center gap-2 mt-1 text-sm font-medium text-gray-600">
          <span className="text-sm text-black">{status}</span>
          <Bell className="text-black mt-1.5" />
        </div>

        {/* Description */}
        <p className="mt-3 text-sm text-gray-600">{description}</p>
      </div>

      {/* Bottom Right Icon */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-50">
        {/* Time */}
        <p className="text-sm text-[#4B4B4B]">{time}</p>

        {/* Icon */}
        <FileText className="text-black hover:text-gray-600 cursor-pointer" />
      </div>
    </div>
  );
};

export default NotesCard;
