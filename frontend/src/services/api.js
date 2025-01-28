const apiKey ="2cbd5746dd5efe4142777ea16aeaf204";
const url = "https://api.themoviedb.org/3";

export const getPopularMovies = async ()=> {
    const response = await fetch(`${url}/movie/popular?api_key=${apiKey}`);
    const data = await response.json();
    return data.results;
}

export const searchMovies = async (query)=> {
    const response = await fetch(
        `${url}/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`
        );
    const data = await response.json();
    return data.results;
}