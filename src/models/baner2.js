import mongoose from "mongoose";

const schema=new mongoose.Schema({
    tittle:String,
    description:String,
    buttonText:String,
    imageUrl:String,
})

export const bannerf=mongoose.model("bannerFirst",schema);