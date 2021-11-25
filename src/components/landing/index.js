import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import "../../styles/Landing.scss";
import header_image from '../../resources/landing.jpg'

class Landing extends React.Component {
  render() {
    return (
        
        <div>
            <Container fluid className="Landing" >
                <Row>
                    <Col>
                        {/* <Image
                            src={header_image}
                            fluid
                        /> */}
                        <div className="title-text">
                            <p>
                                Trevor & Chelsey
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
  }
}

export default Landing;