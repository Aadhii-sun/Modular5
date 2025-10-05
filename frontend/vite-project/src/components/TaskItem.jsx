import React from "react";
import API from "../api/api";

export default function TaskItem({ task, loadTasks }) {
  const handleDelete = async () => {
    if (!window.confirm("Delete this task?")) return;
    try {
      await API.delete(`/tasks/${task._id}`);
      loadTasks();
    } catch (err) {
      console.error("Failed to delete task:", err);
      alert(err.response?.data?.msg || "Failed to delete task");
    }
  };

  const toggleStatus = async () => {
    try {
      await API.put(`/tasks/${task._id}`, {
        status: task.status === "pending" ? "completed" : "pending",
      });
      loadTasks();
    } catch (err) {
      console.error("Failed to update task:", err);
      alert(err.response?.data?.msg || "Failed to update task");
    }
  };

  return (
    <tr className="hover:bg-gray-50">
      <td className="px-6 py-4">{task.title}</td>
      <td className="px-6 py-4">{task.description}</td>
      <td className="px-6 py-4">
        <span
          onClick={toggleStatus}
          className={`px-2 py-1 rounded-full cursor-pointer ${
            task.status === "completed" ? "bg-green-200 text-green-800" : "bg-yellow-200 text-yellow-800"
          }`}
        >
          {task.status}
        </span>
      </td>
      <td className="px-6 py-4">
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition-all"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}