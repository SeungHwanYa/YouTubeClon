import React, { useEffect, useState } from "react";
import Main from "../section/Main";

import { todayText } from "../data/today";
import { Link } from "react-router-dom";

export default function Today() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  const todayPageClass = loading ? "isLoading" : "isLoaded";
  return (
    <Main title="추천 영상" description="오늘의 추천 유튜브 영상입니다.">
      <section className={todayPageClass}>
        <div className="wrap_to">
          <h2 className="toname"> 오늘의 추천 영상입니다.</h2>
          {todayText.map((today, key) => (
            <div className="today_inner" key={key}>
              <div className="today_thumb play_icon">
                <Link to={today.page}>
                  <img src={today.img} alt={today.title} />
                </Link>
              </div>
              <div className="today_text">
                <span className="today">today!</span>
                <h3 className="title">
                  <Link to={today.page}>{today.title}</Link>
                </h3>
                <p className="desc">{today.desc}</p>
                <div className="info">
                  <span className="author">
                    <Link to={`/channel/${today.channelId}`}>
                      {today.author}
                    </Link>
                  </span>
                  <span className="date">{today.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Main>
  );
}
