# Music Upload App

A full-stack React + Express application for uploading MP3 files, saving their metadata in MongoDB, and playing them from the browser through a playlist UI.

## Features

- Upload audio files to the server using Multer
- Store uploaded file URLs in MongoDB
- Fetch and display the current playlist in the React client
- Play uploaded songs directly in the browser with the HTML audio player
- Remove songs from the playlist and delete the underlying file from the server public folder

## Tech Stack

### Frontend

- React
- Vite
- JavaScript

### Backend

- Node.js
- Express
- MongoDB + Mongoose
- Multer

## Project Structure

```text
music-upload-app/
├── client/                 # React frontend
│   ├── src/                # UI and hooks
│   └── package.json        # Client scripts and dependencies
├── server/                 # Express backend
│   ├── controllers/        # Playlist CRUD logic
│   ├── middlewares/        # Upload middleware
│   ├── models/             # Mongoose schema
│   ├── routes/             # API routes
│   └── package.json        # Server scripts and dependencies
└── readme.md               # Project documentation
```

## Prerequisites

Before running the app, make sure you have:

- Node.js installed
- MongoDB running locally or a reachable MongoDB connection string
- A browser to use the UI

## Environment Variables

The server uses a `.env` file in the `server/` folder with values similar to:

```env
PORT=4000
MONGO_URI=mongodb://127.0.0.1:27017/musics
AUDIO_DEST=http://localhost:4000/public/
```

The client uses a `.env` file in the `client/` folder:

```env
VITE_URL="http://localhost:4000/api/playlist"
```

## Installation

1. Clone the repository

```bash
git clone <repository-url>
cd music-upload-app
```

2. Install server dependencies

```bash
cd server
npm install
```

3. Install client dependencies

```bash
cd ../client
npm install
```

## Run the Application

### Start the backend

```bash
cd server
npm run dev
```

The Express server will run on the port defined in your `.env` file.

### Start the frontend

```bash
cd client
npm run dev
```

The Vite dev server will start and the app should be accessible in the browser.

## API Endpoints

### Get playlist

```http
GET /api/playlist
```

Returns all uploaded music entries.

### Upload audio

```http
POST /api/playlist
```

- Accepts a multipart form upload
- Expects an audio file under the form field handled by Multer
- Stores the resulting URL in MongoDB

### Delete audio

```http
DELETE /api/playlist/:id
```

Deletes the playlist entry by ID and removes the uploaded file from the server `public` folder.

## Notes

- The app currently expects MP3 audio uploads.
- Uploaded audio files are served from the Express `public` directory.
- MongoDB must be running before starting the backend.

## Useful Scripts

### Server

```bash
npm run dev
```

Starts the backend with Nodemon.

### Client

```bash
npm run dev
npm run build
npm run preview
```

## License

This project is provided for learning and development purposes.
