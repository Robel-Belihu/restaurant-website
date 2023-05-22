import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import "./Navbar.css";
import images from "../../constants/images";
const Navbar = () => (
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
  </nav>
);

export default Navbar;
