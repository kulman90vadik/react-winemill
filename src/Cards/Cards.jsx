import "./cards.scss";
import { useContext, React } from "react";
import Loader from "./Loader";
import Card from "./Card";

import AppContext from "../context";

const Cards = () => {

  const {collections} = useContext(AppContext);
  const {loading} = useContext(AppContext);
  const {searchCity} = useContext(AppContext);
  
  return (
    <div className="cards">
      <ul className="cards__list">
      {loading 
      ? 
        [...Array(10)].map((item, i) => <Loader key={i}/>)
      : 
        collections
        .filter((obj) => {
          return obj.country.toLowerCase().includes(searchCity.toLowerCase());
        })
        .map((item) => (
          <Card
            key={item.id}
            item={item}
          />
        ))

      }
      </ul>
    </div>
  );
};

export default Cards;
