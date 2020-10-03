
export const endpoints = {
    latestMovies: (apiKey) => `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`,
    movieDetails: (movieId, apiKey) => `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`,
    search: (apiKey, queryString) => `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&include_adult=false&query=${queryString}`,
    genres: (apiKey) => `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`
}