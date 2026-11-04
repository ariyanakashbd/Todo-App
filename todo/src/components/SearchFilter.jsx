import { FiSearch } from "react-icons/fi";

const SearchFilter = ({ search, onSearchChange, filter, onFilterChange }) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 mb-6">
      <div className="flex flex-col md:flex-row gap-4 justify-between">

        <div className="relative flex-1">
          <FiSearch className="absolute left-3 top-4 text-slate-400" />

          <input
            type="text"
            placeholder="Search tasks..."
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full border border-slate-300 rounded-lg pl-10 pr-4 py-3 outline-none focus:border-blue-500"
          />
        </div>

        <select
          value={filter}
          onChange={(e) => onFilterChange(e.target.value)}
          className="border border-slate-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
        >
          <option value="All">All Tasks</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>

      </div>
    </div>
  );
};

export default SearchFilter;
