import React,{ useContext } from 'react'
import {myContext} from '../context/ContextProvider'
import {myAssets} from '../assets/assets'
import {Link} from 'react-router-dom'

const Form = () => {

  const { productName,setProductName,productDescription,setProductDescription,productPrice,
    setProductPrice,productCategory,setProductCategory, productAddFun,productImgFun,productImg} = useContext(myContext)

  return (
    <>
      <div className="container my-3">
        <div className='d-flex justify-content-between align-items-center my-3'>
          <h3>Add Products</h3>

          <div className='d-flex gap-4'>
            <Link to='/Products'>
            <button className='btn btn-primary'>View Products</button>
            </Link>
            <Link to='/users'>
            <button className='btn btn-primary'>View Users</button>
            </Link>
          </div>
        </div>

        <form onSubmit={productAddFun}>

          <label className='form-label'>Upload product Image</label>
          <input type="file" className='form-control mb-3' hidden id='productImg' onChange={productImgFun}/>
          <br />

          <label htmlFor='productImg'>
            <img src={productImg ? productImg : myAssets.uploadImg} alt="" height='120' width='120' />
          </label>

          <br />

          <label className='form-label'>Enter product Name</label>
          <input type="text" className='form-control mb-3' value={productName} onChange={(e) => setProductName(e.target.value)} />

          <label className='form-label'>Enter product Description</label>
          <input type="text" className='form-control mb-3' value={productDescription} onChange={(e) => setProductDescription(e.target.value)} />

          <label className='form-label'>Enter product Price</label>
          <input type="number" className='form-control mb-3' value={productPrice} onChange={(e) => setProductPrice(e.target.value)} />

          <label className='form-label'>Enter product Category</label>
          <select className='form-control mb-3' value={productCategory} onChange={(e) => setProductCategory(e.target.value)}>
              <option hidden>Choose</option>
              <option>Fruits</option>
              <option>Dairyproducts</option>
              <option>Nuts</option>
              <option>Snacks</option> 
              <option>Vegetableoil</option>      
              <option>Vegetables</option>   
          </select>

          <button type="submit" className='btn btn-primary w-100' onClick={(e) => {console.log("Submit button clicked!", e)}}>Submit</button>

        </form>
      </div>

      
    </>
  )
}

export default Form
