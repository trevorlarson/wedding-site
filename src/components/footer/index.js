import React from 'react';
import "../../styles/Footer.scss";
import {Container, Row} from 'react-bootstrap';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-container">
        <Container>
          <Row className="copy-txt">
            <p>
              Copyright © 2021 Trevor Larson
            </p>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Footer;