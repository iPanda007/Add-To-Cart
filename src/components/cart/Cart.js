import React,{useContext} from 'react'
import ItemContext from '../../context/ItemContext'
import './Cart.css'
const Cart = () => {
   const {cartItems} = useContext(ItemContext);
    console.log("haha",cartItems)
  return (
    <div className='cart'>
        <h3>cart {cartItems.length}</h3>`
        {
          cartItems.length < 1 ? (<h1>There is no Items</h1>
          ) :(
            cartItems.map((cartItem)=>(
            
            <div className='cartItem' key={cartItem.id}>
              <span> 
                  {cartItem.name}
                 </span>
              <span>
                  {cartItem.price}
              </span>
              <button className='cartItemButton'>Remove</button>
            </div>
            
            ))
          )
        }
    </div>
  )
}

export default Cart
