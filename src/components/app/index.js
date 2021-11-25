import 'bootstrap/scss/bootstrap.scss';
import '../../styles/App.scss';
import React from 'react';
import Landing from '../landing'
import Welcome from '../welcome';
import About from '../about';
import Footer from '../footer'

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Landing/>
                <Welcome/>
                <About/>
                <Footer/>
            </div>
        )
    }
}


export default App;