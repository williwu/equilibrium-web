import { useState } from "react";
import ReactDOM from 'react-dom';
import { getPortfolios } from "../components/GetAllocations";

const Portfolio = () => {
  return (
    <div style={{
      paddingLeft: "20px"
    }}>
      <h1>My Portfolio</h1>
      <p>hi{getPortfolios()}</p>
    </div>
  )
}

export default Portfolio;
