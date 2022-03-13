import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "../../styles/Accomodations.scss";

class Accomodations extends React.Component {
  render() {
    return (
      <section id="accomodations">
        <Container fluid className="accomodations-bgrnd" >
          <div className="accomodations-page">
            <Row className="accomodations-msg">
              <Row>
                <p className="hdr-msg">
                  accomodations
                </p>
              </Row>
              <p className='inquire-header'>Reserved Blocks - Inquire About The Larson Wedding</p>
              <Row className="reserved-txt">
                <Col className='reserved-item'>
                  <p className="acm-header">
                    Best Western McMinnville Inn
                  </p>
                  <a href="tel:503-472-4900">
                    (503) 472-4900
                  </a>
                </Col>
                <Col className='reserved-item'>
                  <p className="acm-header">
                    Red Lion Inn & Suites McMinnville
                  </p>
                  <a href="tel:503-472-1500">
                    (503) 472-1500
                  </a>
                </Col>
                <Col className='reserved-item'>
                  <p className="acm-header">
                    Comfort Inn & Suites
                  </p>
                  <a href="tel:503-472-1700">
                    (503) 472-1700
                  </a>
                </Col>
              </Row>
              <Row className="accomodations-txt">
                <p className="oacm-header">
                  Other Accomodations
                </p>
                <p className="oacm-txt">
                  Atticus Hotel
                </p>
                <p className="oacm-txt">
                  McMenamin's Hotel Oregon
                </p>
                <p className="oacm-txt">
                  McMinnville Inn
                </p>
                <p className="oacm-txt">
                  Douglas On Third
                </p>
                <p className="oacm-txt">
                  Old Stone Village RV Park
                </p>
                <p className="oacm-txt">
                  Valleys Edge RV Park
                </p>
              </Row>
            </Row>
            <hr className="ln-brk"/>
            <Row className="accomodations-msg">
              <Row>
                <p className="hdr-msg">
                  things to do
                </p>
              </Row>
              <Row className="ttd-block">
                <Col className='reserved-item'>
                  <p className="ttd-header">
                    Upscale Dining
                  </p>
                  <p className='ttd-item'>The Barberry</p>
                  <p className='ttd-item'>Bistro Maison</p>
                  <p className='ttd-item'>La Rambla</p>
                  <p className='ttd-item'>Nick's Italian Cafe</p>
                  <p className='ttd-item'>Thistle</p>
                  <p className='ttd-item'>Bistro Maison</p>
                  <p></p>
                  <p className="ttd-header">
                    Casual Dining
                  </p>
                  <p className='ttd-item'>Golden Valley Brewery and Restaurant</p>
                  <p className='ttd-item'>Pura Vida Cocina</p>
                  <p className='ttd-item'>1882 Grille</p>
                  <p className='ttd-item'>Community Plate</p>
                  <p className='ttd-item'>Two Dogs Taphouse</p>
                </Col>
                <Col className='reserved-item'>
                  <p className="ttd-header">
                    Bars
                  </p>
                  <p className='ttd-item'>Conservatory Bar</p>
                  <p className='ttd-item'>The Oak</p>
                  <p className='ttd-item'>The Bitter Monk</p>
                  <p className='ttd-item'>Jae's Landing</p>
                  <p className='ttd-item'>Blue Moon Lounge</p>
                  <p className='ttd-item'>Mac Taps</p>
                  <p className='ttd-item'>Growlers Tap Station</p>
                  <p className='ttd-item'>Slake House</p>
                </Col>
                <Col className='reserved-item'>
                  <p className="ttd-header">
                    Wineries
                  </p>
                  <p className='ttd-item'>Bailey Family Wines</p>
                  <p className='ttd-item'>Yamhill Valley Vineyards</p>
                  <p className='ttd-item'>Coeur De Terre Vineyard</p>
                  <p className='ttd-item'>Maysara Winery</p>
                  <p></p>
                  <p className="ttd-header">
                    Tasting Rooms
                  </p>
                  <p className='ttd-item'>R Stuart & Co.</p>
                  <p className='ttd-item'>Troon Vineyard</p>
                  <p className='ttd-item'>Martin Woods Winery</p>
                  <p className='ttd-item'>Chris James Cellars</p>
                  <p className='ttd-item'>Pinot Vista Tasting Lounge</p>
                  <p className='ttd-item'>Terra Vina Wines</p>
                  <p className='ttd-item'>HiFi Wine Bar</p>
                </Col>
              </Row>
            </Row>
            <hr className="ln-brk"/>
          </div>
        </Container>
      </section>
    );
  }
}

export default Accomodations;