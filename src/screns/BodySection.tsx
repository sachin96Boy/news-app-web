import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./HomeScreen";
import instance from "../utils/AxiosInstance";
import { NewsModel } from "../models/NewsModel";

function BodySection() {
  const [responseData, SetResponseData] = useState<NewsModel[] | null>(null);
  const [isLoading, SetIsLoading] = useState(true);
  const [isError, SetIsError] = useState(false);

  useEffect(() => {
    instance
      .get('')
      .then((response) => {
        const newsList: NewsModel[] = [];
        response.data["value"].map((newsItem: { name: string; url: string; image: { [x: string]: { [x: string]: string; }; }; description: string; provider: { [x: string]: string; }[]; datePublished: string; })=>{
          const NewsObjet = new NewsModel(
            newsItem.name,
            newsItem.url,
            newsItem.image["thumbnail"]["contentUrl"],
            newsItem.description,
            newsItem.provider[0]["name"],
            newsItem.datePublished
          );
          newsList.push(NewsObjet);
        });
        SetResponseData(newsList);
        SetIsLoading(false);
      })
      .catch((error) => {
        SetIsError(true);
        console.log(error);
      });
  }, []);

  console.log(responseData);

  return isLoading ? (
    <div className="min-h-screen flex items-center justify-center">Loading Content...</div>
  ) : isError ? (
    <div className="min-h-screen flex items-center justify-center">oops, Someting off...</div>
  ) : (
    <Routes>
      <Route path="/" element={<HomeScreen responseData={responseData!} />} />
    </Routes>
  );
}

export default BodySection;
