import Main from "../section/Main";
import React from "react";

import { gsapText } from "../data/gsap";
import { Link } from "react-router-dom";

export default function Gsap() {
  return (
    <Main title="GSAP사이트" description="GSAP사이트 튜토리얼 강의입니다.">
      <section>
        <h2 className="pageN">GSAP 패럴랙스 효과를 하고 싶다면!</h2>
        <div className="pageW">
          <div className="pageI">
            {gsapText.map((video, key) => (
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
