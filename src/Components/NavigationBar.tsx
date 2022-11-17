import NavLinks from "../Links/index";
import { menuopen, menuclose, logo } from "../Assets/index";
import { useState } from "react";

const NavigationBar = () => {
  type navlinks = { id: number; title: string; url: string };
  const [hamburger, toggleHamburger]: any = useState(false);

  return (
    <div className="bg-orange-700 p-5 font-questrial text-white">
      <div className="flex justify-between">
        <img src={logo} alt="logo" className="white max-w-[50px]" />
        <ul className="hidden items-center ss:flex">
          {NavLinks.map((links: navlinks, index: number) => (
            <li
              key={links.id}
              className={`navlinks ${
                index === NavLinks.length - 1 ? "mr-0" : "mr-4"
              }`}
            >
              <a href={links.url}>{links.title}</a>
            </li>
          ))}
        </ul>
        <img
          src={!hamburger ? menuopen : menuclose}
          alt={menuopen}
          className="white ss:hidden"
          onClick={() => toggleHamburger(!hamburger)}
        />
      </div>
      <ul
        className={`animation-in ${
          hamburger ? "flex" : "hidden"
        } mt-10 flex-col text-center ss:hidden`}
      >
        {NavLinks.map((links: navlinks, index: number) => (
          <li
            key={links.id}
            className={`${index === NavLinks.length - 1 ? "mb-0" : "mb-4"}`}
          >
            <a href={links.url}>{links.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavigationBar;