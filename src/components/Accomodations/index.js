import React from 'react';
import { Container, Row } from 'react-bootstrap';
import "../../styles/Accomodations.scss";

class Accomodations extends React.Component {
  render() {
    return (
      <section id="accomodations">
        <Container fluid className="accomodations-bgrnd" >
          <Container className="accomodations-page">
            <Row className="accomodations-msg">
              <Row className="hdr-msg">
                <p>
                  accomodations
                </p>
              </Row>
              <Row className="accomodations-spacing" />
              <Row className="accomodations-txt">
                <p className="acm-header">
                  Hotel 1
                </p>
                <p>
                  Address
                </p>
                <p>Website</p>
              </Row>
              <Row className="accomodations-txt">
                <p className="acm-header">
                  Hotel 2
                </p>
                <p>
                  Address
                </p>
                <p>Website</p>
              </Row>
              <Row className="accomodations-txt">
                <p className="acm-header">
                  Hotel 3
                </p>
                <p>
                  Address
                </p>
                <p>Website</p>
              </Row>
            </Row>
            <hr className="ln-brk"/>
            <Row className="accomodations-msg">
              <Row className="hdr-msg">
                <p>
                  things to do
                </p>
              </Row>
              <Row className="accomodations-spacing" />
              <Row className="accomodations-txt">
                <p className="acm-header">
                  Accomodation 1
                </p>
                <p>
                  Address
                </p>
                <p>Website</p>
              </Row>
              <Row className="accomodations-txt">
                <p className="acm-header">
                  Accomodation 2
                </p>
                <p>
                  Address
                </p>
                <p>Website</p>
              </Row>
              <Row className="accomodations-txt">
                <p className="acm-header">
                  Accomodation 3
                </p>
                <p>
                  Address
                </p>
                <p>Website</p>
              </Row>
            </Row>
            <hr className="ln-brk"/>
          </Container>
        </Container>
      </section>
    );
  }
}

export default Accomodations;