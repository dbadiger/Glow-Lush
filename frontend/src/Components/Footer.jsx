import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm text-gray-800'>
      
      <div >
        <img src={assets.Pixie_Dust_Logo} alt="" className='mb-5 w-32' />
        <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum expedita inventore tempore possimus sunt, adipisci consectetur ut placeat magnam doloremque voluptatum, laborum natus accusantium animi soluta. Ipsa eius fugiat veniam.</p>
      </div>

      <div>
        <p className='text-xl font-medium mb-2 rubik-regular'> COMPANY</p>
        <ul className='flex flex-col gap-1 text-gray-600'>
          <li>Home</li>
          <li>About Us</li>
          <li>Delivery</li>
          <li>Privacy Policy</li>
        </ul>
      </div>


      <div>
      <p className='text-xl font-medium mb-2 rubik-regular'>GET IN TOUCH</p>
      <ul className='flex flex-col gap-1 text-gray-600'>
          <li>+91 812345 54123</li>
          <li>contact@glowlush.com</li>
      </ul>
      </div>
    </div>
     
      <div>
          <hr />
          <p className='py-2 text-sm text-center'>
            Copyright 2024@Glow Lush - All Rights Reserved.
          </p>
      </div>
    </div>
  )
}

export default Footer
