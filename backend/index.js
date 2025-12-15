import express from "express";
import dotenv from "dotenv";
import cors from "cors"; 
import authRoutes from "./routes/authRoutes.js";
import pool from "./db.js";


dotenv.config();
const app = express();

app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true, 
}));

app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("server running");
});

const PORT = process.env.PORT || 3000;


console.log(process.env.DB_USER);


pool.connect()
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("Failed to connect to database, server not started:", err);
  });
