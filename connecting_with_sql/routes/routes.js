// routes/routes.js
const express = require('express');
const router = express.Router();
const { getBloodData } = require('../controllers/bloodController');  // Import the controller function
const {getBloodBank,addBloodBank} =require('../controllers/bloodBank');
const signUp =require('../controllers/signUp');
const logIn =require('../controllers/logIn');
const {AddCamp,bloodCamps}=require('../controllers/Camps.js');
const {addDonor} = require('../controllers/registerDonor.js');

// Define the route for getting blood data
router.get('/blood', getBloodData);  // When a GET request is made to /blood, it calls the getBloodData function
router.get('/getBloodBank',getBloodBank);
router.get('/bloodCamps',bloodCamps);
router.post('/addBloodBank',addBloodBank);
router.post('/signup',signUp);
router.post('/login',logIn);
router.post('/AddCamp',AddCamp);
router.post('/registerDonor',addDonor);

module.exports = router;