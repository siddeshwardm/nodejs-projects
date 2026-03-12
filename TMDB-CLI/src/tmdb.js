const axios = require("axios");
require("dotenv").config();

const API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3/movie";

async function fetchMovies(type) {
    let endpoint = "";

    switch (type) {
        case "playing":
            endpoint = "now_playing";
            break;

        case "popular":
            endpoint = "popular";
            break;

        case "top":
            endpoint = "top_rated";
            break;

        case "upcoming":
            endpoint = "upcoming";
            break;

        default:
            throw new Error("Invalid movie type");
    }

    try {
        const response = await axios.get(
            `${BASE_URL}/${endpoint}?api_key=${API_KEY}`
        );

        return response.data.results;
    } catch (error) {
        throw new Error("Failed to fetch movies from TMDB");
    }
}

module.exports = fetchMovies;