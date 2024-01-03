import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import Searching from "./Searching";

import "../css/main.css";

export default function Main(data) {
  return (
    <>
      <Header />
      <main>
        <Searching />
        {data.children}
      </main>
      <Footer />
    </>
  );
}
