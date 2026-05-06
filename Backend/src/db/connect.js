import 'dotenv/config'; 
import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";

const connectDb = async () => {
    try {
        if (!process.env.MONGO_URI || !DB_NAME) {
            throw new Error("MONGO_URI or DB_NAME is not defined in the environment variables.");
        }
        await mongoose.connect(`${process.env.MONGO_URI}${DB_NAME}`,{
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
            connectTimeoutMS: 10000,
            retryWrites: true,
            retryReads: true,
            maxPoolSize: 10,
            minPoolSize: 2,
        });
        console.log("MongoDB connected !!");
    } catch (error) {
        console.log("MONGOOSE connect error..",error);
    }
}
export default connectDb;