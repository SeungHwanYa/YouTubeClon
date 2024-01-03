import React from "react";

import { gsapText } from "../data/gsap";
import { Link } from "react-router-dom";

export default function Gsap_Contents() {
  return (
    <section>
      <h2 className="web_title">GSAP 패럴랙스 효과를 하고 싶다면!</h2>
      <div className="web_wrap">
        <div className="video_inner">
          {gsapText.map((video, key) => (
            <div className="video" key={key}>
              <div className="video_thumb play_icon">
                <Link to={`/video/${video.videoId}`}>
                  <img src={video.img} alt={video.title} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
