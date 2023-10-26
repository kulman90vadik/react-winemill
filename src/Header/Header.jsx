
import Logo from "../components/Logo/Logo";
import "./header.scss";

import Search from "../components/Search/Search";
import Cabinet from "../components/Cabinet/Cabinet";
import Location from "../components/Location/Location";
import Basket from "../components/Basket/Basket";

const Header = () => {

  return (
    <div className="header">
      <div className="header__container">
        <div className="header__top">
          <Logo />
          <Search />
          <Cabinet />
          <Location />
          <Basket />
          {/* <ChipBasket openBasket={openBasket} onBasketHandler={onBasketHandler} */}
          {/* /> */}
        </div>
        <div className="header__bottom"></div>
      </div>
    </div>
  );
};

export default Header;
