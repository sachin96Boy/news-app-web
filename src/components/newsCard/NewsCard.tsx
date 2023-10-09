import { HeroProps } from "../bodysection/hero/HeroSection";
import { IconContext } from "react-icons";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBookmark, BsBoxArrowUp } from "react-icons/bs";
import moment from "moment";

function NewsCard(props: HeroProps) {
  const { title, description, author, time, imgUrl } = props;
  const timePosted = moment(new Date(time).toISOString()).fromNow();

  return (
    <div className="flex flex-col overflow-hidden items-center justify-between  bg-white min-h-full drop-shadow-lg">
      <div className="image-banner">
        <img src={imgUrl} alt={title} className="object-cover w-screen h-40" />
      </div>
      <div className="text-content">
        <div className="font-ibm-plex-serif font-semibold text-xl mx-4">
          {title}
        </div>
        <div className="font-poppins my-2 mx-4">{description}</div>
        <div className="flex items-start justify-between mx-4 gap-2">
          <div className="time font-poppins text-xs">{timePosted}</div>
          <div className="time font-poppins text-xs ">By {author}</div>
        </div>
      </div>
      <div className="border-b-gray-200 border-b-2 w-full drop-shadow-sm my-2" />
      <div className="flex items-center w-full justify-evenly mb-2">
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
