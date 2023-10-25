

import Cards from '../Cards/Cards';
import Filter from '../Filter/Filter';
import './catalog.scss';

const Catalog = ({onAddToBasket, collections, searchCity, loading}) => {

  return (
    <section className="catalog">
      <div className="catalog__container">
        <Filter />
        <Cards collections={collections} onAddToBasket={onAddToBasket} searchCity={searchCity} loading={loading}/>
      </div>
    </section>
  );
}
 

export default Catalog;