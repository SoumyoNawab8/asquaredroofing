import React, { useState, useRef } from 'react'
import { Form, Row, Col, Button } from  'react-bootstrap'
import './../css/ContactForm.css'
const axios = require('axios').default;

const ContactForm = (props) => {
    
    const [email, setEmail] = useState();
    const [street, setStreet] = useState();
    const [city, setCity] = useState();
    const [state, setState] = useState();
    const [zip, setZip] = useState();
    const [roofType, setRoofType] = useState();
    const [message, setMessage] = useState();
    const formRef = useRef();


    const handleSubmit = (e) => {
        e.preventDefault();

        if(process.env.NODE_ENV === 'production')
            let URL = process.env.URL;
        else
            let URL = '/send';

        const formData = {
            email: email,
            street: street,
            city: city,
            state: state,
            zip: zip,
            roofType: roofType,
            message: message
        }
        axios({
          method: "POST", 
          url: URL,
          data:  formData,
          headers: {
              'Content-Type': 'application/json'
          }
        }).then(response => {
          alert(response.data);
        });
    }


    return (
            <Form ref={formRef} className="Form" onSubmit={handleSubmit} method="POST">

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control className="inputTxt" required type="email" placeholder="Enter email" onChange={ e => setEmail(e.target.value) } />
                </Form.Group>

                <Form.Group controlId="formBasicStreet">
                    <Form.Label>Street</Form.Label>
                    <Form.Control className="inputTxt" required type="text" placeholder="Enter street" onChange={ e => setStreet(e.target.value) }/>
                </Form.Group>

                <Row>
                    <Col>
                        <Form.Group  controlId="formBasicCity">
                            <Form.Control className="inputTxt" required type="text" placeholder="City" onChange={e => setCity(e.target.value) } />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formBasicState">
                            <Form.Control className="inputTxt" required type="text" placeholder="State" onChange={e => setState(e.target.value) } />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formBasicZip">
                            <Form.Control className="inputTxt" required type="text" placeholder="Zip" onChange={e => setZip(e.target.value) } />
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Roofing type</Form.Label>
                    <Form.Control as="select" required onChange={e => setRoofType(e.target.value) } >
                        <option>Commercial</option>
                        <option>Residential</option>
                    </Form.Control>
                </Form.Group>
                {/* <Form.Check inline label="shingles" type='checkbox' id='inline-checkbox-1' />
                <Form.Check inline label="metal" type='checkbox' id='inline-checkbox-2' />
                <Form.Check inline label="flat" type='checkbox' id='inline-checkbox-3' />
                <Form.Check inline label="tile" type='checkbox' id='inline-checkbox-4' />
                <br/> */}
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Your message</Form.Label>
                    <Form.Control className="inputTxt" as="textarea" required rows={3} onChange={e => setMessage(e.target.value) } />
                </Form.Group>
                <Button className="submitBtn" type="submit">Submit</Button>
            </Form>

    )
}

export default ContactForm