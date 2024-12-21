// config/database.js
const { Sequelize } = require('sequelize');

// Create a new Sequelize instance and connect to the database
const sequelize = new Sequelize(
    process.env.DATABASE_NAME,  // Your database name from .env
    process.env.ROLE,           // Your database username from .env
    process.env.PASSWORD,       // Your database password from .env
    {
        host: 'localhost',      // Host of the database, e.g., 'localhost'
        dialect: 'mysql',       // Database dialect (mysql in this case)
        logging: false          // Set to true if you want to log SQL queries
    }
);

// Test the database connection
async function dbConnect() {
    try {
        await sequelize.authenticate();  // Try to authenticate with the database
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

// Export the sequelize instance
module.exports = { sequelize, dbConnect };