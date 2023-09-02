import { ArticleProps } from "./BodySection";
import HeroSection from "../components/bodysection/hero/HeroSection";
import BreakingHotSection from "../components/bodysection/body-upper/BreakingHotSection";
import NewsGrid from "../components/bodysection/newsgrid/NewsGrid";
import LiveSection from "../components/bodysection/body-upper/LiveSection";
import EditorSection from "../components/bodysection/editor-section/EditorSection";

type homeScreenProps = {
  responseData: ArticleProps[];
};

function HomeScreen(props: homeScreenProps) {
  const { responseData } = props;
  return (
    <div className="mx-20 gap-2 min-h-screen my-2 flex flex-col">
      <HeroSection
        author={responseData[0].author}
        description={responseData[0].description}
        imgUrl={responseData[0].urlToImage}
        time={responseData[0].publishedAt}
        title={responseData[0].title}
      />
      <BreakingHotSection title={responseData[1].title} />
      <div className="flex justify-between gap-6">
        <NewsGrid newsData={responseData} />
        <LiveSection
          title={responseData[4].title}
          imgUrl={responseData[4].urlToImage}
        />
      </div>
      <EditorSection articleList={responseData} />
    </div>
  );
}

export default HomeScreen;
