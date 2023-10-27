import './basket.scss';
import React from 'react';
import AppContext from "../../context";

import { useContext } from "react";

const Basket = () => {

  const {basketCollections} = useContext(AppContext);
  const {onBasketHandler} = useContext(AppContext);
  const {summ} = useContext(AppContext);

  return (
    <div className="basket">
      <div className="basket__top">
        <button className="btn-reset basket__text" onClick={onBasketHandler}>Корзина:</button>
        <div className="basket__number">{basketCollections.length}</div>
      </div>
      <div className="basket__bottom">
        <div>{summ}</div>
        <div>p</div>
      </div>
    </div>
  );
}
 
export default Basket;