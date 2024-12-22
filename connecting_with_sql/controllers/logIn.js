const bcrypt = require('bcrypt'); // or bcryptjs
const jwt = require('jsonwebtoken');
const { User } = require('../models/users');

const logIn = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find user by email
        const user = await User.findOne({ where: { email } });
        if (!user) {
            console.log("User not found");
            return res.status(404).json({ message: "User not found" });
        }

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            console.log("Password mismatch");
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // Generate token
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '24h' });

        res.status(200).json({ message: "Login successful", token,fname: user.fname  });
    } catch (error) {
        console.error("Error during login:", error);  // Log error to identify issue
        res.status(500).json({ message: "Server error", error });
    }
};

module.exports = logIn;