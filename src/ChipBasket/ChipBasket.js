import { useState } from "react";
import "./chipBasket.scss";

const ChipBasket = ({ openBasket, onBasketHandler, basketCollectionsFilter }) => {

  const[amount, setAmount] = useState(1);

  // const pricePlus = () => {
  //   setAmount(prev => prev + 1)
  // }

  // const priceMinus = () => {
  //   setAmount(prev => prev - 1)
  // }

  return (
    <div className={`chipBasket ${openBasket ? "chipBasket--active" : ""} `}>
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
            {basketCollectionsFilter.map((item) => {
              return (
                <li className="chipBasket__item" key={item.id}>
                  <div className="chipBasket__grid">
                    <div className="chipBasket__left">
                      <div className="chipBasket__photo">
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

                  <div className="chipBasket__grid chipBasket__btns">
                    <button
                      className="chipBasket__btn btn-reset"
                      type="button"
                      onClick={() => setAmount(prev => prev + 1)}
                    >
                      -
                    </button>
              {amount}
                    <button
                      className="chipBasket__btn btn-reset"
                      type="button"
                      onClick={() => setAmount(prev => prev + 1)}
                    >
                      +
                    </button>
                  </div>


                  <div className="chipBasket__grid">{item.price}</div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ChipBasket;
