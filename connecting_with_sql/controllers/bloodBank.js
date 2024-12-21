// routes/routes.js
const BloodBank = require('../models/bloodBank');  // Import the BloodBank model

// Get all blood banks
const getBloodBank = async (req, res) => {
    try {
      const bloodBanks = await BloodBank.findAll({
        attributes: ['b_id', 'b_first_name', 'b_last_name', 'email', 'contact_no', 'since', 'street_no', 'street_name', 'zipcode', 'state', 'district', 'city', 'availability', 'last_update', 'type', 'latitude', 'longitude'], // Include latitude and longitude
      });
      return res.status(200).json(bloodBanks);
    } catch (error) {
      console.error('Error fetching blood banks:', error);
      return res.status(500).json({ message: 'Error fetching blood banks', error: error.message });
    }
  };

// Add new blood bank (Optional, for testing)
const addBloodBank = async (req,res) => {
    try {
        const { b_first_name, b_last_name, email, contact_no, street_no, street_name, zipcode, state, district, city, type, latitude, longtitude } = req.body;

        const newBloodBank = await BloodBank.create({
            b_first_name,
            b_last_name,
            email,
            contact_no,
            street_no,
            street_name,
            zipcode,
            state,
            district,
            city,
            type,
            latitude,
            longtitude
        });

        res.status(201).json(newBloodBank);  // Return the created blood bank as a JSON response
    } catch (error) {
        console.error('Error creating blood bank:', error);
        res.status(500).json({ message: 'Failed to create blood bank' });
    }
};

module.exports = {getBloodBank,addBloodBank};