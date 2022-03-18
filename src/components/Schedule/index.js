import React from 'react';
import { Container, Row } from 'react-bootstrap';
import "../../styles/Schedule.scss";

class Schedule extends React.Component {
  render() {
    return (
      <section id='schedule'>
          <Container fluid className="schedule-bgrnd" >
                <Container className="schedule-msg">
                    <Row className="hdr-msg">
                        <p>
                            schedule coming soon
                        </p>
                    </Row>
                    <h2>Ceremony to begin at 4pm</h2>
                    {/* <h2>Full schedule coming soon</h2> */}
                    {/* <Row className="schedule-spacing"/>
                    <Row className="schedule-txt">
                        <p>
                          Item 1
                        </p>
                        <p>
                          Time
                        </p>
                    </Row>
                    <Row className="schedule-txt">
                        <p>
                          Item 2
                        </p>
                        <p>
                          Time
                        </p>
                    </Row>
                    <Row className="schedule-txt">
                        <p>
                          Item 3
                        </p>
                        <p>
                          Time
                        </p>
                    </Row> */}
                </Container>
            </Container>
      </section>
    );
  }
}  

export default Schedule;