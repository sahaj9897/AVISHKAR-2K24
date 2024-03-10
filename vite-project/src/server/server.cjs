const express = require('express');
const colors = require('colors');
const app = express();
const morgan = require('morgan'); 
require('dotenv').config();
const connectDB = require('./db.cjs');


app.use(express.json());

// Morgan middleware for logging
app.use(morgan('dev'));

//mongodb configuration
connectDB();


app.get("/", (req, res) => {
    res.status(200).send({
        message: "Server runs",
    });
});

// Listen port
const port = process.env.PORT || 5173; 
app.listen(port, () => {
    console.log(`Server Running in ${process.env.DEV_MODE} port=${process.env.PORT}`.bgCyan.white); 
});
