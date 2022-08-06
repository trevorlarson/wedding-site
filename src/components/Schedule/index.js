import React from 'react';
import { Container, Row } from 'react-bootstrap';
import "../../styles/Schedule.scss";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import weddingArch from '../../resources/wedding-arch.png'
import cocktail from '../../resources/cocktail.png'
import dinner from '../../resources/romantic-dinner.png'
import cake from '../../resources/wedding-cake.png'
import dance from '../../resources/dance.png'
import party from '../../resources/party.png'
import bus from '../../resources/bus.png'

class Schedule extends React.Component {
  render() {
    return (
      <section id='schedule'>
          <Container fluid className="schedule-bgrnd" >
                <Container className="schedule-msg">
                    <Row className="hdr-msg">
                        <p>
                            schedule
                        </p>
                    </Row>
                    <VerticalTimeline>
                      <VerticalTimelineElement
                        className="vertical-timeline-element"  
                        dateClassName="timeline-date"
                        date="four o'clock"
                        iconStyle={{ background: '#fff', color: '#fff' }} 
                        icon={<img src={weddingArch}  alt="wedding arch" className='timeline-icon'/>}
                      >
                        <h3 className="vertical-timeline-element-title">Ceremony</h3>
                      </VerticalTimelineElement>
                      <VerticalTimelineElement
                        className="vertical-timeline-element"
                        dateClassName="timeline-date"
                        date="four thirty"
                        iconStyle={{ background: '#fff', color: '#fff' }} 
                        icon={<img src={cocktail}  alt="cocktail" className='timeline-icon'/>}
                      >
                        <h3 className="vertical-timeline-element-title">Cocktail Hour</h3>
                      </VerticalTimelineElement>
                      <VerticalTimelineElement
                        className="vertical-timeline-element" 
                        dateClassName="timeline-date"
                        date="five forty five"
                        iconStyle={{ background: '#fff', color: '#fff' }} 
                        icon={<img src={dinner}  alt="dinner" className='timeline-icon'/>}
                      >
                        <h3 className="vertical-timeline-element-title">Dinner</h3>
                      </VerticalTimelineElement>
                      <VerticalTimelineElement
                        className="vertical-timeline-element" 
                        dateClassName="timeline-date"
                        date="seven o'clock"
                        iconStyle={{ background: '#fff', color: '#fff' }} 
                        icon={<img src={cake}  alt="cake" className='timeline-icon'/>}
                      >
                        <h3 className="vertical-timeline-element-title">Cake Cutting</h3>
                      </VerticalTimelineElement>
                      <VerticalTimelineElement
                        className="vertical-timeline-element" 
                        dateClassName="timeline-date"
                        date="seven fifteen"
                        iconStyle={{ background: '#fff', color: '#fff' }} 
                        icon={<img src={dance}  alt="dance" className='timeline-icon'/>}
                      >
                        <h3 className="vertical-timeline-element-title">First Dance</h3>
                      </VerticalTimelineElement>
                      <VerticalTimelineElement
                        className="vertical-timeline-element" 
                        dateClassName="timeline-date"
                        date="seven thirty"
                        iconStyle={{ background: '#fff', color: '#fff' }} 
                        icon={<img src={party}  alt="party" className='timeline-icon'/>}
                      >
                        <h3 className="vertical-timeline-element-title">Party Time</h3>
                      </VerticalTimelineElement>
                      <VerticalTimelineElement
                        className="vertical-timeline-element" 
                        dateClassName="timeline-date"
                        date="ten o'clock"
                        iconStyle={{ background: '#fff', color: '#fff' }} 
                        icon={<img src={bus}  alt="bus" className='timeline-icon'/>}
                      >
                        <h3 className="vertical-timeline-element-title">Guest Transportation</h3>
                      </VerticalTimelineElement>
                    </VerticalTimeline>
                </Container>
            </Container>
      </section>
    );
  }
}  

export default Schedule;