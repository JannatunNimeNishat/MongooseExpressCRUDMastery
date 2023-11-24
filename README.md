# Express CRUD API with MongoDB and Mongoose

This is a Express.js application with CRUD (Create, Read, Update, Delete) operations using MongoDB and Mongoose for user management. It also includes functionality for handling user orders.

## Table of Contents

- [Endpoints](#endpoints)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Setup](#setup)
- [Usage](#project-usage)

## Endpoints

1. **Create User**

   - Method: POST
   - Endpoint: `https://assignment-2-mongoose-express-crudm-astery.vercel.app/api/users`

2. **Get All Users**

   - Method: GET
   - Endpoint: `https://assignment-2-mongoose-express-crudm-astery.vercel.app/api/users`

3. **Get Single User**

   - Method: GET
   - Endpoint: `http://localhost:5000/api/users/{userId}`

4. **Update User Info**
   - Method: PUT
   - Endpoint: `https://assignment-2-mongoose-express-crudm-astery.vercel.app/api/users/{userId}`

5. **Delete User**

   - Method: DELETE
   - Endpoint: `https://assignment-2-mongoose-express-crudm-astery.vercel.app/api/users/{userId}`

6. **Add New Product in Order**

   - Method: PUT
   - Endpoint: `https://assignment-2-mongoose-express-crudm-astery.vercel.app/api/users/{userId}/orders`

7. **Get Single User Orders**

   - Method: GET
   - Endpoint: `https://assignment-2-mongoose-express-crudm-astery.vercel.app/api/users/{userId}/orders`

8. **Get Single User Orders Total Price**

   - Method: GET
   - Endpoint: `https://assignment-2-mongoose-express-crudm-astery.vercel.app/api/users/{userId}/orders/total-price`



## Impotent Links

1. **Live Link**

   - Live Link: `https://assignment-2-mongoose-express-crudm-astery.vercel.app`

2. **Github Code**
   - Live Link: `https://github.com/JannatunNimeNishat/MongooseExpressCRUDMastery`

## Technologies Used

- Express.js
- Mongoose
- TypeScript
- Zod (for validation)
- CORS
- Bcrypt
- Dotenv
- ESLint
- Prettier


## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

- Node.js 
- npm or yarn

## Setup

1. **Clone the repository.**
   ```bash
   git clone https://github.com/JannatunNimeNishat/MongooseExpressCRUDMastery
   ```

## Project Usage

1. Install dependencies: `npm install`
2. Configure MongoDB connection in `.env` file.
3. Run the application: `npm run start:dev`
4. Access the API at `http://localhost:your-port/`

## Validation

Incoming data is validated using Joi/Zod in the `validation.middleware.ts` to ensure data integrity.

## Configuration

Ensure to set up the MongoDB connection details in the `.env` file.

```env
DB_CONNECTION_STRING=your-mongodb-connection-string
PORT=your-app-port

```
