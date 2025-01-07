const Camp = require('../models/BloodCamp.js');

// AddCamp Function
const AddCamp = async (req, res) => {
    try {
        // Extract data from request body
        const { camp_name, location, camp_date, start_time, end_time, contact, description } = req.body;

        // Validate required fields
        if (!camp_name || !location || !camp_date || !start_time || !end_time || !contact || !description) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Create a new camp instance
        const newCamp = await Camp.create({
            camp_name,
            location,
            camp_date,
            start_time,
            end_time,
            contact,
            description,
        });


        // Send success response
        res.status(201).json({ message: 'Camp added successfully!', camp: newCamp });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error. Please try again later.' });
    }
};

const bloodCamps = async (req,res) => {
    try {
        const bloodBanks = await Camp.findAll({
          attributes: ['id','camp_name','location','camp_date','start_time','end_time','contact','description'], 
        });
        return res.status(200).json(bloodBanks);
      } catch (error) {
        console.error('Error fetching blood banks:', error);
        return res.status(500).json({ message: 'Error fetching blood banks', error: error.message });
      }
}

module.exports =  {AddCamp,bloodCamps} ;