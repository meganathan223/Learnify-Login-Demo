import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export async function loginUser(credentials) {
  try {
    const response = await axios.post(`${API_URL}/api/auth/login`, credentials);

    return response.data.user;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message || "Login failed.");
    }

    throw new Error("Cannot connect to the server. Please try again.");
  }
}
