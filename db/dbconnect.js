import mongoose from "mongoose";



// const url = "mongodb://localhost:27017/newtodo";


const dbconnect= async(url)=>{
    try{
        await mongoose.connect(url,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(console.log(`DataBAse connection Successfull`))
        // .catch((error)=>{
        //     console.error(`DataBase connection error ${error}`)
        // })
    }catch(e){
        console.log(e)
    }
}

export default dbconnect;