import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from "./Title"

const CartTotal = () => {
  const {currency, delivery_fees, getCartAmount} = useContext(ShopContext)
  return (
    <div className='w-full'>
      <div className="text-2xl">
        <Title text1= {'CART'} text2 = {'TOTAL'}/>
      </div>
      
    <div className="flex flex-col gap-2 mt-2 text-sm">
      <div className="flex justify-between">
        <p>Subtotal</p>
        <p> {currency} {getCartAmount()}.00</p>
      </div>
      <hr />
      <div className="flex justify-between">
        <p>Delivery Charges</p>
        <p> {currency} {getCartAmount() === 0 ? 0 :  delivery_fees}</p>
      </div>
      <hr />
      <div className="flex justify-between">
        <b>Total</b>
        <p> {currency} {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fees}</p>
      </div>
      <hr />
      
    </div>

    </div>
  )
}

export default CartTotal
