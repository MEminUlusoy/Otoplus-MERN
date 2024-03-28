import mongoose from "mongoose";

const conn = ()=>{
    mongoose.connect(process.env.DB_URL, {
        dbName: "Otoplus"
    })
    .then(()=>{
        console.log("Connected to the DB successfully");
    })
    .catch((err)=>{
        console.log(`DB Connection Error: ${err}`)
    })
}


export default conn