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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue justo vel arcu egestas bibendum. Suspendisse laoreet lacinia nisl in pellentesque. Nullam dignissim tempor elit. Nunc porta suscipit tortor, ac accumsan ipsum faucibus sed. Pellentesque feugiat eu elit in sollicitudin. Integer sit amet dictum libero. In ac dignissim quam. Quisque volutpat enim ac ex rhoncus, eget hendrerit dui sollicitudin. Pellentesque porta accumsan imperdiet. Quisque at orci fringilla, commodo mauris quis, pellentesque purus. Morbi ultrices metus in metus sagittis, a suscipit mi cursus. Pellentesque vel lectus ipsum. Vivamus consequat est at dui eleifend commodo. Mauris ut sodales quam.
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue justo vel arcu egestas bibendum. Suspendisse laoreet lacinia nisl in pellentesque. Nullam dignissim tempor elit. Nunc porta suscipit tortor, ac accumsan ipsum faucibus sed. Pellentesque feugiat eu elit in sollicitudin. Integer sit amet dictum libero. In ac dignissim quam. Quisque volutpat enim ac ex rhoncus, eget hendrerit dui sollicitudin. Pellentesque porta accumsan imperdiet. Quisque at orci fringilla, commodo mauris quis, pellentesque purus. Morbi ultrices metus in metus sagittis, a suscipit mi cursus. Pellentesque vel lectus ipsum. Vivamus consequat est at dui eleifend commodo. Mauris ut sodales quam.
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