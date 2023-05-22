import React from "react";
import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex-center">
      <img src={images.G} alt="letter g" />
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="spoon_image" className="spoon__img" />
        <p className="p__opensans">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et.
        </p>
        <button type="button" className="custom__button">
          Explore More
        </button>
      </div>
      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="aboutus_knife" />
      </div>
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">History</h1>
        <img src={images.spoon} alt="spoon_image" className="spoon__img" />
        <p className="p__opensans">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et.
        </p>
        <button type="button" className="custom__button">
          Explore More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
