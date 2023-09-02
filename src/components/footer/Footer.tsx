import { IconContext } from "react-icons";
import BwLogo from "../../assets/news_logo-bw.png";

import { MdRssFeed } from "react-icons/md";
import { FaTwitter, FaRedditAlien } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";

function Footer() {
  const LinkTags = ["About", "Contact", "Careers", "Coupons"];
  return (
    <div className="footer flex items-center gap-12 bg-blue-950 h-64 min-h-full justify-center">
      <div className="logo-container items-center">
        <img src={BwLogo} alt="news-app" />
      </div>
      <div className="details-container flex flex-col font-poppins font-medium text-white">
        <div>Privacy policy</div>
        <div>Liceance Agreement</div>
        <div>Terms of Services</div>
        <div>New Site Map</div>
      </div>
      <div className="social gap-4 flex flex-col items-end">
        <ul className="list-none flex flex-row text-white gap-2 font-poppins font-medium text-base">
          {LinkTags.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div className="flex items-center gap-6">
          <IconContext.Provider value={{ color: "white", size: "24" }}>
            <MdRssFeed />
          </IconContext.Provider>
          <IconContext.Provider value={{ color: "white", size: "24" }}>
            <FaTwitter />
          </IconContext.Provider>
          <IconContext.Provider value={{ color: "white", size: "24" }}>
            <FaRedditAlien />
          </IconContext.Provider>
          <IconContext.Provider value={{ color: "white", size: "24" }}>
            <BsFacebook />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default Footer;
