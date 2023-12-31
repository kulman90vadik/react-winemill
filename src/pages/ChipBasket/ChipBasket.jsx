import { useContext } from "react"
import emptyCart from '../../images/empty-cart.svg'
import "./chipBasket.scss";
import Counter from "./Counter";

import AppContext from "../../context";

const ChipBasket = () => {

  const { basketCollections } = useContext(AppContext);
  const { setBasketCollections } = useContext(AppContext);
  const { onBasketHandler } = useContext(AppContext);
  const { setCollections } = useContext(AppContext);
  const { collections } = useContext(AppContext);
  const {summ} = useContext(AppContext);
  // const {setSumm} = useContext(AppContext);

  const delMinusCartBasket = (id) => {
    // console.log(statePrice);
    // console.log(price);
    setBasketCollections(basketCollections.filter(el => el.id !== id));
    setCollections(collections.map(el => (el.id !== id) ? el : { ...el, isAdd: !el.isAdd }))
  };


  const rr = (id, price) => {
    setBasketCollections(basketCollections.filter(el => el.id !== id));
    setCollections(collections.map(el => (el.id !== id) ? el : { ...el, isAdd: !el.isAdd }))
  };
  

  return (
    <div className="chipBasket">
      <div className="chipBasket__container">

        {basketCollections.length > 0 ? (
          <div className="chipBasket__content">

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
                            <div
                              className="chipBasket__close-btn"
                              onClick={() => rr(item.id, item.price)}
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
                        delMinusCartBasket={delMinusCartBasket}
                        id={item.id}
                      />
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="chipBasket__right">
              <ul className="chipBasket-summa">
                <li className="chipBasket-summa__item">
                  <span className="chipBasket-summa__text">Amount</span>
                  <div className="chipBasket-summa__dots"></div>
                  <div className="chipBasket-summa__number">{summ}</div>
                </li>
                <li className="chipBasket-summa__item">
                  <span className="chipBasket-summa__text">Discount</span>
                  <div className="chipBasket-summa__dots"></div>
                  <div className="chipBasket-summa__number">0</div>
                </li>
                <li className="chipBasket-summa__item">
                  <span className="chipBasket-summa__text">Delivery</span>
                  <div className="chipBasket-summa__dots"></div>
                  <div className="chipBasket-summa__number">100</div>
                </li>
                <li className="chipBasket-summa__item">
                  <span className="chipBasket-summa__text">Payment</span>
                  <div className="chipBasket-summa__dots"></div>
                  <div className="chipBasket-summa__number">{summ + 100}</div>
                </li>
              </ul>
              <button className="chipBasket-summa__btn btn-reset" type="button">
                CHECKOUT
              </button>
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
    </div>
  );
};

export default ChipBasket;
