import axios from "axios";

const API_URL = "http://localhost:3000/api/v1/auth";


export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
  } catch (err) {
    throw err.response?.data || { message: "Server error" };
  }
};

export const registerUser = async (username, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/register`, {
      username,
      email,
      password,
    });
    return response.data;
  } catch (err) {
    throw err.response?.data || { message: "Server error" };
  }
};