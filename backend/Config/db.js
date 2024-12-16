import mongoose from "mongoose";

export const connectToDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected On: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}