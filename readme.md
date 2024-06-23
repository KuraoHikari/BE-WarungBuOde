<!-- TOC start (generated with https://github.com/derlin/bitdowntoc) -->

- [Warung Bu Ode RESTful API](#warung-bu-ode-restful-api)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [DB Schema](#db-schema)
  - [Database Design](#database-design)
  - [Usage](#usage)
  - [Middleware Overview](#middleware-overview)
    - [`authenticationMiddleware`](#authenticationmiddleware)
    - [`authorizationAdminMiddleware`](#authorizationadminmiddleware)
    - [`authorizationWarungMiddleware`](#authorizationwarungmiddleware)
    - [`authorizationPublicBillMiddleware`](#authorizationpublicbillmiddleware)
    - [`imageValidationMiddleware`](#imagevalidationmiddleware)
    - [multerMiddleware](#multermiddleware)
    - [`validationMiddleware`](#validationmiddleware)
- [API Routes Documentation](#api-routes-documentation)
  - [Routes Overview](#routes-overview)
  - [Authentication Routes (`/auth`)](#authentication-routes-auth)
    - [**POST `/auth/login`**: Authenticate a user and return a token.](#post-authlogin-authenticate-a-user-and-return-a-token)
      - [Endpoint](#endpoint)
      - [Request](#request)
      - [Validation](#validation)
      - [Response](#response)
      - [Controller Logic](#controller-logic)
      - [Security Considerations](#security-considerations)
    - [**POST `/auth/register`**: Register a new user.](#post-authregister-register-a-new-user)
      - [Endpoint](#endpoint-1)
      - [Request](#request-1)
      - [Validation](#validation-1)
      - [Response](#response-1)
      - [Controller Logic](#controller-logic-1)
      - [Security Considerations](#security-considerations-1)
  - [Warung Routes (`/warung`)](#warung-routes-warung)
    - [**POST `/warung`**: Create a new warung.](#post-warung-create-a-new-warung)
      - [Endpoint](#endpoint-2)
      - [Request](#request-2)
      - [Validation](#validation-2)
      - [Response](#response-2)
      - [Success Response:](#success-response)
      - [Error Responses:](#error-responses)
      - [Controller Logic](#controller-logic-2)
      - [Security Considerations](#security-considerations-2)
    - [**GET `/warung`**: Get a list of all warung.](#get-warung-get-a-list-of-all-warung)
      - [Endpoint](#endpoint-3)
      - [Request](#request-3)
      - [Validation](#validation-3)
      - [Response](#response-3)
      - [Controller Logic](#controller-logic-3)
      - [Security Considerations](#security-considerations-3)
    - [**PATCH `/warung/:id`**: Update details of a specific warung.](#patch-warungid-update-details-of-a-specific-warung)
      - [Endpoint](#endpoint-4)
      - [Request](#request-4)
        - [Parameters](#parameters)
        - [Body](#body)
      - [Validation](#validation-4)
      - [Response](#response-4)
      - [Success Response:](#success-response-1)
      - [Error Responses:](#error-responses-1)
      - [Controller Logic](#controller-logic-4)
      - [Security Considerations](#security-considerations-4)
  - [Menu Routes (`/menu`)](#menu-routes-menu)
    - [**POST `/menu`**: Add a new item to the menu.](#post-menu-add-a-new-item-to-the-menu)
      - [Endpoint](#endpoint-5)
      - [Request](#request-5)
      - [Parameters](#parameters-1)
      - [Body](#body-1)
      - [Validation](#validation-5)
      - [Response](#response-5)
      - [Success Response:](#success-response-2)
      - [Error Responses:](#error-responses-2)
      - [Controller Logic](#controller-logic-5)
      - [Security Considerations](#security-considerations-5)
    - [**GET `/menu`**: Get a list of all menu items.](#get-menu-get-a-list-of-all-menu-items)
      - [Endpoint](#endpoint-6)
      - [Request](#request-6)
      - [Query Parameters](#query-parameters)
      - [Validation](#validation-6)
      - [Response](#response-6)
      - [Success Response:](#success-response-3)
      - [Error Responses:](#error-responses-3)
      - [Controller Logic](#controller-logic-6)
      - [Security Considerations](#security-considerations-6)
    - [**PATCH `/menu/:warungId/:menuId`**: Update an item from the menu.](#patch-menuwarungidmenuid-update-an-item-from-the-menu)
      - [Endpoint](#endpoint-7)
      - [Request](#request-7)
      - [Parameters](#parameters-2)
      - [Body](#body-2)
      - [Validation](#validation-7)
      - [Response](#response-7)
      - [Success Response:](#success-response-4)
      - [Error Responses:](#error-responses-4)
      - [Controller Logic](#controller-logic-7)
      - [Security Considerations](#security-considerations-7)
  - [Bill Routes (`/bill`)](#bill-routes-bill)
    - [**GET `/bill/all`**: Retrieve all bills.](#get-billall-retrieve-all-bills)
      - [Endpoint](#endpoint-8)
      - [Request](#request-8)
      - [Query Parameters](#query-parameters-1)
      - [Validation](#validation-8)
      - [Response](#response-8)
      - [Success Response:](#success-response-5)
      - [Error Responses:](#error-responses-5)
      - [Controller Logic](#controller-logic-8)
      - [Security Considerations](#security-considerations-8)
    - [**PATCH `/bill/:warungId/edit/:menuId`**: Update details of a specific bill.](#patch-billwarungideditmenuid-update-details-of-a-specific-bill)
      - [Endpoint](#endpoint-9)
      - [Request](#request-9)
      - [Parameters](#parameters-3)
      - [Body](#body-3)
      - [Validation](#validation-9)
      - [Response](#response-9)
      - [Success Response:](#success-response-6)
      - [Error Responses:](#error-responses-6)
      - [Controller Logic](#controller-logic-9)
      - [Security Considerations](#security-considerations-9)
  - [Dependencies](#dependencies)
  - [Acknowledgements](#acknowledgements)
  - [Authors](#authors)
  - [License](#license)

<!-- TOC end -->

<!-- TOC --><a name="warung-bu-ode-restful-api"></a>

# Warung Bu Ode RESTful API

This project is a RESTful API designed for managing operations in "Warung Bu Ode", using Node.js and various other technologies like Prisma, Cloudinary, and Express.

<!-- TOC --><a name="prerequisites"></a>

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js (v18 or higher)**: The project is built with Node.js. You must have Node.js version 18 or higher installed on your machine. You can download it from [Node.js official website](https://nodejs.org/).
- **npm (Node Package Manager)**: npm is used to install dependencies. It comes with Node.js, so if you have Node.js installed, you should have npm as well.
- **Git**: While not strictly necessary, the project recommends using Git for version control. If you plan to clone the repository, make sure Git is installed on your system. You can download it from [Git's official website](https://git-scm.com/).
- **Basic knowledge of terminal or command line usage**: Since the installation and running of the project require using the terminal or command line, basic knowledge in this area will be beneficial.

Once you have these prerequisites, you can proceed with the installation instructions below.

<!-- TOC --><a name="installation"></a>

## Installation

Follow these steps to install and run the project:

1. Clone the repository:

   ```bash
   git clone https://github.com/KuraoHikari/BE-WarungBuOde.git
   cd be-warungbuode
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and fill it with necessary environment variables:

   ```
   DATABASE_URL="your_database_url"
   DIRECT_URL="if you using neondb or serverles sql"
   JWT_SECRET="your_jwt_secret"
   CLOUD_NAME="your cloudinary name"
   API_KEY="your cludinary apikey"
   API_SECRET="your cludinary api secret"
   ```

4. Run database migrations (ensure your database connection details are correct in `.env`):

   ```bash
   npx prisma migrate dev
   ```

5. Start the server:
   - For development:
     ```bash
     npm run dev
     ```
   - For production:
     ```bash
     npm start
     ```

<!-- TOC --><a name="db-schema"></a>

## DB Schema

The provided content outlines the structure and components of a Prisma schema file used for configuring a Prisma ORM setup. The schema is designed for a PostgreSQL database and includes specifications for data sources, generators, models, and relationships between them.

**Key Components of the Prisma Schema:**

1. **Data Source Configuration:**

   - Utilizes PostgreSQL, with the connection URL provided through environment variables (`DATABASE_URL` and `DIRECT_URL`).

2. **Generator Configuration:**

   - Specifies that the Prisma client for JavaScript (`prisma-client-js`) should be generated, directing the output to "./generated/client".

3. **Models and Relationships:**

   - **User Model:** Includes fields such as id, email, username, password, and role. It is associated with other models like Warung, WarungEmploye, Menu, and Bill.
   - **Warung Model:** Represents a restaurant or food stall with fields like id, name, and location. It has relationships with User, WarungEmploye, Menu, and Bill.
   - **WarungEmploye Model:** Links employees to specific Warungs and Users.
   - **Menu Model:** Contains details about food items including title, price, description, image, and availability. It is linked to the Warung and User models and associated with Orders.
   - **Order Model:** Details an order placed by a user, including the menu item, quantity, total price, and creation date.
   - **Bill Model:** Represents a bill or invoice, with fields for total amount, status, approval status, and customer name. It is associated with Users, Warungs, and Orders.

4. **Enums:**
   - Defines a `Role` enum with values `EMPLOYE` and `ADMIN` to distinguish between different user roles within the system.

<!-- TOC --><a name="database-design"></a>

## Database Design

To get a better understanding of the database structure, you can view the Entity Relationship Diagram (ERD) for Warung Bu Ode:

[View ERD for Warung Bu Ode](https://imgur.com/gallery/erd-warung-bu-ode-T5dZIY8)

For a direct look at the main ERD, see below:

![ERD Warung Bu Ode](https://i.imgur.com/1jH6j67.png)

<!-- TOC --><a name="usage"></a>

## Usage

After starting the server, the API endpoints will be available at `http://localhost:3000/` (change the port if you've configured it differently).

<!-- TOC --><a name="middleware-overview"></a>

## Middleware Overview

<!-- TOC --><a name="authenticationmiddleware"></a>

### `authenticationMiddleware`

Verifies the JWT token provided in the request headers. It ensures that the token is valid and that the user exists in the database. If the verification is successful, it attaches the user's information to the request object.

**Usage:**

Attach this middleware to any route that requires user authentication.

```javascript
router.get("/protected-route", authenticationMiddleware, (req, res) => {
 res.send("This is a protected route");
});
```

<!-- TOC --><a name="authorizationadminmiddleware"></a>

### `authorizationAdminMiddleware`

Checks if the authenticated user has an admin role. It should be used after `authenticationMiddleware` to ensure that the route is accessible only by users with admin privileges.

**Usage:**
Attach this middleware to routes that should be accessible only by admin users.

```javascript
router.post(
 "/admin-only",
 authenticationMiddleware,
 authorizationAdminMiddleware,
 (req, res) => {
  res.send("Admin content");
 }
);
```

<!-- TOC --><a name="authorizationwarungmiddleware"></a>

### `authorizationWarungMiddleware`

Verifies if the authenticated user is authorized to access a specific warung based on the `warungId` parameter in the route and the user's ID. It ensures that the user is linked to the warung they are trying to access.

**Usage:**

Use this middleware for routes that manage warung-specific data.

```javascript
router.get(
 "/warung/:warungId/data",
 authenticationMiddleware,
 authorizationWarungMiddleware,
 (req, res) => {
  res.send("Warung specific data");
 }
);
```

<!-- TOC --><a name="authorizationpublicbillmiddleware"></a>

### `authorizationPublicBillMiddleware`

Checks if a warung with the specified `warungName` exists in the request parameters. It's designed for routes that should be publicly accessible but still require validation of the warung's existence.

**Usage:**

Attach this middleware to public routes that require validation of a warung's existence based on its name.

```javascript
router.get(
 "/public/:warungName/info",
 authorizationPublicBillMiddleware,
 (req, res) => {
  res.send("Public warung information");
 }
);
```

**Error Handling :**

All middleware functions respond with a `401 Unauthorized` status code and a JSON message indicating the type of authorization error if the authentication or authorization fails.

<!-- TOC --><a name="imagevalidationmiddleware"></a>

### `imageValidationMiddleware`

The `imageValidationMiddleware` performs the following checks on image files included in requests:

1. **File Type Validation**: Ensures the uploaded file is of an image type (png, jpg, jpeg, gif, bmp).
2. **File Size Validation**: Ensures the uploaded image does not exceed a maximum size limit of 510kb.

**Usage:**

To use this middleware, attach it to any route that accepts image uploads. This will ensure that only valid image files are processed, and any invalid uploads are rejected with an appropriate error message.

**Example:**

```javascript
const express = require("express");
const multer = require("multer");
const imgValidate = require("./imageValidationMiddleware");

const upload = multer({ dest: "uploads/" });
const app = express();

app.post("/upload-image", upload.single("image"), imgValidate, (req, res) => {
 res.send("Image uploaded successfully");
});
```

In this example, `multer` is used to handle multipart/form-data, which is primarily used for uploading files. The `upload.single('image')` middleware is used to accept a single file with the field name `image`. After the file is processed by `multer`, `imgValidate` checks the file type and size.

**Error Handling:**
If the uploaded file does not meet the validation criteria, the middleware responds with a 400 Bad Request status and a JSON message indicating the reason for rejection:

- If the file is not an image: { message: "file must be an image" }
- If the image exceeds the size limit: { message: "max image size is 510kb" }

<!-- TOC --><a name="multermiddleware"></a>

### multerMiddleware

The `multerMiddleware` is configured to use `multer`'s memory storage engine. This means that files uploaded through this middleware are stored in the server's memory. It's an ideal setup for temporary storage or when files need to be processed (e.g., resized or converted) before being saved to a permanent storage solution.

**Usage:**

To use this middleware in your application, first import it into the file where you're setting up your routes:

```javascript
import upload from "./multerMiddleware";

app.post("/upload", upload.single("image"), (req, res) => {
 // Handle the uploaded file here
 res.send("File uploaded successfully");
});
```

For multiple files, you can use `upload.array('images', maxCount)` or u`pload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])` depending on your needs.

**Configuration:**
The middleware uses `multer`'s default memory storage engine. If you need to customize the storage engine (e.g., to save files to disk or to cloud storage), you can modify the `storage` option in the `multerMiddleware.js` file.

**Error Handling:**
`multer` includes built-in error handling mechanisms. If an upload fails due to file size limits, file type restrictions, or other configuration rules, `multer` will automatically respond with an appropriate error message. You can also add custom error handling to further manage how upload errors are handled.

<!-- TOC --><a name="validationmiddleware"></a>

### `validationMiddleware`

The `validationMiddleware` function takes a Zod schema as an argument and returns an Express middleware function. This middleware attempts to parse the incoming request body using the provided schema. If the data matches the schema, the request proceeds to the next middleware or route handler. If the data does not match, it responds with a `400 Bad Request` status and details about the validation errors.

**Usage:**

To use this middleware, first define a Zod schema that describes the expected structure and data types of the request body for a particular route. Then, use the `validateData` function to create a middleware for that route.

**Example:**

```javascript
import express from "express";
import { z } from "zod";
import { validateData } from "./validationMiddleware";

const app = express();
app.use(express.json());

const userSchema = z.object({
 name: z.string(),
 age: z.number().positive(),
});

app.post("/users", validateData(userSchema), (req, res) => {
 res.send("User is valid");
});

app.listen(3000, () => console.log("Server running on port 3000"));
```

In this example, userSchema defines the expected structure for user data. The `validateData(userSchema)` middleware will validate incoming POST requests to `/users` against this schema.

Error Handling
If the request body does not match the schema, the middleware responds with a`400 Bad Request`status. The response includes a JSON object with an `error` key indicating "Invalid data" and a `details` key containing an array of error messages specifying which parts of the data did not match the schema.

<!-- TOC --><a name="api-routes-documentation"></a>

# API Routes Documentation

This document provides an overview of all routes available in the "Warung Bu Ode" project. Each route is designed to handle specific aspects of the application, from authentication to managing menus and bills.

<!-- TOC --><a name="routes-overview"></a>

## Routes Overview

<!-- TOC --><a name="authentication-routes-auth"></a>

## Authentication Routes (`/auth`)

<!-- TOC --><a name="post-authlogin-authenticate-a-user-and-return-a-token"></a>

### **POST `/auth/login`**: Authenticate a user and return a token.

<!-- TOC --><a name="endpoint"></a>

#### Endpoint

- **Path**: `/login`
- **Method**: `POST`
- **Auth Required**: No

<!-- TOC --><a name="request"></a>

#### Request

The request to this endpoint must include a JSON payload with the following fields:

- `email`: User's email address.
- `password`: User's password.

**Example Request Body:**

```json
{
 "email": "user@example.com",
 "password": "userpassword"
}
```

<!-- TOC --><a name="validation"></a>

#### Validation

The request body is validated against a predefined schema (`loginSchema`) to ensure that all required fields are present and conform to the expected formats. This is done using the `validateData` middleware.

If the request does not pass validation, a `400 Bad Request` response is returned with details about the validation errors.

<!-- TOC --><a name="response"></a>

#### Response

- Success Response:
  - Code: 200 OK
  - Content:{ "token": "jwt.token.here" }
- Error Responses:
  - If the credentials are invalid (user not found or password does not match):
    - Code: 403 Forbidden
    - Content: { "message": "Invalid Credentials" }
  - For any other server errors:
    - Code: 500 Internal Server Error
    - Content: { "error": "Internal Server Error" }

<!-- TOC --><a name="controller-logic"></a>

#### Controller Logic

The `loginAuth` controller performs the following steps:

1. Extracts `email` and `password` from the request body.
2. Attempts to find a user in the database with the provided email.
3. If the user is found, compares the provided password with the hashed password stored in the database using `bcrypt`.
4. If the password matches, generates a JWT token with the user's ID and email, and returns it in the response.
5. If the credentials are invalid, returns an error response indicating "Invalid Credentials".
6. Catches and handles any other errors with a generic server error response.

<!-- TOC --><a name="security-considerations"></a>

#### Security Considerations

- Passwords are hashed using `bcrypt` before being stored in the database to ensure security.
- JWT tokens are used for authentication, providing a secure way to manage user sessions.

<!-- TOC --><a name="post-authregister-register-a-new-user"></a>

### **POST `/auth/register`**: Register a new user.

<!-- TOC --><a name="endpoint-1"></a>

#### Endpoint

- **Path**: `/register`
- **Method**: `POST`
- **Auth Required**: No

<!-- TOC --><a name="request-1"></a>

#### Request

The request to this endpoint must include a JSON payload with the following fields:

- `email`: User's email address (must be unique).
- `password`: User's password.
- `username`: User's chosen username.

**Example Request Body:**

```json
{
 "email": "user@example.com",
 "password": "securepassword123",
 "username": "newuser"
}
```

<!-- TOC --><a name="validation-1"></a>

#### Validation

Before reaching the controller, the request body is validated against a predefined schema to ensure that all required fields are present and conform to the expected formats. This is done using the `validateData` middleware with a `registrationSchema`.

If the request does not pass validation, a `400 Bad Request` response is returned with details about the validation errors.

<!-- TOC --><a name="response-1"></a>

#### Response

- Success Response:
  - Code: 201 Created
  - Content: { "message": "User Created" }
- Error Responses:
  - If the user already exists (duplicate email):
    - Code: 403 Forbidden
    - Content: { "message": "User Already Exists" }
  - For any other server errors:
    - Code: 500 Internal Server Error
    - Content: { "error": "Internal Server Error" }

<!-- TOC --><a name="controller-logic-1"></a>

#### Controller Logic

The `registerAuth` controller performs the following steps:

1. Extracts email, password, and username from the request body.
2. Hashes the password using bcrypt.
3. Attempts to create a new user record in the database with the provided details.
4. Returns a success response if the user is created successfully.
5. Handles known errors, such as duplicate email, and returns appropriate error responses.
6. Catches and responds to any other errors with a generic server error message.

<!-- TOC --><a name="security-considerations-1"></a>

#### Security Considerations

- Passwords are hashed using bcrypt before being stored in the database to ensure security.
- Input validation is performed to prevent injection attacks and ensure data integrity.

<!-- TOC --><a name="warung-routes-warung"></a>

## Warung Routes (`/warung`)

<!-- TOC --><a name="post-warung-create-a-new-warung"></a>

### **POST `/warung`**: Create a new warung.

<!-- TOC --><a name="endpoint-2"></a>

#### Endpoint

- **Path**: /warung
- **Method**: POST
- **Auth Required**: Yes

<!-- TOC --><a name="request-2"></a>

#### Request

To create a new Warung, the request must include a JSON payload with the following fields:

- **name**: The name of the Warung.
- **location**: The location of the Warung.

**Example Request Body:**

```json
{
 "name": "Warung Makan Pak Budi",
 "location": "Jalan Raya No. 123"
}
```

<!-- TOC --><a name="validation-2"></a>

#### Validation

The request body is validated against the createWarungSchema to ensure that all required fields are present and valid. This validation is performed using the validateData middleware.

If the request does not meet the validation criteria, a `400 Bad Request` response is returned with details about the validation errors.

<!-- TOC --><a name="response-2"></a>

#### Response

<!-- TOC --><a name="success-response"></a>

#### Success Response:

- **Code**: 201 Created
- **Content**: JSON representation of the newly created Warung.

<!-- TOC --><a name="error-responses"></a>

#### Error Responses:

If a Warung with the same name and location already exists:

- **Code**: 403 Forbidden
- **Content**: { "message": "Warung Already Exists" }

For any other server errors:

- **Code**: 500 Internal Server Error
- **Content**: { "error": "Internal Server Error" }

<!-- TOC --><a name="controller-logic-2"></a>

#### Controller Logic

The createWarung controller performs the following steps:

1. Extracts name, location, and the authenticated user's id from the request.
2. Attempts to create a new Warung record in the database with the provided details.
3. If successful, returns the newly created Warung record.
4. Handles specific known errors, such as a duplicate Warung entry, by returning appropriate error responses.
5. Catches and handles any other errors with a generic server error response.

<!-- TOC --><a name="security-considerations-2"></a>

#### Security Considerations

- This endpoint requires user authentication. The user's ID is extracted from the authenticated session and associated with the new Warung record.
- Input validation is performed to prevent invalid data from being entered into the database.

<!-- TOC --><a name="get-warung-get-a-list-of-all-warung"></a>

### **GET `/warung`**: Get a list of all warung.

<!-- TOC --><a name="endpoint-3"></a>

#### Endpoint

- **Path**: `/warung`
- **Method**: `GET`
- **Auth Required**: Yes

<!-- TOC --><a name="request-3"></a>

#### Request

This endpoint supports pagination and searching. The following query parameters can be used:

- `page`: The page number of the results to fetch (default is `1`).
- `limit`: The number of results per page (default is `10`).
- `search`: A search term to filter the results by the Warung's name.

**Example Request URL:**

```
/warung?page=2&limit=5&search=nasi
```

<!-- TOC --><a name="validation-3"></a>

#### Validation

The request is validated using Zod to ensure that the provided query parameters meet the expected format. If the validation fails, a `400 Bad Request` response is returned with details about the validation errors.

<!-- TOC --><a name="response-3"></a>

#### Response

- **Success Response:**

  - **Code**: `200 OK`
  - **Content**: A JSON object containing the list of Warungs, total count, current page, and total pages.

- **Error Responses:**

  - For validation errors:

    - **Code**: `400 Bad Request`
    - **Content**: Details about the validation errors.

  - For server errors:
    - **Code**: `500 Internal Server Error`
    - **Content**: `{ "error": "Internal Server Error" }`

<!-- TOC --><a name="controller-logic-3"></a>

#### Controller Logic

The `getAllMyWarung` controller performs the following steps:

1. Validates the request using Zod.
2. Parses pagination and search parameters from the request query.
3. Constructs a query with conditions based on the authenticated user's ID and optional search term.
4. Fetches a paginated list of Warungs from the database.
5. Returns the list of Warungs, along with pagination details.

<!-- TOC --><a name="security-considerations-3"></a>

#### Security Considerations

- This endpoint requires user authentication. Only Warungs associated with the authenticated user's ID are returned.
- Input validation is performed to prevent SQL injection and other malicious activities.

<!-- TOC --><a name="patch-warungid-update-details-of-a-specific-warung"></a>

### **PATCH `/warung/:id`**: Update details of a specific warung.

<!-- TOC --><a name="endpoint-4"></a>

#### Endpoint

- **Path**: `/warung/:warungId`
- **Method**: `PATCH`
- **Auth Required**: Yes

<!-- TOC --><a name="request-4"></a>

#### Request

<!-- TOC --><a name="parameters"></a>

##### Parameters

- `warungId`: The unique identifier of the Warung to be updated. This is a URL parameter.

<!-- TOC --><a name="body"></a>

##### Body

The request body must contain the following field:

- `location`: The new location of the Warung.

**Example Request Body:**

```json
{
 "location": "New Location Address"
}
```

<!-- TOC --><a name="validation-4"></a>

#### Validation

The request data is validated against `updateWarungSchema` to ensure it meets the expected format and types. If the validation fails, a `400 Bad Request` response is returned with details about the validation errors.

<!-- TOC --><a name="response-4"></a>

#### Response

<!-- TOC --><a name="success-response-1"></a>

#### Success Response:

- **Code**: `200 OK`
- **Content**: A JSON object representing the updated Warung.

<!-- TOC --><a name="error-responses-1"></a>

#### Error Responses:

- If the Warung is not found:
  - **Code**: `404 Not Found`
  - **Content**: `{ "message": "Warung not found" }`
- For server errors:
  - **Code**: `500 Internal Server Error`
  - **Content**: `{ "error": "Internal Server Error" }`

<!-- TOC --><a name="controller-logic-4"></a>

#### Controller Logic

The `editWarungById` controller performs the following steps:

1. Validates the request data.
2. Checks if the Warung exists and belongs to the authenticated user.
3. Updates the Warung's location.
4. Returns the updated Warung.

<!-- TOC --><a name="security-considerations-4"></a>

#### Security Considerations

- This endpoint requires user authentication. Only the owner of the Warung can update its details.
- Input validation is performed to prevent SQL injection and other malicious activities.

<!-- TOC --><a name="menu-routes-menu"></a>

## Menu Routes (`/menu`)

<!-- TOC --><a name="post-menu-add-a-new-item-to-the-menu"></a>

### **POST `/menu`**: Add a new item to the menu.

<!-- TOC --><a name="endpoint-5"></a>

#### Endpoint

- **Path**: `/menu/:warungId`
- **Method**: `POST`
- **Auth Required**: Yes

<!-- TOC --><a name="request-5"></a>

#### Request

<!-- TOC --><a name="parameters-1"></a>

#### Parameters

- `warungId`: The unique identifier of the Warung to which the menu item will be added. This is a URL parameter.

<!-- TOC --><a name="body-1"></a>

#### Body

The request body must contain the following fields:

- `title`: The title of the menu item.
- `price`: The price of the menu item.
- `desc`: A description of the menu item.
- `available`: A boolean indicating whether the menu item is available.
- `category`: The category of the menu item.

Additionally, the request must include an image file.

**Example Request Body:**

```json
{
 "title": "Nasi Goreng Spesial",
 "price": 25000,
 "desc": "Delicious special fried rice with extra toppings",
 "available": true,
 "category": "Main Course"
}
```

<!-- TOC --><a name="validation-5"></a>

#### Validation

The request data is validated using the `createMenuSchema`. The following middlewares are used:

- `authenticationMiddleware`: Ensures the user is authenticated.
- `upload.single("image")`: Handles the image upload.
- `imgValidate`: Validates the uploaded image.
- `authorizationWarungMiddleware`: Ensures the user is authorized to add menu items to the specified Warung.
- `validateData(createMenuSchema)`: Validates the request body data.

If the validation fails, a `400 Bad Request` response is returned with details about the validation errors.

<!-- TOC --><a name="response-5"></a>

#### Response

<!-- TOC --><a name="success-response-2"></a>

#### Success Response:

- **Code**: `201 Created`
- **Content**: A JSON object representing the newly created menu item.

<!-- TOC --><a name="error-responses-2"></a>

#### Error Responses:

- For validation errors:
  - **Code**: `400 Bad Request`
  - **Content**: Details about the validation errors.
- For server errors:
  - **Code**: `500 Internal Server Error`
  - **Content**: `{ "error": "Internal Server Error" }`

<!-- TOC --><a name="controller-logic-5"></a>

#### Controller Logic

The `createMenu` controller performs the following steps:

1. Extracts the authenticated user's ID from the request.
2. Extracts the `warungId` from the request parameters.
3. Extracts `title`, `price`, `desc`, `available`, and `category` from the request body.
4. Converts the uploaded image to a base64 data URI and uploads it to a cloud storage.
5. Creates a new menu item in the database with the provided details and the image URL.
6. Returns the newly created menu item.

<!-- TOC --><a name="security-considerations-5"></a>

#### Security Considerations

- This endpoint requires user authentication. The authenticated user's ID is associated with the new menu item.
- Authorization middleware ensures that only the owner of the Warung can add menu items to it.
- Input validation is performed to prevent SQL injection and other malicious activities.

<!-- TOC --><a name="get-menu-get-a-list-of-all-menu-items"></a>

### **GET `/menu`**: Get a list of all menu items.

<!-- TOC --><a name="endpoint-6"></a>

#### Endpoint

- **Path**: `/menu`
- **Method**: `GET`
- **Auth Required**: Yes

<!-- TOC --><a name="request-6"></a>

#### Request

<!-- TOC --><a name="query-parameters"></a>

#### Query Parameters

- `page`: The page number of the results to fetch (default is `1`).
- `limit`: The number of results per page (default is `10`).
- `search`: A search term to filter the results by the menu item's title.
- `category`: A category to filter the results by the menu item's category.
- `available`: A boolean to filter the results by the menu item's availability.

**Example Request URL:**

```
/menu?page=2&limit=5&search=pasta&category=Main Course&available=true
```

<!-- TOC --><a name="validation-6"></a>

#### Validation

The request is validated using Zod to ensure that the provided query parameters meet the expected format. If the validation fails, a `400 Bad Request` response is returned with details about the validation errors.

<!-- TOC --><a name="response-6"></a>

#### Response

<!-- TOC --><a name="success-response-3"></a>

#### Success Response:

- **Code**: `200 OK`
- **Content**: A JSON object containing the list of menu items, total count, current page, and total pages.

<!-- TOC --><a name="error-responses-3"></a>

#### Error Responses:

- For validation errors:
  - **Code**: `400 Bad Request`
  - **Content**: Details about the validation errors.
- For server errors:
  - **Code**: `500 Internal Server Error`
  - **Content**: `{ "error": "Internal Server Error" }`

<!-- TOC --><a name="controller-logic-6"></a>

#### Controller Logic

The `getAllMenu` controller performs the following steps:

1. Extracts the authenticated user's ID from the request.
2. Validates the request using Zod.
3. Parses pagination, search, category, and available parameters from the request query.
4. Constructs a query with conditions based on the authenticated user's ID and optional filters.
5. Fetches a paginated list of menu items from the database.
6. Returns the list of menu items, along with pagination details.

<!-- TOC --><a name="security-considerations-6"></a>

#### Security Considerations

- This endpoint requires user authentication. Only menu items associated with the authenticated user's ID are returned.
- Input validation is performed to prevent SQL injection and other malicious activities.

<!-- TOC --><a name="patch-menuwarungidmenuid-update-an-item-from-the-menu"></a>

### **PATCH `/menu/:warungId/:menuId`**: Update an item from the menu.

<!-- TOC --><a name="endpoint-7"></a>

#### Endpoint

- **Path**: `/menu/:warungId/:menuId`
- **Method**: `PATCH`
- **Auth Required**: Yes

<!-- TOC --><a name="request-7"></a>

#### Request

<!-- TOC --><a name="parameters-2"></a>

#### Parameters

- `warungId`: The unique identifier of the Warung to which the menu item belongs. This is a URL parameter.
- `menuId`: The unique identifier of the menu item to be updated. This is a URL parameter.

<!-- TOC --><a name="body-2"></a>

#### Body

The request body can contain the following fields:

- `title`: The new title of the menu item.
- `price`: The new price of the menu item.
- `desc`: The new description of the menu item.
- `available`: A boolean indicating whether the menu item is available.
- `category`: The new category of the menu item.

**Example Request Body:**

```json
{
 "title": "Updated Nasi Goreng Spesial",
 "price": 30000,
 "desc": "Updated description for special fried rice",
 "available": false,
 "category": "Main Course"
}
```

<!-- TOC --><a name="validation-7"></a>

#### Validation

The request data is validated using the `updateMenuSchema`. The following middlewares are used:

- `authorizationWarungMiddleware`: Ensures the user is authorized to update menu items for the specified Warung.
- `validateData(updateMenuSchema)`: Validates the request body data.

If the validation fails, a `400 Bad Request` response is returned with details about the validation errors.

<!-- TOC --><a name="response-7"></a>

#### Response

<!-- TOC --><a name="success-response-4"></a>

#### Success Response:

- **Code**: `200 OK`
- **Content**: A JSON object representing the updated menu item.

<!-- TOC --><a name="error-responses-4"></a>

#### Error Responses:

- For validation errors:
  - **Code**: `400 Bad Request`
  - **Content**: Details about the validation errors.
- For server errors:
  - **Code**: `500 Internal Server Error`
  - **Content**: `{ "error": "Internal Server Error" }`

<!-- TOC --><a name="controller-logic-7"></a>

#### Controller Logic

The `updateMenu` controller performs the following steps:

1. Extracts the `warungId` and `menuId` from the request parameters.
2. Extracts `title`, `price`, `desc`, `available`, and `category` from the request body.
3. Constructs an update object with the provided fields, converting data types as necessary.
4. Updates the specified menu item in the database.
5. Returns the updated menu item.

<!-- TOC --><a name="security-considerations-7"></a>

#### Security Considerations

- This endpoint requires user authentication. Only the owner of the Warung can update its menu items.
- Authorization middleware ensures that only the owner of the Warung can update menu items for it.
- Input validation is performed to prevent SQL injection and other malicious activities.

<!-- TOC --><a name="bill-routes-bill"></a>

## Bill Routes (`/bill`)

<!-- TOC --><a name="get-billall-retrieve-all-bills"></a>

### **GET `/bill/all`**: Retrieve all bills.

<!-- TOC --><a name="endpoint-8"></a>

#### Endpoint

- **Path**: `/bill/all`
- **Method**: `GET`
- **Auth Required**: Yes

<!-- TOC --><a name="request-8"></a>

#### Request

<!-- TOC --><a name="query-parameters-1"></a>

#### Query Parameters

- `page`: The page number of the results to fetch (default is `1`).
- `limit`: The number of results per page (default is `10`).
- `search`: A search term to filter the results by the customer's name.
- `status`: A status to filter the results by the bill's status.
- `approved`: A boolean to filter the results by the bill's approval status.

**Example Request URL:**

```
/bill/all?page=2&limit=5&search=john&status=paid&approved=true
```

<!-- TOC --><a name="validation-8"></a>

#### Validation

The request is validated using Zod to ensure that the provided query parameters meet the expected format. If the validation fails, a `400 Bad Request` response is returned with details about the validation errors.

<!-- TOC --><a name="response-8"></a>

#### Response

<!-- TOC --><a name="success-response-5"></a>

#### Success Response:

- **Code**: `200 OK`
- **Content**: A JSON object containing the list of bills, total count, current page, and total pages.

<!-- TOC --><a name="error-responses-5"></a>

#### Error Responses:

- For validation errors:
  - **Code**: `400 Bad Request`
  - **Content**: Details about the validation errors.
- For server errors:
  - **Code**: `500 Internal Server Error`
  - **Content**: `{ "error": "Internal Server Error" }`

<!-- TOC --><a name="controller-logic-8"></a>

#### Controller Logic

The `getAllUserBill` controller performs the following steps:

1. Extracts the authenticated user's ID from the request.
2. Validates the request using Zod.
3. Parses pagination, search, status, and approved parameters from the request query.
4. Constructs a query with conditions based on the authenticated user's ID and optional filters.
5. Fetches a paginated list of bills from the database.
6. Returns the list of bills, along with pagination details.

<!-- TOC --><a name="security-considerations-8"></a>

#### Security Considerations

- This endpoint requires user authentication. Only bills associated with the authenticated user's ID are returned.
- Input validation is performed to prevent SQL injection and other malicious activities.

<!-- TOC --><a name="patch-billwarungideditmenuid-update-details-of-a-specific-bill"></a>

### **PATCH `/bill/:warungId/edit/:menuId`**: Update details of a specific bill.

<!-- TOC --><a name="endpoint-9"></a>

#### Endpoint

- **Path**: `/bill/:warungId/edit/:billId`
- **Method**: `PATCH`
- **Auth Required**: Yes

<!-- TOC --><a name="request-9"></a>

#### Request

<!-- TOC --><a name="parameters-3"></a>

#### Parameters

- `warungId`: The unique identifier of the Warung to which the bill belongs. This is a URL parameter.
- `billId`: The unique identifier of the bill to be updated. This is a URL parameter.

<!-- TOC --><a name="body-3"></a>

#### Body

The request body can contain the following fields:

- `status`: The new status of the bill.
- `approved`: A boolean indicating whether the bill is approved.
- `customerName`: The new name of the customer.

**Example Request Body:**

```json
{
 "status": "paid",
 "approved": true,
 "customerName": "John Doe"
}
```

<!-- TOC --><a name="validation-9"></a>

#### Validation

The request data is validated using the `updateBillSchema`. The following middlewares are used:

- `authorizationWarungMiddleware`: Ensures the user is authorized to update bills for the specified Warung.
- `validateData(updateBillSchema)`: Validates the request body data.

If the validation fails, a `400 Bad Request` response is returned with details about the validation errors.

<!-- TOC --><a name="response-9"></a>

#### Response

<!-- TOC --><a name="success-response-6"></a>

#### Success Response:

- **Code**: `200 OK`
- **Content**: A JSON object representing the updated bill.

<!-- TOC --><a name="error-responses-6"></a>

#### Error Responses:

- For validation errors:
  - **Code**: `400 Bad Request`
  - **Content**: Details about the validation errors.
- If the bill is not found:
  - **Code**: `404 Not Found`
  - **Content**: `{ "message": "Bill not found" }`
- For server errors:
  - **Code**: `500 Internal Server Error`
  - **Content**: `{ "error": "Internal Server Error" }`

<!-- TOC --><a name="controller-logic-9"></a>

#### Controller Logic

The `updateBillById` controller performs the following steps:

1. Extracts the `billId` and `userId` from the request parameters and the authenticated user respectively.
2. Validates the request body using the defined schema.
3. Fetches the bill from the database using the `billId` and `userId`.
4. Constructs an update object with the provided fields, converting data types as necessary.
5. Updates the specified bill in the database.
6. Returns the updated bill.

<!-- TOC --><a name="security-considerations-9"></a>

#### Security Considerations

- This endpoint requires user authentication. Only the owner of the Warung can update its bills.
- Authorization middleware ensures that only the owner of the Warung can update bills for it.
- Input validation is performed to prevent SQL injection and other malicious activities.

<!-- TOC --><a name="dependencies"></a>

## Dependencies

This project uses the following major dependencies:

- **Node.js**: Runtime environment.
- **Express**: Web application framework.
- **Prisma**: ORM for database management.
- **Cloudinary**: Service for managing media files.
- **Zod**: For schema validation.
- Other dependencies include `bcrypt`, `body-parser`, `cors`, `dotenv`, `http-status-codes`, `jsonwebtoken`, `multer`.

<!-- TOC --><a name="acknowledgements"></a>

## Acknowledgements

Special thanks to the contributors and supporters of the technologies used in this project. Their dedication to open source makes projects like this possible.

<!-- TOC --><a name="authors"></a>

## Authors

- **Kurao Hikari** - _Initial Work_ - [GitHub Profile](https://github.com/KuraoHikari)

<!-- TOC --><a name="license"></a>

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
