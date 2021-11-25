import React from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import "../../styles/About.scss";
import about_left from '../../resources/about-left.jpg'
import about_right from '../../resources/about-right.jpg'

class About extends React.Component {
  render() {
    return (
      <div className="outer">
          <Container fluid className="about-bgrnd" >
                <Container className="about-page">
                  <Row>
                    <Col>
                      <Image className="sbs-image"
                              src={about_left}
                          />
                    </Col>
                    <Col className="about-msg">
                      <Row className="hdr-msg">
                          <p>
                              about us
                          </p>
                      </Row>
                      <Row className="about-spacing"/>
                      <Row className="about-txt">
                          <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue justo vel arcu egestas bibendum. Suspendisse laoreet lacinia nisl in pellentesque. Nullam dignissim tempor elit. Nunc porta suscipit tortor, ac accumsan ipsum faucibus sed. Pellentesque feugiat eu elit in sollicitudin. Integer sit amet dictum libero. In ac dignissim quam. Quisque volutpat enim ac ex rhoncus, eget hendrerit dui sollicitudin. Pellentesque porta accumsan imperdiet. Quisque at orci fringilla, commodo mauris quis, pellentesque purus. Morbi ultrices metus in metus sagittis, a suscipit mi cursus. Pellentesque vel lectus ipsum. Vivamus consequat est at dui eleifend commodo. Mauris ut sodales quam.
                          </p>
                      </Row>
                    </Col>
                    <Col>
                      <Image className="sbs-image"
                              src={about_right}
                          />
                    </Col>
                  </Row>
                </Container>
            </Container>
      </div>
    );
  }
}  

export default About;