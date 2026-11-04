import { FiEdit, FiTrash2 } from "react-icons/fi";

const TaskTable = ({ tasks, onEdit, onDelete, onComplete }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200">

      <div className="p-6 border-b border-slate-200">
        <h3 className="text-xl font-bold text-slate-800">
          My Tasks
        </h3>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">

          <thead className="bg-slate-50 text-slate-500 text-sm">
            <tr>
              <th className="p-5">Task</th>
              <th className="p-5">Priority</th>
              <th className="p-5">Due Date</th>
              <th className="p-5">Status</th>
              <th className="p-5">Actions</th>
            </tr>
          </thead>

          <tbody>
            {tasks.length > 0 ? (
              tasks.map((task) => (
                <tr key={task.id} className="border-t border-slate-100">

                  <td className="p-5">
                    <p className={`font-semibold text-slate-800 ${
                      task.status === "Completed" ? "line-through" : ""
                    }`}>
                      {task.title}
                    </p>
                    <p className="text-sm text-slate-500 mt-1">
                      {task.description}
                    </p>
                  </td>

                  <td className="p-5">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      task.priority === "High"
                        ? "bg-red-100 text-red-600"
                        : task.priority === "Medium"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-green-100 text-green-700"
                    }`}>
                      {task.priority}
                    </span>
                  </td>

                  <td className="p-5 text-slate-600">
                    {task.dueDate || "No date"}
                  </td>

                  <td className="p-5">
                    <button
                      onClick={() => onComplete(task.id)}
                      className={`px-3 py-1 rounded-full text-sm ${
                        task.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : "bg-orange-100 text-orange-700"
                      }`}
                    >
                      {task.status}
                    </button>
                  </td>

                  <td className="p-5">
                    <div className="flex items-center gap-[50px]">
                      <button
                        onClick={() => onEdit(task)}
                        className="text-blue-600 hover:text-blue-800"
                        title="Edit"
                      >
                        <FiEdit size={18} />
                      </button>

                      <button
                        onClick={() => onDelete(task.id)}
                        className="text-red-500 hover:text-red-700"
                        title="Delete"
                      >
                        <FiTrash2 size={18} />
                      </button>
                    </div>
                  </td>

                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center p-10 text-slate-500">
                  No tasks found.
                </td>
              </tr>
            )}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default TaskTable;
