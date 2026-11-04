import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import DeleteModal from "../components/DeleteModal";
import Navbar from "../components/Navbar";
import SearchFilter from "../components/SearchFilter";
import StatsCards from "../components/StatsCards";
import TaskFormModal from "../components/TaskFormModal";
import TaskTable from "../components/TaskTable";
import { useToast } from "../components/Toast";
import useTasks from "../hooks/useTasks";

const emptyForm = {
  title: "",
  description: "",
  priority: "Medium",
  dueDate: "",
  status: "Pending",
};

const Dashboard = () => {
  const navigate = useNavigate();
  const toast = useToast();

  const { tasks, addTask, updateTask, deleteTask, toggleTaskStatus } = useTasks();

  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const [formData, setFormData] = useState(emptyForm);

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
    setFormData(emptyForm);
    setShowForm(true);
  };

  // Open Edit Form
  const handleEdit = (task) => {
    setEditId(task.id);

    setFormData({
      title: task.title,
      description: task.description,
      priority: task.priority,
      dueDate: task.dueDate,
      status: task.status,
    });

    setShowForm(true);
  };

  // Save Task
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      updateTask(editId, formData);

      toast.success("Task updated successfully");
    } else {
      addTask(formData);
    }

    setShowForm(false);
    setEditId(null);
  };

  // Confirm Delete
  const handleConfirmDelete = () => {
    deleteTask(deleteId);
    setDeleteId(null);

    toast.success("Task deleted successfully");
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("todo_logged_in");

    toast.success("Logged out successfully");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-slate-100">

      <Navbar onLogout={handleLogout} />

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

        <StatsCards
          totalTasks={totalTasks}
          completedTasks={completedTasks}
          pendingTasks={pendingTasks}
        />

        <SearchFilter
          search={search}
          onSearchChange={setSearch}
          filter={filter}
          onFilterChange={setFilter}
        />

        <TaskTable
          tasks={filteredTasks}
          onEdit={handleEdit}
          onDelete={setDeleteId}
          onComplete={toggleTaskStatus}
        />

      </main>

      {/* Add / Edit Modal */}
      {showForm && (
        <TaskFormModal
          isEdit={Boolean(editId)}
          formData={formData}
          onChange={handleChange}
          onSubmit={handleSubmit}
          onClose={() => setShowForm(false)}
        />
      )}

      {/* Delete Confirm Modal */}
      {deleteId !== null && (
        <DeleteModal
          onCancel={() => setDeleteId(null)}
          onConfirm={handleConfirmDelete}
        />
      )}

    </div>
  );
};

export default Dashboard;
