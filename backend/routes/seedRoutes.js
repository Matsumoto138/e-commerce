import express from 'express'
import Product from '../models/productModel.js'
import data from '../data.js'
import User from '../models/userModel.js'


const seedRouter = express.Router()

seedRouter.get('/', async (req,res) =>{
    await Product.remove({})
    const createdproduct = await Product.insertMany(data.products)
    await User.remove({})
    const createdusers = await User.insertMany(data.users)
    res.send({createdproduct, createdusers})

})

export default seedRouter