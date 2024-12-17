import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemLists from './ItemLists'
import { clearCart } from '../utils/cartSlice'

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items)
    const disPatch = useDispatch();
    const handleClearCart= ()=>
    {
     disPatch(clearCart())
    }
    return (
        <div className='text-center m-4, p-4'>
            <h1 className='text-2xl font-bold'>
                Cart
            </h1>
            <div className='w-6/12 m-auto'>
            <button className='p-2 m-2 rounded-lg bg-black text-white' onClick={handleClearCart}>
             Clear
            </button>
            {cartItems.length===0 && <h1>Cart is empty</h1>}
                <ItemLists items ={cartItems} />
            </div>
        </div>

    )
}

export default Cart