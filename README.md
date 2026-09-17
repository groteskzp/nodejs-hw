# Notes REST API

GoIT Node.js homework. A REST API for a personal notes application with user authentication, password reset by email, and avatar upload.

The API is intended to run locally. There is no public live demo.

## Features

- REST API built with Express
- User registration, login, logout, and session refresh
- Cookie-based sessions (`accessToken`, `refreshToken`, `sessionId`)
- Private notes CRUD (each user can access only their own notes)
- Note search by title and content, filtering by tag, and pagination
- Password reset: request a reset email and set a new password
- Avatar upload to Cloudinary (`PATCH /users/me/avatar`)
- Request validation with Celebrate and Joi
- MongoDB persistence with Mongoose
- CORS with credentials
- HTTP request logging with Pino
- Centralized error handling and 404 responses

Note tags: `Work`, `Personal`, `Meeting`, `Shopping`, `Ideas`, `Travel`, `Finance`, `Health`, `Important`, `Todo`.

## Tech Stack

- Node.js
- Express
- MongoDB
- Mongoose
- Celebrate / Joi
- bcrypt
- jsonwebtoken
- cookie-parser
- cors
- dotenv
- Cloudinary
- Multer
- Nodemailer
- Handlebars
- http-errors
- pino-http / pino-pretty
- Nodemon (development)

## Getting Started

### Prerequisites

- Node.js
- npm
- MongoDB

### Installation

```bash
git clone https://github.com/groteskzp/nodejs-hw.git
cd nodejs-hw
npm install
```

Copy `.env.example` to `.env` and set the variables listed below. Then start the server:

```bash
npm run dev
```

The server listens on `PORT` (falls back to `3000` if it is not set). The API runs locally.

### Environment Variables

- `PORT`
- `MONGO_URL`
- `JWT_SECRET`
- `FRONTEND_DOMAIN`
- `CLOUDINARY_CLOUD_NAME`
- `CLOUDINARY_API_KEY`
- `CLOUDINARY_API_SECRET`
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASSWORD`
- `SMTP_FROM`

## Scripts

|| Script | Description |
|| --- | --- |
|| `npm start` | Start the server (`node src/server.js`) |
|| `npm run dev` | Start the server with Nodemon |


## API Endpoints

### Auth

|| Method | Endpoint | Description |
|| --- | --- | --- |
|| `POST` | `/auth/register` | Register a new user |
|| `POST` | `/auth/login` | Log in |
|| `POST` | `/auth/refresh` | Refresh the session |
|| `POST` | `/auth/logout` | Log out |
|| `POST` | `/auth/request-reset-email` | Request a password reset email |
|| `POST` | `/auth/reset-password` | Reset the password |

### Notes

All notes routes require an authenticated session.

|| Method | Endpoint | Description |
|| --- | --- | --- |
|| `GET` | `/notes` | List notes (`page`, `perPage`, `tag`, `search` query params) |
|| `GET` | `/notes/:noteId` | Get a note by id |
|| `POST` | `/notes` | Create a note |
|| `PATCH` | `/notes/:noteId` | Update a note |
|| `DELETE` | `/notes/:noteId` | Delete a note |

### Users

|| Method | Endpoint | Description |
|| --- | --- | --- |
|| `PATCH` | `/users/me/avatar` | Upload an avatar image (`avatar` form field) |
