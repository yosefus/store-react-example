
import { NavLink, Route, Routes } from 'react-router-dom'
import { createContext, useState } from 'react'
import { AiOutlineHome, AiOutlineShoppingCart } from 'react-icons/ai'

import Categories from './pages/Categories'
import ItemsByCategory from './pages/ItemsByCategory'
import SingleItem from './pages/SingleItem'
import Order from './pages/Order'

import Cart from './components/Cart'

export const CartContext = createContext()
function App() {
  const [cart, setCart] = useState([])
  const [openCart, setOpenCart] = useState(false)

  return (
    <CartContext.Provider value={[cart, setCart]} >

      <div className={`layout  ${openCart ? 'openCart' : ''}`}>
        <div className="header">
          <NavLink to={'/'}> <AiOutlineHome /> </NavLink>
        </div>
        <div className="main">
          <Routes>
            <Route index element={<Categories />} />
            <Route path='/category/:category' element={<ItemsByCategory />} />
            <Route path='/items/:id' element={<SingleItem />} />
            <Route path='/order' element={<Order />} />
          </Routes>
        </div>
        <div className="cart">
          <Cart setOpenCart={setOpenCart} />
        </div>
        <div className="footer">

        </div>
      </div>

      <div className="cartIcon" onClick={() => setOpenCart(old => !old)}>
        <AiOutlineShoppingCart />
      </div>
    </CartContext.Provider>
  )
}

export default App
