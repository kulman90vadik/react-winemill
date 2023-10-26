import { useState, useContext } from "react";
import "./card.scss";

import AppContext from "../context";

const Card = ({item}) => {
  const [isAdd, setIsAdd] = useState(false);
  const {setBasketCollections} = useContext(AppContext);
  const {basketCollections} = useContext(AppContext);

  const {setSumm} = useContext(AppContext);

  const onAddToBasket = (objBasket) => {
    setIsAdd(!isAdd);
    if(basketCollections.find((item) => Number(item.id) === Number(objBasket.id))) {
      setBasketCollections((prev) => prev.filter((elem) => Number(elem.id !== Number(objBasket.id))));
      // повтор
    } else {
      setBasketCollections((prev) => [...prev, objBasket])

      setSumm(prev => prev + Number(objBasket.price));
    }
};


  return (
    <li className="cards__item">
        <article className="card">
          <div className="card__photo">
            <div
              className="card__linie"
              style={{ backgroundColor: item.color }}
            ></div>
            <img className="card__image" src={item.image} alt="Photo Wine" />
          </div>
          <h3 className="card__title">{item.name}</h3>
          <span className="card__year">{item.year}</span>
          <div className="card__country">
            <img className="card__banner" src={item.banner} alt="flag" />
            {item.country}
          </div>
          <div className="card__bottom">
            <div className="card__left">
              <span className="card__descr">Price</span>
              <div className="card__price">{item.price} $ </div>
            </div>
            <button
              className={`card__add btn-reset ${isAdd ? "green" : "red"}`}
              onClick={() => onAddToBasket(item)}
              type="button"
            >
              Add to Basket
            </button>
          </div>
        </article>
    </li>
  );
};

export default Card;
