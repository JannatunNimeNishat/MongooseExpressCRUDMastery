# Express CRUD API with MongoDB

This is a simple Express.js application with CRUD (Create, Read, Update, Delete) operations using MongoDB for user management. It also includes functionality for handling user orders.

## Table of Contents

- [Endpoints](#endpoints)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Usage](#usage)
- [License](#license)

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

4. **Delete User**

   - Method: DELETE
   - Endpoint: `https://assignment-2-mongoose-express-crudm-astery.vercel.app/api/users/{userId}`

5. **Add New Product in Order**

   - Method: PUT
   - Endpoint: `https://assignment-2-mongoose-express-crudm-astery.vercel.app/api/users/{userId}/orders`

6. **Get Single User Orders**

   - Method: GET
   - Endpoint: `https://assignment-2-mongoose-express-crudm-astery.vercel.app/api/users/{userId}/orders`

7. **Get Single User Orders Total Price**

   - Method: GET
   - Endpoint: `https://assignment-2-mongoose-express-crudm-astery.vercel.app/api/users/{userId}/orders/total-price`

8. **Update User Info**
   - Method: PUT
   - Endpoint: `https://assignment-2-mongoose-express-crudm-astery.vercel.app/api/users/{userId}`

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

## Usage

1. Install dependencies: `npm install`
2. Set up MongoDB database and configure connection in `.env` file.
3. Run the application: `npm start`
4. Access the API at `http://localhost:your-port/`

## Setup

1. **Clone the repository.**
   ```bash
   git clone https://github.com/JannatunNimeNishat/MongooseExpressCRUDMastery
   ```

## Project Usage

1. Install dependencies: `npm install`
2. Configure MongoDB connection in `.env` file.
3. Run the application: `npm start`
4. Access the API at `http://localhost:your-port/`

## Validation

Incoming data is validated using Joi/Zod in the `validation.middleware.ts` to ensure data integrity.

## Configuration

Ensure to set up the MongoDB connection details in the `.env` file.

```env
DB_CONNECTION_STRING=your-mongodb-connection-string
PORT=your-app-port

```
