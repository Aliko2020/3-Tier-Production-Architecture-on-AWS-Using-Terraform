import express from "express";
import { verifyToken } from "../middleware/authMiddleware.js";
import { 
    register,
    login, 
    getProfile, 
    verifyTokenBackend 
} from "../controllers/authController.js";

const router = express.Router();

router.post("/signup", register);
router.post("/login", login);
router.get("/profile", verifyToken, getProfile);
router.get("/verify", verifyTokenBackend);


export default router;
