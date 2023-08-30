import express from 'express'
import mongoose from 'mongoose';
import Detail from './models/Detail.js'
import bodyParser from "body-parser";

const app = express()

app.use(bodyParser.json());

const mongoDB = "mongodb+srv://Simran2612:S8g2S8qFvVqmIXcT@cluster0.njvujv3.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongoDB)
    .then(() => console.log(" Mongodb Connection Established"))
    .catch((err) => {
        console.log("Connection Failed")
        console.log(err)
    })

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://interior-home-sigma.vercel.app');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.post('/', async (req, res) => {
    console.log(req.body)
    const newUser = new Detail(req.body)
    await newUser.save()
        .then((res) => console.log(res))
        .catch(err => console.log(err))





})




app.listen(3000, () => {
    console.log("server is running")
})


// //
