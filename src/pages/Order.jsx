import { useContext, useRef, useState } from 'react';
import { CartContext } from '../App';
import { Navigate } from 'react-router-dom';

const Order = () => {
   const initialState = localStorage.userD ? JSON.parse(localStorage.userD) : { name: '', email: '', phone: '', address: '', }
   const [cart, setCart] = useContext(CartContext);
   const [formData, setFormData] = useState(initialState)
   const rememberRef = useRef()

   const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))

   const handleSubmit = (e) => {
      e.preventDefault()
      if (rememberRef.current.checked) {
         localStorage.userD = JSON.stringify(formData)
      }
      setCart([])
   }

   return (

      <div className={'Order'}>
         {!cart.length && <Navigate to={'/'} />}
         <h1>order details</h1>
         <table>
            <thead>
               <th>title</th>
               <th>price</th>
               <th>quantity</th>
            </thead>
            <tbody>
               {cart.map(item =>
                  <tr key={item.id}>
                     <td>{item.title}</td>
                     <td>{item.price}</td>
                     <td>{item.quantity}</td>
                  </tr>
               )}
            </tbody>
         </table>

         <form className='formOrder' onSubmit={handleSubmit}>
            <div>
               <label htmlFor="name">Name</label>
               <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} />
            </div>
            <div>
               <label htmlFor="email">Email</label>
               <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} />
            </div>
            <div>
               <label htmlFor="phone">Phone</label>
               <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange} />
            </div>
            <div>
               <label htmlFor="address">Address</label>
               <input type="text" id="address" name="address" required value={formData.address} onChange={handleChange} />
            </div>
            <div>
               <label htmlFor="remember">
                  remember me <input ref={rememberRef} type="checkbox" name="remember" id="remember" />
               </label>
            </div>
            <button type="submit" className='btn'>Pay Now</button>
         </form>
      </div>
   );
};

export default Order;