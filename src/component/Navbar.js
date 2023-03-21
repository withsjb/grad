import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Styles from "../styles/Header.module.css";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [Mobile, setMobile] = useState(false);

  return (
    <nav className={Styles.navbar}>
      <Link to="/">
        <h3 className={Styles.logo}>
          <img src="images/secu.png"></img> Logo
        </h3>
      </Link>
      <ul
        className={Mobile ? Styles.navlinksmobile : Styles.navlinks}
        onClick={() => setMobile(false)}
      >
        <li className={Styles.navli}>
          roadmap
          <ul className={Styles.dropmenu}>
            <Link to="/roadmap">
              {" "}
              <li>roadmap1</li>{" "}
            </Link>
            <li>roadmap2</li>
            <li>roadmap3</li>
          </ul>{" "}
        </li>

        <li className={Styles.navli}>
          wargame
          <ul className={Styles.dropmenu}>
            <Link to="/problem">
              {" "}
              <li>wargame1</li>{" "}
            </Link>
            <li>wargame2</li>
            <li>wargame3</li>
          </ul>{" "}
        </li>

        <Link to="/">
          <li className={Styles.navli}>
            community
            <ul className={Styles.dropmenu}>
              <li>community1</li>
              <li>community2</li>
              <li>community3</li>
            </ul>{" "}
          </li>
        </Link>
        <Link to="/">
          <li className={Styles.navli}>login</li>
        </Link>
      </ul>
      <button className={Styles.mobilemenu} onClick={() => setMobile(!Mobile)}>
        {Mobile ? <ImCross /> : <FaBars />}
      </button>
    </nav>
  );
};

export default Navbar;
