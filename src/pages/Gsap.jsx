import Main from "../section/Main";
import React, { useEffect, useState } from "react";

import { gsapText } from "../data/gsap";
import VideoCard from "../contents/VideoCard";

export default function Gsap() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 300);
    }, []);

    const gsapPageClass = loading ? "isLoading" : "isLoaded";
  
  return (
    <Main title="GSAP사이트" description="GSAP사이트 튜토리얼 강의입니다.">
      <section className={gsapPageClass}>
        <h2 className="pageN">GSAP 패럴랙스 효과를 하고 싶다면!</h2>
        <div className="pageW">
          <div className="pageI">
            <VideoCard videos={gsapText} />
          </div>
        </div>
      </section>
    </Main>
  );
}
