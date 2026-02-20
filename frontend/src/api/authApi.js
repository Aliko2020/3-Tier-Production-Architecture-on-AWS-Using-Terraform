import axios from "axios";


const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api/v1/auth";

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 5000,
  headers: { "Content-Type": "application/json" },
});

export const loginUser = async (email, password) => {
  try {
    const response = await axiosInstance.post("/login", { email, password });
    return response.data;
  } catch (err) {
    throw err.response?.data || { message: "Server error" };
  }
};

export const registerUser = async (name, email, password) => {
  try {
    const response = await axiosInstance.post("/register", { name, email, password });
    return response.data;
  } catch (err) {
    throw err.response?.data || { message: "Server error" };
  }
};