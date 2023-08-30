import express from 'express'
import mongoose from 'mongoose';
import Detail from './models/Detail.js'
import bodyParser from "body-parser";
import cors from 'cors';
const app = express()
app.use(cors())
app.use(bodyParser.json());
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
     res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS, PATCH, DELETE, POST, PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
    next();
    
})

const mongoDB = "mongodb+srv://Simran2612:S8g2S8qFvVqmIXcT@cluster0.njvujv3.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongoDB)
    .then(() => console.log(" Mongodb Connection Established"))
    .catch((err) => {
        console.log("Connection Failed")
        console.log(err)
    })


app.post('/', async (req, res) => {
    console.log(req.body)
    const newUser = new Detail(req.body)
    await newUser.save()
        .then((response) => console.log(response))
        .catch(err => console.log(err))





})




app.listen(3000, () => {
    console.log("server is running")
})


// //
