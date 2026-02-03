import express from "express";
import dotenv from "dotenv";
import cors from "cors"; 
import authRoutes from "./routes/authRoutes.js";
import systemRoutes from "./routes/system.routes.js";
import pool from "./db.js";


dotenv.config();
const app = express();

app.use(cors({ origin: true, credentials: true,}));
app.use(express.json());

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/", systemRoutes);

// health check
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

const PORT = process.env.PORT || 3000;

pool.connect()
  .then(() => {
    app.listen(PORT,"0.0.0.0", () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("Failed to connect to database, server not started:", err);
  });
