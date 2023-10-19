
import "./search.scss";
// import { Icon } from '../Icon';

const Search = ({clickBtnSearch, searchCity}) => {

  return (
    <div className="search">
      <input
        className="search__input"
        type="text"
        value={searchCity}
        onChange={clickBtnSearch}
        placeholder="Search by country"
      />
    </div>
  );
};

export default Search;
