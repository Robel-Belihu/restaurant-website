import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import "./Navbar.css";
import images from "../../constants/images";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.maison} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p__opensans">
          <a href="#home">About</a>
        </li>
        <li className="p__opensans">
          <a href="#home">Menu</a>
        </li>
        <li className="p__opensans">
          <a href="#home">Awards</a>
        </li>
        <li className="p__opensans">
          <a href="#home">Contact</a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">
          Login / Register
        </a>
        <div />
        <a href="/home" className="p__opensans">
          Book a table
        </a>
      </div>
      <div className="app__navbar-smallscreens">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          className="small__humberger"
          onClick={() => {
            setToggleMenu(true);
          }}
        />

        {toggleMenu && (
          <div className="app__navbar-smallscreens_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => {
                setToggleMenu(false);
              }}
            />
            <ul className="app__smallnav-links">
              <li className="p__opensans">
                <a href="#home">Home</a>
              </li>
              <li className="p__opensans">
                <a href="#home">About</a>
              </li>
              <li className="p__opensans">
                <a href="#home">Menu</a>
              </li>
              <li className="p__opensans">
                <a href="#home">Awards</a>
              </li>
              <li className="p__opensans">
                <a href="#home">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
