import Main from "../section/Main";
import React, { useEffect, useState } from "react";

import { portfolioText } from "../data/portfolio";
import VideoCard from "../contents/VideoCard";

export default function Port() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  const portPageClass = loading ? "isLoading" : "isLoaded";
  return (
    <Main
      title="포트폴리오 사이트"
      description="포트폴리오 사이트 튜토리얼 강의입니다."
    >
      <section className={portPageClass}>
        <h2 className="pageN"> 포트폴리오 만드는 방법을 공유합니다.</h2>
        <div className="pageW">
          <div className="pageI">
            <VideoCard videos={portfolioText} />
          </div>
        </div>
      </section>
    </Main>
  );
}
