const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models/users');

const signUp = async (req, res) => {
    console.log(req.body);
    const { fname, lname, email,blood_group, password} = req.body;

    try {

        // Check if user already exists
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: "Email already in use" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const user = await User.create({
            fname,
            lname,
            blood_group,
            email,
            password: hashedPassword,
            confirm_password: hashedPassword
        });

        res.status(201).json({ message: "User created successfully", user });
    } catch (error) {
        console.error("Error during sign-up:", error); // This will log the complete error stack
        res.status(500).json({ message: "Server error", error });
    }
};

module.exports = signUp;