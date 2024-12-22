const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models/users');

const signUp = async (req, res) => {
    console.log(req.body);
    const { fname, lname, address, email,  password, contact_no, type } = req.body; // Added 'type' in request body

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: "Email already in use" });
        }

        // Validate the user type
        const validTypes = ['donor', 'recipient', 'admin']; // Allowed types
        if (!validTypes.includes(type)) {
            return res.status(400).json({ message: "Invalid user type" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const user = await User.create({
            fname,
            lname,
            address,
            email,
            password: hashedPassword,
            contact_no,
            type
        });

        res.status(201).json({ message: "User created successfully", user });
    } catch (error) {
        console.error("Error during sign-up:", error); // Logs the complete error stack
        res.status(500).json({ message: "Server error", error });
    }
};

module.exports = signUp;