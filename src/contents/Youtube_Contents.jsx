import React from "react";

import { youtubeText } from "../data/youtube";
import { Link } from "react-router-dom";

export default function Youtube_Contents() {
  return (
    <section>
      <h2 className="web_title"> 지금 이 코딩을 영상으로</h2>
      <div className="web_wrap">
        <div className="video_inner">
          {youtubeText.map((video, key) => (
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
