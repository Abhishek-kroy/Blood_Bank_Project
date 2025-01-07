const DonorRegistration = require("../models/Donors");

const addDonor = async (req, res) => {
    const {
      full_name,
      age,
      gender,
      blood_group,
      email,
      contact_number,
      address,
      medicalHistory,
      consent,
    } = req.body;

    try {
        // Check if the email is already in use by an existing donor
        const existingUser = await DonorRegistration.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: "You are already registered as Donor" });
        }
        
        // Register new donor
        const newDonor = await DonorRegistration.create({
            full_name,
            age,
            gender,
            blood_group,
            email,
            contact_number,
            address,
            medicalHistory,
            consent
        });

        // Return success response
        return res.status(201).json({
            message: "Donor registered successfully",
            donorId: newDonor.id,
            donorDetails: {
                fullName: newDonor.fullName,
                age: newDonor.age,
                gender: newDonor.gender,
                bloodGroup: newDonor.bloodGroup,
                email: newDonor.email,
                contactNumber: newDonor.contactNumber,
                address: newDonor.address,
                medicalHistory: newDonor.medicalHistory,
                consent: newDonor.consent,
            }
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "An error occurred while processing the request" });
    }
};

module.exports = { addDonor };