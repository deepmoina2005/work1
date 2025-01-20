import React, { useState } from 'react';

const AddReminder = ({ onClose, onSaveReminder }) => {
  const [repeatOption, setRepeatOption] = useState('');
  const [interval, setInterval] = useState(1);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSaveReminder = () => {
    if (!startDate || !endDate || !repeatOption) {
      alert('Please fill in all fields.');
      return;
    }

    // Pass reminder details to parent
    onSaveReminder({
      repeatOption,
      interval,
      startDate,
      endDate,
    });
    onClose(); // Close the popup
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-md shadow-lg max-w-md w-[450px]">
        <div className='border-b border-black'>
        <h3 className="text-lg font-bold mb-2">Add Reminder for Task</h3>
        </div>

        {/* Repeats Dropdown */}
        <div className="mb-4 flex flex-row">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Repeats
          </label>
          <select
            value={repeatOption}
            onChange={(e) => setRepeatOption(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2"
          >
            <option value="">Select an option</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>

        {/* Interval Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Interval
          </label>
          <div className="flex items-center">
            <input
              type="number"
              min="1"
              value={interval}
              onChange={(e) => setInterval(parseInt(e.target.value, 10))}
              className="w-16 border border-gray-300 rounded-md p-2 mr-2"
            />
            <span>{repeatOption || 'Interval Unit'}</span>
          </div>
        </div>

        {/* Start Date Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Start Date
          </label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        {/* End Date Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            End Date
          </label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
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
