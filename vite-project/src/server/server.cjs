const express = require('express');
const app = express();
const morgan = require('morgan'); // Corrected import statement
const dotenv = require('dotenv');
dotenv.config();

app.use(express.json());

// Morgan middleware for logging
app.use(morgan('dev'));

app.get("/", (req, res) => {
    res.status(200).send({
        message: "Server runs",
    });
});

// Listen port
const port = process.env.PORT || 5173; 
app.listen(port, () => {
    console.log(`Server Running in ${process.env.DEV_MODE} port=${process.env.PORT}`); 
});
