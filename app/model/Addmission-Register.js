const mongoose =require ('mongoose')
const validator=require('validator')
const bcryptjs=require('bcryptjs')
const jwt=require('jsonwebtoken')
const Schema =mongoose.Schema

const AddmisionSchema=new Schema({
    name:{
        type:String,
        required:true,
        // unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate:{
            validator:function(value)
            {
                return validator.isEmail(value)
            },
            message:function()
            {
                return 'invalid email'
            }
        }
        
    },
   
    parentname:{
        type:String,
        required:true,
        maxlength:128

    },
    Address:{
        type:String,
        required:true,
    },
    Mobile:{
        type:Number,
        required:true
    },
    Gender:{
        type:String,
        required:true,
        // Values={"Female","Male"}
    },
    course:{
        type:String,
        required:true
    },
    RollNo:{
        type:Number
    },
    status:{
        type:String,
        required:true
    }
})

const Addmision=mongoose.model('Addmision',AddmisionSchema)
module.exports = Addmision