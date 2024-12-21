// routes/routes.js
const express = require('express');
const router = express.Router();
const { getBloodData } = require('../controllers/bloodController');  // Import the controller function
const {getBloodBank,addBloodBank} =require('../controllers/bloodBank');

// Define the route for getting blood data
router.get('/blood', getBloodData);  // When a GET request is made to /blood, it calls the getBloodData function
router.get('/getBloodBank',getBloodBank);
router.post('/addBloodBank',addBloodBank);


module.exports = router;