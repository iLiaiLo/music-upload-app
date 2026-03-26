🎵 Full-Stack Music Upload App
A practical implementation of a music streaming service, focusing on multipart form-data handling with Multer and static file serving in Express.

🚀 Key Learning Objectives
File Uploads: Implementing multer.diskStorage to handle .mp3 files.

Static Serving: Using express.static to allow the React client to stream audio directly from the server's filesystem.

Database Management: Using Mongoose to store metadata (song titles, file paths) while keeping the actual files on the disk.

🛠 Tech Stack
Client
React.js - UI components and Audio playback.

Vite - Build tool for fast development.

Server
Node.js & Express - Backend framework.

Multer - Middleware for handling enctype="multipart/form-data".

Mongoose - MongoDB object modeling for song metadata.

⚙️ How to Run

1. Clone the repository
   Bash
   git clone <your-repo-link>
   cd <folder-name>
2. Setup Server
   Bash
   cd server
   npm install
   npm run dev
3. Setup Client
   Bash
   cd client
   npm install
   npm run dev
