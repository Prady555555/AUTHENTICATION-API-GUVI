# Authentication API

This is an authentication API built with Node.js, Express, Mongoose, and JWT for secure user management. The API includes features like user registration, login, token-based authentication, and password hashing with bcrypt.

## Features

- **User Registration**: Create a new user account.
- **User Login**: Authenticate a user and generate a JWT token.
- **Token-Based Authentication**: Access protected routes using a JWT token.
- **Password Security**: Passwords are hashed with bcrypt before storage.

## API Documentation

The API has been documented with Postman for both local and global environments. You can use these links to view detailed API documentation:

- **Localhost Environment**: [Localhost Documentation](https://documenter.getpostman.com/view/29619028/2sAY4uBiC5)
- **Global (Hosted) Environment**: [Global Documentation](https://documenter.getpostman.com/view/29619028/2sAY4uBiGW)

## Base URL

The API is hosted at: [https://authentication-api-prady.onrender.com/](https://authentication-api-prady.onrender.com/)

## Endpoints

Here’s a brief overview of the main API endpoints:

### Authentication

- **POST** `/signup`: Register a new user.
- **GET** `/login`: Log in an existing user, returns a JWT token on successful login.

### Protected Routes

All protected routes require a valid JWT token in the `Authorization` header, formatted as `Bearer <token>`.

## Setup Instructions

To run this API locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Prady555555/AUTHENTICATION-API-GUVI.git
