import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:5000/api",
  // baseURL:"http://54.157.240.144/api",
  // baseURL:"/api",
  baseURL: "https://api.idealign.in/api",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    // console.log("err in api", err);
    return Promise.reject(err);
  }
);
export default api;
