import React from 'react';
import { Container, Image , Carousel} from 'react-bootstrap';
import "../../styles/Photos.scss";
import carousel1 from '../../resources/carousel/carousel1.jpeg'
import carousel2 from '../../resources/carousel/carousel2.jpeg'
import carousel3 from '../../resources/carousel/carousel3.jpeg'
import carousel4 from '../../resources/carousel/carousel4.jpeg'
import carousel5 from '../../resources/carousel/carousel5.jpeg'
import carousel6 from '../../resources/carousel/carousel6.jpeg'
import carousel7 from '../../resources/carousel/carousel7.jpeg'
import carousel8 from '../../resources/carousel/carousel9.jpeg'
import carousel9 from '../../resources/carousel/carousel9.jpeg'

class Photos extends React.Component {
  constructor() {
    super()
    this.state = {
      c1_interval: 2000,
      c2_interval: 4000,
      c3_interval: 6000
    }

    this.updateC1Interval = this.updateC1Interval.bind(this);
    this.updateC2Interval = this.updateC2Interval.bind(this);
    this.updateC3Interval = this.updateC3Interval.bind(this);
  }
  
  updateC1Interval(eventKey, direction) {
    console.log("eventKey: " + eventKey);
    this.setState({c1_interval: 6000})
  }

  updateC2Interval(eventKey, direction) {
    console.log("eventKey: " + eventKey);
    this.setState({c2_interval: 6000})
  }

  updateC3Interval(eventKey, direction) {
    console.log("eventKey: " + eventKey);
    this.setState({c3_interval: 6000})
  }

  render() {
    return (
      <div>
          <Container fluid className="photos-bgrnd">
            <Container fluid className="outer-page">
              <Container fluid className="photos-page">
                <Container className="photos-crsl">
                  <Carousel controls={false} 
                            interval={6000} 
                            onSlide={() => {this.setState({c1_interval: 6000});}} 
                            pause={false} 
                            indicators={false}>
                    <Carousel.Item interval={this.state.c1_interval}>
                      <Image className="sbs-image w-100"
                              src={carousel1}
                          />
                    </Carousel.Item>
                    <Carousel.Item>
                      <Image className="sbs-image w-100"
                              src={carousel2}
                          />
                    </Carousel.Item>
                    <Carousel.Item>
                      <Image className="sbs-image w-100"
                              src={carousel5}
                          />
                    </Carousel.Item>
                  </Carousel>
                </Container>
                <Container className="photos-crsl">
                  <Carousel controls={false} 
                            interval={6000} 
                            onSlide={() => {this.setState({c2_interval: 6000});}} 
                            pause={false} 
                            indicators={false}>
                    <Carousel.Item interval={this.state.c2_interval}>
                      <Image className="sbs-image w-100"
                              src={carousel4}
                          />
                    </Carousel.Item>
                    <Carousel.Item>
                      <Image className="sbs-image w-100"
                              src={carousel3}
                          />
                    </Carousel.Item>
                    <Carousel.Item>
                      <Image className="sbs-image w-100"
                              src={carousel6}
                          />
                    </Carousel.Item>
                  </Carousel>
                </Container>
                <Container className="photos-crsl">
                  <Carousel controls={false} 
                            interval={6000} 
                            onSlide={() => {this.setState({c3_interval: 6000});}} 
                            pause={false} 
                            indicators={false}>
                    <Carousel.Item interval={this.state.c3_interval}>
                      <Image className="sbs-image w-100"
                              src={carousel7}
                          />
                    </Carousel.Item>
                    <Carousel.Item>
                      <Image className="sbs-image w-100"
                              src={carousel8}
                          />
                    </Carousel.Item>
                    <Carousel.Item>
                      <Image className="sbs-image w-100"
                              src={carousel9}
                          />
                    </Carousel.Item>
                  </Carousel>
                </Container>
              </Container>
            </Container>
          </Container>
      </div>
    );
  }
}  

export default Photos;