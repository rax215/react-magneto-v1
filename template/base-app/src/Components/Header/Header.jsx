import React from "react";
import PageNav from "../../route";
import "./Header.css";
import Menu from "./Menu";

const Header = ({ logo, help, login, navTabs }) => {
  return (
    <div className="hed-container">
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
          <PageNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
