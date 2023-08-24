// import "./nav.css";
import logo from "./image 13.svg";
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const handleToggle = () => {
    setMenuToggle(!menuToggle)
  }
  const menuLinks = [
    {
      id: 1,
      linkText: "home",
      url: "/",
    },
    {
      id: 2,
      linkText: "about",
      url: "about",
    },
    {
      id: 3,
      linkText: "schedule",
      url: "schedule",
    },
    {
      id: 4,
      linkText: "store",
      url: "store",
    },
    {
      id: 5,
      linkText: "help",
      url: "help",
    },
    {
      id: 6,
      linkText: "live",
      url: "live",
    },
  ];
  return (
    <nav className=" flex justify-between items-center px-3 py-6 md:px-6 lg:px-16 lg:py-8">
      <img src={logo} alt="Logo" className="rbc-logo" />
      <div onClick={handleToggle} className=" z-20 xl:hidden">
        {menuToggle ? (
          <XMarkIcon width={35} />
        ) : (
          <Bars3BottomRightIcon width={35} />
        )}
      </div>
      {menuToggle && <MobileMenu menuLinks={menuLinks} handleToggle={handleToggle} />}
      <div className=" hidden lg:pl-16 xl:flex xl:flex-row lg:w-full xl:justify-between">
        <ul className=" flex flex-row items-center gap-x-10">
          {menuLinks.map(({ id, linkText, url }) => {
            return (
              <NavLink
                to={url}
                key={id}
                className=" text-base capitalize leading-6 font-medium"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "blue" : "black",
                  };
                }}
              >
                {linkText}
              </NavLink>
            );
          })}
        </ul>
        <ul className=" flex flex-row items-center gap-x-6">
          <button className=" px-8 py-2 rounded-md border border-solid text-blue-800 hover:shadow-lg">Give</button>
          <button className=" px-8 py-2 rounded-md border border-solid text-white bg-blue-800 hover:shadow-lg hover:bg-blue-800/90">Register</button>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
