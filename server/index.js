const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const expenseRoutes = require('./routes/expenseRoutes');
const app = express();
connectDB();
app.use(express.json());
app.use(cors());

app.use('/', expenseRoutes);

const PORT = 9418;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})