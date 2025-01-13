import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaSliders } from "react-icons/fa6";
import { FiCircle } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";

const To_dosTable = () => {
  const [filter, setFilter] = useState("All");
  const [data, setData] = useState([
    { id: 1, title: "Learn English", status: "Completed" },
    { id: 2, title: "Learn English", status: "Pending" },
    { id: 3, title: "Learn English", status: "Completed" },
    { id: 4, title: "Learn English", status: "Pending" },
    { id: 5, title: "Learn English", status: "Completed" },
  ]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [menuOpen, setMenuOpen] = useState(null);
  const [filterMenuOpen, setFilterMenuOpen] = useState(false);

  // Filter data based on status
  const filteredData =
    filter === "All" ? data : data.filter((row) => row.status === filter);

  // Handle checkbox toggle
  const handleCheckboxChange = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  // Handle marking a task as completed
  const markAsCompleted = (id) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, status: "Completed" } : item
      )
    );
    setMenuOpen(null);
  };

  // Handle removing a task
  const removeToDo = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
    setMenuOpen(null);
  };

  return (
    <div className="pr-4">

      {/* To-dos Table */}
      <div className="overflow-x-auto bg-white border border-gray-300 rounded-lg mt-4">
        <table className="w-[1500px] bg-white m-6">
          <thead className="border-b">
            <tr className="border-none">
              <th className="p-2 text-left">
                <span className="text-[#4B4B4B] text-xl">To-dos for this Goal</span>
                <div className="inline-block ml-4 relative">
                  <FaSliders
                    className="cursor-pointer"
                    onClick={() => setFilterMenuOpen(!filterMenuOpen)}
                  />
                  {filterMenuOpen && (
                    <div className="absolute left-0 mt-1 w-48 bg-white rounded shadow-md z-10">
                      {["All", "Completed", "Pending"].map((status) => (
                        <button
                          key={status}
                          className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                          onClick={() => {
                            setFilter(status);
                            setFilterMenuOpen(false);
                          }}
                        >
                          {status}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </th>
              <th className="p-2 text-right">Status</th>
              <th className="p-2 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row) => (
              <tr
                key={row.id}
                className="hover:bg-gray-50 transition" // Removed 'border-b'
              >
                <td className="p-2 flex items-center">
                  {/* Custom Circular Checkbox */}
                  <div
                    className="cursor-pointer flex items-center"
                    onClick={() => handleCheckboxChange(row.id)}
                  >
                    {selectedRows.includes(row.id) ? (
                      <FaCheckCircle className="text-white bg-black w-6 h-6 border-2 border-black rounded-full" />
                    ) : (
                      <FiCircle className="bg-white w-6 h-6 border-black rounded-full" />
                    )}
                  </div>
                  <span className="p-2">{row.title}</span>
                </td>
                <td className="p-2 text-right">
                  <span
                    className={`px-2 py-1 text-sm font-medium rounded ${
                      row.status === "Completed"
                        ? "border border-[#4CAF50] text-[#4CAF50]"
                        : "border border-[#FFC107] text-[#FFC107]"
                    }`}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="p-2 text-right relative">
                  <button
                    className="text-gray-500 hover:text-gray-700 focus:outline-none"
                    onClick={() => setMenuOpen(menuOpen === row.id ? null : row.id)}
                  >
                    <span className="w-8 h-8 flex items-center justify-center">
                      <BsThreeDots className="w-6 h-6 font-bold text-black" />
                    </span>
                  </button>

                  {menuOpen === row.id && (
                    <div className="absolute right-9 mt-0 w-52 bg-white border border-gray-200 rounded shadow-md">
                      <button
                        className="block w-full px-4 py-2 text-left text-sm text-[#4B4B4B] hover:bg-gray-100"
                        onClick={() => markAsCompleted(row.id)}
                      >
                        Mark as Completed
                      </button>
                      <button
                        className="block w-full px-4 py-2 text-left text-sm text-[#4B4B4B] hover:bg-gray-100"
                        onClick={() => removeToDo(row.id)}
                      >
                        Edit Task Remainder
                      </button>
                      <button
                        className="block w-full px-4 py-2 text-left text-sm text-[#4B4B4B] hover:bg-gray-100"
                        onClick={() => removeToDo(row.id)}
                      >
                        Remove Remainder
                      </button>
                      <button
                        className="block w-full px-4 py-2 text-left text-sm text-[#4B4B4B] hover:bg-gray-100"
                        onClick={() => removeToDo(row.id)}
                      >
                        <p className="hover:bg-[#F3F3F3]">Remove To-do</p>
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default To_dosTable;
