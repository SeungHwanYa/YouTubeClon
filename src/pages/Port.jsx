import Main from "../section/Main";
import React from "react";

import { portfolioText } from "../data/portfolio";
import { Link } from "react-router-dom";

export default function Port() {
  return (
    <Main
      title="포트폴리오 사이트"
      description="포트폴리오 사이트 튜토리얼 강의입니다."
    >
      <section>
        <h2 className="pageN"> 포트폴리오 만드는 방법을 공유합니다.</h2>
        <div className="pageW">
          <div className="pageI">
            {portfolioText.map((video, key) => (
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
