import Main from "../section/Main";
import React, { useEffect, useState } from "react";

import { websiteText } from "../data/website";
import VideoCard from "../contents/VideoCard";

export default function Website() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  const websitePageClass = loading ? "isLoading" : "isLoaded";
  return (
    <Main
      title="웹표준 사이트"
      description="웹표준 사이트 튜토리얼 강의입니다."
    >
      <section className={websitePageClass}>
        <h2 className="pageN"> 웹표준 사이트 만들기 기초 다지기</h2>
        <div className="pageW">
          <div className="pageI">
            <VideoCard videos={websiteText} />
          </div>
        </div>
      </section>
    </Main>
  );
}
