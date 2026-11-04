import { useEffect, useState } from "react";

// Task state, localStorage persistence and CRUD operations
const useTasks = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("todo_tasks");

    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Save tasks to localStorage
  useEffect(() => {
    localStorage.setItem("todo_tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add Task
  const addTask = (taskData) => {
    setTasks([...tasks, { id: Date.now(), ...taskData }]);
  };

  // Update Task
  const updateTask = (id, taskData) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, ...taskData } : task
      )
    );
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Complete / Uncomplete Task
  const toggleTaskStatus = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status:
                task.status === "Completed" ? "Pending" : "Completed",
            }
          : task
      )
    );
  };

  return { tasks, addTask, updateTask, deleteTask, toggleTaskStatus };
};

export default useTasks;
