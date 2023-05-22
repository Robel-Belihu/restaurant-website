import React from "react";
import { images } from "../../constants";

const SubHeading = ({ props }) => (
  <div style={{ marginBottom: "1rem" }}>
    <p className="p__cormorant">Title</p>
    <img src={images.spoon} alt="spoon-img" className="spoon_img" />
  </div>
);

export default SubHeading;
