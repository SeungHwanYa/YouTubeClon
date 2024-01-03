import React from "react";

import { websiteText } from "../data/website";
import { Link } from "react-router-dom";

export default function Website_Contents() {
  return (
    <section>
      <h2 className="web_title"> 웹표준 사이트 만들기 기초 다지기</h2>
      <div className="web_wrap">
        <div className="video_inner">
          {websiteText.map((video, key) => (
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
