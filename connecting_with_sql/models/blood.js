// models/blood.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');  // Import the sequelize instance from the database config

// Define the Blood model with a composite primary key
const Blood = sequelize.define('Blood', {
    b_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    b_type: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'blood',  // The table name in your database
    timestamps: false,   // If your table doesn't have createdAt and updatedAt columns
    indexes: [
        {
            unique: true,  // This will ensure that the combination of b_id and b_type is unique
            fields: ['b_id', 'b_type']  // Define the composite primary key
        }
    ]
});

// Export the Blood model
module.exports = Blood;