import { FiCheckCircle, FiClock, FiList } from "react-icons/fi";

const StatsCards = ({ totalTasks, completedTasks, pendingTasks }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">

      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-slate-500">Total Tasks</p>
            <h3 className="text-3xl font-bold mt-2">{totalTasks}</h3>
          </div>
          <FiList className="text-blue-600" size={30} />
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-slate-500">Completed Tasks</p>
            <h3 className="text-3xl font-bold text-green-600 mt-2">
              {completedTasks}
            </h3>
          </div>
          <FiCheckCircle className="text-green-600" size={30} />
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-slate-500">Pending Tasks</p>
            <h3 className="text-3xl font-bold text-orange-500 mt-2">
              {pendingTasks}
            </h3>
          </div>
          <FiClock className="text-orange-500" size={30} />
        </div>
      </div>

    </div>
  );
};

export default StatsCards;
