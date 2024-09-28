import React from 'react'
import Title from '../Components/Title'
import NewsLetter from '../Components/NewsLetter'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className=" text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={assets.about_img} className='w-full md:max-w-[450px]' alt="" />
        <div className="flex flex-col justify-cenetr gap-6 md:w-2/4 text-gray-600">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ab, alias quaerat, esse harum illo atque labore non eius aliquam reiciendis natus exercitationem repellendus odio consectetur eveniet quidem laborum? Eos.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quidem exercitationem error, aliquam, expedita aperiam similique pariatur excepturi unde voluptates nam accusantium iste ab ipsum eligendi, ducimus dolores. A, accusantium?
        Veritatis at, sequi id voluptate voluptatibus voluptatem officia cumque aut culpai.</p>
        
        <b className='text-gray-800 '>Our Mission</b>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim commodi Facilis eaque, ad dolore est, veniam voluptates, consectetur omnis quasi ducimus sequi cupiditate accusantium tempore officia odit.</p>
        </div>
      </div>
      <div className="text-xl">
        <Title text1={'WHY'} text2={'CHOOSE US?'}/>
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className=''>Quality Assurance:</b>
          <p className='rubik-regular text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi aliquam et corrupti libero veniam delectus aut, non voluptatibus obcaecati iusto, eum, nemo culpa repellat. Harum eos maxime quis ut et!</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className=''>Convenience:</b>
          <p className='rubik-regular text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi aliquam et corrupti libero veniam delectus aut, non voluptatibus obcaecati iusto, eum, nemo culpa repellat. Harum eos maxime quis ut et!</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className=''>Customer Services:</b>
          <p className='rubik-regular text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae magni obcaecati est recusandae mollitia amet, culpa hic voluptate et nisi illo, ad porro. Earum ipsa animi nemo esse nihil possimus.</p>
        </div>
      </div>

      <NewsLetter/>
      
    </div>
  )
}

export default About
