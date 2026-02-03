import express from "express";
import { upload } from "../middleware/upload.js"; 
import { uploadImage } from "../controllers/uploadController.js";

const router = express.Router();

router.post("/upload/:productId", upload.single("image"), uploadImage);

export default router;
