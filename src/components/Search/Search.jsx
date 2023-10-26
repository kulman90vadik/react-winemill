
import "./search.scss";
import { useContext } from "react";
import AppContext from "../../context";

const Search = () => {

  const {searchCity} = useContext(AppContext);
  const {clickBtnSearch} = useContext(AppContext);

  return (
    <div className="search">
      <input
        className="search__input"
        type="text"
        defaultValue={searchCity}
        onChange={clickBtnSearch}
        placeholder="Search by country"
      />
    </div>
  );
};

export default Search;
