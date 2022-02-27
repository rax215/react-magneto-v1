import React from "react";
import "./Header.css";
import Menu from "./Menu";
import NavBar from "../NavBar/NavBar";

const Header = ({ logo, help, login, navTabs }) => {
  return (
    <div className="header">
      <div className="rowfirstdiv">
        {logo && (
          <a href="/" className="logo">
            <img src={logo} alt="Get Quote" />
          </a>
        )}
        <div className="header-right">
          {help && (
            <a className="active" href="#">
              {help}
            </a>
          )}
          {login && (
            <a href="#">
              <div className="login">{login}</div>
            </a>
          )}
          <a href="#">
            <Menu />
          </a>
        </div>
      </div>
      <div className="rowseconddiv">
        <NavBar />
      </div>
    </div>
  );
};

export default Header;
