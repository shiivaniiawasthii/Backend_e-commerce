import express from'express'
import cors from "cors"
import dotenv from "dotenv"
import userRoute from "./src/features/user/userRoute.js"
import productRoute from "./src/features/product/productRoute.js"
import cartRoute from "./src/features/cart/cartRoute.js"
import { connect } from './src/config/db.js'

dotenv.config()

const PORT = process.env.PORT
const app = express()
app.use(express.json())
app.use(cors())


// everything starts from user/products/carts 
// go to respective routes

app.use("/users",userRoute)
app.use("/products",productRoute)
app.use("/carts",cartRoute)



// app.get('/',(req,res)=>res.send('helo'))
console.log(PORT)
app.listen(PORT,async()=>{
        await connect()
        console.log('server startmed')
}
)