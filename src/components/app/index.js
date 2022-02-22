import 'bootstrap/scss/bootstrap.scss';
import '../../styles/App.scss';
import { Helmet } from 'react-helmet'
import React from 'react';
import Landing from '../landing'
import About from '../about';
import Footer from '../footer'
import Accomodations from '../Accomodations';
import Schedule from '../Schedule';
import Rsvp from '../rsvp';
import Party from '../party';
import Photos from '../photos';
import Navigation from '../navigation';
import { Redirect, Route } from 'react-router-dom';

const TITLE = 'The Larson Wedding'
class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Helmet>
                    <title>{TITLE}</title>
                </Helmet>
                <Navigation />
                <Landing />
                <Photos />
                <About />
                <Accomodations />
                <Schedule />
                <Rsvp />
                <Party />
                <Footer />
                <Route render={() => <Redirect to="/" />} />
            </div>
        )
    }
}


export default App;