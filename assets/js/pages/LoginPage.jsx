import React, { useContext, useState } from 'react';
import AuthApi from '../services/authApi';
import AuthContext from '../contexts/AuthContext';

const LoginPage = ({ history }) => {

    const { setIsAuthenticated } = useContext(AuthContext);

    const [credentials, setCredentials]= useState({
        username: "",
        password: ""
    }); 

    const [error, setError]= useState("");

    //Gestion des champs
    const handleChange = ({currentTarget}) => {
        const { value, name } = currentTarget;
        setCredentials({ ...credentials, [name]: value});
    };

    //Gestion du submit
    const handleSubmit = async event => {
        event.preventDefault();
        try {
            await AuthApi.authenticate(credentials);
            setError("");
            setIsAuthenticated(true);
            history.replace("/");

        //    toast.success("Vous êtes désormais connecté !");
        } catch (error) {
            setError("Ces informations ne correspondent à aucun utilisateur");
            // toast.error("Une erreur est survenue");
        }
    }

    return ( 
    <>

    {/* TITRE DE AGE */}
    <div className="page-title page-main-section parallaxie">
        <div className="container padding-bottom-top-120 text-uppercase text-center">
            <div className="main-title">
            <h1>Se connecter</h1>
            <h5>10 années d'expériences !</h5>
            <div className="line_4"></div>
            <div className="line_5"></div>
            <div className="line_6"></div>
            <a href="index_1.html">accueil</a><span><i className="fa fa-angle-double-right" aria-hidden="true"></i></span><a href="login.html">Se connecter</a> 
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
                            <div className="col-md-12 col-sm-12 col-xs-12 text-center">
                                <div>
                                    <button type="text" className="connecteHover">Se connecter</button>
                                </div>
                            </div>
                            <div className="tab-content padding_b40 padding_t40">
                                <div role="tabpanel" className="tab-pane fade in active" id="home">
                                    <h2>Welcome Back!</h2>
                                    <div className="agent-p-form">
                                        <div className="row">
                                            <form className="callus" onSubmit={handleSubmit}>
                                                <div className="col-md-12">
                                                    <div className="single-query">
                                                    <input value={credentials.username} onChange={handleChange} error={error} type="email" name="username" className={"keyword-input" + (error && " is-invalid")} placeholder="Username"/>
                                                    {error && <p className="invalid-feedback errorLogin">{error}</p>}
                                                    </div>
                                                    <div className="single-query">
                                                    <input value={credentials.password} onChange={handleChange} type="password" name="password" className="keyword-input" placeholder="Mot de passe"/>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* FIN FORM */}

    {/* 2ere Formulaire */}
    {/* <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="username">Adresse email</label>
            <input
                value={credentials.username}
                onChange={handleChange}
                type="email"
                placeholder="Adresse email de connexion"
                name="username"
                id="username"
                className={"form-control" + (error && " is-invalid")}
                />
                {error && <p className="invalid-feedback">{error}</p>}
        </div>
        <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <input
                value={credentials.password}
                onChange={handleChange}
                type="password"
                placeholder="Mot de passse"
                name="password"
                id="password"
                className="form-control"
                />
        </div>
        <div className="form-group">
            <button type="submit" className="btn btn-success">Je me connecte</button>
        </div>
    </form> */}
    </> );
}
 
export default LoginPage;