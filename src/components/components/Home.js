import React from "react";
import {Col, Container, Row, Nav} from "react-bootstrap";
import { Link } from "react-router-dom"
import { DiReact, DiHtml5, DiJavascript1, DiBootstrap } from "react-icons/di";
import Icon from '../media/images/animated-weather-icons-5.gif'

function Home() {
    return (
        <>
            <Container>
                <Row>
                    <Col  md={6} style={{ marginTop: '2rem' }}>
                        <div >
                              <h1 className="text-center" style={{ fontFamily: 'Bebas Neue', fontSize: '3rem', textShadow: '.05rem .05rem .05rem rgba(0, 0, 0, 0.5)'}} >Weather Mash-UP</h1>
                              <p className="text-justify" style={{ fontSize: '1rem', }}>
                                The Weather Mash-Up App is a responsive web designed innovative program that provides weather information for a specific city in a whole new way. By simply searching for a city, Weather Mash-Up presents not only the weather forecast but also a matching song that complements the weather conditions and a captivating picture capturing the essence of that city's weather experience.
                              </p>
                            <p className="text-justify" style={{ fontSize: '1rem', }}>
                                With Weather Mash-Up, you'll get a comprehensive experience that goes beyond typical weather apps. Discover the perfect soundtrack that reflects the mood of the weather, and immerse yourself in the visual representation of the city's climate.
                            </p>
                            <p className="text-justify" style={{ fontSize: '1rem', }}>
                                Stay informed, entertained, and connected to the weather in a whole new level with Weather Mash-Up.
                            </p>
                        </div>
                        <Nav.Link className="d-flex justify-content-center">
                            <Link to="/the-app">
                            <button  type="button"
                                     className="btn btn-dark"
                                     style={{boxShadow: '.15rem .15rem .15rem rgba(0, 0, 0, 0.9)'}}>
                                Try It Out
                            </button>
                            </Link>
                        </Nav.Link>
                        <div style={{ marginTop: '3rem' }}>
                            <h4 className="text-center"> Created using: </h4>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <DiReact size={62} />
                            <DiJavascript1 size={62}/>
                            <DiBootstrap size={62}/>
                            <DiHtml5 size={62}/>
                        </div>
                    </Col>
                    <Col md={6} style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <img className='rounded-circle' src={Icon} style={{width:'90%', height: 'auto'}}/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Home;
