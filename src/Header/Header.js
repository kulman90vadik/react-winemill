import { useState } from "react";

import Logo from "../components/Logo/Logo";
import "./header.scss";

import Search from "../components/Search/Search";
import Cabinet from "../components/Cabinet/Cabinet";
import Location from "../components/Location/Location";
import Basket from "../components/Basket/Basket";
import ChipBasket from "../ChipBasket/ChipBasket";

const Header = ({ basketCollections, clickBtnSearch, searchCity}) => {
  const [openBasket, setOpenBasket] = useState(false);

  const onBasketHandler = () => {
    setOpenBasket(!openBasket);
  };

  const basketCollectionsFilter = basketCollections.reduce((acc, item) => {
    if (acc.includes(item)) return acc; 
    return [...acc, item]; // добавляем к аккумулятору и возвращаем новый аккумулятор
  }, []);

  return (
    <div className="header">
      <div className="header__container">
        <div className="header__top">
          <Logo />
          <Search clickBtnSearch={clickBtnSearch} searchCity={searchCity}/>
          <Cabinet />
          <Location />
          <Basket onBasketHandler={onBasketHandler} basketCollectionsFilter={basketCollectionsFilter}/>
          <ChipBasket
            openBasket={openBasket}
            onBasketHandler={onBasketHandler}
            basketCollectionsFilter={basketCollectionsFilter}
          />
        </div>
        <div className="header__bottom"></div>
      </div>
    </div>
  );
};

export default Header;
