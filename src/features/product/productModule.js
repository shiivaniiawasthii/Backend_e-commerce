const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
       
        
        name:{
                type:String,
                required:true,
        },
        des:{
                type:String,
                required:true,
        },
       image:{
                type:String,
                required:true,
        },
        price:{
                type:Number,
                required:true,
                min:1

        },
        qty:{
                type:Number,
                required:true,
                min:0
        }


})

export const Product = mongoose.model("product",productSchema)