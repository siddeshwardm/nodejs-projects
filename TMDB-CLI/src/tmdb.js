const axios = require("axios");
require("dotenv").config();

const API_KEY = process.env.OMDB_API_KEY;
const BASE_URL = "https://www.omdbapi.com/";

async function fetchMovies(search) {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                apikey: API_KEY,
                s: search
            }
        });

        if (response.data.Response === "False") {
            throw new Error(response.data.Error);
        }

        return response.data.Search;
    } catch (error) {
        throw new Error("Failed to fetch movies");
    }
}

module.exports = fetchMovies;