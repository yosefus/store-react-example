import { useContext } from 'react';
import { CartContext } from '../App';

const AddToCartButton = ({ id, item }) => {
   const [cart, setCart] = useContext(CartContext);
   const isInCart = cart.find(item => item.id === id)


   const incrementQuantity = () => {
      setCart(prev => !isInCart ?
         [...prev, { ...item, quantity: 1 }] :
         prev.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
   };

   const decrementQuantity = () => {
      setCart(prev => isInCart.quantity === 1 ?
         prev.filter(item => item.id !== id) :
         prev.map(item => item.id === id ? { ...item, quantity: item.quantity - 1 } : item))
   };

   return (
      <div className={'addToCartButton'}>
         {!isInCart ?
            <button onClick={incrementQuantity}>Add to Cart</button>
            :
            <div className={'cartContainer'}>
               <button onClick={decrementQuantity}>-</button>
               <span>{isInCart?.quantity}</span>
               <button onClick={incrementQuantity}>+</button>
            </div>
         }
      </div>
   );
};

export default AddToCartButton;