// AddReminder.js
import React, { useState } from 'react';

const AddReminder = ({ onClose, onSaveReminder }) => {
  const [reminderDate, setReminderDate] = useState('');
  const [reminderTime, setReminderTime] = useState('');

  const handleSaveReminder = () => {
    // Pass the reminder details to the parent
    onSaveReminder(reminderDate, reminderTime);
    onClose(); // Close the popup after saving
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-md shadow-lg max-w-sm w-full">
        <h3 className="text-lg font-bold mb-4">Add Remainder for Task</h3>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Strat Date
          </label>
          <input
            type="date"
            value={reminderDate}
            onChange={(e) => setReminderDate(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            End Date
          </label>
          <input
            type="date"
            value={reminderDate}
            onChange={(e) => setReminderDate(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose} // Close reminder popup
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleSaveReminder}
            className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-500"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddReminder;