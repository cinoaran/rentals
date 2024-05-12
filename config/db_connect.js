import mongoose from "mongoose";

let connected = false;


const connectDB = async () => {
    mongoose.set('strictQuery', true);
    if (connected) {
        console.log('Already MongoDB connected')
        return;
    }
    try {
        await mongoose.connect(process.env.MONGO_URI);
        connected = true;
        console.log('New connection of MongoDB')
    } catch (error) {
        console.log(error);
    }
};

export default connectDB;

