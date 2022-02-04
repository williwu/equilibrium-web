import { useState } from "react";
import ReactDOM from 'react-dom';
import { Button, Form } from "react-bootstrap";
import { rmPortfolio } from "../components/RmPortfolios";

const Remove = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
      event.preventDefault();

      const portfolio_name = inputs.pname;

      rmPortfolio(portfolio_name);
  }

  return (
      <div style={{
          paddingLeft: '20px',
          paddingRight: '20px'
      }}>
          <h1>Remove Portfolio</h1>
          <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                  <Form.Label>Portfolio Name</Form.Label>
                  <Form.Control 
                      type="text" 
                      name="pname" 
                      placeholder="My Portfolio" 
                      value={inputs.pname || ""} 
                      onChange={handleChange}
                      required={true} />
              </Form.Group>

              <Button variant="primary" type="submit">submit</Button>
          </Form>
      </div>

  )
}

export default Remove;
