# Blog API

A functional RESTful API built with Node.js and Express for a blog platform, utilizing MySQL as the primary database.

## Prerequisites

- **Node.js**: Make sure you have Node installed.
- **MySQL Server**: Ensure that your local MySQL server is running.

## Installation

1. Clone this repository and navigate to the project directory:
   ```bash
   cd blog_api
   ```
2. Install dependencies via npm:
   ```bash
   npm install
   ```

## Environment Variables

Create a `.env` file in the root directory (you can use `.env.example` as a template if one exists) and configure the following required variables:

```env
# Database configuration
DB_HOST=YOUR_HOST
DB_USER=YOUR_ROOT
DB_PASSWORD=YOUR_PASSWORD
DB_NAME=YOUR_DB_NAME

# Server configuration
PORT=3001
```

## Running the Project

To start the server in development mode (with `nodemon` hot reloading):
```bash
npm run dev
```

To start the server manually:
```bash
node server.js
```

Once running, the API will be available at `http://localhost:<PORT>/api`.

Check all your API's using Postman : 
(http://localhost:<PORT>/api/posts) - Example API to get all the posts
