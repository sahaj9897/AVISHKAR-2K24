// db.js
const mongoose = require('mongoose');
const colors = require('colors');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log(`MongoDB connected: ${mongoose.connection.host}`.bgGreen.white);
    } catch (error) {
        console.error(`MongoDB connection error: ${error.message}`.bgRed.white);
    }
}

module.exports = connectDB;
