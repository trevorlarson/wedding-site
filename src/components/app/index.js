import 'bootstrap/scss/bootstrap.scss';
import '../../styles/App.scss';
import { Helmet } from 'react-helmet'
import React from 'react';
import Landing from '../landing'
import Welcome from '../welcome';
import About from '../about';
import Footer from '../footer'

const TITLE = 'The Larson Wedding'
class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Helmet>
                    <title>{ TITLE }</title>
                </Helmet>
                <Landing/>
                <Welcome/>
                <About/>
                <Footer/>
            </div>
        )
    }
}


export default App;