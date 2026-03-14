# 🔗 URL Shortener

A simple and efficient URL shortening service built with **Node.js** and **Express**. It generates short, unique codes for long URLs and provides full CRUD operations along with access statistics tracking.

## ✨ Features

- **Shorten URLs** — Generate a unique 6-character short code for any URL using `nanoid`.
- **Retrieve URLs** — Look up the original URL by its short code.
- **Update URLs** — Modify the destination URL of an existing short code.
- **Delete URLs** — Remove a shortened URL entry.
- **Access Statistics** — Track how many times a short URL has been accessed.

## 🛠️ Tech Stack

| Technology | Purpose            |
|------------|--------------------|
| Node.js    | Runtime            |
| Express 5  | Web framework      |
| nanoid     | Short code generation |
| cors       | Cross-origin support |
| dotenv     | Environment config |
| nodemon    | Dev auto-restart   |

## 📁 Project Structure

```
url-shortner/
├── server.js                  # Entry point — sets up Express app
├── routes/
│   └── urlRoutes.js           # Route definitions for /shorten
├── controllers/
│   └── urlController.js       # Request handlers (CRUD + stats)
├── models/
│   └── urlStore.js            # In-memory URL data store
├── utils/
│   └── generateCode.js        # Short code generator using nanoid
├── package.json
├── .gitignore
└── readme.md
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd url-shortner

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
```

### Running the Server

```bash
# Development (with auto-reload)
npm run dev

# Production
npm start
```

The server will start on `http://localhost:5000`.

## 📡 API Endpoints

All endpoints are prefixed with `/shorten`.

### Create Short URL

```
POST /shorten
```

**Request Body:**

```json
{
  "url": "https://www.example.com/some/very/long/url"
}
```

**Response:** `201 Created`

```json
{
  "id": 1,
  "url": "https://www.example.com/some/very/long/url",
  "shortCode": "abc123",
  "createdAt": "2026-03-14T12:00:00.000Z",
  "updatedAt": "2026-03-14T12:00:00.000Z",
  "accessCount": 0
}
```

---

### Retrieve Original URL

```
GET /shorten/:shortCode
```

**Response:** `200 OK` — Returns the URL object and increments `accessCount`.

---

### Update URL

```
PUT /shorten/:shortCode
```

**Request Body:**

```json
{
  "url": "https://www.example.com/updated-url"
}
```

**Response:** `200 OK` — Returns the updated URL object.

---

### Delete URL

```
DELETE /shorten/:shortCode
```

**Response:** `204 No Content`

---

### Get URL Statistics

```
GET /shorten/:shortCode/stats
```

**Response:** `200 OK`

```json
{
  "id": 1,
  "url": "https://www.example.com/some/very/long/url",
  "shortCode": "abc123",
  "createdAt": "2026-03-14T12:00:00.000Z",
  "updatedAt": "2026-03-14T12:00:00.000Z",
  "accessCount": 5
}
```

## ⚠️ Error Responses

| Status Code | Description                          |
|-------------|--------------------------------------|
| `400`       | Missing required `url` in request body |
| `404`       | Short code not found                 |

## 📌 Notes

- The URL store is **in-memory**, meaning all data is lost when the server restarts. For persistence, consider integrating a database like MongoDB or PostgreSQL.
- Short codes are **6 characters** long, generated via `nanoid`.


