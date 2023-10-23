import "./cards.scss";


import Card from "./Card";

const Cards = ({collections, onAddToBasket, searchCity}) => {


  
  return (
    <div className="cards">
      <ul className="cards__list">
        {collections
        .filter((obj) => {
          return obj.country.toLowerCase().includes(searchCity.toLowerCase());
        })
        .map((item) => (
          <Card
            key={item.id}
            item={item}
            onAddToBasket={onAddToBasket}
          />
        ))}
      </ul>
    </div>
  );
};

export default Cards;
