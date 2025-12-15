import axios from "axios";

const API_URL = "http://44.200.162.125:3000/api/auth";

// Login user
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
  } catch (err) {
    throw err.response?.data || { message: "Server error" };
  }
};

// Register user
export const registerUser = async (username, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, {
      username,
      email,
      password,
    });
    return response.data;
  } catch (err) {
    throw err.response?.data || { message: "Server error" };
  }
};