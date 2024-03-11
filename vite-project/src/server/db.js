import mongoose from 'mongoose';
import colors from 'colors';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log(`MongoDB connected: ${mongoose.connection.host}`.bgGreen.white);
    } catch (error) {
        console.error(`MongoDB connection error: ${error.message}`.bgRed.white);
    }
}

export default connectDB;
