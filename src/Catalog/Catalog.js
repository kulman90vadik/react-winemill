import Cards from '../Cards/Cards';
import Filter from '../Filter/Filter';
import './catalog.scss';

const Catalog = () => {
  return (
    <section className="catalog">
      <div className="catalog__container">
        <Filter />
        <Cards />
      </div>
    </section>
  );
}
 
export default Catalog;