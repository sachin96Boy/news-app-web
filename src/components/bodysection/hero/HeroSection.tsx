import { IconContext } from "react-icons";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBoxArrowUp, BsBookmark } from "react-icons/bs";

type HeroProps = {
  title: string;
  description: string;
  author: string;
  time: string;
  imgUrl: string;
};

function HeroSection(props: HeroProps) {
  const { title, description, author, time, imgUrl } = props;
  return (
    <div className="flex items-center justify-between mx-20">
      <div className="image-banner">
        <img src={imgUrl} alt={title} className="object-cover w-5/12" />
      </div>
      <div className="item-container items-start">
        <div className="flex justify-between items-center">
          <div className="text-red-600 font-poppins font-semibold">
            Tranding
          </div>
          <div className="flex items-center gap-2">
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
        <div className="font-ibm-plex-serif font-semibold text-3xl my-2">
          {title}
        </div>
        <div className="font-poppins my-2">{description}</div>
        <div className="flex items-start">
          <div className="time font-poppins mr-3">{time}</div>
          <div className="time font-poppins mx-1">By {author}</div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
