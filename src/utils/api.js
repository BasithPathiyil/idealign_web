import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:5000/api",
  // baseURL:"http://3.93.169.114/api",
  baseURL:"/api",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    console.log("err in api", err);
    return Promise.reject(err);
  }
);
export default api;
