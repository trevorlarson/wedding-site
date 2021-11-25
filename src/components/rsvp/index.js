import React from 'react';
import { Container, Row } from 'react-bootstrap';
import "../../styles/Rsvp.scss";

class Rsvp extends React.Component {
  render() {
    return (
      <div>
          <Container fluid className="rsvp-bgrnd" >
                <Container className="rsvp-msg">
                    <Row className="hdr-msg">
                        <p>
                            rsvp
                        </p>
                    </Row>
                    <Row className="rsvp-spacing"/>
                    <Row className="rsvp-form">
                      <div>
                        <iframe width="600" height="600" src="https://app.smartsheet.com/b/form/5df19fa7f8294c32bab7c0cccd69a92b"></iframe>
                      </div>
                    </Row>
                </Container>
            </Container>
      </div>
    );
  }
}  

export default Rsvp;