import Axios from "axios";
import { AGENCES_API } from "./config";


function findAll(){
    return Axios
        .get(AGENCES_API)
        .then(response => response.data['hydra:member']);
}

function find(id){
    return Axios
        .get(AGENCES_API + "/profile-agence" + id)
        .then(response => response.data);
}

export default {
    findAll,
    find
};