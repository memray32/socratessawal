const express=require('express')
const Question = require('../models/question')
const router=new express.Router()



//REST API endpoint to add questions
router.post('/api/questions', async (req,res)=>{
    const question = new Question(req.body)
    try{
        await question.save()
        res.status(201).send(question)

    }catch(e)
    {
        res.status(400).send(e)
    }
 }) 

 //REST API endpoint to get questions
 router.get('/api/questions',async (req,res)=>{
     try{
        //result in descending order sort by creation date
        const questions= await Question.find({}).sort({createdAt:-1})
        if(!questions)
        {
            res.status(404).send()
        }
        res.status(200).send(questions)
     } catch(e)
     {
        res.status(400).send()
     }
     
  })

  //REST API end point to get questions by category
  router.get('/api/questions/:category', async(req,res)=>{

    try{
        const categoryIN=req.params.category
        const questions=await Question.find({category:categoryIN}).sort({createdAt:-1})
        if(!questions)
        {
            res.status(404).send()
        }
        res.status(200).send(questions)

    }catch(e)
    {
        res.status(400).send()
    }

  })
 
 
 

 

module.exports=router



