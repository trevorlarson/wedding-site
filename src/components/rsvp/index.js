import React from 'react';
import { Container, Row } from 'react-bootstrap';
import IframeResizer from 'iframe-resizer-react';
import "../../styles/Rsvp.scss";

class Rsvp extends React.Component {
  render() {
    return (
      <section id='rsvp'>
          <Container fluid className="rsvp-bgrnd" >
                <Container className="rsvp-msg">
                    <Row className="hdr-msg">
                        <p>
                            rsvp
                        </p>
                    </Row>
                    <Row className="rsvp-spacing"/>
                    <Row>
                      <div className="rsvp-form">
                        <IframeResizer
                          src="https://app.smartsheet.com/b/form/5df19fa7f8294c32bab7c0cccd69a92b"
                          style={{ width: '650px',maxWidth: '80vw', minHeight: '70vh'}}
                        />
                      </div>
                    </Row>
                </Container>
            </Container>
      </section>
    );
  }
}  

export default Rsvp;