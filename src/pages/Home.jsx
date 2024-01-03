import React from "react";
import Main from "../section/Main";
import Today_Contents from "../contents/Today_Contents";
import Developer_Contents from "../contents/Developer_Contents";
import Webd_Contents from "../contents/Webd_Contents";
import Website_Contents from "../contents/Website_Contents";
import Gsap_Contents from "../contents/Gsap_Contents";
import Portfolio_Contents from "../contents/Portfolio_Contents";
import Youtube_Contents from "../contents/Youtube_Contents";

export default function Home() {
  return (
    <Main
      title="웹스토리보이 유튜브"
      description="웹스토리보이 유튜버 사이트에 오신 것을 환영합니다."
    >
      <Today_Contents />
      <Developer_Contents />
      <Webd_Contents />
      <Website_Contents />
      <Gsap_Contents />
      <Portfolio_Contents />
      <Youtube_Contents />
    </Main>
  );
}
