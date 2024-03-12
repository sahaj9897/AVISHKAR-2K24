import express from 'express';
import colors from 'colors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import connectDB from './db.js';
import userRoutes from '../routes/userRoutes.js'; 

dotenv.config();

const app = express();

app.use(express.json());

app.use(morgan('dev'));

connectDB();

app.use('/api/v1/user', userRoutes);

// Define the port
const port = process.env.PORT || 5173; 

// Start the server
app.listen(port, () => {
    console.log(`Server Running in ${process.env.DEV_MODE} port=${process.env.PORT}`.bgCyan.white); 
});
