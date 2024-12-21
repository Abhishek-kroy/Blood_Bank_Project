// models/bloodBank.js
const { DataTypes, Sequelize } = require('sequelize');
const { sequelize } = require('../config/database');  // Import the sequelize instance

// Define the BloodBank model and specify the table name
const BloodBank = sequelize.define('BloodBank', {
    b_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    b_first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    b_last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    contact_no: {
        type: DataTypes.STRING,
        allowNull: false
    },
    since: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    },
    street_no: {
        type: DataTypes.STRING
    },
    street_name: {
        type: DataTypes.STRING
    },
    zipcode: {
        type: DataTypes.STRING,
        allowNull: false
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false
    },
    district: {
        type: DataTypes.STRING
    },
    city: {
        type: DataTypes.STRING
    },
    availability: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    last_update: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    },
    type: {
        type: DataTypes.ENUM('Public', 'Private'),
        defaultValue: 'Public'
    },
    latitude: {
      type: DataTypes.FLOAT,
      allowNull: true // Latitude and longitude are optional in this case
    },
    longitude: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
}, {
    timestamps: false, // Disable automatic timestamps (since we have custom fields for `since` and `last_update`)
    tableName: 'bloodbank'  // Explicitly define the table name
});

module.exports = BloodBank;