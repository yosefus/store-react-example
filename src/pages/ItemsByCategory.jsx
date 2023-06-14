import React from 'react';
import { Link, useParams } from 'react-router-dom';
import products from '../assets/products.json'
import AddToCartButton from '../components/AddToCartButton';


const ItemsByCategory = () => {
   const { category } = useParams();
   const items = products.filter(item => item.category === category)


   return (
      <div className={'itemsByCategory'}>
         <h1>{category}</h1>
         <ul>
            {items.map(item =>
               <li className='card' key={item.id}>
                  <Link to={`/items/${item.id}`}>
                     <img src={item.image} alt={item.title} width='90%' />
                  </Link>
                  <h2>{item.title}</h2>
                  <AddToCartButton id={item.id} item={item} />
               </li>
            )}
         </ul>
      </div>
   );
};

export default ItemsByCategory;
