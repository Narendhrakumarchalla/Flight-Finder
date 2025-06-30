# Flight Finder – Project Overview

Flight Finder is a full-stack web application for searching, booking, and managing flights. It features role-based access for users, operators, and admins, and provides dashboards, booking management, and flight operations.

---

## Table of Contents

1. [Project Structure](#project-structure)  
2. [Backend Details](#backend-details)  
   - [Backend Features](#backend-features)  
   - [Backend Routing](#backend-routing)  
   - [Backend Setup](#backend-setup)  
3. [Frontend Details](#frontend-details)  
   - [Frontend Features](#frontend-features)  
   - [Frontend Routing](#frontend-routing)  
   - [Frontend Setup](#frontend-setup)  
4. [Technologies Used](#technologies-used)  
5. [Usage](#usage)  
6. [License](#license)  
7. [Author](#author)  

---

## Project Structure

```
Flight Finder/
│
├── Backend/
│   ├── controllers/
│   ├── lib/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── package.json
│   └── server.js
│
└── Frontend/
    ├── public/
    ├── src/
    ├── .env
    ├── package.json
    ├── vite.config.js
    └── index.html
```

---

## Backend Details

### Backend Features

- **User Authentication:** JWT-based login and registration.
- **Role-Based Access:** User, Operator, Admin roles with different permissions.
- **Flight Management:** CRUD operations for flights.
- **Booking Management:** Users can book and manage their flights.
- **Operator Workflow:** Operators can request approval and manage their flights.
- **Admin Controls:** Admins can manage users, flights, bookings, and operator requests.
- **MongoDB Integration:** Data persistence using MongoDB and Mongoose.

---

### Backend Routing

#### 1. Authentication Routes (`/api/auth`)
| Method | Endpoint         | Description                                 | Access         |
|--------|------------------|---------------------------------------------|---------------|
| POST   | `/register`      | Register a new user/operator/admin          | Public        |
| POST   | `/login`         | Authenticate user and return JWT            | Public        |

#### 2. User Routes (`/api/users`)
| Method | Endpoint         | Description                                 | Access         |
|--------|------------------|---------------------------------------------|---------------|
| GET    | `/me`            | Get current user's profile                  | Authenticated |
| PUT    | `/me`            | Update current user's profile               | Authenticated |
| GET    | `/`              | List all users                              | Admin         |
| DELETE | `/:id`           | Delete user by ID                           | Admin         |

#### 3. Flight Routes (`/api/flights`)
| Method | Endpoint         | Description                                 | Access         |
|--------|------------------|---------------------------------------------|---------------|
| GET    | `/`              | List/search all flights                     | Public        |
| GET    | `/:id`           | Get flight details                          | Public        |
| POST   | `/`              | Add new flight                              | Operator/Admin|
| PUT    | `/:id`           | Update flight                               | Operator/Admin|
| DELETE | `/:id`           | Delete flight                               | Operator/Admin|

#### 4. Booking Routes (`/api/bookings`)
| Method | Endpoint         | Description                                 | Access         |
|--------|------------------|---------------------------------------------|---------------|
| POST   | `/`              | Book a flight                               | User          |
| GET    | `/`              | List user's bookings                        | User          |
| GET    | `/all`           | List all bookings                           | Admin/Operator|
| DELETE | `/:id`           | Cancel a booking                            | User/Admin    |

#### 5. Operator Request Routes (`/api/operators`)
| Method | Endpoint         | Description                                 | Access         |
|--------|------------------|---------------------------------------------|---------------|
| POST   | `/request`       | Request operator approval                   | Operator      |
| GET    | `/requests`      | View all operator requests                  | Admin         |
| PUT    | `/approve/:id`   | Approve operator request                    | Admin         |

#### 6. Admin Dashboard Routes (`/api/admin`)
| Method | Endpoint         | Description                                 | Access         |
|--------|------------------|---------------------------------------------|---------------|
| GET    | `/stats`         | Get statistics (users, flights, bookings)   | Admin         |
| GET    | `/dashboard`     | Get admin dashboard data                    | Admin         |

---

### Backend Setup

1. **Install dependencies:**
   ```sh
   cd Backend
   npm install
   ```
2. **Configure environment variables:**
   - Copy `.env` and set your MongoDB URI, secret key, and admin credentials.
3. **Run the server:**
   ```sh
   node server.js
   ```
   The server runs on `http://localhost:4000` by default.

---

## Frontend Details

### Frontend Features

- **Modern UI:** Built with React and Tailwind CSS.
- **Authentication:** Login and registration for all roles.
- **Flight Search & Booking:** Search, view, and book flights.
- **Role-Based Dashboards:** Separate dashboards for users, operators, and admins.
- **Booking & Flight Management:** Manage bookings and flights based on role.
- **Operator Requests:** Operators can request approval to add flights.
- **Admin Controls:** Admins can approve operators, manage users, flights, and bookings.

---

### Frontend Routing

| Path                        | Component/Page                | Description                                 | Access         |
|-----------------------------|-------------------------------|---------------------------------------------|---------------|
| `/`                         | Home                          | Flight search, featured flights             | Public        |
| `/login`                    | Login                         | User/operator/admin login                   | Public        |
| `/register`                 | Register                      | New user registration                       | Public        |
| `/flights`                  | Flights List                  | List/search all flights                     | Public        |
| `/flights/:id`              | Flight Details                | View and book a specific flight             | Public/Auth   |
| `/bookings`                 | My Bookings                   | User's bookings                             | User          |
| `/profile`                  | Profile                       | View/edit user profile                      | Authenticated |
| `/operator/dashboard`       | Operator Dashboard            | Operator overview and stats                 | Operator      |
| `/operator/flights`         | Operator Flights              | Manage operator's flights                   | Operator      |
| `/operator/bookings`        | Operator Bookings             | View bookings for operator's flights        | Operator      |
| `/operator/request`         | Operator Request              | Request approval to become operator         | Operator      |
| `/admin/dashboard`          | Admin Dashboard               | Admin overview and stats                    | Admin         |
| `/admin/users`              | Admin Users                   | Manage all users                            | Admin         |
| `/admin/flights`            | Admin Flights                 | Manage all flights                          | Admin         |
| `/admin/bookings`           | Admin Bookings                | View all bookings                           | Admin         |
| `/admin/operators`          | Admin Operators               | Approve/reject operator requests            | Admin         |
| `/about`                    | About                         | About the application                       | Public        |
| `/contact`                  | Contact                       | Contact/support page                        | Public        |
| `*`                         | Not Found                     | 404 page                                    | Public        |

---

### Frontend Setup

1. **Install dependencies:**
   ```sh
   cd Frontend
   npm install
   ```
2. **Configure environment variables:**
   - (Optional) Edit `.env` for frontend settings.
3. **Run the development server:**
   ```sh
   npm run dev
   ```
   The app runs on `http://localhost:5173` by default.

---

## Technologies Used

- **Frontend:** React, React Router, Tailwind CSS, Axios, Vite
- **Backend:** Node.js, Express, MongoDB, Mongoose, JWT, bcrypt
- **Other:** RESTful APIs, Role-based access control

---

## Usage

- Register as a user, operator, or admin.
- Users can search and book flights.
- Operators can request to add flights (pending admin approval).
- Admins can approve operator requests, manage users, flights, and bookings.

---

## License

This project is for educational purposes.

---

## Author

Challa Divya Kumari