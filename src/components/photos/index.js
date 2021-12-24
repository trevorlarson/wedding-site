import React from 'react';
import { Container, Image , Carousel, CarouselItem} from 'react-bootstrap';
import "../../styles/Photos.scss";
import about_left from '../../resources/about-left.jpg'
import about_right from '../../resources/about-right.jpg'

class Photos extends React.Component {
  render() {
    return (
      <div>
          <Container fluid className="photos-bgrnd">
            <Container fluid className="outer-page">
              <Container fluid className="photos-page">
                <Container className="photos-crsl">
                  <Carousel>
                    <Carousel.Item>
                      <Image className="sbs-image w-100"
                              src={about_left}
                          />
                    </Carousel.Item>
                    <Carousel.Item>
                      <Image className="sbs-image w-100"
                              src={about_right}
                          />
                    </Carousel.Item>
                  </Carousel>
                </Container>
                <Container className="photos-crsl">
                  <Carousel>
                    <Carousel.Item>
                      <Image className="sbs-image w-100"
                              src={about_left}
                          />
                    </Carousel.Item>
                    <Carousel.Item>
                      <Image className="sbs-image w-100"
                              src={about_right}
                          />
                    </Carousel.Item>
                  </Carousel>
                </Container>
                <Container className="photos-crsl">
                  <Carousel>
                    <Carousel.Item>
                      <Image className="sbs-image w-100"
                              src={about_left}
                          />
                    </Carousel.Item>
                    <Carousel.Item>
                      <Image className="sbs-image w-100"
                              src={about_right}
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