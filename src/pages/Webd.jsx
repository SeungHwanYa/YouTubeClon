import React, { useEffect, useState } from "react";
import Main from "../section/Main";

import { webdText } from "../data/webd";

import "../css/pages.css";
import VideoCard from "../contents/VideoCard";

export default function Webd() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  const webdPageClass = loading ? "isLoading" : "isLoaded";
  return (
    <Main
      title="웹디자인 기능사"
      description="웹디자인 기능사 튜토리얼 강의입니다."
    >
      <section className={webdPageClass}>
        <h2 className="pageN"> 웹디자인기능사 준비는 이걸로!</h2>
        <div className="pageW">
          <div className="pageI">
            <VideoCard videos={webdText} />
          </div>
        </div>
      </section>
    </Main>
  );
}
