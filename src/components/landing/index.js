import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
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
                            <Button variant="light" className='rsvp-link' href='https://www.theknot.com/us/trevor-larson-and-chelsey-hitchcock-aug-2022/rsvp' target="_blank">
                                    RSVP
                            </Button>
                        </div>                         
                    </Col>
                </Row>
            </Container>
        </div>
    );
  }
}

export default Landing;