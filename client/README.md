# Expense Tracker

An Expense Tracker built with React, Axios, and Chart.js. This app allows users to track their expenses by adding, editing, and deleting entries. It also provides a visual breakdown of expenses by category using pie charts.

## Features

- **Add Expense**: Users can add new expenses with title, amount, and category.
- **Edit Expense**: Users can edit the details of an existing expense.
- **Delete Expense**: Users can delete an expense.
- **Expense Breakdown**: Visual representation of expenses in different categories using a pie chart.
- **Total Expenses**: Displays the total of all expenses added.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Axios**: HTTP client for making requests to a backend API.
- **Chart.js**: Used for generating pie charts to display the breakdown of expenses by category.
- **React Router**: To handle routing and navigation within the app.
- **Material-UI**: Provides React components for the UI (e.g., Card, Typography).

## Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone [https://github.com/your-username/expense-tracker.git](https://github.com/Harish-918/Expense-Tracker)
   ```

2. Navigate to the project directory:

   ```bash
   cd expense-tracker
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Run the app:

   ```bash
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to view the app.

## API

This project assumes you have an API running locally to handle requests to add, get, edit, and delete expenses. You can create your own API or use the following endpoints for testing:

- **POST /addexpense**: Adds a new expense. Requires `title`, `amount`, and `category`.
- **GET /getexpense**: Fetches all expenses.
- **PUT /editexpense/:title**: Updates an existing expense based on the title.
- **DELETE /deleteexpense/:title**: Deletes an expense based on the title.

Make sure your backend server is running on `http://localhost:9418` or update the API URLs in the code if necessary.

- **AddExpense.js**: Form to add a new expense.
- **Dashboard.js**: Displays the pie chart with expenses breakdown.
- **EditExpense.js**: Form to edit an existing expense.
- **Home.js**: Lists all expenses with options to edit and delete.
- **Navbar.js**: Navigation bar for navigating between different pages.

## Contributing

If you'd like to contribute to this project, feel free to fork the repository, make your changes, and create a pull request.
