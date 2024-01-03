import dotenv from "dotenv"
import connectdb from "./db/index.js";

dotenv.config({
    path: './env'
})

connectdb()
.then(() => {
    const port = process.env.PORT
    app.listen(port || 8000, ()=> {
        console.log(`server is running at: http://localhost:${port} `)
    })
})
.catch((err) => {
console.log(`mongodb connection failed ${err}`)
})