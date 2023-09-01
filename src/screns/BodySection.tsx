import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./HomeScreen";
import instance from "../utils/AxiosInstance";

export type ArticleProps = {
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
  const [responseData, SetResponseData] = useState<ArticleProps[] | null>(null);
  const [isLoading, SetIsLoading] = useState(true);
  const [isError, SetIsError] = useState(false);

  useEffect(() => {
    instance
      .get(
        "everything?domains=techcrunch.com,thenextweb.com,bbc.co.uk&sortBy=popularity"
      )
      .then((response) => {
        SetResponseData(response.data["articles"]);
        SetIsLoading(false);
      })
      .catch((error) => {
        SetIsError(true);
        console.log(error);
      });
  }, []);

  return isLoading ? (
    <div className="min-h-screen flex items-center justify-between">Loading Content...</div>
  ) : isError ? (
    <div className="min-h-screen flex items-center justify-between">oops, Someting off...</div>
  ) : (
    <Routes>
      <Route path="/" element={<HomeScreen responseData={responseData!} />} />
    </Routes>
  );
}

export default BodySection;
