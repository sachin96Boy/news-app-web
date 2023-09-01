import axios from "axios";

const instance = axios.create({
  baseURL: `${import.meta.env.VITE_NEWS_APP_API_URL}`,
//   timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `${import.meta.env.VITE_NEWS_APP_API_KEY}`,
  },
});

export default instance;
