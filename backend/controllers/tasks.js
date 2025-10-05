import Task from "../models/Task.js";

// GET all tasks for logged-in user
export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.json(tasks);
  } catch {
    res.status(500).send("Server error");
  }
};

// ADD a new task
export const addTask = async (req, res) => {
  try {
    const task = new Task({ user: req.user.id, ...req.body });
    await task.save();
    res.json(task);
  } catch {
    res.status(500).send("Server error");
  }
};

// UPDATE a task
export const updateTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task || task.user.toString() !== req.user.id)
      return res.status(404).json({ msg: "Task not found" });

    Object.assign(task, req.body);
    await task.save();
    res.json(task);
  } catch {
    res.status(500).send("Server error");
  }
};

// DELETE a task
export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task || task.user.toString() !== req.user.id)
      return res.status(404).json({ msg: "Task not found" });

    await task.remove();
    res.json({ msg: "Task deleted" });
  } catch {
    res.status(500).send("Server error");
  }
};