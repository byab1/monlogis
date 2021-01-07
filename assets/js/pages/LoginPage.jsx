import React from 'react';

const LoginPage = (props) => {
    return ( 
    <>

    {/* TITRE DE AGE */}
    <div className="page-title page-main-section parallaxie">
        <div className="container padding-bottom-top-120 text-uppercase text-center">
            <div className="main-title">
            <h1>Se connecter & S'inscrire</h1>
            <h5>10 années d'expériences !</h5>
            <div className="line_4"></div>
            <div className="line_5"></div>
            <div className="line_6"></div>
            <a href="index_1.html">accueil</a><span><i className="fa fa-angle-double-right" aria-hidden="true"></i></span><a href="login.html">Se connecter & S'inscrire</a> 
            </div>
        </div>
    </div>
    {/* FIN TITRE DE PAGE */}

    {/* FORM LOGIN */}
    <section id="login" className="padding">
        <div className="container">
            <div className="row">
            <div className="col-md-12 text-center">
                <div className="profile-login">
                <div className="login_detail">
                    {/* Nav tabs */}
                    <ul className="nav nav-tabs" role="tablist">
                    <li role="presentation" className="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Se connecter</a></li>
                    <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">S'inscrire</a></li>
                    </ul>
                    {/* Tab panes */}
                    <div className="tab-content padding_b40 padding_t40">
                    <div role="tabpanel" className="tab-pane fade in active" id="home">
                        <h2>Welcome Back!</h2>
                        <div className="agent-p-form">
                        <div className="row">
                            <form className="callus">
                            <div className="col-md-12">
                                <div className="single-query">
                                <input type="text" className="keyword-input" placeholder="username"/>
                                </div>
                                <div className="single-query">
                                <input type="text" className="keyword-input" placeholder="Email Address"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="search-form-group white">
                                    <div className="check-box-2"><i><input type="checkbox" name="check-box"/></i></div>
                                    <span>Remember Me</span>
                                </div>
                                </div>
                            <div className="col-md-6 text-right">
                                <a href="#" className="lost-pass">Mot de passe oublié ?</a>
                                </div>
                            
                            <div className="col-md-12 col-sm-12 col-xs-12 text-center">
                                <div className="query-submit-button">
                                <button type="submit" className="btn_fill">Connexion</button>
                                </div>
                            </div>
                            </form>
                        </div>
                        </div>
                    </div>
                    <div role="tabpanel" className="tab-pane fade" id="profile">
                        <h2>S'inscrire gratuitement</h2>
                        <div className="agent-p-form">
                        <div className="row">
                            <form className="callus">
                            <div className="col-md-12">
                                <div className="single-query">
                                <input type="text" className="keyword-input" placeholder="username" required/>
                                </div>
                                <div className="single-query">
                                <input type="text" className="keyword-input" placeholder="Email Address"/>
                                </div>
                                <div className="single-query">
                                <input type="password" className="keyword-input" placeholder="Password"/>
                                </div>
                            </div>
                            
                            <div className="col-md-12  padding_b20">
                                <div className="single-query">
                                <input type="password" className="keyword-input" placeholder="Confirm  Password" readonly/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="search-form-group white">
                                    <div className="check-box-2"><i><input type="checkbox" name="check-box"/></i></div>
                                    <span>Recevoir notre Newsletter</span>
                                </div>
                                </div>
                            
                            <div className="col-md-12 col-sm-12 col-xs-12 text-center">
                                <div className="query-submit-button">
                                <button type="submit" className="btn_fill">Créer un compte</button>
                                </div>
                            </div>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </section>
    {/* FIN FORM */}
    </> );
}
 
export default LoginPage;