import React from 'react';
import { Container, Row } from 'react-bootstrap';
import "../../styles/Accomodations.scss";

class Accomodations extends React.Component {
  render() {
    return (
      <div>
          <Container fluid className="accomodations-bgrnd" >
                <Container className="accomodations-msg">
                    <Row className="hdr-msg">
                        <p>
                            accomodations
                        </p>
                    </Row>
                    <Row className="accomodations-spacing"/>
                    <Row className="accomodations-txt">
                        <p className="acm-header">
                          Hotel 1
                        </p>
                        <p>
                          Descriptions
                        </p>
                        <p>Website</p>
                    </Row>
                    <Row className="accomodations-txt">
                        <p className="acm-header">
                          Hotel 2
                        </p>
                        <p>
                          Descriptions
                        </p>
                        <p>Website</p>
                    </Row>
                    <Row className="accomodations-txt">
                        <p className="acm-header">
                          Hotel 3
                        </p>
                        <p>
                          Descriptions
                        </p>
                        <p>Website</p>
                    </Row>
                </Container>
            </Container>
      </div>
    );
  }
}  

export default Accomodations;