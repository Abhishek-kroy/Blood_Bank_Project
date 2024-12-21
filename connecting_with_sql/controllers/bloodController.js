// controllers/bloodController.js
const Blood = require('../models/blood');  // Import the Blood model

// Function to get all blood data from the database
const getBloodData = async (req, res) => {
    try {
        const bloodData = await Blood.findAll();  // Fetch all blood data from the table
        res.status(200).json(bloodData);  // Send the data as JSON response
    } catch (error) {
        console.error('Error fetching blood data:', error);  // Log the error
        res.status(500).json({ message: 'Error fetching blood data' });  // Send error response
    }
};

// Export the function to be used in the routes
module.exports = { getBloodData };