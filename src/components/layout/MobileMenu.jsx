import { Link } from "react-router-dom";

const MobileMenu = ({ menuLinks, handleToggle }) => {
  return (
    <div className=" absolute right-0 top-0 w-[254px] min-h-screen bg-black-100/5 backdrop-blur-2xl">
      <ul className=" pt-[118px] pl-8 flex flex-col items-start gap-y-8">
        {menuLinks.map((link) => {
          return (
            <li key={link.id} className=" capitalize">
              <Link to={link.url} onClick={handleToggle}>{link.linkText}</Link>
            </li>
          );
        })}
        <ul className=" flex flex-col items-start gap-y-6">
          <button className=" px-8 py-2 rounded-md border border-solid text-blue-800 hover:shadow-lg">Give</button>
          <button className=" px-8 py-2 rounded-md border border-solid text-white bg-blue-800 hover:shadow-lg hover:bg-blue-800/90">Register</button>
        </ul>
      </ul>
    </div>
  );
};

export default MobileMenu;
