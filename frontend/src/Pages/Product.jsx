import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext';

const Product = () => {

  const {productId} = useParams();
  // console.log(productId);
  const {products} =useContext(ShopContext)
  const [productData, setProductData] = useState(false)
  const[image, setImage] =useState("")


  const fetchProductData = async()=>{
    products.map((item)=>{
      if(item._id ===productId){
        setProductData(item)
        // console.log(item)
        setImage(item.image[0])
        return null;
      }
    })
  }
  useEffect(()=>{
    fetchProductData()
  },[productId,products])



  return productData ? (
    <div className='border-t pt-10 transition-opacity ease-in duration-500 opacity-100'>

      {/* product Data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">

      {/* Product Iamges */}
      <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
        <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-noraml sm:w-[18.7%] w-full">


        </div>
      </div>

      </div>
      
    </div>
  ) : 
  <div className="opacity-0"></div>
}

export default Product
