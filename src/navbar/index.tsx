import { Bars3Icon } from "@heroicons/react/24/solid";
import Logo from "@/assets/react.svg";
import { useState } from "react";
import "./nav.css"

const Navbar = () => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  return (
    <nav className="navbar">
      <div>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <img alt="logo" src={Logo} className="logo" />

            <button
              className="menu-button rounded-full bg-secondary-500 p-2"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <Bars3Icon className="h-6 w-6 text-white" />
            </button>

            <div className={`menu ${isMenuToggled ? 'open' : ''}`}>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;