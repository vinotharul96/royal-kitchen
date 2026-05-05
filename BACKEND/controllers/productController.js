const productModel = require("../models/productModel")

  
const addProduct = async (req, res) => {
    try{
        const productData = productModel({
                productName :req.body.productName,
                productDescription : req.body.productDescription,
                productPrice : req.body.productPrice,
                productCategory : req.body.productCategory,
                productImg : req.body.productImg
        })
            await productData.save()
            res.status(200).send('Product Added Successfully....')
    }
    catch(err){
            console.log(`error name : ${err.name},error message : ${err.message}`)
            res.status(500).send(`Error Name: ${err.name}, Error Message: ${err.message}`)
        }

}

const getProduct = async (req,res) => {
    try{
            const productList = await productModel.find()
            res.status(200).send(productList)
    }
    catch(err){
            console.log(`error name : ${err.name},error message : ${err.message}`)
            res.status(500).send(`Error Name: ${err.name}, Error Message: ${err.message}`)
        }
}


const deleteProduct =async (req,res) => {
        try{
        await productModel.findByIdAndDelete(req.params.id)
        res.status(200).send('deleted successfully....')
        }
        catch(err){
        console.log(`error name : ${err.name},error message : ${err.message}`)
        res.status(500).send(`Error Name: ${err.name}, Error Message: ${err.message}`)
        }
}

const updateProduct  = async (req,res) => {
        try{
        const productUpdateData = await productModel.findByIdAndUpdate(req.params.id,req.body,{new : true})
        res.status(200).send('Product Updated Successfully....')
        }
        catch(err){
        console.log(`error name : ${err.name},error message : ${err.message}`)
        res.status(500).send(`Error Name: ${err.name}, Error Message: ${err.message}`)
        }
}

module.exports = { addProduct, getProduct, deleteProduct, updateProduct }

