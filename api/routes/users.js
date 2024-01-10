import express from "express";
import { getUsers } from "../controllers/user.js";

// Indica que é uma rota
const router = express.Router();

router.get("/", getUsers);

export default router;