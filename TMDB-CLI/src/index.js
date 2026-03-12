#!/usr/bin/env node

const yargs = require("yargs");
const fetchMovies = require("./tmdb");

const argv = yargs.option("type", {
    alias: "t",
    describe: "Type of movies",
    choices: ["playing", "popular", "top", "upcoming"],
    demandOption: true,
}).argv;

async function main() {
    try {
        const movies = await fetchMovies(argv.type);

        console.log(`\nMovies (${argv.type}):\n`);

        movies.slice(0, 10).forEach((movie, index) => {
            console.log(
                `${index + 1}. ${movie.title} ⭐ ${movie.vote_average} (Release: ${movie.release_date})`
            );
        });

        console.log("\n");
    } catch (error) {
        console.error("Error:", error.message);
    }
}

main();