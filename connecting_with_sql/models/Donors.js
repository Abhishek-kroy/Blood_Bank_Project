const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const DonorRegistration = sequelize.define('DonorRegistration', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    full_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    gender: {
        type: DataTypes.ENUM('male', 'female', 'other'),
        allowNull: false
    },
    blood_group: {
        type: DataTypes.ENUM('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    contact_number: {
        type: DataTypes.STRING(15),
        allowNull: false
    },
    address: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    medical_history: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    consent: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    registration_date: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    }
}, {
    tableName: 'donor_registration',
    timestamps: false
});

module.exports = DonorRegistration;