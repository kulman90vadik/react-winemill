

import { useState } from "react";
import "./chipBasket.scss";

import Counter from "./Counter";

const ChipBasket = ({ openBasket, onBasketHandler, basketCollectionsFilter }) => {

// const[a, setA] = useState(basketCollectionsFilter);

// console.log(a);

  const delCartBasket = (id) => {
    // basketCollectionsFilter.filter(item => item.id !== id);

    // console.log(basketCollectionsFilter);
    // console.log(id);
  }

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
 {/*////////*/}
                      <div className="chipBasket__closeBtn">&times;</div>
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

                  <Counter price={item.price} delCartBasket={delCartBasket} id={item.id}/>
                
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
