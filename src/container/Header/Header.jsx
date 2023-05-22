import React from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";

import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavor" />
      <h1 className="app__header-h1">Fine Dining</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        We pride ourselves in following the traditional Dining seasonings and
        processes used all over the world. Here, ancient customs and future
        trends coexist, and the intricacies of African culture blend seamlessly
        together over an Ethiopian-brewed coffee, or a bowl of Senegalese
        black-eyed pea stew and a side of spicy Ghanaian plantains.
      </p>
      <button className="custom__button">Explore Menu</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header image" />
    </div>
  </div>
);

export default Header;
