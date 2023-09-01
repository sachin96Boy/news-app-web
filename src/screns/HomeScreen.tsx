import { ArticleProps } from "./BodySection";
import HeroSection from "../components/bodysection/hero/HeroSection";
import BreakingHotSection from "../components/bodysection/body-upper/BreakingHotSection";

function HomeScreen(props: ArticleProps[]) {
  return (
    <div className="mx-20 gap-4">
      <HeroSection
        author={props[0].author}
        description={props[0].description}
        imgUrl={props[0].urlToImage}
        time={props[0].publishedAt}
        title={props[0].title}
      />
      <BreakingHotSection title={props[1].title} />
    </div>
  );
}

export default HomeScreen;
