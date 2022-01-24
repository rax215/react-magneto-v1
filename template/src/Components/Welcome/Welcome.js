import React, { useRef } from "react";
import "./Welcome.css";
import SelectInputBox from "../SelectInputBox/SelectInputBox.jsx";
import Menu from "../Menu/Menu";

const Home = (props) => {
  const {
    help,
    login,
    logo,
    lowerText,
    rightImage,
    heading,
    tagLine,
    pointer
  } = props || {};
  const pointerRef = useRef();
  const optionList = [
    { value: "", label: "Select a product to start", key: "0" },
    { value: "auto", label: "Auto", key: "1" },
    { value: "home", label: "Homeownwers", key: "2" },
    { value: "renter", label: "Renters", key: "3" },
    { value: "land", label: "Landlord Homeowners", key: "4" }
  ];
  const handleChangeSelect = (param) => {
    console.log(param.getAttribute("value"));
  };
  //styling on the arrow
  const handleEnter = () => {
    if (pointer.active) {
      pointerRef.current.setAttribute("src", pointer.active);
    } else {
      pointerRef.current.style.filter = "invert(1)";
    }
  };
  const handleLeave = () => {
    if (pointer.active) {
      pointerRef.current.setAttribute("src", pointer.normal);
    } else {
      pointerRef.current.style.filter = "invert(0)";
    }
  };

  return (
    <div className="container-Wel">
      <div className="left">
        <div className="leftTop">
          {logo && (
            <div className="logo">
              <img src={logo.img} alt={logo.alt} />
            </div>
          )}
          {heading && <h1>{heading}</h1>}
          {tagLine && <h4>{tagLine}</h4>}
          {/*Drop down component required here*/}
          <div className="dropdownContainer">
            <div className="input-box">
              <SelectInputBox
                handleChange={handleChangeSelect}
                options={optionList}
              />
            </div>
          </div>
        </div>

        <a
          href="/customerInfo"
          className="leftBottom"
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        >
          <h1>{lowerText}</h1>
          {/* <div className="img arrow"></div> */}
          <div className="pointer">
            <img ref={pointerRef} src={pointer.normal} alt="pointer" />
          </div>
        </a>
      </div>
      <div className="right">
        <div className="rightTop">
          {help && (
            <a className="help" href="/">
              {help}
            </a>
          )}
          {login && (
            <a className="login" href="/">
              {login}
            </a>
          )}
          <div className="menu">
            <Menu />
          </div>
        </div>

        <div className="rightBottom">
          <div className="img">
            <img src={rightImage.img} alt={rightImage.alt} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
