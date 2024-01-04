import React, { useEffect, useState } from "react";
import Main from "../section/Main";

import { youtubeText } from "../data/youtube";
import VideoCard from "../contents/VideoCard";

export default function Youtube() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 300);
    }, []);

    const youtubePageClass = loading ? "isLoading" : "isLoaded";
  return (
    <Main
      title="유튜브 사이트"
      description="유튜브 사이트 튜토리얼 강의입니다."
    >
      <section className={youtubePageClass}>
        <h2 className="pageN"> 지금 이 코딩을 영상으로</h2>
        <div className="pageW">
          <div className="pageI">
            <VideoCard videos={youtubeText} />
          </div>
        </div>
      </section>
    </Main>
  );
}
