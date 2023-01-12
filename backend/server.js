import express from 'express'
import data from './data.js'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/productRoutes.js';

dotenv.config()

mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log("connected to db");
}).catch(err => {
  console.log(err);
})

const app = express()
app.use('/api/seed',seedRouter)
app.use('/api/products', productRouter)

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


const port = process.env.PORT || 5000
app.listen(port, () =>{
    console.log(`serve at http://localhost:${port}`);
})