import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [show, setShow] = useState(false);
  const listNavbar = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Contact Us", url: "/contact" },
  ];

  const getNavLinkClass = ({ isActive }) => `hover:text-[#FF9900] transition duration-300 ${isActive ? "text-[#FF9900] font-bold" : "text-black"}`;

  return (
    <nav className="bg-white/80 backdrop-blur-md flex flex-col gap-10 fixed py-10 md:px-40 px-10 w-full text-black top-0 z-2">
      <div className="flex justify-between items-center">
        <div>
          <Link to="/">
            <img src="/public/icon/weiss-logo.svg" alt="Logo Weiss" className="" />
          </Link>
        </div>
        <div className="flex md:flex-row flex-col items-center gap-10">
          <button onClick={() => setShow(!show)} className="md:hidden flex">
            <img src="/public/icon/hamburger-menu.svg" alt="hamburger menu" className="w-10 h10" />
          </button>
          <ul className="md:flex gap-10 list-none text-xl hidden">
            {listNavbar.map((menu) => (
              <NavLink key={menu.name} to={menu.url} className={getNavLinkClass}>
                <li className="hover:scale-110">{menu.name}</li>
              </NavLink>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <ul className={`flex flex-col gap-5 list-none text-xl md:hidden ${!show ? "hidden" : ""}`}>
          {listNavbar.map((menu) => (
            <NavLink key={menu.name} to={menu.url} className={getNavLinkClass}>
              <li>{menu.name}</li>
            </NavLink>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
