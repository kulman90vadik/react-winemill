

import Cards from '../Cards/Cards';
import Filter from '../Filter/Filter';
import './catalog.scss';

const Catalog = ({onAddToBasket, collections, isAdd, searchCity}) => {

  return (
    <section className="catalog">
      <div className="catalog__container">
        <Filter />
        <Cards collections={collections} onAddToBasket={onAddToBasket} isAdd={isAdd} searchCity={searchCity}/>
      </div>
    </section>
  );
}
 

export default Catalog;