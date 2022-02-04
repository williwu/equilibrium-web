import ReactDOM from 'react-dom';
import PortfolioView from "../components/GetPortfolios";

const Portfolio = () => {
  return (
    <div style={{
      paddingLeft: "20px"
    }}>
      <h1>My Portfolios</h1>
      <PortfolioView/>
    </div>
  )
}

export default Portfolio;
