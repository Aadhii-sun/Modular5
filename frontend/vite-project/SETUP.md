# Frontend Setup Instructions

## Installation

After updating the `package.json` with the new dependencies, run:

```bash
npm install
```

This will install the following required packages:
- **axios** (v1.6.7) - For making HTTP requests to the backend API
- **react-router-dom** (v6.22.0) - For client-side routing

## Running the Application

```bash
npm run dev
```

The frontend will start on `http://localhost:5173` (default Vite port)

## Environment Configuration

Make sure your backend is running on `http://localhost:5000` as configured in `src/api/api.js`

If your backend runs on a different port, update the `baseURL` in `src/api/api.js`:

```javascript
const API = axios.create({
  baseURL: "http://localhost:YOUR_PORT/api",
});
```

## Features Implemented

✅ User Registration & Login
✅ JWT Token Authentication
✅ Protected Routes
✅ Task CRUD Operations
✅ Automatic token expiration handling
✅ Improved error handling with console logging
✅ Modern UI with Tailwind CSS
