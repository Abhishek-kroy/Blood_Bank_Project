const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const User = sequelize.define('User', {
    fname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    contact_no:{
        type: DataTypes.STRING,
        allowNull: false,
        unique:true,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'donor', // Default value
    }
}, {
    tableName: 'users',
    timestamps: true,
});

sequelize.sync()
    .then(() => console.log('User model synchronized'))
    .catch((error) => console.error('Error syncing User model:', error));

module.exports = { User };