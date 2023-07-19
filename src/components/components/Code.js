import React from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {Container, Col, Row} from "react-bootstrap";
import Gist from 'super-react-gist'



function Code() {

    const codeString = ``;

    return (
        <Container>
            <Row>
                <Col className="text-justify" md={4} style={{ marginTop: '6rem' }}>
                    <h4>Here's the code for the Components implementing the Weather Mash-UP :</h4>
                    <p>
                        The code showcases an impressive responsive web design, skillfully developed with React, Bootstrap, and React Bootstrap. It ingeniously utilizes three distinct APIs to create this remarkable application. By first fetching weather data from OpenWeatherMap for a specified city, the code then leverages Spotify and Unsplash APIs to obtain a song and an image that perfectly align with the current weather conditions of the chosen city. The seamless integration of these APIs results in a captivating user experience, seamlessly combining weather, music, and visuals into a single, cohesive platform.
                    </p>
                </Col>
                <Col md={8} style={{ marginTop: '6rem' }}>
                    <div>
                        <Gist
                            url="https://gist.github.com/DelaneKay/0d0a8c3b50e48926419a531da5828299"
                        />
                    </div>

                </Col>
            </Row>
        </Container>
    );
}

export default Code;
