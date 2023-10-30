import mongoose from "mongoose";

const schema=new mongoose.Schema({
    imageUrl:String
})

export const gallery=mongoose.model("gallery",schema);