import { ArticleProps } from "./BodySection";
import HeroSection from "../components/bodysection/hero/HeroSection";
import BreakingHotSection from "../components/bodysection/body-upper/BreakingHotSection";
import NewsGrid from "../components/bodysection/newsgrid/NewsGrid";

type homeScreenProps = {
    responseData: ArticleProps[];
}

function HomeScreen(props: homeScreenProps) {
    const {responseData} = props;
  return (
    <div className="mx-20 gap-4">
      <HeroSection
        author={responseData[0].author}
        description={responseData[0].description}
        imgUrl={responseData[0].urlToImage}
        time={responseData[0].publishedAt}
        title={responseData[0].title}
      />
      <BreakingHotSection title={responseData[1].title} />
      <div className="flex items-center justify-between">
        <NewsGrid newsData={responseData} />
      </div>
    </div>
  );
}

export default HomeScreen;
