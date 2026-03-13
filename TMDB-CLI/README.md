# TMDB-CLI

A simple Command Line Interface (CLI) application built with Node.js to fetch and display movie information from the OMDB API.

## Project Overview

This project provides a quick and easy way to search for movies directly from your terminal. It utilizes the OMDB API to retrieve basic movie details based on a search query. 

Key technologies and dependencies used in this project:
- **`axios`**: For making HTTP requests to the OMDB API to fetch movie data.
- **`dotenv`**: For securely managing environment variables, ensuring API keys are not hardcoded.
- **`yargs`**: For parsing command-line arguments and building an interactive CLI experience.

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- A free API key from [OMDB API](https://www.omdbapi.com/).

## Installation

1. Clone this repository or download the source code.
2. Open your terminal and navigate to the project directory:
   ```bash
   cd TMDB-CLI
   ```
3. Install the required project dependencies:
   ```bash
   npm install
   ```

## Configuration

The application requires an OMDB API key to fetch movie data.

1. You will find a `.env.example` file in the root directory.
2. Create a new file named `.env` in the root directory.
3. Add your OMDB API key to the `.env` file like this:
   ```env
   OMDB_API_KEY=your_api_key_here
   ```

## Usage

Run the CLI tool using Node.js by passing the `--search` (or `-s`) argument followed by the movie title you want to look up.

```bash
node src/index.js --search "The Matrix"
```

Alternatively, you can use the shorter alias:
```bash
node src/index.js -s "The Matrix"
```

### Example Output

```text
Search Results for "The Matrix":

1. The Matrix (1999)
2. The Matrix Reloaded (2003)
3. The Matrix Revolutions (2003)
4. The Matrix Resurrections (2021)
...
```
