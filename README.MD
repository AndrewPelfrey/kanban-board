# Project Name

## Description
A full-stack web application that includes user authentication, ticket management, and a RESTful API using Express.js, Sequelize, and React.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Database Seeding](#database-seeding)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/project-name.git
   cd project-name
   ```
2. Install dependencies for both client and server:
   ```sh
   npm install
   ```
3. Set up environment variables:
   - Create a `.env` file in the root directory and define the following:
     ```env
     PORT=3001
     DATABASE_URL=your_database_url_here
     JWT_SECRET=your_secret_key_here
     ```
4. Run database migrations and seed data (if needed):
   ```sh
   npm run migrate
   npm run seed
   ```
5. Start the development server:
   ```sh
   npm start
   ```

## Usage
- Access the frontend at `http://localhost:3000`
- Use the backend API at `http://localhost:3001`

## Features
- User authentication with JWT
- Secure password hashing
- Role-based access control
- Ticket management system (CRUD operations)
- Database integration using Sequelize ORM

## Technologies Used
- **Frontend:** React, TypeScript
- **Backend:** Node.js, Express.js, Sequelize
- **Database:** PostgreSQL/MySQL
- **Authentication:** JSON Web Tokens (JWT)

## Database Seeding
To prevent duplicate seeding, ensure that `forceDatabaseRefresh` is set to `false` in `server.js`. If you need to reset the database and reseed data:
```sh
npm run seed
```

## API Endpoints
### Authentication
- `POST /auth/login` - User login
- `POST /auth/register` - User registration

### Tickets
- `GET /tickets` - Fetch all tickets
- `POST /tickets` - Create a new ticket
- `PUT /tickets/:id` - Update a ticket
- `DELETE /tickets/:id` - Delete a ticket

## License
This project is licensed under the MIT License.
