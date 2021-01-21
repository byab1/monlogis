import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import AuthContext from '../contexts/AuthContext';
import AuthApi from '../services/authApi';

const Navbar = ({ history })  => {

    const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

    const handleLogout = () => {
        AuthApi.logout();
        setIsAuthenticated(false);
        toast.info("Vous êtes désormais déconnecté !");
        history.push("/login");
    }   
    return ( <>

     {/* HEADER TOP  */}
    <div id="header-top">
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-sm-4 col-xs-12">
                    <p className="p-font-15 p-white">We are Best in Town With 40 years of Experience.</p>
                </div>
                <div className="col-md-8 col-sm-8 col-xs-12 text-right">
                    <div className="header-top-links">
                        <ul>
                            { (!isAuthenticated && ( 
                            <>
                                <li><NavLink to="/login" className="header-login"><i class="fa fa-unlock" aria-hidden="true"></i>Login</NavLink></li>
                                <li><NavLink to="/register" className="header-login">Inscription</NavLink></li>
                            </> 
                            )) || (<>
                            <li><NavLink to=""><i className="icon-heart2"></i>Favorites</NavLink></li>
                            <li className="af-line"></li>
                            <li><NavLink to="/proprietes/create"><i className="icon-icons215"></i>Submit Property</NavLink></li>
                            <li className="af-line"></li>
                            <li><NavLink to=""><i className="icon-icons215"></i>My Property</NavLink></li>&nbsp; &nbsp;
                            <li class="dropdown">
                                <button href="#." class="dropdown-toggle button-214" data-toggle="dropdown">
                                    Mon compte <i class="fa fa-angle-double-down" aria-hidden="true"></i></button>
                                <ul class="dropdown-menu">
                                    <li><NavLink className="icon-icons214" to={"/users/profile/:id"}>Mon profile</NavLink></li>
                                    <li><NavLink className="icon-icons214" to="">Mes propriétés</NavLink></li>
                                    <li><NavLink className="icon-icons214" to="/compte-agence">Créer une agence</NavLink></li>
                                    <li><NavLink className="icon-icons214" to="/compte-agent" >Créer un agent</NavLink></li>
                                    <li><NavLink onClick={handleLogout} className="header-login">
                                        <i className="icon-icons179"></i>Déconnexion</NavLink>
                                    </li>
                                </ul>
                            </li>
                            </>)}
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* #/HEADER TOP  */}

     {/* HEADER BOTTOM */}
    <div id="header-bottom">
        <div className="container">
            <div className="row">
                <div className="col-md-2 hidden-xs hidden-sm"><NavLink to="/"><img src="images/logo-white.png"
                            alt="logo" /></NavLink></div>
                <div className="col-md-10 col-sm-12 col-xs-12">
                    <div className="get-tuch text-left top20">
                        <i className="icon-telephone114"></i>
                        <ul>
                            <li>
                                <h4>Phone Number</h4>
                            </li>
                            <li>
                                <p>+1 900 234 567 - 68</p>
                            </li>
                        </ul>
                    </div>
                    <div className="get-tech-line top20"><img src="images/get-tuch-line.png" alt="line" /></div>
                    <div className="get-tuch text-left top20">
                        <i className="icon-icons74"></i>
                        <ul>
                            <li>
                                <h4>Victoria Hall,</h4>
                            </li>
                            <li>
                                <p>Idea Homes Melbourne, australia</p>
                            </li>
                        </ul>
                    </div>
                    <div className="get-tech-line top20"><img src="images/get-tuch-line.png" alt="line" /></div>
                    <div className="get-tuch text-left top20">
                        <i className=" icon-icons142"></i>
                        <ul>
                            <li>
                                <h4>Email Address</h4>
                            </li>
                            <li>
                                <p><a href="#">info@ideahomes.com</a></p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

     {/* #/HEADER BOTTOM */}

    <nav className="navbar navbar-default no-background navbar-sticky bootsnav">
        <div className="container">

            {/* Start Header Navigation */}
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                    <i className="fa fa-bars"></i>
                </button>
                <NavLink className="navbar-brand sticky_logo" to="/"><img src="images/logo-white.png" className="logo"
                        alt=""/></NavLink>
            </div>
           {/* End Header Navigation  */}
            <div className="collapse navbar-collapse nav_3 clearfix" id="navbar-menu">
                <ul className="nav navbar-nav navbar-center" data-in="fadeInDown" data-out="fadeOutUp">
                    <li>
                        <NavLink to="/" ClassName="active" className="dropdown-toggle" data-toggle="dropdown">Accueil</NavLink>
                    </li>
                    <li className="dropdown megamenu-fw">
                        <NavLink to="" activeClassName="active" className="dropdown-toggle" data-toggle="dropdown">Proprietes</NavLink>
                        <ul className="dropdown-menu megamenu-content" role="menu">
                            <li>
                                <div className="row">
                                    <div className="col-menu col-md-2">
                                        <h5 className="title">Listes des proprietes</h5>
                                        <div className="content">
                                            <ul className="menu-col">
                                                <li><NavLink to='/proprietes'>Liste des propriétés</NavLink></li>
                                                <li><NavLink href="showcase-property.html">Recherche par ville</NavLink></li>
                                                <li><NavLink href="showcase-property.html">Recherche par prix</NavLink></li>
                                                <li><NavLink href="showcase-property.html">Recherche par type</NavLink></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-menu col-md-8">
                                        <div className="row">
                                            <div id="nav_slider" className="owl-carousel">
                                                <div className="item">
                                                    <div className="image bottom15">
                                                        <img src="images/nav-slider1.jpg" alt="Featured Property"/>
                                                        <span className="nav_tag yellow text-uppercase">for rent</span>
                                                    </div>
                                                    <h4><a href="#.">Park Avenue Apartment</a></h4>
                                                    <p>Towson London, MR 21501</p>
                                                </div>
                                                <div className="item">
                                                    <div className="image bottom15">
                                                        <img src="images/nav-slider2.jpg" alt="Featured Property"/>
                                                        <span className="nav_tag yellow text-uppercase">for rent</span>
                                                    </div>
                                                    <h4><a href="#.">Park Avenue Apartment</a></h4>
                                                    <p>Towson London, MR 21501</p>
                                                </div>
                                                <div className="item">
                                                    <div className="image bottom15">
                                                        <img src="images/nav-slider3.jpg" alt="Featured Property"/>
                                                        <span className="nav_tag yellow text-uppercase">for rent</span>
                                                    </div>
                                                    <h4><a href="#.">Park Avenue Apartment</a></h4>
                                                    <p>Towson London, MR 21501</p>
                                                </div>
                                                <div className="item">
                                                    <div className="image bottom15">
                                                        <img src="images/nav-slider1.jpg" alt="Featured Property"/>
                                                        <span className="nav_tag yellow text-uppercase">for rent</span>
                                                    </div>
                                                    <h4><a href="#.">Park Avenue Apartment</a></h4>
                                                    <p>Towson London, MR 21501</p>
                                                </div>
                                                <div className="item">
                                                    <div className="image bottom15">
                                                        <img src="images/nav-slider2.jpg" alt="Featured Property"/>
                                                        <span className="nav_tag yellow text-uppercase">for rent</span>
                                                    </div>
                                                    <h4><a href="#.">Park Avenue Apartment</a></h4>
                                                    <p>Towson London, MR 21501</p>
                                                </div>
                                                <div className="item">
                                                    <div className="image bottom15">
                                                        <img src="images/nav-slider3.jpg" alt="Featured Property"/>
                                                        <span className="nav_tag yellow text-uppercase">for rent</span>
                                                    </div>
                                                    <h4><a href="#.">Park Avenue Apartment</a></h4>
                                                    <p>Towson London, MR 21501</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <NavLink to="/agences" className="dropdown-toggle" data-toggle="dropdown">Agences</NavLink>
                    </li>
                    <li>
                        <NavLink to="/agents" className="dropdown-toggle" data-toggle="dropdown">Agents</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className="dropdown-toggle" data-toggle="dropdown">contact</NavLink>
                    </li>
                    <li>
                        <NavLink to="/a_propos" className="dropdown-toggle" data-toggle="dropdown">a propos</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </> 
    );
}
 
export default Navbar;