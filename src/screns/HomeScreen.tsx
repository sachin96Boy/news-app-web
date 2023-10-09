import HeroSection from "../components/bodysection/hero/HeroSection";
import BreakingHotSection from "../components/bodysection/body-upper/BreakingHotSection";
import NewsGrid from "../components/bodysection/newsgrid/NewsGrid";
import LiveSection from "../components/bodysection/body-upper/LiveSection";
import EditorSection from "../components/bodysection/editor-section/EditorSection";
import { NewsModel } from "../models/NewsModel";

type homeScreenProps = {
  responseData: NewsModel[];
};

function HomeScreen(props: homeScreenProps) {
  const { responseData } = props;
  return (
    <div className="mx-20 gap-2 min-h-screen my-2 flex flex-col">
      <HeroSection
        author={responseData[0].getProvider}
        description={responseData[0].getDescription}
        imgUrl={responseData[0].getImg}
        time={responseData[0].getDatePublished}
        title={responseData[0].getTitle}
      />
      <BreakingHotSection title={responseData[1].getTitle} />
      <div className="flex justify-between gap-6">
        <NewsGrid newsData={responseData} />
        <LiveSection
          title={responseData[4].getTitle}
          imgUrl={responseData[4].getImg}
        />
      </div>
      <EditorSection articleList={responseData} />
    </div>
  );
}

export default HomeScreen;
