# KEDIFDN Project

This is a full-stack web application for KEDIFDN, consisting of a React frontend and a Node.js/Express backend.

## Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

## Development Setup

1. Clone the repository:
   ```
   git clone <repository-url>
   cd KEDIFDN
   ```

2. Install backend dependencies:
   ```
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```
   cd ../frontend
   npm install
   cd ..
   ```

4. Set up environment variables:
   - In `backend/.env`, ensure `PORT=5000` is set (or your preferred port).
   - For production, you may need additional environment variables depending on your deployment setup.

5. Run the backend:
   ```
   cd backend
   node server.js
   ```
   The backend will run on `http://localhost:5000`.

6. Run the frontend (in a new terminal):
   ```
   cd frontend
   npm run dev
   ```
   The frontend will run on `http://localhost:5173` (default Vite port).

## Build Commands

### Frontend
- Development: `npm run dev`
- Build for production: `npm run build`
- Preview production build: `npm run preview`
- Lint: `npm run lint`

### Backend
- No specific build command; uses `node server.js` to run.

## Deployment

### Frontend Deployment

#### Option 1: Netlify
1. Connect your GitHub repository to Netlify.
2. Set build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Deploy. Netlify will provide a URL for your frontend.

#### Option 2: Render
1. Create a new Web Service on Render.
2. Connect your repository.
3. Set root directory to `frontend`.
4. Set build and start settings:
   - Build command: `npm install && npm run build`
   - Start command: `npm start`
5. Add environment variable:
   - `PORT`: Set to `10000` (Render's default)
6. Deploy. Render will provide a URL for your frontend.

**Note:** For production, update the API base URL in `frontend/src/services/api.js` from `http://localhost:5000/api` to your deployed backend URL.

### Backend Deployment (Render)

1. Create a new Web Service on Render.
2. Connect your repository.
3. Set build and start settings:
   - Build command: `npm install`
   - Start command: `node server.js`
4. Add environment variables:
   - `PORT`: Set to `10000` (or Render's default port)
5. Deploy. Render will provide a URL for your backend (e.g., `https://your-backend.onrender.com`).

**Note:** Ensure CORS is configured properly for your frontend domain in production.

## Environment Variables

### Backend
- `PORT`: Port for the server to listen on (default: 5000)

### Frontend
- Currently, the API base URL is hardcoded. For flexibility, consider adding a `.env` file in `frontend/` with `VITE_API_URL=https://your-backend-url/api` and update `api.js` to use `import.meta.env.VITE_API_URL`.

## Project Structure

- `backend/`: Node.js/Express server with routes, controllers, and models.
- `frontend/`: React application built with Vite.
- `plans/`: Project planning documents."# kedifdn" 
