import 'bootstrap/scss/bootstrap.scss';
import '../../styles/App.scss';
import { Helmet } from 'react-helmet'
import React from 'react';
import * as ROUTES from '../../constants/routes.js';
import Landing from '../landing'
import Welcome from '../welcome';
import About from '../about';
import Footer from '../footer'
import Accomodations from '../Accomodations';
import Schedule from '../Schedule';
import Rsvp from '../rsvp';
import Photos from '../photos';
import Navigation from '../navigation';
import { Route, BrowserRouter as Router } from 'react-router-dom';

const TITLE = 'The Larson Wedding'
class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Helmet>
                        <title>{TITLE}</title>
                    </Helmet>
                    <Navigation />
                    <Route
                        path={ROUTES.LANDING}
                        component={Landing}
                    />
                    <Photos />
                    <Route
                        path={ROUTES.ABOUT}
                        component={About}
                    />
                    <Route
                        path={ROUTES.ACCOMODATIONS}
                        component={Accomodations}
                    />
                    <Route
                        path={ROUTES.SCHEDULE}
                        component={Schedule}
                    />
                    <Route
                        path={ROUTES.RSVP}
                        component={Rsvp}
                    />
                    <Footer />
                </Router>
            </div>
        )
    }
}


export default App;