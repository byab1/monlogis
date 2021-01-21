import axios from 'axios';
import { USERS_API } from './config';

function register (user){
    return axios.post(USERS_API, user);
}
function userProfile(id){
    return axios
    .get(USERS_API + "/profile" + id).then(response => response.data);
}

export default {
    register,
    userProfile

};