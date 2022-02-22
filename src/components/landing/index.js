import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "../../styles/Landing.scss";

class Landing extends React.Component {
  render() {
    return (
        
        <div id="home">
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
                            <p className='title-date'>
                                8.13.2022 - McMinnville, OR
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