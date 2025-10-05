# Task Manager - MERN Stack Application

A full-stack task management application built with MongoDB, Express.js, React, and Node.js.

## Features

✅ User Authentication (Register/Login with JWT)
✅ Protected Routes
✅ Create, Read, Update, Delete Tasks
✅ Task Status Management (Pending/Completed)
✅ Modern UI with Tailwind CSS
✅ Secure Password Hashing with bcrypt
✅ MongoDB Atlas Database

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- bcrypt for password hashing

### Frontend
- React 19
- Vite
- React Router DOM
- Axios
- Tailwind CSS

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account
- Git

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file in backend directory:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

4. Start the backend server:
```bash
npm start
```

Backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend/vite-project
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

Frontend will run on `http://localhost:5174`

## Usage

1. **Register**: Create a new account with name, email, and password
2. **Login**: Sign in with your credentials
3. **Dashboard**: View all your tasks
4. **Add Task**: Create new tasks with title and description
5. **Update Status**: Click on task status to toggle between pending/completed
6. **Delete Task**: Remove tasks you no longer need

## Project Structure

```
modular Assignment-5/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── auth.js
│   │   └── tasks.js
│   ├── middleware/
│   │   └── auth.js
│   ├── models/
│   │   ├── User.js
│   │   └── Task.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── tasks.js
│   ├── .env
│   ├── package.json
│   └── server.js
├── frontend/
│   └── vite-project/
│       ├── src/
│       │   ├── api/
│       │   │   └── api.js
│       │   ├── components/
│       │   │   ├── ProtectedRoute.jsx
│       │   │   ├── TaskForm.jsx
│       │   │   └── TaskItem.jsx
│       │   ├── pages/
│       │   │   ├── Dashboard.jsx
│       │   │   ├── Login.jsx
│       │   │   └── Register.jsx
│       │   ├── App.jsx
│       │   └── main.jsx
│       ├── package.json
│       └── vite.config.js
└── README.md
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Tasks (Protected Routes)
- `GET /api/tasks` - Get all tasks for logged-in user
- `POST /api/tasks` - Create new task
- `PUT /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task

## Security Features

- Passwords hashed with bcrypt
- JWT token authentication
- Protected API routes
- Automatic token expiration handling
- CORS enabled

## Author

Adithyan Animon

## License

ISC
