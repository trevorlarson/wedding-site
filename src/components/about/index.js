import React from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import "../../styles/About.scss";
import the_proposal from '../../resources/the-proposal.jpg'
import how_we_met from '../../resources/how-we-met.jpg'

class About extends React.Component {
  render() {
    return (
      <section id="ourstory">
        <Container fluid className="about-bgrnd">
          <Container className='about-outer align-self-center'>
            <Container className="about-page align-self-center">
              <Container className="right-block align-self-center">
                <Row className="hwm-block align-self-center">
                  <Col className="hwm-image align-self-center">
                    <Image className="left-image"
                    src={how_we_met}
                    />
                  </Col>
                  <Col className="hwm-header align-self-center">
                    <p>
                      how we met
                    </p>
                  </Col>
                  <Col className="hwm-text align-self-center">
                    <p>
                    Trevor and Chelsey grew up in different parts of Washington. Trevor in Vancouver, WA and Chelsey in Yakima, WA. Both were very active in high school which led them to cross paths during the summer of 2012 at Mount Triumph Leadership Camp. During their first weeks at Washington State University in the fall 2013 semester, the two ran into each other on Greek Row and immediately recognized each other from their picture together at Mount Triumph. This sparked constant interactions until Trevor asked Chelsey to Winter Formal, and now we're here, over eight years later.
                    </p>
                  </Col>
                </Row>
                <Row>
                  <hr className="about-ln-brk" />
                </Row>
                <Row className="hwm-block">
                  <Col className="hwm-image align-self-center">
                    <Image className="left-image"
                    src={the_proposal}
                    />
                  </Col>
                  <Col className="hwm-header align-self-center">
                    <p>
                      the proposal
                    </p>
                  </Col>
                  <Col className="hwm-text align-self-center">
                    <p>
                    “We had been planning a vacation to Mexico for a while now, and I went into the trip thinking nothing of it. We woke up the first morning and Trevor had an appointment for us at the Spa, this was a bit out of character, but we’re in Cabo so what the heck. Trevor told me we had an excursion planned that night, a  sunset “Booze Cruise”. This definitely threw me off, because I knew Trevor wouldn’t want to propose in a sea of drunk strangers. However when we got on the dock, there wasn’t a “Booze Cruise” waiting for us but of course, a small sailboat, private and romantic as heck. Even the photographer was disguised as a member of the crew. The sunset that night was incredible, and we watched dolphins jump by our boat on the way out. Right about when we got out to the El Archo (The Arch) Trevor got down on one knee, and I said yes. After 8 and a half years together, we can't wait to celebrate with all of you on August 13th!”<br></br> - Chelsey
                    </p>
                  </Col>
                </Row>
              </Container>
            </Container>
          </Container>
        </Container>
      </section>
    );
  }
}

export default About;