import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import products from '../assets/products.json'
import AddToCartButton from '../components/AddToCartButton';


const ItemsByCategory = () => {
   const { category } = useParams();
   const [searchBy, setSearchBy] = useState('')
   const [sortBy, setSortBy] = useState()
   const items = products.filter(item => item.category === category)
   const itemsBySearch = items.filter(item => item.title.toLowerCase().includes(searchBy) || item.description.toLowerCase().includes(searchBy))

   if (sortBy)
      itemsBySearch.sort((a, b) => sortBy === '1-10' ?
         a.price > b.price ?
            1 : -1 : sortBy === '10-1' ? a.price < b.price ? 1 : -1 : 0)


   return (
      <div className={'itemsByCategory'}>
         <h1>{category}</h1>
         <div className="search-bar">
            <input type="text" placeholder='search item...' onChange={e => setSearchBy(e.target.value)} />
            <label >sort by
               <select onChange={e => setSortBy(e.target.value)} name="" id="">
                  <option value="">price</option>
                  <option value="1-10">price up</option>
                  <option value="10-1">price down</option>
               </select>
            </label>

         </div>
         <ul>
            {itemsBySearch.map(item =>
               <li className='card' key={item.id}>
                  <Link to={`/items/${item.id}`}>
                     <img src={item.image} alt={item.title} width='90%' />
                  </Link>
                  <h2>{item.title}</h2>
                  <p>${item.price}</p>
                  <AddToCartButton id={item.id} item={item} />
               </li>
            )}
         </ul>
      </div>
   );
};

export default ItemsByCategory;
