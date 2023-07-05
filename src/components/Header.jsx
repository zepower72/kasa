import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/Header.css";
import React from "react";

export default function header() {
  return (
    <div className="header-nav">
      <a href="/">
        <img src={logo} alt="Logo du site Kasa" />
      </a>
      <ul>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}>
          <li>Accueil</li>
        </NavLink>
        <NavLink
          to="/About"
          className={({ isActive }) => (isActive ? "active" : "")}>
          <li>A Propos</li>
        </NavLink>
      </ul>
    </div>
  );
}
