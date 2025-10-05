import express from "express";
import { getTasks, addTask, updateTask, deleteTask } from "../controllers/tasks.js";
import auth from "../middleware/auth.js";

const router = express.Router();
router.use(auth);

router.get("/", getTasks);
router.post("/", addTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

export default router;