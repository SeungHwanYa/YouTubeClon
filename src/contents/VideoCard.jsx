import React from "react";
import { Link } from "react-router-dom";

import "../css/pages.css";

export default function VideoCard({ videos }) {
  return (
    <>
      {videos.map((video, index) => (
        <div className="pageV" key={index}>
          <div className="pageT">
            <Link to={`/video/${video.videoId}`}>
              <img src={video.img} alt={videos.title} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
