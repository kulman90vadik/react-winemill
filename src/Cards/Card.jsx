import { useContext } from "react";
import "./card.scss";

import AppContext from "../context";

const Card = ({item}) => {
  // const [isAdd, setIsAdd] = useState(false);
  // const {setBasketCollections} = useContext(AppContext);
  // const {basketCollections} = useContext(AppContext);

  const {onAddToBasket} = useContext(AppContext);

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
          <span className="card__sweetness">{item.sweetness}</span>
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
              className={`card__add btn-reset ${item.isAdd ? "green" : "red"}`}
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
