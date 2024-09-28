import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets'
import NewsLetter from '../Components/NewsLetter'

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>
      
      <div className="flex flex-col my-10 justify-center md:flex-row gap-10 mb-28">
        <img src={assets.contact_img} 
        className='w-full md:max-w-[480px]'
        alt="" />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='rubik-regular text-gray-500'>#20, 2nd Floor, Shrinivas Enclave,<br/> Opposite BVB College, Vidyanagar, Hubli</p>
          <p className='rubik-regular text-gray-500'>+91 9148404621<br/> contact@pixiedust.com</p>
         
          <p className='font-semibold text-xl text-gray-600'>Careers at Pixie Dust</p>
          <p className='rubik-regular text-gray-500'>Learn more about Teams and Job Openings.</p>
          <button className='border border-black px-8 py-3 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
         
        </div>
      </div>
      <NewsLetter/>


    </div>
  )
}

export default Contact
