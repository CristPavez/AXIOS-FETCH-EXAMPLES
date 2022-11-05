import axios from "axios";

let url = "https://pokeapi.co/api/v2/pokemon/";

async function axioscall_node(url) {
    let data = axios.get(url).then(function(response) {
        console.log(response.data.results[0].url);
    });
    return data;
}

axioscall_node(url);