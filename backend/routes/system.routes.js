import express from "express";
import { getApiInfo, getHealth } from "../controllers/system.controller.js";

const router = express.Router();

router.get("/", getApiInfo);
router.get("/health", getHealth);

export default router;
