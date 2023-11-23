# User Management API

This API is developed using Express.js, Mongoose, TypeScript, 'zod' for validation, CORS, Bcrypt, Dotenv, ESLint, and Prettier. It provides endpoints for user management, including user creation, retrieval, updating, and deletion, as well as managing user orders.

## API Endpoints

### 1. Create User

- **Method:** POST
- **Endpoint:** `https://assignment-2-mongoose-express-crudm-astery.vercel.app/api/users`
- **Description:** Create a new user by providing the required information in the request body.

### 2. Get All Users

- **Method:** GET
- **Endpoint:** `https://assignment-2-mongoose-express-crudm-astery.vercel.app/api/users`
- **Description:** Retrieve a list of all users.

### 3. Get Single User

- **Method:** GET
- **Endpoint:** `http://localhost:5000/api/users/6`
- **Description:** Retrieve information about a specific user by providing the user ID in the endpoint.

### 4. Delete User

- **Method:** DELETE
- **Endpoint:** `https://assignment-2-mongoose-express-crudm-astery.vercel.app/api/users/6`
- **Description:** Delete a user by providing the user ID in the endpoint.

### 5. Add New Product in Order

- **Method:** PUT
- **Endpoint:** `https://assignment-2-mongoose-express-crudm-astery.vercel.app/api/users/1/orders`
- **Description:** Add a new product to the order of a specific user by providing the user ID in the endpoint.

### 6. Get Single User Orders

- **Method:** GET
- **Endpoint:** `https://assignment-2-mongoose-express-crudm-astery.vercel.app/api/users/3/orders`
- **Description:** Retrieve the orders for a specific user by providing the user ID in the endpoint.

### 7. Get Single User Orders Total Price

- **Method:** GET
- **Endpoint:** `https://assignment-2-mongoose-express-crudm-astery.vercel.app/api/users/3/orders/total-price`
- **Description:** Retrieve the total price of all orders for a specific user by providing the user ID in the endpoint.

### 8. Update User Info

- **Method:** PUT
- **Endpoint:** `https://assignment-2-mongoose-express-crudm-astery.vercel.app/api/users/1`
- **Description:** Update the information of a specific user by providing the user ID in the endpoint.

## Getting Started

Follow the instructions in the [Getting Started](#getting-started) section to clone the repository, install dependencies, set up environment variables, and run the development server.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the [MIT License](LICENSE).