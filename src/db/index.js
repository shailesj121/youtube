import mongoose from "mongoose"
import {DB_NAME} from "../constants.js"

const connectdb = async () => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n Mongoos connected !! DB HOST: ${connectionInstance.connection.host  }`) // try to console log for more information
    } catch(error) {
        console.log(`mongo db connection failed: ${error}`)
        process.exit(1) //search about it from knowmore
    }
}

export default connectdb