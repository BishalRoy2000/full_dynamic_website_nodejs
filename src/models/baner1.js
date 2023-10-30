import mongoose from "mongoose";

const schema=new mongoose.Schema({
    tittle:String,
    description:String,
    buttonText:String,
})

export const poster=mongoose.model("poster",schema);