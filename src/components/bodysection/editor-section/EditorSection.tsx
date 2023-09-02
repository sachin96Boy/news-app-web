import { IconContext } from "react-icons";
import { ArticleProps } from "../../../screns/BodySection";

import { AiFillStar } from "react-icons/ai";
import EditorCard from "../../newsCard/EditorCard";

type EditorProps = {
  articleList: ArticleProps[];
};

function EditorSection(props: EditorProps) {
  const { articleList } = props;
  return (
    <div className="my-2 flex flex-col items-start">
      <div className="flex items-center font-poppins gap-2 text-lg text-black">
        Editors Pick
        <IconContext.Provider value={{ color: "black", size: "14" }}>
          <AiFillStar />
        </IconContext.Provider>
      </div>
      <div className="flex overflow-x-scroll  items-center justify-between list-none">
        {articleList.slice(1, 3).map((item, index) => (
          <li key={index}>
            <EditorCard
              title={item.title}
              description={item.description}
              imgUrl={item.urlToImage}
            />
          </li>
        ))}
      </div>
    </div>
  );
}

export default EditorSection;
