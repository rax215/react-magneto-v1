import { useState } from "react";
import Footer from "../Footer/Footer";
import Layout from "../PageLayout/Layout";
import "./FormNav.css";
export default function FormNavigation() {
  const [formTabs, setFormTabs] = useState([
    "Customer Info",
    "Residence Info",
    "Vehicle Info",
    "Driver Info",
    "Coverages",
    "Quote"
  ]);

  return (
    <>
      <nav className="tabs">
        {formTabs.map((tab, index) => (
          <span className="tabItem" key={index}>
            <p>{tab}</p>
          </span>
        ))}
      </nav>
      <Layout />
    </>
  );
}
