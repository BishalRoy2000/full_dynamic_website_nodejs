import mongoose from "mongoose";

const schema=new mongoose.Schema({
    title:String,
    subTitle:String,
    imageUrl:String,
    class:String
})

export const Slider=mongoose.model("slider",schema);