import mongoose from "mongoose"
require("dotenv").config()
const dbUrl = process.env.DB_URL || "";

const connectDb = async () => {
    try {
        await mongoose.connect(dbUrl)
        .then((data)=>{
            console.log(`Database connected with ${data.connection.host}.`)
        })    
    } catch (error: any) {
        console.log(error.message)
        setTimeout(connectDb, 5000)
    }
    
}

export default connectDb;