import mongoose from "mongoose";

const schema=new mongoose.Schema({
    tittle:String,
    description:String,
    buttonText:String,
})

export const about=mongoose.model("about",schema);