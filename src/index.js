import dotenv from "dotenv"
import connectdb from "./db/index.js";
import  Express  from "express";

dotenv.config({
    path: './env'
});

const app = Express();

connectdb()
.then(() => {
    
    app.listen(process.env.PORT || 8000, ()=> {
        console.log(`server is running at: http://localhost:${process.env.PORT} `)
    })
})
.catch((err) => {
console.log(`mongodb connection failed ${err}`)
})