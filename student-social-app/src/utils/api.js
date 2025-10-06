import axios from "axios";

const api = axios.create({
  baseURL: "2731d7cf8d83f8b52edcbdfc34c8135b4b45b76acf2693f1f896fddf2efaa6a7",
});

api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`;
  return config;
});

export default api;
