import { useState } from "react";
import { Button, Form } from "react-bootstrap";
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
        console.log(inputs);
    }

    return (
        <div style={{
            paddingLeft: '20px',
            paddingRight: '20px'
        }}>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Tickers</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="ticker" 
                        placeholder="VTI, VXUS, ..." 
                        value={inputs.ticker || ""} 
                        onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Allocations in % (add up to 100)</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="allocation" 
                        placeholder="60, 40, ..." 
                        value={inputs.allocation || ""} 
                        onChange={handleChange} />
                </Form.Group>

                <Button variant="primary" type="submit">submit</Button>
            </Form>
        </div>

    )
}

export default Setup;
