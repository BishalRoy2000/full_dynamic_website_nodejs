import mongoose from "mongoose";

const schema=new mongoose.Schema({
    icon:String,
    title:String,
    description:String,
    linkText:String,
    linkUrl:String
})

export const services=mongoose.model("services",schema);

