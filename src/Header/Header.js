import Logo from "../components/Logo/Logo";
import "./header.scss";

import Search from "../components/Search/Search";
import Cabinet from "../components/Cabinet/Cabinet";
import Location from "../components/Location/Location";
import Basket from "../components/Basket/Basket";
import ChipBasket from "../ChipBasket/ChipBasket";
import { useState } from "react";

const Header = ({ basketCollections }) => {
  const [openBasket, setOpenBasket] = useState(false);

  const onBasketHandler = () => {
    setOpenBasket(!openBasket);
  };

  return (
    <div className="header">
      <div className="header__container">
        <div className="header__top">
          <Logo />
          <Search />
          <Cabinet />
          <Location />
          <Basket onBasketHandler={onBasketHandler} />
          <ChipBasket
            openBasket={openBasket}
            onBasketHandler={onBasketHandler}
            basketCollections={basketCollections}
          />
        </div>
        <div className="header__bottom"></div>
      </div>
    </div>
  );
};

export default Header;
