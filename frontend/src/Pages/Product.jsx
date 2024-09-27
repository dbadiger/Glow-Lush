import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../Components/RelatedProducts';
import { toast } from 'react-toastify';

const Product = () => {

  const {productId} = useParams();
  // console.log(productId);
  const {products,currency, addToCart} =useContext(ShopContext)
  const [productData, setProductData] = useState(false)
  const[image, setImage] =useState("")
  const [size, setSize] = useState('')


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

      {/* -------------product Data------------- */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">

      {/* ------------Product Iamges------------- */}
      <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
        <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-noraml sm:w-[18.7%] w-full">
        {
          productData.image.map((item, index)=>(
            <img src={item}
             key={index}
            onClick={()=>setImage(item)}  
             className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
          ))
        }
        </div>
        <div className="w-full sm:w-[80%]">
          <img src={image} className='w-full h-auto' alt="" />
        </div>
      </div>
          {/* --------------product Info--------- */}
          <div className="flex-1">
            <h1 className='font-medium text-2xl'>{productData.name}</h1>
            <div className="flex items-center gap-1 mt-2">
              <img src={assets.star_icon} className='w-3 5' alt="" />
              <img src={assets.star_icon} className='w-3 5' alt="" />
              <img src={assets.star_icon} className='w-3 5' alt="" />
              <img src={assets.star_icon} className='w-3 5' alt="" />
              <img src={assets.star_dull_icon} className='w-3 5' alt="" />
              <p className='pl-2'>(102)</p>
            </div>
            <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
            <p className='mt-5 text-gray-500 md:4/5 rubik-regular '>{productData.description}</p>
            <div className="flex flex-col gap=4 my-8">
              <p>Select Size</p>
              <div className="flex gap-2">
                {productData.sizes.map((item, index)=>(
                  <button onClick={()=>setSize(item)}
                  key={index} 
                  className={`border py-2 px-4 bg-gray-100 
                    ${item===size ? 'border-orange-500' :''}`}>
                      {item}</button>
                ))}
              </div>
            </div>
            <button 
            className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'
            onClick={()=>{addToCart( productData._id,size);
              toast.success("Item Added")
            }
            }
            
          
            >ADD TO CART</button>
            <hr className='mt-8 sm:w-4/5'/>
            <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1 ">
              <p className='rubik-regular'>100% Original Product.</p>
              <p className='rubik-regular'>Casy on Delivery is available.</p>
              <p className='rubik-regular'>Easy return and exchange policy within 10 days</p>
            </div>
          </div>
      </div>
      {/* --------Description & Reviews---------- */}
      <div className="mt-20">
        <div className="flex">
          <p className='border px-5 py-3 text-sm'> Description</p>
          <p className='border px-5 py-3 text-sm'> Reviews (93)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p className='rubik-regular'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, minus minima facere sunt exercitationem reprehenderit ipsa tempora voluptatibus. Non, nisi necessitatibus! Qui non autem repellat exercitationem placeat natus optio? Fugit!
          Beatae ipsum reprehenderit incidunt quod vel, molestias autem et nam repellendus recusandae vitae aliquam ea quam sequi natus perferendis optio modi. Impedit sequi rerum necessitatibus ipsum laudantium, nam expedita corrupti.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nobis, Voluptatum labore repudiandae aliquam consectetur, quasi facilis id, animi beatae rerum error voluptatibus, soluta laudantium impedit natus iusto.</p>
          <p className='rubik-regular'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nobis, Voluptatum labore repudiandae aliquam consectetur, quasi facilis id, animi beatae rerum error voluptatibus, soluta laudantium impedit natus iusto.</p>
        </div>
      </div>
      {/* -----Related Products------ */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ) : 
  <div className="opacity-0"></div>
}

export default Product
