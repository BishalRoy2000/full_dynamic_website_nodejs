import mongoose from "mongoose";


export const connectDB=()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"freeliancer"
    }).then(()=>console.log("Database Connected")).catch((e)=>console.log(e));
    
}