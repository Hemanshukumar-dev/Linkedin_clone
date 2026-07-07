# LinkedIn Clone

A full-stack LinkedIn clone project built to revise core MERN concepts while following the MVC architecture on the backend. The goal of this project is to practice how a production-style social platform can be organized, connected, and extended using MongoDB, Express, React, and Node.js.

## Overview

This project is designed as a learning-first clone of LinkedIn. It focuses on revising the major concepts you use in MERN development, including API design, authentication flow, MongoDB data modeling, route/controller separation, and frontend-backend integration.

The backend currently follows an MVC-inspired structure:

- `models/` for MongoDB schemas
- `controllers/` for request handling logic
- `routes/` for endpoint definitions
- `middleware/` for reusable request processing
- `config/` for database and app-level configuration

The frontend folder is present and can be expanded into the React client for the interface, routing, state management, and UI components.

## Goals Of The Project

- Revise the complete MERN stack in one practical app.
- Practice MVC architecture on the Node/Express side.
- Build reusable API patterns for authentication and user flows.
- Understand MongoDB schema design with Mongoose.
- Learn how to connect a React frontend with an Express backend.
- Create a project that can grow into a feature-rich professional network clone.

## Tech Stack

### Backend

- dotenv
- cors
- validator
- nodemon for development

### Frontend

- React
- React Router
- State management of your choice as the app grows
JWT_SECRET=your_jwt_secret
- Fetch API or Axios for API calls

## Project Structure
```text
linkedin/
├── server/
│   ├── app.js
│   ├── server.js
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── auth.controller.js
│   ├── middleware/
│   ├── models/
│   │   └── user.model.js
│   └── routes/
│       ├── auth.route.js
│       └── user.route.js
├── package.json
└── README.md
```

## Architecture

### MVC Pattern

This project follows a clear backend separation of concerns:

- Model: defines the MongoDB structure for entities such as users.
- View: the React frontend will render the UI and consume backend APIs.
- Controller: handles business logic and request/response flow.
- Route: maps HTTP endpoints to controller methods.

### Current Backend Flow

1. `server.js` loads environment variables and starts the Express server.
2. `config/db.js` connects the app to MongoDB using `MONGO_URI`.
3. `app.js` sets up middleware and registers routes.
4. Requests are routed to `routes/` files.
5. Controllers process the request and return a response.
6. Models define how data is stored in MongoDB.

## Available Backend Endpoints

### Health Check

- `GET /`

Returns a simple response confirming the backend is running.

### User Routes

- `GET /api/users`

Returns a test response for the user route.

### Auth Routes

- `POST /api/auth/register`
- `POST /api/auth/login`

These routes now create or verify users and return a JWT for authenticated requests.

## User Model

The current `User` schema includes:

- `firstName`
- `lastName`
- `email`
- `password`
- automatic timestamps

This is a strong foundation for authentication, profile creation, and future social features.

## Environment Variables

Create a `.env` file inside the `server/` folder with the values below:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

If you later add authentication tokens, email services, or cloud uploads, you can expand this file with additional keys.

## Installation

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd linkedin
```

### 2. Install backend dependencies

```bash
cd server
npm install
```

### 3. Add environment variables

Create `server/.env` and add your MongoDB URI and port configuration.

### 4. Start the backend

```bash
npm run dev
```

or for production-style execution:

```bash
npm start
```

### 5. Set up the frontend

When the React client is ready, install its dependencies inside the `client/` folder and connect it to the backend API.

## Development Scripts

Inside `server/package.json`:

- `npm start` runs `node server.js`
- `npm run dev` runs `nodemon server.js`

## What To Build Next

Suggested next steps for the clone:

- User registration and login
- JWT authentication and protected routes
- Profile creation and editing
- Post creation, likes, and comments
- Connection requests and network management
- Feed rendering with sorting and pagination
- File uploads for avatars and media
- Search and filtering for users and posts

## MERN Topics To Revise Through This Project

This project is useful for revising:

- JavaScript fundamentals
- Express routing and middleware
- REST API design
- MVC architecture
- Mongoose schemas, validation, and relations
- MongoDB CRUD operations
- Password hashing with bcrypt
- Environment management with dotenv
- CORS and client-server communication
- React component structure and props
- React Router and page navigation
- State management patterns
- Form handling and validation
- Authentication and authorization

## Learning Approach

To get the most out of this project, try building each feature in small increments:

1. Define the MongoDB schema.
2. Add the controller logic.
3. Connect the route.
4. Test the endpoint.
5. Build the matching React UI.
6. Repeat for the next feature.

This approach makes the project easier to debug and gives you repeated practice across the full stack.

## Notes

- The current backend contains starter routes and a basic register controller placeholder.
- The frontend folder is ready to be developed into the React client.
- As the project grows, keep business logic in controllers and avoid placing it directly in routes.


