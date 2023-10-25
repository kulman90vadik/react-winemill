import "./cards.scss";

import Loader from "./Loader";
import Card from "./Card";

const Cards = ({collections, onAddToBasket, searchCity, loading}) => {


  
  return (
    <div className="cards">
      <ul className="cards__list">
      {loading 
      ? 
        [...Array(10)].map(item => <Loader />)
      : 
        
        collections
        .filter((obj) => {
          return obj.country.toLowerCase().includes(searchCity.toLowerCase());
        })
        .map((item) => (
          <Card
            key={item.id}
            item={item}
            onAddToBasket={onAddToBasket}
          />
        ))

      }
      </ul>
    </div>
  );
};

export default Cards;
