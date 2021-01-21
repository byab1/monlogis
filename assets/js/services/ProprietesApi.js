import Axios from 'axios';
import { PROPRIETES_API } from './config';


function findAll(){
    return Axios
        .get(PROPRIETES_API)
        .then(response => response.data['hydra:member']);
}
function find(id){
    return Axios
        .get(PROPRIETES_API, "/" + id + "/details")
        .then(response => response.data);
        
}

function create(propriete){
    return Axios.post(PROPRIETES_API, propriete);
}

function update(id, propriete){
    return Axios.put(PROPRIETES_API + "/" + id, propriete);
}

export default {
    findAll,
    find,
    create,
    update
};