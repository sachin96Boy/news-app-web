import { useState } from "react";
import { ArticleProps } from "../../../screns/BodySection";
import NewsCard from "../../newsCard/NewsCard";

import { HiOutlineBookmark } from "react-icons/hi";
import { IconContext } from "react-icons";

const listTitles = ["Latest Stories", "Think", "Health"];

type newsGridProps = {
  newsData: ArticleProps[];
};

function NewsGrid(props: newsGridProps) {
  const { newsData } = props;
  const [showMore, SetShowMore] = useState(false);

  const handleClick = () => {
    SetShowMore(!showMore);
  };

  const data = showMore ? newsData : newsData.slice(0, 4);
  return (
    <div className="flex flex-col items-center justify-between">
      <div className="flex flex-col items-start justify-between my-2">
        <div className="flex items-center justify-between my-2 bg-white h-12 w-full p-2">
          <ul className=" flex items-center gap-8 font-poppins font-semibold list-none">
            {listTitles.map((item, index) => (
              <li key={index}>
                {item}
                <div
                  className={
                    index == 0 ? "border-b-red-700 border-b-4 mr-14" : undefined
                  }
                />
              </li>
            ))}
          </ul>
          <IconContext.Provider value={{ size: "28" }}>
            <HiOutlineBookmark />
          </IconContext.Provider>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {data.map((article, index) => (
            <div key={index}>
              <NewsCard
                author={article.author}
                description={article.description}
                imgUrl={article.urlToImage}
                time={article.publishedAt}
                title={article.title}
              />
            </div>
          ))}
        </div>
      </div>
      <div
        className="border-red-400 border-2 my-2 text-red-800 font-poppins font-medium px-8 py-2 cursor-pointer"
        onClick={handleClick}
      >
        VIEW MORE
      </div>
    </div>
  );
}

export default NewsGrid;
