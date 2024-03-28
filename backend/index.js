import express from "express"
import dotenv from "dotenv"
import conn from "./db.js"
import carRoute from "./routes/carRoute.js"
import cors from "cors"

dotenv.config()
conn()

const app = express()
const port = process.env.PORT
app.use(express.json())

app.use(
    cors({
        origin: "http://localhost:3000",
        methods: ["GET","POST","PUT","DELETE"],
        allowedHeaders: ["Content-Type"],
    })
)

app.get("/", (req,res)=>{
    res.status(234).send("Welcome My friend")
})

app.use("/cars", carRoute)

app.listen(port, ()=>{
    console.log(`App is listening to port: ${port}`);
})