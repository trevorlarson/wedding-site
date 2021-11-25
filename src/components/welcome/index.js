import React from 'react';
import { Container, Row } from 'react-bootstrap';
import "../../styles/Welcome.scss";

class Welcome extends React.Component {
  render() {
    return (
      <div>
          <Container fluid className="welcome-bgrnd" >
                <Container className="welcome-msg">
                    <Row className="hdr-msg">
                        <p>
                            welcome
                        </p>
                    </Row>
                    <Row className="welcome-spacing"/>
                    <Row className="welcome-txt">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue justo vel arcu egestas bibendum. Suspendisse laoreet lacinia nisl in pellentesque. Nullam dignissim tempor elit. Nunc porta suscipit tortor, ac accumsan ipsum faucibus sed. Pellentesque feugiat eu elit in sollicitudin. Integer sit amet dictum libero. In ac dignissim quam. Quisque volutpat enim ac ex rhoncus, eget hendrerit dui sollicitudin. Pellentesque porta accumsan imperdiet. Quisque at orci fringilla, commodo mauris quis, pellentesque purus. Morbi ultrices metus in metus sagittis, a suscipit mi cursus. Pellentesque vel lectus ipsum. Vivamus consequat est at dui eleifend commodo. Mauris ut sodales quam.
                        </p>
                    </Row>
                </Container>
            </Container>
      </div>
    );
  }
}  

export default Welcome;