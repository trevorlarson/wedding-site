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
                                8.13.2022 - Youngberg Hill Inn and Winery
                            </p>
                            <p className='title-address'>
                                10660 SW Youngberg Hill Rd
                            </p>
                            <p className='title-address'>
                                McMinnville, OR 
                            </p>
                            <p className='title-address'>
                                97128
                            </p>
                            <Button variant="outline-primary" className='rsvp-link' href='https://www.theknot.com/us/trevor-larson-and-chelsey-hitchcock-aug-2022/rsvp' target="_blank">
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