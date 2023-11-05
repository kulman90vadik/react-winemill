import './basket.scss';
import { Link } from "react-router-dom";
import React from 'react';
import AppContext from "../../context";

import { useContext } from "react";

const Basket = () => {

  const {basketCollections} = useContext(AppContext);
  const {summ} = useContext(AppContext);

  return (
    <div className="basket">
      <div className="basket__top">

      <Link to="/basket">
          <button className="btn-reset basket__text" >Корзина:</button>
      </Link>

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