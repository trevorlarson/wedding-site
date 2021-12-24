import 'bootstrap/scss/bootstrap.scss';
import '../../styles/App.scss';
import { Helmet } from 'react-helmet'
import React from 'react';
import Landing from '../landing'
import Welcome from '../welcome';
import About from '../about';
import Footer from '../footer'
import Accomodations from '../Accomodations';
import Schedule from '../Schedule';
import Rsvp from '../rsvp';
import Photos from '../photos';

const TITLE = 'The Larson Wedding'
class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Helmet>
                    <title>{ TITLE }</title>
                </Helmet>
                <Landing/>
                <Photos/>
                {/* <Welcome/> */}
                <About/>
                <Accomodations/>
                <Schedule/>
                <Rsvp/>
                <Footer/>
            </div>
        )
    }
}


export default App;