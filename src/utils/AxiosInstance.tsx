import axios from "axios";

const instance = axios.create({
  baseURL: `${import.meta.env.VITE_NEWS_APP_API_URL}`,
  //   timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    "X-RapidAPI-Key": `${import.meta.env.VITE_NEWS_APP_API_KEY}`,
    "X-BingApis-SDK": true,
    "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com"
  },
});

export default instance;
