import React, { useState } from "react";
import { Container, Col, Row, Form, Button, InputGroup, Alert } from "react-bootstrap";
import '../../App.css'

function HomePage({ onFormSubmit }) {
  const [city, setCity] = useState('');

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(city);
  };

  return (
    <div className="overlay-container">
      <div className="background-image"></div>
      <Container fluid>
        <Row className="justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
          <Col xs={10} sm={8} md={6} lg={5} xl={4}>
            <InputGroup className="mb-3" style={{ zIndex: '1' }}>
              <Form.Control
                type="text"
                placeholder="Enter the city's name"
                aria-label="Enter the city's name"
                aria-describedby="basic-addon2"
                value={city}
                onChange={handleInputChange}
              />
              <Button variant="dark" id="button-addon2" onClick={handleFormSubmit}>
                Search
              </Button>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;
