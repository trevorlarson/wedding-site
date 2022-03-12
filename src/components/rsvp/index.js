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
                    </Row>
                    <Row className="rsvp-spacing"/>
                    <Row>
                      {/* <div className="rsvp-form">
                        <IframeResizer
                          is="x-frame-bypass"
                          src="https://www.theknot.com/us/trevor-larson-and-chelsey-hitchcock-aug-2022/rsvp"
                          style={{ width: '100vw', height: '100vh'}}
                        />
                      </div> */}
                    </Row>
                </Container>
            </Container>
      </section>
    );
  }
}  

export default Rsvp;