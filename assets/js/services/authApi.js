import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { LOGIN_API } from './config';

//Deconnexion (Suppresion du token dans le localStorage et sur Axios)
function logout() {
    window.localStorage.removeItem("authToken");
    delete axios.defaults.headers["Authorization"];
}

//Authentification(requete HTTP et stockage du token dans le storage  et sur Axios)
function authenticate (credentials) {
      return axios
            .post(LOGIN_API, credentials)
            .then(response => response.data.token)
            .then(token => {
                // Je stock le token dans mon LocalStorage
                window.localStorage.setItem("authToken", token);
                //On previent Axios qu'on a une header par defaut sur toutes nos requetes HTTP
                setAxiosToken(token);

                return true;
            });
}


//Positionne le Token JWT sur Axios
function setAxiosToken(token){
    axios.defaults.headers["Authorization"] = "Bearer " + token;
}

//Mise en place lors du chargement de l'App
function setup() {
    // Voir si on a un token
    const token = window.localStorage.getItem("authToken");
    
    //Le token est encore valide ?
    if(token){
        const {exp: expiration} =  jwtDecode(token);
        if(expiration * 1000 > new Date().getTime()){
            setAxiosToken(token);
        } 
    } 
}

//Permet de savoir si on est authentifier ou pas
function isAuthenticated(){
    // Voir si on a un token
    const token = window.localStorage.getItem("authToken");

    //Le token est encore valide ?
    if (token) {

        const {exp: expiration} =  jwtDecode(token);

        if (expiration * 1000 > new Date().getTime()) {
            return true;
        } 
        return false;
    } 
    return false;
}

export default {
    authenticate,
    logout,
    setup,
    isAuthenticated
};  