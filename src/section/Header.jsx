import React from "react";

import Logo from "./header/Logo";
import Menu from "./header/Menu";

import "../css/header.css";
import Sns from "./header/Sns";

export default function Header() {
  return (
    <header className="hd">
      <Logo />
      <Menu />
      <Sns />
    </header>
  );
}
