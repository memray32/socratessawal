//load external npm packages
const express=require('express')
const cors=require('cors')
const indexRouter= require('../routes/index')
const path=require('path')

require('./db/mongoose')

//express port
const port = process.env.PORT

//express app
const app=express()
//use cors
app.use(cors())
app.use(express.json())

//use the static path
const pubDirectoryPath=path.join(__dirname,'../public')
app.use(express.static(pubDirectoryPath))
app.use('*', (req,res)=>{
    res.sendFile(path.join(__dirname,'../public/index.html'))
})


//use the router
app.use(indexRouter)


if(process.env.NODE_ENV !== 'test')
{
//start and listent expess app
app.listen(port, ()=>{
    console.log('Server is up and running on port ' + port)
})
}


