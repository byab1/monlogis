import Axios from "axios";


function findAll(){
    return Axios
        .get("http://localhost:8000/api/agences")
        .then(response => response.data['hydra:member']);
}

export default {
    findAll
};