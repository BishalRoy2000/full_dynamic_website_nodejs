import mongoose from "mongoose";

const schema=new mongoose.Schema({
    email:String,
    phone:String,
    queries:String,
    createdAt:{
        type:Date,
        default:Date.now,
    }
})

export const query=mongoose.model("query",schema);