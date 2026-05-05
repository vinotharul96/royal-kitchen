
const express = require('express')

const { addProduct, getProduct, deleteProduct, updateProduct } = require('../controllers/productController')

const productRouter = express.Router()

productRouter.post('/addProduct',addProduct)
productRouter.get('/getProduct',getProduct)
productRouter.delete('/deleteProduct/:id',deleteProduct)
productRouter.put('/updateProduct/:id',updateProduct)

module.exports = productRouter