import "./card.scss";

const Card = ({item, onAddToBasket, isAdd}) => {
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
            className="card__add btn-reset"
            onClick={() => onAddToBasket(item)}
            type="button"
            // style={{ backgroundColor: isAdd ? "green" : "red" }}
          >
            Add to Basket
          </button>
        </div>
      </article>
    </li>
  );
};

export default Card;
