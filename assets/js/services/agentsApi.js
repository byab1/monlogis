import Axios from 'axios';
import { AGENTS_API } from './config';

function findAll(){
    return Axios
        .get(AGENTS_API)
        .then(response => response.data['hydra:member']);
}

function find(id){
    return Axios
        .get(`http://localhost:8000/api/agents/${id}/profile-agent`)
        .then(response => response.data);
}

export default {
    find,
    findAll
};