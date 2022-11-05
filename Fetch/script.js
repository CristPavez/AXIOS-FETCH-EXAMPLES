let url = "https://pokeapi.co/api/v2/pokemon/";
let url2 = "https://pokeapi.co/a/v2/pokemon/";
async function fetchcall() {
    try {
        // Fetch
        const response = await fetch(url);
        const data = await response.json();
        let pokemon_url = data.results[0].url;
        // Fetch
        try {
            // Axios
            axios.get(pokemon_url).then(function(response2) {
                console.log(response2.data.sprites.front_default);
            });
            // Axios
        } catch (error) {
            console.log("axios " + error);
        }
    } catch (error) {
        console.log("fetch " + error);
    }
}

fetchcall();