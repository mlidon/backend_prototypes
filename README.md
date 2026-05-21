<p align="center">
  <img src="https://nodejs.org/static/images/logo.svg" width="120" alt="Node.js Logo" />
</p>

<h1 align="center">
  Backend Auth API
</h1>

<p align="center">
  Authentication backend built with Node.js, Express, SQLite, JWT and bcrypt.
</p>

<p align="center">

  <img src="https://img.shields.io/badge/node.js-20.x-green" />
  <img src="https://img.shields.io/badge/express-4.x-black" />
  <img src="https://img.shields.io/badge/sqlite-3-blue" />
  <img src="https://img.shields.io/badge/jwt-authentication-orange" />
  <img src="https://img.shields.io/badge/license-MIT-purple" />

</p>

---

# Overview

This project is a reusable backend authentication template focused on:

- secure authentication
- JWT authorization
- password hashing
- protected routes
- clean architecture
- scalable backend structure

The API is fully testable using Postman.

---

# Tech Stack

## Backend

- Node.js
- Express.js

## Database

- SQLite3

## Security

- JWT
- bcrypt
- helmet
- cors

## Environment

- dotenv

## Development

- nodemon

---

# Features

- User registration
- User login
- JWT authentication
- Protected routes
- Bearer Token validation
- Password hashing
- SQLite persistence
- Middleware authentication
- Clean architecture

---

# Architecture

```text
Routes
  ↓
Controllers
  ↓
Models
  ↓
SQLite Database
```

# Project Structure
```text
src/
├── config/
├── controllers/
├── database/
├── middlewares/
├── models/
├── routes/
└── utils/
```
# Inatallation
```node
npm install
```

Sí. De hecho un README premium en GitHub debería:

* verse limpio visualmente
* tener badges
* logos
* resumen rápido
* arquitectura
* features
* stack
* endpoints
* instalación
* roadmap

sin exponer:

* `.env`
* passwords
* rutas locales
* secretos
* datos privados

Te recomiendo algo mucho más profesional tipo:

```text
Open Source Backend Template
```

---

# Development

```bash
npm run dev
```

---

# Production

```bash
npm start
```

---

# API Endpoints

## Register

```http
POST /api/auth/register
```

---

## Login

```http
POST /api/auth/login
```

---

## Profile

```http
GET /api/auth/profile
```

Requires:

```http
Authorization: Bearer TOKEN
```

---

# Authentication Flow

```text
Register
↓
Hash password
↓
Store user
↓
Login
↓
Generate JWT
↓
Access protected routes
```

---

# Security

* bcrypt password hashing
* JWT stateless authentication
* Helmet security headers
* CORS enabled
* Protected routes

---

# Future Improvements

* Refresh tokens
* Role permissions
* Email verification
* Password recovery
* Rate limiting
* Docker support
* Automated testing

---

# Project Goal

Build a professional and reusable authentication backend template using modern Node.js practices.

