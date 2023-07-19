import React from 'react';
import { Container, Row, Col, Navbar } from 'react-bootstrap';

const Footer = () => {
  return (
      <Navbar className ="text-white" bg="dark" data-bs-theme="dark">
          <Container>
              <Row >
                <Col>
                  <p>Copyright &copy; | kudakwashedelanesibanda@gmail.com</p>
                </Col>
              </Row>
          </Container>
      </Navbar>

  );
};

export default Footer;