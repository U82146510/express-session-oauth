import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();


export const connect_to_atlas = async()=>{
    try {
        const atlas = process.env.atlas;
        if(!atlas){
            throw new Error("mising atlas connection string");
        }
        await mongoose.connect(atlas)      
    } catch (error) {
        console.error(Error);
        process.exit(1);
    }
};

const db:mongoose.Connection=mongoose.connection;
db.on('error',(error:any)=>{
    console.error(error);
    process.exit(1);
});
db.on('connected',()=>{
    console.log("connected to atlas");
});
db.on('disconnected',()=>{
    console.log('disconnected');
});
db.on('reconnected',()=>{
    console.log('reconnected');
});