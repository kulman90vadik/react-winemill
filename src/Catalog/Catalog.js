import Cards from '../Cards/Cards';
import Filter from '../Filter/Filter';
import './catalog.scss';

const Catalog = () => {


  // https://652cdf7ad0d1df5273efc824.mockapi.io/wine





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