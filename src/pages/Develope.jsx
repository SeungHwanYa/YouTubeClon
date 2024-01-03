import React from "react";
import Main from "../section/Main";

import { developerText } from "../data/develop";
import { Link } from "react-router-dom";

import "../css/developer_page.css";

export default function Develope() {
  return (
    <Main>
      <section>
        <h2 className="title">오늘의 추천 개발자입니다.</h2>
        <div className="inner">
          {developerText.map((developer, key) => (
            <div className="dev" key={key}>
              <div className="play">
                <Link to={`/channel/${developer.channelId}`}>
                  <img src={developer.img} alt={developer.name} />
                </Link>
              </div>
              <div className="info">
                <Link to={`/channel/${developer.channelId}`}>
                  {developer.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Main>
  );
}
