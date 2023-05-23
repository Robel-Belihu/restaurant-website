import React, { useState, useRef } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants";

import "./Intro.css";

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = React.useRef();

  const handleVideo = () => {
    setPlayVideo((prev) => !prev);
    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };

  return (
    <div className="app__video">
      <video
        src={meal}
        type="video/mp4"
        loop
        controls={false}
        ref={vidRef}
        muted
      />
      <div className="app__video-overlay flex__center">
        <div
          onClick={handleVideo}
          className="app__video-overlay_circle flex__center"
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={80} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={80} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
