import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const myContext = createContext()

const ContextProvider = ({children}) => {


    var[ productName,setProductName ] = useState('')
    var[ productDescription,setProductDescription ] = useState('')
    var[ productPrice,setProductPrice ] = useState('')
    var[ productCategory,setProductCategory ] = useState('')
    var[ productImg,setProductImg ] = useState('')

    var[ ProductData,setProductData ] = useState([])

    var [ productUpdateName, setProductUpdateName ] = useState('')
    var [ productUpdateDescription, setProductUpdateDescription ] = useState('')
    var [ productUpdatePrice, setProductUpdatePrice ] = useState('')
    var [ productUpdateCategory, setProductUpdateCategory ] = useState('')
    var [ productUpdateImg, setProductUpdateImg ] = useState('')

    var [ productID, setProductID ] = useState('')


    const url = import.meta.env.VITE_API_URL || 'http://localhost:5000'


    const productAddFun = async (e) => {
        e.preventDefault()
        console.log("productAddFun called", { productName, productDescription, productPrice, productCategory, productImg })

        try{
            var formData ={
                productName,
                productDescription,
                productPrice,
                productCategory,
                productImg
            }
            await axios.post(`${url}/product/addProduct`, formData)
            alert('Product Added Successfully...')

            setProductName('')
            setProductDescription('')
            setProductPrice('')
            setProductCategory('')
            setProductImg('')
            
            ProductFetchFun()
        }
        catch(err){
            console.log(`error name : ${err.name},error message : ${err.message}`)
            alert(`Error: ${err.response?.data || err.message}`)
        }
    }


    const productImgFun = (e) => {
        var file = e.target.files[0]

        if(file){
            var reader = new FileReader()

            reader.onloadend = () => {
                setProductImg(reader.result)
            }
            reader.readAsDataURL(file)
        }
    }

    const ProductFetchFun = async () => {
        try{
            const ProductList = await axios.get(`${url}/product/getProduct`)
            setProductData(ProductList.data)
        }
        catch(err){
            console.log(`error name : ${err.name},error message : ${err.message}`)
        }
    }

    useEffect(() => {
        ProductFetchFun()
    }, [])

    const ProductDeleteFun = async (productId) => {
        try{
               if(confirm('are u sure want to delete?')){
                 await axios.delete(`${url}/product/deleteProduct/${productId}`)
                alert('product deleted successfully...')
                ProductFetchFun()
               }
            }
        catch(err){
                console.log(`error name : ${err.name},error message : ${err.message}`)
        }
    }

const productUpdateFun = (productID) => {
        var product = ProductData.find((value) => value._id == productID )
        
        if(product){
            setProductUpdateName(product.productName)
            setProductUpdateDescription(product.productDescription)
            setProductUpdatePrice(product.productPrice)
            setProductUpdateCategory(product.productCategory)
            setProductUpdateImg(product.productImg)
            setProductID(product._id)
        }
    }

    const productUpdateImgFun = (e) => {
        var file = e.target.files[0]

        if(file){
            var reader = new FileReader()

            reader.onloadend = () => {
                setProductUpdateImg(reader.result)
            }
            reader.readAsDataURL(file)
        }
    }

    const productUpdateSubmitFun = async (e) => {
        e.preventDefault()

        try{
            var productUpdateData = {
                productName : productUpdateName,
                productDescription : productUpdateDescription,
                productPrice : productUpdatePrice,
                productCategory : productUpdateCategory,
                productImg : productUpdateImg,
            }

            await axios.put(`${url}/product/updateProduct/${productID}`, productUpdateData)
            alert('Product Updated Successfully...')
        }
        catch(err){
            console.log(`Error Name : ${err.name}, Error Message : ${err.message}`)
        }

        ProductFetchFun()
    }

const  [ userData, setUserData ] = useState([])



    const userFetchFun = async () => {
        try{
            const userList = await axios.get(`${url}/user/getUser`)
            setUserData(userList.data);
            console.log(userList.data,"userList")
            
        }
        catch(err){
            console.log(`Error Name : ${err.name}, Error Message : ${err.message}`)
        }
    }


    useEffect(() => {
        userFetchFun()
    }, [])

    const registerDeleteFun = async (userID) => {
        try{
            if(confirm('Are You Sure Want to Remove This User ?')){
                await axios.delete(`${url}/user/deleteUser/${userID}`)
                alert('User Removed Successfully...')
            }
        } 
        catch(err){
            console.log(`Error Name : ${err.name}, Error Message : ${err.message}`)
        }

        userFetchFun()
    }


    const myContextvalue = {
        productName,setProductName,
        productDescription,setProductDescription,
        productPrice,setProductPrice,
        productCategory,setProductCategory,

        productAddFun,

        productImgFun, productImg,

        ProductData,
        ProductDeleteFun,
        
        productUpdateName, setProductUpdateName,
        productUpdateDescription, setProductUpdateDescription,
        productUpdatePrice, setProductUpdatePrice,
        productUpdateCategory, setProductUpdateCategory,

        productUpdateFun, productUpdateImg, productUpdateImgFun,
        productUpdateSubmitFun,
        userData,registerDeleteFun,
        
    }
    return(
        <myContext.Provider value={myContextvalue}>
                {children}
        </myContext.Provider>
    )
}

    export default ContextProvider

