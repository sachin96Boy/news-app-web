import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./HomeScreen";
import instance from "../utils/AxiosInstance";

type ArticleProps = {
  source: object;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

function BodySection() {
  const [responseData, SetResponseData] = useState<null | ArticleProps[]>(null);
  const [isLoading, SetIsLoading] = useState(true);
  const [isError, SetIsError] = useState(false);

  useEffect(() => {
    instance
      .get("&sortBy=popularity")
      .then((response) => {
        SetResponseData(response.data['articles']);
        SetIsLoading(false);
      })
      .catch((error) => {
        SetIsError(true);
        console.log(error);
      });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomeScreen responseData={responseData} />} />
    </Routes>
  );
}

export default BodySection;
