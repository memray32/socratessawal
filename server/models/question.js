//Schema and Model for leveraging in Mongodb

const mongoose=require('mongoose')
const validator=require('validator')

const questionSchema= new mongoose.Schema({
    question:{
        type:String,
        required:true,
        trim:true
    },
    category:{
        type:String,
        required:true
    }

}, {
    timestamps:true
})

const Question = mongoose.model('Question',questionSchema)

module.exports= Question