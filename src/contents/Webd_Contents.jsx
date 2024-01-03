import React from "react";

import { webdText } from "../data/webd";
import { Link } from "react-router-dom";

import "../css/web.css";

export default function Webd() {
  return (
    <section>
      <h2 className="web_title"> 웹디자인기능사 준비는 이걸로!</h2>
      <div className="web_wrap">
        <div className="video_inner">
          {webdText.map((video, key) => (
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
