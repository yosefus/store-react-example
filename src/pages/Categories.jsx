import { Link } from 'react-router-dom';
import products from '../assets/products.json'

const Categories = () => {
   const categories = products.reduce((prev, curr) =>
      prev.includes(curr.category) ? prev : [...prev, curr.category],
      [])

   return (
      <div className={'categories'}>
         <h1>Categories</h1>
         <ul>
            {categories.map(category =>
               <li key={category}><Link to={`/category/${category}`}>{category}</Link></li>
            )}
         </ul>
      </div>
   );
};

export default Categories;
