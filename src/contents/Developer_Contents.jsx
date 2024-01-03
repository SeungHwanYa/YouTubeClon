import React from "react";

import { developerText } from "../data/develop";
import { Link } from "react-router-dom";

import "../css/developer.css";

export default function Developer_Contents() {
  return (
    <section>
      <h2 className="developer_title"> 추천 개발자를 소개합니다.</h2>
      <div className="developer_inner overflow">
        {developerText.map((developer, key) => (
          <div className="developer" key={key}>
            <div className="developer_img play_icon">
              <Link to={`/channel/${developer.channelId}`}>
                <img src={developer.img} alt={developer.name} />
              </Link>
            </div>
            <div className="developer_info">
              <Link to={`/channel/${developer.channelId}`}>
                {developer.name}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
