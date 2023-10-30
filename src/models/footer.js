import mongoose from "mongoose";

const schema=new mongoose.Schema({
    copyRight:String,
    companyName:String,
})

export const footer=mongoose.model("footer",schema);