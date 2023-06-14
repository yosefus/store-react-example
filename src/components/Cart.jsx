import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import products from '../assets/products.json'
import AddToCartButton from '../components/AddToCartButton';
import { CartContext } from '../App';


const Cart = ({ setOpenCart }) => {
   const [cart] = useContext(CartContext);
   const [totalPrice, totalProducts] = cart.reduce((prev, curr) => [prev[0] + (curr.price * curr.quantity), prev[1] + curr.quantity], [0, 0])

   return (
      <div className={'cartComp'}>
         <h2>{'cart'}</h2>
         {
            cart.length > 0 ?
               <>
                  <ul>
                     {cart.map(item =>
                        <li className='card' key={item.id}>
                           <Link to={`/items/${item.id}`}>
                              <img src={item.image} alt={item.title} />
                           </Link>
                           <div>
                              <h2>{item.title}</h2>
                              <AddToCartButton id={item.id} item={item} />
                           </div>
                        </li>
                     )}

                     <li >
                        <p>total price: ${totalPrice}</p>
                        <p>items in cart: {totalProducts}</p>
                        <Link to='/order' onClick={() => setOpenCart()} >
                           <div className='placeOrder'>
                              place order
                           </div>
                        </Link>
                     </li>
                  </ul>
               </>
               :
               <p>nothing to see here yet...</p>
         }
      </div>
   );
};

export default Cart