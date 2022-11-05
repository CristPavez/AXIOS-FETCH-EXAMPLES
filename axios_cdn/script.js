let url = "https://pokeapi.co/api/v2/pokemon/";

async function axioscall(url) {
    axios.get(url).then(function(response) {
        console.log(response.data.results[0].url);
    });
}

axioscall(url);