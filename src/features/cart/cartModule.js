const mongoose = require("mongoose")

const cartSchema = new mongoose.Schema({
       
        
       
        product:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"product",
                required:true
        },
        user:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"user",
                required:true
        },
        qty:{
                type:Number,
                required:true,
                min:1
        }


})

export const Cart = mongoose.model("cart",cartSchema)