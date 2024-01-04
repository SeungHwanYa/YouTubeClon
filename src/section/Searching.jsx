import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../css/searching.css";

export default function Searching() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    console.log(searchKeyword);
    if (searchKeyword) {
      navigate(`/search/${searchKeyword}`);
      setSearchKeyword("");
    }
  };
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
          onChange={(e) => setSearchKeyword(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
      </div>
    </div>
  );
}
