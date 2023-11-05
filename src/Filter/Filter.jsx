import FilterItems from './FilterItems/FilterItems';
import './filter.scss';



const Filter = () => {

  const color = ['Pink', 'White', 'Gold', 'Red'];
  // const sweetness = ['Brut', 'Dessertwein', 'Likörwein', 'Trocken', 'Halbsüß'];
  // const country = ['France', 'Belgium', 'England', 'Austria', 'Italy'];

  return (
    <div className="filter">
        <FilterItems filterArr={color} title={'Color'}/>
        {/* <FilterItems filterArr={sweetness} title={'Sweetness'}/> */}
        {/* <FilterItems title={'Price'}/> */}
        {/* <FilterItems filterArr={country} title={'Country'}/> */}
    </div>
  );
}

export default Filter;