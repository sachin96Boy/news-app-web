import Logo from "./components/Logo";

import { BsDot, BsSearch } from "react-icons/bs";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";

import { IconContext } from "react-icons";

function Navbar() {
  const itemList = [
    "Corona Update",
    "Politics",
    "Business",
    "Sports",
    "World",
    "Travel",
    "Podecasts",
    "Fashion",
  ];
  return (
    <div className="flex items-center justify-evenly sticky w-screen h-20 bg-white z-50">
      <div className="logo-container">
        <Logo />
      </div>
      <div className="list-section">
        <ul className="list-none flex items-center font-nunito-sans">
          {itemList.slice(0, 7).map((item, index) => (
            <li
              key={index}
              className={
                index == 0 ? "flex items-center" : "flex items-center gap-4"
              }
            >
              <div>
                {index == 0 ? (
                  <IconContext.Provider value={{ color: "red", size: "28" }}>
                    <BsDot />
                  </IconContext.Provider>
                ) : null}
              </div>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="more-section">
        <RiArrowRightDoubleFill />
      </div>
      <div className="user-section items-center justify-between flex gap-4">
        <div>
          <AiOutlineUser />
        </div>
        <div>
          <BsSearch />
        </div>
        <div>
          <BiMenuAltRight />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
