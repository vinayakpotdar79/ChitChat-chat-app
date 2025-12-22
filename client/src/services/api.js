import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL, 
  withCredentials: true, // needed for sessions/cookies
});

API.interceptors.response.use(
  res => res,
  error => {
    if (error.response?.status === 401) {
      localStorage.removeItem("user");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default API;