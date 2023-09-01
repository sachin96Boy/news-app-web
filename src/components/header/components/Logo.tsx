import LogoImage from "../../../assets/news_logo.png";

function Logo() {
  return (
    <div className="logo-container">
      <img src={LogoImage} alt="news-app" className="object-cover" />
    </div>
  );
}

export default Logo;
