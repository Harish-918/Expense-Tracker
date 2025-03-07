# Expense Tracker - Server Side

This is the backend server for the Expense Tracker application built with **Express.js** and **MongoDB**. It provides the necessary RESTful API to manage expenses, including adding, editing, deleting, and retrieving expenses.

## Technologies Used

- **Node.js**: JavaScript runtime used to build the server.
- **Express.js**: Web framework for Node.js used to create the RESTful API.
- **MongoDB**: NoSQL database used to store expense data.
- **Mongoose**: MongoDB object modeling tool used for schema and data interaction.
- **CORS**: Middleware to allow cross-origin resource sharing between the frontend and backend.

## Features

- **Add Expense**: Allows users to add a new expense with details like title, amount, and category.
- **Get Expenses**: Fetches all expenses stored in the database.
- **Edit Expense**: Updates the details of an existing expense based on its title.
- **Delete Expense**: Deletes an expense by its title.
- **MongoDB Integration**: Uses MongoDB for persistent data storage.

## API Endpoints

### POST `/addexpense`
Adds a new expense to the database.
- **Request Body**: 
  ```json
  {
    "title": "string",
    "amount": "number",
    "category": "string"
  }
  ```
- **Response**: 
  Returns the created expense object.

### GET `/getexpense`
Retrieves all expenses from the database.
- **Response**: 
  Returns an array of expense objects.
  ```json
  [
    {
      "_id": "string",
      "title": "string",
      "amount": "number",
      "category": "string"
    }
  ]
  ```

### PUT `/editexpense/:title`
Edits an existing expense based on its title.
- **Request Parameters**:
  - `title`: The title of the expense to edit.
- **Request Body**:
  ```json
  {
    "title": "string",
    "amount": "number",
    "category": "string"
  }
  ```
- **Response**:
  Returns the updated expense object.

### DELETE `/deleteexpense/:title`
Deletes an expense based on its title.
- **Request Parameters**:
  - `title`: The title of the expense to delete.
- **Response**: 
  Returns the deleted expense object.

## Setup Instructions

To set up the server locally, follow these steps:

### Prerequisites

- **Node.js**: Ensure you have Node.js installed. You can check if it's installed by running `node -v` in your terminal.
- **MongoDB**: Ensure that MongoDB is running locally or use a MongoDB Atlas instance. The server expects MongoDB to be available at `mongodb://127.0.0.1:27017`.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Harish-918/Expense-Tracker.git
   ```

2. Navigate to the project directory:

   ```bash
   cd server
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the server:

   ```bash
   npm start
   ```

   The server will start running on port `9418` by default.

5. Your API will be available at `http://localhost:9418`.

## Database Configuration

By default, the server is set to connect to a local MongoDB instance running at `mongodb://127.0.0.1:27017`. If you're using a cloud database like MongoDB Atlas, update the connection string in the `config/db.js` file.

## Folder Structure

```
/server
  /config
    - db.js              # MongoDB connection setup
  /model
    - expense.js          # Expense Mongoose schema
  /routes
    - expenseRoutes.js    # API routes for managing expenses
  - app.js                # Main Express server setup
  - server.js             # Starts the server
  - package.json          # Project dependencies and scripts
```

- **db.js**: Handles the connection to MongoDB.
- **expense.js**: Contains the Mongoose schema for the `Expense` model.
- **expenseRoutes.js**: Contains the API routes for adding, editing, deleting, and fetching expenses.
- **app.js**: Main file for setting up Express and connecting routes.
- **server.js**: Starts the server and listens on the configured port.

## Running Tests

Currently, this project does not include automated tests. You can manually test the API by using tools like [Postman](https://www.postman.com/) or by sending requests using `curl` in the terminal.

## Contributing

Feel free to fork this repository and create a pull request if you'd like to contribute. Please follow proper coding standards and write clear commit messages.