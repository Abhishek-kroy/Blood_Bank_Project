// models/users.js
const { Sequelize, DataTypes } = require('sequelize');
const {sequelize} = require('../config/database'); // Ensure the path to your database configuration is correct

// Define the User model
const User = sequelize.define('User', {
    fname: {
        type: DataTypes.STRING,
        allowNull: false, // First name is required
    },
    lname: {
        type: DataTypes.STRING,
        allowNull: false, // Last name is required
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false, // Email is required
        unique: true, // Ensure the email is unique in the database
    },
    blood_group: {
        type: DataTypes.STRING,
        allowNull: false, // Blood group is required
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false, // Password is required
    },
}, {
    // Model options
    tableName: 'users', // The name of the table in the database
    timestamps: false, // Adds createdAt and updatedAt fields automatically
});

// Sync the model with the database (ensure table exists)
sequelize.sync()
    .then(() => console.log('User model synchronized'))
    .catch((error) => console.error('Error syncing User model:', error));

module.exports = { User }; // Export the User model for use in other files