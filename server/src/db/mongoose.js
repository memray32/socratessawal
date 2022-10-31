//connection to mongoDB using mongoose
const mongoose=require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
  
})

mongoose.connection.on('connected', ()=>{
    console.log('Mongoose connected to database URI: '+process.env.MONGODB_URL)
})

mongoose.connection.on('error', (err)=>{
    console.log('Mongoose connection error: ' + err)
})