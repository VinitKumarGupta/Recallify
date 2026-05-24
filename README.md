# Recallify

A small MERN stack notes application (React + Vite frontend, Express + MongoDB backend) with basic CRUD and a clean UI.

Features

- Create, read, update and delete notes
- Simple REST API under `/api/notes`
- Vite-powered React frontend with hot-reload

Tech stack

- Frontend: React, Vite, Tailwind CSS, DaisyUI, react-hot-toast
- Backend: Node.js, Express, Mongoose (MongoDB)
- Rate limiting: Upstash Redis via @upstash/ratelimit

Prerequisites

- Node.js 18+ and npm
- A MongoDB connection string (MongoDB Atlas or local)

Repository layout

- `backend/` — Express API and database code
- `frontend/` — Vite + React web app

Quick start (development)

1. Clone the repo and install dependencies for both projects:

```powershell
# in repo root
cd backend
npm install

cd ../frontend
npm install
```

2. Run backend and frontend concurrently in development:

```powershell
# terminal 1
cd backend
npm run dev

# terminal 2
cd frontend
npm run dev
```

The frontend dev server runs by default at `http://localhost:5173` and the backend API at `http://localhost:5001` (see `backend/src/server.js`). The frontend Axios client targets `/api` in production and `http://localhost:5001/api` in development.

Environment variables (backend)
Create a `.env` file in `backend/` with at least:

```
MONGO_URI=your_mongodb_connection_string
PORT=5001
NODE_ENV=development
# Optional (for Upstash Redis)
UPSTASH_REDIS_REST_URL=...
UPSTASH_REDIS_REST_TOKEN=...
```

Production (root scripts)

The repository includes root-level helper scripts that install dependencies and build the frontend, then start the backend which serves the built app in production.

From the repository root run:

```powershell
# install deps and build frontend
npm run build

# start the backend (it will serve the frontend when NODE_ENV=production)
npm run start
```

API endpoints

- `GET /api/notes` — list notes
- `GET /api/notes/:id` — get a single note
- `POST /api/notes` — create a note (body: `{ title, content }`)
- `PUT /api/notes/:id` — update a note (body: `{ title, content }`)
- `DELETE /api/notes/:id` — delete a note

Contributing

- Feel free to open issues or PRs. Suggested improvements: add authentication, pagination, filtering, or tests.

License

- MIT (feel free to change)

Enjoy! — small, focused app for taking notes quickly.
