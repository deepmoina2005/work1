import { MdOutlineNoteAdd } from "react-icons/md";

const CreateNewNotes = ({ width = "100", height = "100", customClass = "" }) => {
  return (
    <div
      className={`bg-slate-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-black flex flex-col items-center justify-center w-${width} h-${height} ${customClass} hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] hover:-translate-y-1 transition-all duration-300`}
    >
      {/* Icon Section */}
      <div className="bg-black rounded-full w-20 h-20 flex items-center justify-center">
        <MdOutlineNoteAdd className="text-white text-2xl w-10 h-10" />
      </div>
      {/* Heading Section */}
      <p className="mt-3 text-[18px] font-semibold text-black">Create new note</p>
    </div>
  );
};

export default CreateNewNotes;
