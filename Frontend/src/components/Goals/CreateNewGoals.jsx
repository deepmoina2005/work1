import React, { useState } from "react";
import { MdClose } from "react-icons/md"; // Close icon
import { FaBell } from "react-icons/fa"; // Bell icon for reminder
import AddReminder from './AddRemainder'; // Import AddReminder component

const CreateNewGoals = ({ onClose }) => {
  const [goalTitle, setGoalTitle] = useState("");
  const [description, setDescription] = useState("");
  const [goalType, setGoalType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [toDos, setToDos] = useState(["Learn English"]);
  const [goalPriority, setGoalPriority] = useState("");
  const [isReminderPopupOpen, setIsReminderPopupOpen] = useState(false);
  const [reminderDate, setReminderDate] = useState("");
  const [reminderTime, setReminderTime] = useState("");

  const handleAddGoal = () => {
    console.log({
      goalTitle,
      description,
      goalType,
      startDate,
      toDos,
      goalPriority,
      reminderDate,
      reminderTime,
    });
    onClose(); // Close modal after submission
  };

  const handleSaveReminder = (date, time) => {
    setReminderDate(date);
    setReminderTime(time);
  };

  return (
    <div className="w-full p-4">
      <div className="flex justify-between items-center mb-1">
        <h2 className="text-2xl font-semibold text-gray-800">Create New Goal</h2>
        <button
          onClick={onClose} // Close modal when clicked
          className="text-gray-500 hover:text-gray-700"
        >
          <MdClose size={28} /> {/* Render the close icon */}
        </button>
      </div>

      <div className="border-t border-gray-150">
        <label className="block mt-4 text-sm font-medium text-gray-700 mb-1">
          Goal Title
        </label>
        <input
          type="text"
          placeholder="Enter your goal title"
          value={goalTitle}
          onChange={(e) => setGoalTitle(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>
        <textarea
          placeholder="Describe your goal"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Goal Type
        </label>
        <select
          value={goalType}
          onChange={(e) => setGoalType(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2"
        >
          <option value="">Select an option</option>
          <option value="Yearly">Yearly</option>
          <option value="Monthly">Monthly</option>
          <option value="Weekly">Weekly</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Start Date
        </label>
        <input
          type="text"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2"
          placeholder="Enter your due date"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          To-dos for this Goal
        </label>
        <input
          type="text"
          placeholder="Add a to-do"
          value=""
          onKeyPress={(e) => {
            if (e.key === "Enter" && e.target.value) {
              setToDos([...toDos, e.target.value]);
              e.target.value = "";
            }
          }}
          className="w-full border border-gray-300 rounded-md p-2 mb-2"
        />
        <div className="flex flex-wrap gap-2">
          {toDos.map((todo, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2 py-1 bg-gray-200 rounded-md text-sm"
            >
              {todo}
              <button
                className="ml-2 text-gray-500 hover:text-red-500"
                onClick={() => setToDos(toDos.filter((_, i) => i !== index))}
              >
                &times;
              </button>
            </span>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Goal Priority
        </label>
        <select
          value={goalPriority}
          onChange={(e) => setGoalPriority(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2"
        >
          <option value="">Select an option</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>

      <div className="flex justify-between gap-2 mt-10">
        {/* Align "Add Reminder for Task" button to the left */}
        <button
          onClick={() => setIsReminderPopupOpen(true)} // Open reminder popup
          className="text-sm font-medium text-gray-700 flex items-center gap-2 mt-3"
        >
          <FaBell size={16} /> {/* Bell icon */}
          Add Reminder for Task
        </button>

        <div className="flex gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleAddGoal}
            className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-500"
          >
            Add Goal
          </button>
        </div>
      </div>

      {/* Conditionally render the AddReminder component */}
      {isReminderPopupOpen && (
        <AddReminder
          onClose={() => setIsReminderPopupOpen(false)} // Close reminder popup
          onSaveReminder={handleSaveReminder} // Save the reminder
        />
      )}
    </div>
  );
};

export default CreateNewGoals;
