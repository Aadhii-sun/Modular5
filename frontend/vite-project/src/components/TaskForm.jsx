import React, { useState } from "react";
import API from "../api/api";
export default function TaskForm({ loadTasks }) {
  const [form, setForm] = useState({ title: "", description: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/tasks", form);
      setForm({ title: "", description: "" });
      loadTasks();
    } catch (err) {
      console.error("Failed to add task:", err);
      alert(err.response?.data?.msg || "Failed to add task");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Task Title"
        required
        className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      <input
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Task Description"
        className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      <button
        type="submit"
        className="bg-indigo-600 text-white px-6 py-2 rounded-xl font-semibold hover:bg-indigo-700 transition-all"
      >
        Add Task
      </button>
    </form>
  );
}