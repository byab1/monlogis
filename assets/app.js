import React, { useState } from 'react';
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
import { HashRouter, Switch, Route, withRouter } from 'react-router-dom';
import HomePage from './js/pages/HomePage';
import AgencesPage from './js/pages/AgencesPage';
import AgentsPage from './js/pages/AgentsPage';
import ProprietesPage from './js/pages/ProprietesPage';
import ContactPage from './js/pages/ContactPage';
import AproposPage from './js/pages/AproposPage';
import Footer from './js/components/Footer';
import LoginPage from './js/pages/LoginPage';
import ProprietePage from './js/pages/ProprietePage';
import AuthApi from './js/services/authApi';
import RegisterPage from './js/pages/RegisterPage';
import AgencePage from './js/pages/AgencePage';
import AgentPage from './js/pages/AgentPage';
import AuthContext from './js/contexts/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserProfile from './js/pages/UserProfile';
import CompteAgence from './js/pages/CompteAgence';
import CompteAgent from './js/pages/CompteAgent';
import PrivateRoute from './js/components/PrivateRoute';
import NouvellePropriete from './js/pages/NouvellePropriete';

AuthApi.setup();


const App = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(AuthApi.isAuthenticated());
    
    const NavbarWithRouter = withRouter(Navbar);

    return (
        <>
    <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated}}>     
    <HashRouter>
        <NavbarWithRouter />
        <main>
            <Switch>
                <Route path="/proprietes/:id/details" component={ProprietePage}></Route>
                <Route path="/agents/:id/profile-agent/" component={AgentPage}></Route>
                <Route path="/agences/profile_agence/:id" component={AgencePage}></Route>
                <PrivateRoute path="/users/profile/:id" component={UserProfile}></PrivateRoute>
                <PrivateRoute path="/compte-agence" component={CompteAgence}></PrivateRoute>
                <PrivateRoute path="/compte-agent" component={CompteAgent}></PrivateRoute>
                <PrivateRoute path="/proprietes/:id" component={NouvellePropriete}></PrivateRoute>
                <Route path="/proprietes" component={ProprietesPage}></Route>
                <Route path="/contact" component={ContactPage}></Route>
                <Route path="/a_propos" component={AproposPage}></Route>
                <Route path="/agents" component={AgentsPage}></Route>
                <Route path="/agences" component={AgencesPage}></Route>
                <Route path="/register" component={RegisterPage}></Route>
                <Route path="/login" component={LoginPage}></Route>
                <Route path="/" component={HomePage}></Route>
            </Switch>
        </main>
        <Footer/>
    </HashRouter>
    <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
    </AuthContext.Provider> 
    </>
    );
}
 
export default App;

const rootElement = document.querySelector("#app");
ReactDOM.render(<App />, rootElement);
