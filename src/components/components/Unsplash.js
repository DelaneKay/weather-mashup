import {React, useState} from "react";
import {Button, Card, CardImg, Col, Container, Form, InputGroup, Row} from "react-bootstrap";
import axios from "axios";

function Unsplash(weatherData) {

    const [photo, setPhoto] = useState(null);
    const [clientID, setClientID] = useState('mLWJDZ3EaAi7sUZSEqqvJluHiEi_3X7XyDo3FwNjpF0');
    const [Image, setImage] = useState("");
    const weather = " weather"

    function handleChange(event){
        setPhoto(event.target.value)
    }

    function handleSubmit(event){


        const url = `https://api.unsplash.com/search/photos?query=${weatherData.weather[0].main}&client_id=` + clientID

        axios.get(url)
            .then(response => {
                console.log(response.data.results[0].urls.full);
                setImage(response.data.results[0].urls.full)
            })
    }

    return (
        <div className="overlay-container">
          <div className="background-image"></div>
            <Container fluid>
                <Row className="mx-2 justify-content-center align-content-center" style={{minHeight: '80vh', padding: '2rem'}}>
                    <Col xs={10} sm={8} md={6} lg={5} xl={4}>
                        <Card>
                            <CardImg src={Image}/>
                            <Card.Body>
                                <Card.Title>{}</Card.Title>
                                <span>{}</span>
                            </Card.Body>
                                <div style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        padding: '2rem'}}>
                                </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Unsplash;
