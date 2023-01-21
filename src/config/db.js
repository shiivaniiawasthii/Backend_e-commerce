import mongoose from "mongoose";

// connect to database

export const connect = async()=>{
        return mongoose.connect(process.env.DB_URL)
}