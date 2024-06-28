import React, { useEffect, useState } from 'react'
// import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import {  featchsignleproduct, fetchProductMethod } from '../Redux/Actions/Product';
import { Toaster, toast } from 'sonner';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

function Data() {

  const dispatch = useDispatch();
  const products = useSelector((item) => item.Products.products);

  const isLoading = useSelector((item) => item.Products.isLoading);
  const success = useSelector((item) => item.Products.success);
  const error = useSelector((item) => item.Products.error);


  // const navigate =  useNavigate()
  useEffect(() => {
     dispatch(fetchProductMethod());
  }, [dispatch])

  useEffect(() => {
    if(success){
      toast.success(success)
    }
  }, [success])

  useEffect(() => {
    if(error){
      toast.error(error)
    }
  },[error])

// const buttonhandler= (id)=>{
//   dispatch(featchsignleproduct(id))
//   navigate("/single_product")
//   console.log("button clicked");

//   }


  return (
    <>
      <Toaster richColors position='top-right'></Toaster>
      <div className='grid grid-cols-4'>
        {products.map((product) => {
          return (
            <div className='w-64 h-96 mx-auto flex flex-col items-start bg-zinc-200 my-4 p-3' >
              <div className='h-1/2'>
                <img src={product.thumbnail} alt="" className='w-full h-full' />
              </div>
              <h3>Title : {product.title}</h3>
              <p>Price : {product.price}</p>
              <li key={product.id}>product id:{product.id} </li>
         

              {/* <button className='bg-emerald-500 px-6 py-1' onClick={()=>{buttonhandler(product.id)}}>View Product</button> */}
              <Link to={`/single_product/${product.id}`}>
              <button className='bg-emerald-500 px-6 py-1'>View Product</button>
            </Link>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Data