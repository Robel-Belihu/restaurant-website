import React from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse ">
      <img src={images.chef} alt="Chef_img" />
    </div>
    <div className="app__wrapper_info ">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis.
          </p>
        </div>
        <p className="p__opensans">
          praesentium voluptatum deleniti atque corrupti quos dolores et quas
          molestias excepturi sint.
        </p>
      </div>

      <div className="app__chef-sign">
        <p style={{ color: "#fff" }}>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img
          style={{ width: "60%", marginTop: "10%" }}
          src={images.sign}
          alt="signature"
        />
      </div>
    </div>
  </div>
);

export default Chef;
