import React from "react";
import Home from "./views/Home";
import Coverages from "./views/Coverages";
import CustomerInfo from "./views/CustomerInfo";
import DriverInfo from "./views/DriverInfo";
import Quote from "./views/Quote";
import ResidenceInfo from "./views/ResidenceInfo";
import VehicleInfo from "./views/VehicleInfo";
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter as Switch, Routes, Route } from "react-router-dom";

const PageNav = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/customerInfo" element={<CustomerInfo/>} />
        <Route exact path="/residenceInfo" element={<ResidenceInfo/>} />
        <Route exact path="/vehicleInfo" element={<VehicleInfo/>} />
        <Route exact path="/driverInfo" element={<DriverInfo/>} />
        <Route exact path="/coverages" element={<Coverages/>} />
        <Route exact path="/quote" element={<Quote/>} />
      </Routes>
    </>
  );
};

export default PageNav;
