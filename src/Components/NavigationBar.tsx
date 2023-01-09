import NavLinks from "../Links/index";
import { menuopen, menuclose, logo } from "../Assets/index";
import { useState, FC } from "react";

type linksProp = {
  margin: string;
  lastItemMargin: string;
  mediaScreen: string;
};

const Links: FC<linksProp> = ({ margin, lastItemMargin, mediaScreen }) => {
  type navlinks = { id: number; title: string; url: string };
  const style = {
    ul: `items-center ${mediaScreen}`,
  };

  return (
    <ul className={style.ul}>
      {NavLinks.map((links: navlinks, index: number) => (
        <li
          key={links.id}
          className={`navlinks ${
            index === NavLinks.length - 1 ? lastItemMargin : margin
          }`}
        >
          <a href={links.url}>{links.title}</a>
        </li>
      ))}
    </ul>
  );
};

const NavigationBar = () => {
  const [hamburger, toggleHamburger] = useState(false);

  return (
    <div className="bg-orange-700 p-5 font-questrial text-white">
      <div className="flex justify-between">
        <img src={logo} alt="logo" className="white max-w-[50px]" />
        <Links
          mediaScreen="hidden ss:flex"
          margin="mr-4"
          lastItemMargin="mr-0"
        />
        <img
          src={!hamburger ? menuopen : menuclose}
          alt={menuopen}
          className="white ss:hidden"
          onClick={() => toggleHamburger(!hamburger)}
        />
      </div>
    </div>
  );
};

export default NavigationBar;
