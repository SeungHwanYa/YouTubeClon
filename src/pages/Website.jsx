import Main from "../section/Main";
import React from "react";

import { websiteText } from "../data/website";
import { Link } from "react-router-dom";

export default function Website() {
  return (
    <Main
      title="웹표준 사이트"
      description="웹표준 사이트 튜토리얼 강의입니다."
    >
      <section>
        <h2 className="pageN"> 웹표준 사이트 만들기 기초 다지기</h2>
        <div className="pageW">
          <div className="pageI">
            {websiteText.map((video, key) => (
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
