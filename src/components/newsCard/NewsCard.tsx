import { HeroProps } from "../bodysection/hero/HeroSection";
import { IconContext } from "react-icons";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBookmark, BsBoxArrowUp } from "react-icons/bs";
import moment from "moment";

function NewsCard(props: HeroProps) {
  const { title, description, author, time, imgUrl } = props;
  const timePosted = moment(new Date(time).toISOString()).fromNow();

  return (
    <div className="flex flex-col items-center justify-between bg-white min-h-full">
      <div className="image-banner">
        <img
          src={imgUrl}
          alt={title}
          className="object-fill w-screen h-40"
        />
      </div>
      <div className="text-content m-2">
        <div className="font-ibm-plex-serif font-semibold text-3xl my-2">
          {title}
        </div>
        <div className="font-poppins my-2">{description}</div>
        <div className="flex items-start">
          <div className="time font-poppins mr-3">{timePosted}</div>
          <div className="time font-poppins mx-1">By {author}</div>
        </div>
      </div>
      <div className="divide-y-2 drop-shadow-lg"></div>
      <div className="flex items-center  gap-2 my-2">
        <IconContext.Provider value={{ size: "14" }}>
          <AiOutlineHeart />
        </IconContext.Provider>
        <IconContext.Provider value={{ size: "14" }}>
          <BsBoxArrowUp />
        </IconContext.Provider>
        <IconContext.Provider value={{ size: "14" }}>
          <BsBookmark />
        </IconContext.Provider>
      </div>
    </div>
  );
}

export default NewsCard;
