const mongoose=require('mongoose')

const connectDb=async ()=>{
    try{
       await mongoose.connect(process.env.MONGO_URL,
      { useUnifiedTopology: true,useNewUrlParser: true})
       console.log('db connected')
    }catch{
        console.log('something wrong')
    }
}

module.exports=connectDb