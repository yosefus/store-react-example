import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../assets/products.json'
import AddToCartButton from '../components/AddToCartButton';

const SingleItem = () => {
   const { id } = useParams();
   const currItem = products.find(item => item.id === parseInt(id))


   return (
      <div className={'singleItem'}>
         <h1>{currItem.title}</h1>
         <h2>{currItem.description}</h2>
         <img src={currItem.image} width={'80%'} alt={currItem.title} />
         <AddToCartButton id={parseInt(id)} item={currItem} />
      </div>
   );
};

export default SingleItem;