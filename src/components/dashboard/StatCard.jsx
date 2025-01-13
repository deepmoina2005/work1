const StatCard = ({ heading, value, month }) => {
  return (
    <div className="bg-slate-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl">
      <div className="px-4 py-5 sm:p-6">
        <span className="flex items-center text-sm font-medium text-gray-800">
          <h3 className="flex items-center font-medium text-lg text-gray-800">
            {heading}
          </h3>
        </span>
        <p className="mt-1 text-3xl font-semibold text-gray-900">{value}</p>
        <p className="flex items-center text-sm font-medium text-blue-700 mt-2">{month}</p>
      </div>
    </div>
  );
};

export default StatCard;
