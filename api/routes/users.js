import express from "express";
import { getUsers, addUser, updateUser, deleteUser } from "../controllers/user.js";

// Indica que é uma rota
const router = express.Router();

router.get("/", getUsers);

router.post("/", addUser);

router.delete("/:id", deleteUser);

router.put("/:id", updateUser);

export default router;