import mongoose from "mongoose";
const uri = "mongodb://localhost:27017/mydatabase";

export function Checkconnection() {
    mongoose.connect(uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=>console.log("connected")).catch(e=>console.log(e.message));
}
