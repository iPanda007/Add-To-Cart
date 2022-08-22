import React,{useContext} from 'react'
import './Item.css';
import ItemContext from '../../context/ItemContext';
const Item = ({item}) => {
  const {dispatchCart} =   useContext(ItemContext)
  return (
    <div className='item'>
        <span className='itemName'>
           {item.name}
        </span>
        <span className='itemPrice'>
           {item.price}
        </span>
        <button className='itemButton'
          onClick={()=>dispatchCart({type:"ADD_To_CART",payload:item})}
        >
            Add to Cart
        </button>
    </div>
  )
}

export default Item
