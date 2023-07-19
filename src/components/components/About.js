import React from "react";
import { Container, Row, Col, Image } from 'react-bootstrap';
import ProfileImage from '../media/images/Kuda.png'
import { BiLogoLinkedinSquare, BiLogoUpwork } from "react-icons/bi";
import Footer from "./Footer";


function About() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '91.9vh' }}>
            <Container style={{ flex: '1 0 auto', marginTop: '6rem' }}>
                <Row className="justify-content-center">
                    <Col xs={12} md={8} className="text-center">
                        <Image src={ProfileImage} alt="Profile Image" roundedCircle fluid style={{ width: '100px', height: '100px' }} />
                        <h4 style={{ margin: '20px 0', color: 'dark' }}>Kudakwashe Delan Sibanda</h4>
                        <p style={{ color: 'gray' }}>Django/React Fullstack Developer | Amazon Web Services</p>

                        <p className="text-justify">
                            I am a Cloud Engineer and Fullstack Developer with expertise in Terraform, Amazon Web Services (AWS),
                            and Solution Architecture. With a strong background in cloud engineering and fullstack development using Django
                            and React, I bring a comprehensive skill set to this role. With this comprehensive skill set and industry-recognized
                            certifications, I am well-equipped to design and deploy scalable solutions on cloud platforms, particularly leveraging
                            the power of AWS. I am experienced in utilizing Terraform for infrastructure as code and implementing AWS solutions to
                            meet business requirements.
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <a href="https://www.linkedin.com/in/kudakwashe-delan-sibanda/" target="_blank" rel="noopener noreferrer"
                                style={{ textDecoration: 'none', color: 'inherit' }}>
                                <BiLogoLinkedinSquare size={42} style={{ marginRight: '5px' }} />
                            </a>
                            <a href="https://www.upwork.com/freelancers/~013e7c279f8224ef87" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <BiLogoUpwork size={42} style={{ marginRight: '5px' }} />
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
}

export default About;
