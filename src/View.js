import React from 'react'
import Cart from './components/cart/Cart'
import ItemList from './components/itemlist/ItemList'

const View = () => {
  return (
    <div className='container'>
        <ItemList/>
        <Cart/>
    </div>
  )
}

export default View
