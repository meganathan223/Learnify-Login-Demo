# Learnify

Learnify is a learning platform project built to practice frontend development, backend APIs, and full-stack integration.

## Tech Stack

**Frontend**

- React
- Vite
- Tailwind CSS
- React Router
- Axios

**Backend**

- Node.js
- Express.js
- CORS
- dotenv

## Features

- Login page with demo credentials
- Backend login API
- Form validation and error handling
- Dashboard page after successful login
- Frontend and backend integration
- Separate frontend and backend environments

## Project Structure

```text
Learnify-Login-Demo/
├── frontend/
├── backend/
└── README.md
```

## Getting Started

### 1. Clone the repository

```bash
git clone YOUR_REPOSITORY_URL
cd LearnSphere
```

### 2. Start the backend

```bash
cd backend
npm install
npm run dev
```

Create a `.env` file inside `backend/`:

```env
PORT=5000
CLIENT_URL=http://localhost:5173
```

### 3. Start the frontend

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

Create a `.env` file inside `frontend/`:

```env
VITE_API_URL=http://localhost:5000
```

## API Endpoint

- `GET /api/health` — Checks whether the backend is running.
- `POST /api/auth/login` — Handles login requests.

## Deployment

- **Frontend:** Vercel
- **Backend:** Render

## Note

This project currently uses mock user data for login practice. It is a learning project and does not implement production-ready authentication.
