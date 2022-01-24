import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { updateAllocation } from "../components/UpdateAllocation"
import ReactDOM from 'react-dom';

const Setup = () => {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const portfolio_name = inputs.pname;
        const assets = inputs.ticker.replaceAll(' ', '').toUpperCase().split(",");

        const allocations = inputs.allocation.replaceAll(' ', '').split(",").map(function(item) {
            return parseInt(item, 10);
        });

        updateAllocation(portfolio_name, assets, allocations);
    }

    return (
        <div style={{
            paddingLeft: '20px',
            paddingRight: '20px'
        }}>
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

                <Form.Group className="mb-3">
                    <Form.Label>Tickers (use coma between tickers)</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="ticker" 
                        placeholder="VTI,VXUS ..." 
                        value={inputs.ticker || ""} 
                        onChange={handleChange}
                        required={true} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Allocations in % (add up to 100, use coma between allocation numbers)</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="allocation" 
                        placeholder="60,40 ..."
                        value={inputs.allocation || ""} 
                        onChange={handleChange}
                        required={true} />
                </Form.Group>

                <Button variant="primary" type="submit">submit</Button>
            </Form>
        </div>

    )
}

export default Setup;
