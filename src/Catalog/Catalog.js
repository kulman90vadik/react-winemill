import { useEffect, useState } from 'react';

import Cards from '../Cards/Cards';
import Filter from '../Filter/Filter';
import './catalog.scss';

const Catalog = ({onAddToBasket}) => {

  // arr data
  const [collections, setCollections] = useState([]);



  useEffect(() => {
    // setIsLoading(true);
    fetch('https://652cdf7ad0d1df5273efc824.mockapi.io/wine')
      .then((res) => res.json())
      .then((json) => {
        setCollections(json);
      })
      .catch((err) => {
        console.warn(err);
      })
      // .finally(() => setIsLoading(false));
    }, []);


   


  return (
    <section className="catalog">
      <div className="catalog__container">
        <Filter />
        <Cards collections={collections} onAddToBasket={onAddToBasket}/>
      </div>
    </section>
  );
}
 
export default Catalog;