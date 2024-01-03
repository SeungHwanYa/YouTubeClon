import React from "react";

import "../css/searching.css";

export default function Searching() {
  return (
    <div className="wrap">
      <div className="search_inner">
        <label htmlFor="searchInput">
          <span className="ir"></span>
        </label>
        <input
          type="search"
          id="searchInput"
          placeholder="검색어를 입력해주세요"
          autoComplete="off"
          className="search__input"
        />
      </div>
    </div>
  );
}
