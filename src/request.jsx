const API_KEY = "f8d3542c6d3ba44ac4e0e8bbe96a3898";

const requests = {
    fetchTreding:`/trending/all/week?api_key=${API_KEY}&language=en=US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_network=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaryMovies:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
}
export default requests;
