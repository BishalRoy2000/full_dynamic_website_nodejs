import mongoose from "mongoose";

const schema=new mongoose.Schema({
    brandName:String,
    brandIconUrl:String,
    links:[    // jehetu nav bar akta link thakbe na multiple thakbe.....home,about,contact us tai array nilum....
        {
            label:String,
            url:String
        }
    ]
})


export const Detail=mongoose.model("detail",schema);