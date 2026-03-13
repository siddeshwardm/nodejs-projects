#!/usr/bin/env node

const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const fetchMovies = require("./tmdb");

const argv = yargs(hideBin(process.argv))
    .option("search", {
        alias: "s",
        describe: "Search movies",
        type: "string",
        demandOption: true,
    })
    .parse();

async function main() {
    try {
        const movies = await fetchMovies(argv.search);

        console.log(`\nSearch Results for "${argv.search}":\n`);

        movies.forEach((movie, index) => {
            console.log(`${index + 1}. ${movie.Title} (${movie.Year})`);
        });

        console.log("");
    } catch (error) {
        console.error("Error:", error.message);
    }
}

main();