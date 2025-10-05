import React, { useEffect, useState } from "react";
import API from "../api/api";
import TaskForm from "../components/TaskForm";
import TaskItem from "../components/TaskItem";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    try {
      const res = await API.get("/tasks");
      setTasks(res.data);
    } catch (err) {
      console.error("Failed to load tasks:", err);
      alert(err.response?.data?.msg || "Failed to load tasks");
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      <aside className="w-64 bg-indigo-700 text-white flex flex-col">
        <div className="p-6 text-center border-b border-indigo-600">
          <h1 className="text-2xl font-bold">Task Manager</h1>
        </div>
        <div className="flex-1 p-6">
          <nav className="space-y-4">
            <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-indigo-600 transition-all">Dashboard</button>
          </nav>
        </div>
        <div className="p-6 border-t border-indigo-600">
          <button
            onClick={handleLogout}
            className="w-full bg-white text-indigo-700 font-semibold px-4 py-2 rounded-lg hover:bg-gray-200 transition-all"
          >
            Logout
          </button>
        </div>
      </aside>

      <main className="flex-1 p-8">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Add New Task</h2>
          <div className="bg-white p-6 rounded-xl shadow">
            <TaskForm loadTasks={loadTasks} />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Tasks</h2>
          <div className="bg-white rounded-xl shadow overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {tasks.map((task) => (
                  <TaskItem key={task._id} task={task} loadTasks={loadTasks} />
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}