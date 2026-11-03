
import React, { useState } from "react";
import {
  FiCheckCircle,
  FiClock,
  FiList,
  FiPlus,
  FiLogOut,
  FiEdit,
  FiTrash2,
  FiSearch,
  FiX,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useToast } from "../components/Toast";

const Dashboard = () => {
  const navigate = useNavigate();
  const toast = useToast();

  const [tasks, setTasks] = useState([]);

  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "Medium",
    dueDate: "",
  });

  // Statistics
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(
    (task) => task.status === "Completed"
  ).length;
  const pendingTasks = tasks.filter(
    (task) => task.status === "Pending"
  ).length;

  // Search and Filter
  const filteredTasks = tasks.filter((task) => {
    const matchSearch =
      task.title.toLowerCase().includes(search.toLowerCase());

    const matchFilter =
      filter === "All" || task.status === filter;

    return matchSearch && matchFilter;
  });

  // Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Open Add Form
  const handleAdd = () => {
    setEditId(null);
    setFormData({
      title: "",
      description: "",
      priority: "Medium",
      dueDate: "",
    });
    setShowForm(true);
  };

  // Save Task
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      setTasks(
        tasks.map((task) =>
          task.id === editId
            ? { ...task, ...formData }
            : task
        )
      );
    } else {
      const newTask = {
        id: Date.now(),
        ...formData,
        status: "Pending",
      };

      setTasks([...tasks, newTask]);
    }

    setShowForm(false);
    setEditId(null);
  };

  // Edit Task
  const handleEdit = (task) => {
    setEditId(task.id);

    setFormData({
      title: task.title,
      description: task.description,
      priority: task.priority,
      dueDate: task.dueDate,
    });

    setShowForm(true);
  };

  // Delete Task
  const handleDelete = (id) => {
    setDeleteId(id);
  };

  // Confirm Delete
  const handleConfirmDelete = () => {
    setTasks(tasks.filter((task) => task.id !== deleteId));
    setDeleteId(null);
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("todo_logged_in");

    toast.success("Logged out successfully");
    navigate("/login");
  };

  // Complete Task
  const handleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status:
                task.status === "Completed"
                  ? "Pending"
                  : "Completed",
            }
          : task
      )
    );
  };

  return (
    <div className="min-h-screen bg-slate-100">

      {/* Navbar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">
            Todo<span className="text-slate-800">App</span>
          </h1>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-red-500 hover:text-red-700 font-medium"
          >
            <FiLogOut />
            Logout
          </button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-5 py-10">

        {/* Welcome */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-800">
              Welcome Back!
            </h2>
            <p className="text-slate-500 mt-2">
              Manage your tasks and stay productive.
            </p>
          </div>

          <button
            onClick={handleAdd}
            className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            <FiPlus />
            Add New Task
          </button>
        </div>

        {/* Statistics */}
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

        {/* Search and Filter */}
        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 mb-6">
          <div className="flex flex-col md:flex-row gap-4 justify-between">

            <div className="relative flex-1">
              <FiSearch className="absolute left-3 top-4 text-slate-400" />

              <input
                type="text"
                placeholder="Search tasks..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full border border-slate-300 rounded-lg pl-10 pr-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border border-slate-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
            >
              <option value="All">All Tasks</option>
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
            </select>

          </div>
        </div>

        {/* Task List */}
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
                {filteredTasks.length > 0 ? (
                  filteredTasks.map((task) => (
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
                          onClick={() => handleComplete(task.id)}
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
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => handleEdit(task)}
                            className="text-blue-600 hover:text-blue-800"
                            title="Edit"
                          >
                            <FiEdit size={18} />
                          </button>

                          <button
                            onClick={() => handleDelete(task.id)}
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

      </main>

      {/* Add / Edit Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">

          <div className="bg-white w-full max-w-lg rounded-2xl p-6">

            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-slate-800">
                {editId ? "Edit Task" : "Add New Task"}
              </h3>

              <button
                onClick={() => setShowForm(false)}
                className="text-slate-500 hover:text-red-500"
              >
                <FiX size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">

              <div>
                <label className="block text-sm font-medium mb-2">
                  Task Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Enter task title"
                  required
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Enter task description"
                  rows="3"
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Priority
                </label>
                <select
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Due Date
                </label>
                <input
                  type="date"
                  name="dueDate"
                  value={formData.dueDate}
                  onChange={handleChange}
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              <div className="flex gap-3 pt-3">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                >
                  {editId ? "Update Task" : "Create Task"}
                </button>

                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="flex-1 bg-slate-200 text-slate-700 py-3 rounded-lg hover:bg-slate-300 transition"
                >
                  Cancel
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

      {/* Delete Confirm Modal */}
      {deleteId !== null && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">

          <div className="bg-white w-full max-w-md rounded-2xl p-6 text-center">

            <div className="w-14 h-14 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto">
              <FiTrash2 size={26} />
            </div>

            <h3 className="text-xl font-bold text-slate-800 mt-5">
              Delete this task?
            </h3>

            <p className="text-slate-500 mt-2">
              This action cannot be undone. The task will be removed
              permanently.
            </p>

            <div className="flex gap-3 mt-7">
              <button
                type="button"
                onClick={() => setDeleteId(null)}
                className="flex-1 bg-slate-200 text-slate-700 py-3 rounded-lg hover:bg-slate-300 transition"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleConfirmDelete}
                className="flex-1 bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition"
              >
                Delete
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default Dashboard;
