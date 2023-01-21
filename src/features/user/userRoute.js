import express from "express"
import { User } from "./userModule.js"
 const app = express.Router()

 app.post("/login",async(req,res)=>{
    const {email,password}= req.body

    try{
        let user = await User.find({email})
        if(user){
                if(password===user.password){
                        res.send({
                                token:`${email}##${password}`
                        })
                }else{
                        res.status(401).send(`Authentication faliure`)
                }
                

        }else{
                res.status(404).send(`User with ${email} not found`)
        }

    }catch(e){
    res.status(404).send(e.message)
    }
 })

 app.post("/signup",(req,res)=>{
        const {name,age,email,password}= req.body
        
 })

export default app