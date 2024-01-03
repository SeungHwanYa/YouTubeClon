import React from "react";
import Main from "../section/Main";

import { webdText } from "../data/webd";
import { Link } from "react-router-dom";

import "../css/pages.css";

export default function Webd() {
  return (
    <Main
      title="웹디자인 기능사"
      description="웹디자인 기능사 튜토리얼 강의입니다."
    >
      <section>
        <h2 className="pageN"> 웹디자인기능사 준비는 이걸로!</h2>
        <div className="pageW">
          <div className="pageI">
            {webdText.map((video, key) => (
              <div className="pageV" key={key}>
                <div className="pageT">
                  <Link to={`/video/${video.videoId}`}>
                    <img src={video.img} alt={video.title} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Main>
  );
}
