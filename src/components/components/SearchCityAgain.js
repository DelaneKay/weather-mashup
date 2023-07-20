import React, { useState } from "react";
import { Container, Col, Row, Form, Button, InputGroup, Alert } from "react-bootstrap";
import '../../App.css'

function SearchCityAgain({ onFormSubmit }) {
  const [city, setCity] = useState('');

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        handleFormSubmit();
      }
    };

  const handleFormSubmit = (event) => {
    onFormSubmit(city);
  };

  return (
    <div>
        <InputGroup className="mb-3" style={{ zIndex: '1' }}>
              <Form.Control
                type="text"
                placeholder="Enter the city's name"
                aria-label="Enter the city's name"
                aria-describedby="basic-addon2"
                value={city}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
              />
              <Button variant="dark" id="button-addon2" onClick={handleFormSubmit}>
                Search
              </Button>
        </InputGroup>

    </div>
  );
}

export default SearchCityAgain;
