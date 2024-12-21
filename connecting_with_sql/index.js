// index.js
require("dotenv").config();
const cors = require('cors');
const express = require('express');
const { dbConnect } = require('./config/database');
const Blood = require('./models/blood'); // Import the Blood model

// Initialize express app
const app = express();
app.use(express.json());
app.use(cors());

// Import the routes
const router = require('./routes/routes.js');
app.use('/api/v1', router);  // Use the routes with a base URL of /api/v1

app.use(cors({
    origin: "http://127.0.0.1:5500", // Allow frontend origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // Allow credentials (cookies, headers, etc.)
}));


// Connect to the database and sync the Blood model
(async () => {
    try {
        await dbConnect();  // Ensure database connection
        await Blood.sync();  // Synchronize the Blood model with the database
        console.log('Blood table synchronized');
    } catch (error) {
        console.error('Error syncing the Blood table:', error);  // Log any errors
    }
})();

// Set the port for the server
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`APP STARTED AT ${port}`);
});