import { useState } from "react";
import ReactDOM from 'react-dom';

function FormInit() {
    const [inputs, setInputs] = useState({});
  
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(inputs);
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <h3>Ticker
        <input 
          type="text" 
          name="ticker" 
          value={inputs.ticker || ""} 
          onChange={handleChange}
        />
        </h3>
        <h3>Allocation 
          <input 
            type="number" 
            name="allocation" 
            value={inputs.allocation || ""} 
            onChange={handleChange}
          />%
          </h3>
          <input type="submit" />
      </form>
    )
  }

export default FormInit;
