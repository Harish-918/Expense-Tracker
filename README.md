# Expense Tracker

The **Expense Tracker** is a full-stack application that allows users to track their expenses. It consists of a **frontend** built with **React** and a **backend** powered by **Express.js** and **MongoDB**. The app provides functionality to add, edit, delete, and display expenses. It also displays a visual breakdown of expenses by category using charts.

## Problem Statement
Managing personal finances can be a daunting task. Many individuals struggle to track their daily expenses, leading to difficulty in budgeting and understanding where their money is going. Without an organized system for tracking spending, it becomes challenging to manage finances effectively and make informed financial decisions. The Expense Tracker application aims to solve this problem by providing an easy-to-use, intuitive tool for tracking expenses. It allows users to add, modify, and delete expenses, as well as visualize their spending patterns through a pie chart, helping them stay on top of their financial goals.

## Features

- **Add Expense**: Users can add new expenses with a title, amount, and category.
- **Edit Expense**: Users can modify the details of an existing expense.
- **Delete Expense**: Users can remove an expense from the system.
- **Expense Breakdown**: Displays a pie chart to visualize expenses by category.
- **Total Expenses**: Displays the total amount of all expenses.

## Technologies Used

### Frontend:
- **React**: JavaScript library for building the user interface.
- **Axios**: HTTP client for making requests to the backend API.
- **Chart.js**: JavaScript charting library to create pie charts for expense breakdown.
- **Material-UI**: A popular React component library for UI elements like cards and typography.
- **React Router**: Library for routing between different views (e.g., Home, Add Expense, Dashboard).

### Backend:
- **Node.js**: JavaScript runtime for the server-side logic.
- **Express.js**: Web framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing expenses data.
- **Mongoose**: MongoDB object modeling tool for defining schemas and interacting with the database.
- **CORS**: Middleware for enabling cross-origin requests between frontend and backend.

## API Endpoints

### POST `/addexpense`
Adds a new expense.
- **Request Body**: 
  ```json
  {
    "title": "string",
    "amount": "number",
    "category": "string"
  }
  ```
- **Response**: The created expense object.

### GET `/getexpense`
Fetches all expenses.
- **Response**: An array of expense objects:
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
Edits an expense based on its title.
- **Request Parameters**: `title` (Expense title to edit)
- **Request Body**:
  ```json
  {
    "title": "string",
    "amount": "number",
    "category": "string"
  }
  ```
- **Response**: The updated expense object.

### DELETE `/deleteexpense/:title`
Deletes an expense based on its title.
- **Request Parameters**: `title` (Expense title to delete)
- **Response**: The deleted expense object.

## Setup Instructions

### Prerequisites

- **Node.js**: Ensure Node.js is installed. You can verify by running `node -v` in the terminal.
- **MongoDB**: A local or cloud MongoDB instance is required. The app expects MongoDB to be available at `mongodb://127.0.0.1:27017`.

### Client-Side Setup (React)

1. Clone the repository:

   ```bash
   git clone https://github.com/Harish-918/Expense-Tracke.git
   ```

2. Navigate to the `frontend` directory:

   ```bash
   cd frontend
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

   The React app will be available at `http://localhost:3000`.

### Server-Side Setup (Express + MongoDB)

1. Navigate to the `backend` directory:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Ensure MongoDB is running on your local machine or use a cloud MongoDB instance.

4. Start the server:

   ```bash
   npm start
   ```

   The Express server will run on port `9418` by default.

### Connecting Frontend with Backend

Make sure the backend server is running and accessible at `http://localhost:9418`. The frontend (React app) will make requests to this URL to interact with the backend.

## Contributing

Feel free to fork this repository, make changes, and submit pull requests. When contributing, please adhere to the following guidelines:
- Follow standard coding conventions.
- Write clear, descriptive commit messages.
- Ensure the app is working as expected before submitting changes.
