import React from "react";
import ButtonComponent from "../Components/FormComponent/Button/Button";
import Welcome from "../Components/Welcome/Welcome";
import getQuote from "../Images/getQuote.png";
import car from "../Images/car.png";
import arrow from "../Images/arrow.png";
import arrowb from "../Images/arrow-blue.png";

const Home = (props) => {
  const logo = { img: getQuote, alt: "Get Quote" };
  const lowerText = "Get Started";
  const pointer = { normal: arrow, active: arrowb };
  const help = "Need Help?";
  const login = "Login";
  const rightImage = { img: car, alt: "Car" };

  return (
    <>
      <Welcome
        logo={logo}
        heading={
          <>
            Best <br /> Property & Casualty <br /> Insurance.{" "}
          </>
        }
        tagLine={
          <>
            Lowest premium
            <br />
            More coverages
          </>
        }
        lowerText={lowerText}
        pointer={pointer}
        help={help}
        login={login}
        rightImage={rightImage}
      />
    </>
  );
};

export default Home;
