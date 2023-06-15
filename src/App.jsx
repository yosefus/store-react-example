
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
  const productsInCart = cart.reduce((prev, curr) => prev + curr.quantity, 0)
  console.log(productsInCart);
  return (
    <CartContext.Provider value={[cart, setCart]} >

      <div className={`layout  ${openCart ? 'openCart' : ''}`}>
        <div className="header" onClick={() => setOpenCart()}>
          <NavLink to={'/'}> <AiOutlineHome /> </NavLink>
        </div>
        <div className="main slide-in-right">
          <div className="container">
            <Routes>
              <Route index element={<Categories />} />
              <Route path='/category/:category' element={<ItemsByCategory />} />
              <Route path='/items/:id' element={<SingleItem />} />
              <Route path='/order' element={<Order />} />
            </Routes>
          </div>
        </div>
        <div className="cart slide-in-left">
          <Cart setOpenCart={setOpenCart} />
        </div>
        <div className="footer">

        </div>
      </div>

      <div className="cartIcon" onClick={() => setOpenCart(old => !old)}>
        <div> <AiOutlineShoppingCart /><span>{productsInCart}</span></div>

      </div>
    </CartContext.Provider>
  )
}

export default App
