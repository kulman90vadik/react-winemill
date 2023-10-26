import {useContext} from "react"
import emptyCart from '../images/empty-cart.svg'
import "./chipBasket.scss";
import Counter from "./Counter";

import AppContext from "../context";

const ChipBasket = () => {

  const {basketCollections} = useContext(AppContext);
  const {setBasketCollections} = useContext(AppContext);
  const {onBasketHandler} = useContext(AppContext);
  const {openBasket} = useContext(AppContext);

  const delCartBasket = (id) => {
    console.log(id);
    setBasketCollections(basketCollections.filter(el => el.id !== id));
  };

  return (
    <div className={`chipBasket ${openBasket ? "chipBasket--active" : ""}`}>
      {basketCollections.length > 0 ? (
        <div className="chipBasket__content">
          <button
            className="chipBasket__close btn-reset"
            type="button"
            onClick={onBasketHandler}
          >
            &times;
          </button>

          <div className="chipBasket__inner">
            <ul className="chipBasket__heading">
              <li className="chipBasket__head chipBasket__grid">Produkt</li>
              <li className="chipBasket__head chipBasket__grid">Price</li>
              <li className="chipBasket__head chipBasket__grid">Amount</li>
              <li className="chipBasket__head chipBasket__grid">Total</li>
            </ul>
            <ul className="chipBasket__list">
              {basketCollections.map((item) => {
                return (
                  <li className="chipBasket__item" key={item.id}>
                    <div className="chipBasket__grid">
                      <div className="chipBasket__left">
                        <div className="chipBasket__photo">
                          {/*////////*/}
                          <div
                            className="chipBasket__close-btn"
                            onClick={() => delCartBasket(item.id)}
                          >
                            &times;
                          </div>
                          <img
                            className="chipBasket__image"
                            src={item.image}
                            alt="Photo Wine"
                          />
                        </div>
                        <div className="chipBasket__info">
                          <h3 className="chipBasket__title">{item.name}</h3>
                          <span className="chipBasket__year">{item.year}</span>
                          <div className="chipBasket__country">
                            <img
                              className="chipBasket__banner"
                              src={item.banner}
                              alt="flag"
                            />
                            {item.country}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="chipBasket__grid chipBasket__price">
                      {item.price}
                    </div>

                    <Counter
                      price={item.price}
                      delCartBasket={delCartBasket}
                      id={item.id}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      ) : (
        <div className="chipBasket__content chipBasket__content--empty">
          <button
            className="chipBasket__close btn-reset"
            type="button"
            onClick={onBasketHandler}
          >
            &times;
          </button>
          <img className='chipBasket__image-empty' src={emptyCart} alt="empty Cart" />
        </div>
      )}
    </div>
  );
};

export default ChipBasket;
