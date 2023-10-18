import "./cards.scss";
import "./card.scss";

const Cards = ({ collections, onAddToBasket }) => {
  return (
    <div className="cards">
      <ul className="cards__list">
        {collections.map((item, index) => {
          return (
            <li className="cards__item" key={item.id}>
              <article className="card">
                <div className="card__photo">
                  <div
                    className="card__linie"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <img
                    className="card__image"
                    src={item.image}
                    alt="Photo Wine"
                  />
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
                  <button className="card__add btn-reset" onClick={() => onAddToBasket(item)} type="button">
                    Add to Basket
                  </button>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cards;
