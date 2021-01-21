import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Field from '../components/forms/Field';
import UserApi from '../services/userApi';


const RegisterPage = ({history}) => {

    const [user, setUser]= useState({
        nom: "",
        prenom: "",
        email: "",
        password: "",
        passwordConfirm: ""
    });

    const [errors, setErrors]= useState({
        nom: "",
        prenom: "",
        email: "",
        password: "",
        passwordConfirm: ""
    });

    
      //Gestion des inputs dans le formulaire
    const handleChange =  ({currentTarget}) => {
        const {name, value} = currentTarget;
        setUser({ ...user, [name]: value});
    };

    //Gestion de la soumission
    const handleSubmit = async event => {
        event.preventDefault();

        const apiErrors = {};

        if(user.password !== user.passwordConfirm){
            apiErrors.passwordConfirm =  "Mot de passe non conforme";
            setErrors(apiErrors);
            toast.error("Oups ! Il y a des erreurs dans votre formulaire");
            return;
        }
        try {
        const response = await UserApi.register(user);
        setErrors({});
        toast.success("Vous êtes désormais inscrit, vous pouvez vous connecter");
        history.replace("/login");
 
        } catch ({response}) {
            console.log(response.data);
            const {violations} = response.data;

            if(violations){
                violations.forEach(({propertyPath, message}) => {
                apiErrors[propertyPath] =  message;
                });

                setErrors(apiErrors);
            }
            toast.error("Oups ! Il y a des erreurs dans votre formulaire");
        
        }
    }

    return ( 
    <>
    {/* TITRE DE AGE */}
    <div className="page-title page-main-section parallaxie">
        <div className="container padding-bottom-top-120 text-uppercase text-center">
            <div className="main-title">
            <h1>S'inscrire</h1>
            <h5>10 années d'expériences !</h5>
            <div className="line_4"></div>
            <div className="line_5"></div>
            <div className="line_6"></div>
            <a href="index_1.html">accueil</a><span><i className="fa fa-angle-double-right" aria-hidden="true"></i></span><a href="login.html">S'inscrire</a> 
            </div>
        </div>
    </div>
    {/* FIN TITRE DE PAGE */}
     <section id="login" className="padding">
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="profile-login">
                        <div className="login_detail">
                            <div className="col-md-12 col-sm-12 col-xs-12 text-center">
                                <div>
                                    <button type="text" className="connecteHover">S'inscrire</button>
                                </div>
                            </div>
                            <div className="tab-content padding_b40 padding_t40">
                                <div role="tabpanel" className="tab-pane fade in active" id="home">
                                    <h2>Gratuitement</h2>
                                    <div className="agent-p-form">
                                        <div className="row">
                                            <form className="callus" onSubmit={handleSubmit}>

                                                <Field name="nom" placeholder="Nom" error={errors.nom} value={user.nom} onChange={handleChange} />
                                                <Field name="prenom" placeholder="Prénom" error={errors.prenom} value={user.prenom} onChange={handleChange} />
                                                <Field name="email" placeholder="Adresse Email" type="email" error={errors.email} value={user.email} onChange={handleChange} />
                                                <Field name="password" placeholder="Mot de passe" type="password" error={errors.password} value={user.password} onChange={handleChange} />
                                                <Field name="passwordConfirm" placeholder="Confirmer le mot de passe" type="password" error={errors.passwordConfirm} value={user.passwordConfirm} onChange={handleChange} />
                                                
                                                <div className="col-md-6">
                                                    <div className="search-form-group white">
                                                        <div className="check-box-2"><i><input type="checkbox" name="check-box"/></i></div>
                                                        <span>Remember Me</span>
                                                    </div>
                                                </div>

                                                <div className="col-md-6 text-right">
                                                    <Link to="/login" className="lost-pass">J'ai déjà un compte ?</Link>
                                                </div>

                                                <div className="col-md-12 col-sm-12 col-xs-12 text-center">
                                                    <div className="query-submit-button">
                                                        <button type="submit" className="btn_fill">Confirmer</button>
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
    </>);
}
 
export default RegisterPage;