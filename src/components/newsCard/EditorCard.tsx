import { IconContext } from "react-icons";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBoxArrowUp, BsBookmark } from "react-icons/bs";

type EditorProps = {
  title: string;
  description: string;
  imgUrl: string;
};

function EditorCard(props: EditorProps) {
  const { title, description, imgUrl } = props;
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <img src={imgUrl} alt={title} className="object-cover w-screen h-52" />
        <div className="flex items-center text-white font-bold justify-center gap-4 backdrop-blur-sm p-2 absolute bottom-0 right-0 left-0">
          <IconContext.Provider value={{ size: "20" }}>
            <AiOutlineHeart />
          </IconContext.Provider>
          <IconContext.Provider value={{ size: "20" }}>
            <BsBoxArrowUp />
          </IconContext.Provider>
          <IconContext.Provider value={{ size: "20" }}>
            <BsBookmark />
          </IconContext.Provider>
        </div>
      </div>
      <div className="flex flex-col items-start justify-between m-4">
        <div className="font-ibm-plex-serif font-bold text-lg">{title}</div>
        <div className="font-nunito-sans text-base">{description}</div>
      </div>
    </div>
  );
}

export default EditorCard;
