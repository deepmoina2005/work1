import GoalsCard from "@/components/card/GoalsCard";
import ToDoTable from "@/components/ToDo/ToDoTable";
import { ChevronDown, ChevronLeft } from "lucide-react";
import { BsShieldLock } from "react-icons/bs";

const VaultViewPage = () => {
  return (
    <div>
      <div className="flex items-center gap-2 px-4 py-6">
        <button className="flex-row flex gap-2 items-center">
        <ChevronLeft className="w-[14px] h-[14px]"/>
        <p className="text-[14px]">Back</p>
        </button>
      </div>

      <div className="px-4">
        <div className="flex items-center gap-2">
          <BsShieldLock className="w-[28px] h-[32px]" />
          <h1 className="text-[24px] font-medium text-[#393939]">Life</h1>
        </div>

        <div className="mt-4">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full border border-slate-300 max-h-min">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-8">
            <GoalsCard />
            <GoalsCard />
            <GoalsCard />
            <GoalsCard />
            <GoalsCard />
            <GoalsCard />
          </div>
          <div className="mt-3 flex justify-end items-center">
            <button
              className="text-[#1976D2] text-[12px] font-medium flex items-center"
            >
              View more{" "}
              <ChevronDown className="ml-1 w-[12px] mt-0.5 h-[12px]" />
            </button>
          </div>
        </div>

        <div className="mt-4">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full border border-slate-300 max-h-min">
        <div className="border border-slate-300 rounded-md">
          <ToDoTable/>
        </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default VaultViewPage;
