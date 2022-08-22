import React,{useContext} from 'react'
import './ItemList.css'
import ItemContext from '../../context/ItemContext'
import Item from '../item/Item'


const ItemList = () => {
   const {item}= useContext(ItemContext)
   
  return (
    <div className='itemList' >
         <h1>Item List</h1>
         {
            item.length > 0 && (
                 item.map(data => <Item key={data.id} item={data} />)
            )
         }
    </div>
  )
}

export default ItemList
