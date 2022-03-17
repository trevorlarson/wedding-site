import React from 'react';
import { Container, Image } from 'react-bootstrap';
import "../../styles/Party.scss";
import party_sample from '../../resources/party-sample.jpg'
import party_erik from '../../resources/party-erik.jpeg'
import party_josh from '../../resources/party-josh.jpg'
import party_shane from '../../resources/party-shane.jpg'
import party_reis from '../../resources/party-reis.jpg'
import party_antoine from '../../resources/party-antoine.jpg'
import party_marcus from '../../resources/party-marcus.jpg'
import party_ben from '../../resources/party-ben.jpg'
import party_brenden from '../../resources/party-brenden.jpg'
import party_jake from '../../resources/party-jake.jpg'
import party_eric from '../../resources/party-eric.jpg'
import party_blake from '../../resources/party-blake.jpg'
import party_tim from '../../resources/party-tim.jpg'
import party_alison from '../../resources/party-alison.jpg'
import party_ashlee from '../../resources/party-ashlee.jpg'
import party_taylor from '../../resources/party-taylor.jpg'
import party_sara from '../../resources/party-sara.jpg'
import party_mckenzie from '../../resources/party-mckenzie.jpg'
import party_molly from '../../resources/party-molly.jpg'
import party_courtney from '../../resources/party-courtney.jpg'
import party_meagan from '../../resources/party-meagan.jpg'
import party_kenzie from '../../resources/party-kenzie.jpg'
import party_shelby from '../../resources/party-shelby.jpg'
import party_sabrina from '../../resources/party-sabrina.jpg'
import party_bre from '../../resources/party-bre.jpg'

class Party extends React.Component {
  render() {
    return (
      <section id='wedding-party'>
          <Container fluid className="party-bgrnd" >
            <h1 className='party-title'>
              the party
            </h1>
            <hr className="ln-brk"/>
            <h2 className='party-heading-hers'>
              hers
            </h2>
            <Container className="party-grid">
              <div className='party-box'>
                <Image className="party-img" src={party_meagan}/>
                <p className='party-name'>Meagan Pavlina</p>
              </div>
              <div className='party-box'>
                <Image className="party-img" src={party_bre}/>
                <p className='party-name'>Breanna Fee</p>
              </div>
              <div className='party-box'>
                <Image className="party-img" src={party_shelby}/>
                <p className='party-name'>Shelby Hitchcock</p>
              </div>
              <div className='party-box'>
                <Image className="party-img" src={party_sabrina}/>
                <p className='party-name'>Sabrina Larson</p>
              </div>
              <div className='party-box'>
                <Image className="party-img" src={party_courtney}/>
                <p className='party-name'>Courtney Cahill</p>
              </div>
              <div className='party-box'>
                <Image className="party-img" src={party_ashlee}/>
                <p className='party-name'>Ashlee Phillips</p>
              </div>
              <div className='party-box'>
                <Image className="party-img" src={party_kenzie}/>
                <p className='party-name'>Kenzie Johnson</p>
              </div>
              <div className='party-box'>
                <Image className="party-img" src={party_molly}/>
                <p className='party-name'>Molly Hughes</p>
              </div>
              <div className='party-box'>
                <Image className="party-img" src={party_mckenzie}/>
                <p className='party-name'>McKenzie Conte</p>
              </div>
              <div className='party-box'>
                <Image className="party-img" src={party_alison}/>
                <p className='party-name'>Alison Jones</p>
              </div>
              <div className='party-box'>
                <Image className="party-img" src={party_sara}/>
                <p className='party-name'>Sara Crauer</p>
              </div>
              <div className='party-box'>
                <Image className="party-img" src={party_taylor}/>
                <p className='party-name'>Taylor Studinszki</p>
              </div>
            </Container>
            <h2 className='party-heading-his'>
              his
            </h2>
            <Container className="party-grid">
              <div className='party-box'>
                <Image className="party-img" src={party_erik}/>
                <p className='party-name'>Erik Miletich</p>
              </div>
              <div className='party-box'>
                <Image className="party-img" src={party_brenden}/>
                <p className='party-name'>Brenden Larson</p>
              </div>
              <div className='party-box'>
                <Image className="party-img" src={party_jake}/>
                <p className='party-name'>Jake Staniszewski</p>
              </div>
              <div className='party-box'>
                <Image className="party-img" src={party_josh}/>
                <p className='party-name'>Josh Miller</p>
              </div>
              <div className='party-box'>
                <Image className="party-img" src={party_shane}/>
                <p className='party-name'>Shane Hopkins</p>
              </div>
              <div className='party-box'>
                <Image className="party-img" src={party_antoine}/>
                <p className='party-name'>Antoine Signoretty</p>
              </div>
              <div className='party-box'>
                <Image className="party-img" src={party_eric}/>
                <p className='party-name'>Eric Bjkerkestrand</p>
              </div>
              <div className='party-box'>
                <Image className="party-img" src={party_reis}/>
                <p className='party-name'>Reis Warman</p>
              </div>
              <div className='party-box'>
                <Image className="party-img" src={party_ben}/>
                <p className='party-name'>Ben Simek</p>
              </div>
              <div className='party-box'>
                <Image className="party-img" src={party_blake}/>
                <p className='party-name'>Blake Brunsch</p>
              </div>
              <div className='party-box'>
                <Image className="party-img" src={party_marcus}/>
                <p className='party-name'>Marcus Konopaski</p>
              </div>
              <div className='party-box'>
                <Image className="party-img" src={party_tim}/>
                <p className='party-name'>Tim Wilson</p>
              </div>
            </Container>
          </Container>
      </section>
    );
  }
}  

export default Party;