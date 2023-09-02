import { IconContext } from "react-icons";

import { ImFeed } from "react-icons/im";

type LiveNewsProps = {
  title: string;
  imgUrl: string;
};

function LiveSection(props: LiveNewsProps) {
  const { title, imgUrl } = props;
  return (
    <div className="flex flex-col items-start my-6">
      <div className="flex items-center text my-4 font-poppins font-semibold text-sm">
        Live
        <IconContext.Provider value={{ color: "red", className: "mx-6" }}>
          <ImFeed />
        </IconContext.Provider>
      </div>
      <img src={imgUrl} alt={title} className="object-cover w-screen h-40" />
      <div className="font-ibm-plex-serif font-bold text-lg">{title}</div>
      <div className="location-ontainer flex flex-col items-start my-2 ">
        <div className="font-poppins font-semibold text-lg my-2">Location News</div>
        <div className="p-4 font-nunito-sans bg-white  ">
          <div className="my-4">
            <label htmlFor="location">Get Location Specific News</label>
            <input
              type="text"
              id="location"
              aria-label="location"
              placeholder="Enter your Location"
              className="border-gray-300 border-2 w-full my-2 py-2"
            />
          </div>
          <button className="bg-red-800 text-white w-24 h-10">SUBMIT</button>
        </div>
      </div>
    </div>
  );
}

export default LiveSection;
