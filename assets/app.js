import React from 'react';
import ReactDOM from 'react-dom';

/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

// start the Stimulus application
import './bootstrap';
import Navbar from './js/components/Navbar';
import { HashRouter, Switch, Route } from 'react-router-dom';
import HomePage from './js/pages/HomePage';
import AgencesPage from './js/pages/AgencesPage';
import AgentsPage from './js/pages/AgentsPage';
import ProprietesPage from './js/pages/ProprietesPage';
import ContactPage from './js/pages/ContactPage';
import AproposPage from './js/pages/AproposPage';
import Footer from './js/components/Footer';
import LoginPage from './js/pages/LoginPage';
import ProprietePage from './js/pages/ProprietePage';

const App = () => {
    return ( <>
    <HashRouter>
    <Navbar />
        <main>
            <Switch>
                <Route path="/proprietes/:id/details" component={ProprietePage}></Route>
                <Route path="/proprietes" component={ProprietesPage}></Route>
                <Route path="/contact" component={ContactPage}></Route>
                <Route path="/a_propos" component={AproposPage}></Route>
                <Route path="/agents" component={AgentsPage}></Route>
                <Route path="/agences" component={AgencesPage}></Route>
                <Route path="/login" component={LoginPage}></Route>
                <Route path="/" component={HomePage}></Route>
            </Switch>
        </main>
        <Footer/>
    </HashRouter>
    </> );
}
 
export default App;

const rootElement = document.querySelector("#app");
ReactDOM.render(<App />, rootElement);
