import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log("MONGODB CONNECTED SUCCESSFULLY!");
    } catch (err) {
        console.error("ERROR CONNECTING MONGODB: ", err);
        process.exit(1); // 1: failure, 0: success
    }
};
