import { CiBaseball } from "react-icons/ci";
import { CiCoins1 } from "react-icons/ci";
import { CiBoxes } from "react-icons/ci";
import { CiBullhorn } from "react-icons/ci";
import { CiCoffeeCup } from "react-icons/ci";
import { CiDumbbell } from "react-icons/ci";
import { CiFries } from "react-icons/ci";
import { CiMoneyBill } from "react-icons/ci";

import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="hd_menu">
      <ul className="menu">
        <li className="active">
          <Link to="/">
            <CiBaseball /> Home
          </Link>
        </li>
        <li>
          <Link to="/today">
            <CiMoneyBill /> 추천 영상
          </Link>
        </li>
        <li>
          <Link to="/develop">
            <CiCoins1 /> 추천 개발자
          </Link>
        </li>
        <li>
          <Link to="/webd">
            <CiBoxes /> 웹디자인기능사
          </Link>
        </li>
        <li>
          <Link to="/website">
            <CiBullhorn /> 웹표준 사이트
          </Link>
        </li>
        <li>
          <Link to="/gsap">
            <CiCoffeeCup /> GSAP Parallax
          </Link>
        </li>
        <li>
          <Link to="/port">
            <CiDumbbell /> 포트폴리오 사이트
          </Link>
        </li>
        <li>
          <Link to="/youtube">
            <CiFries /> 유튜브 클론 사이트
          </Link>
        </li>
      </ul>
      <ul className="keyword">
        <li>
          <Link to="/search/html">HTML</Link>
        </li>
        <li>
          <Link to="/search/css">CSS</Link>
        </li>
        <li>
          <Link to="/search/javascript">JavaScript</Link>
        </li>
        <li>
          <Link to="/search/react.js">React.js</Link>
        </li>
        <li>
          <Link to="/search/vue.js">Vue.js</Link>
        </li>
        <li>
          <Link to="/search/next.js">Next.js</Link>
        </li>
        <li>
          <Link to="/search/node.js">Node.js</Link>
        </li>
        <li>
          <Link to="/search/sql">SQL</Link>
        </li>
        <li>
          <Link to="/search/React Portfolio">portfolio</Link>
        </li>
        <li>
          <Link to="/search/NewJeans">music</Link>
        </li>
      </ul>
    </nav>
  );
}
