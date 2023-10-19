
import { useEffect, useState } from 'react';
import "./scss-setings/includes.scss";
import Header from "./Header/Header";
import Catalog from "./Catalog/Catalog.js";

const App = () => {
  // sort mockApi
  const [count, setCount] = useState(0);
  // search
  const [searchCity, setSerchCity] = useState('');
  // arr data
  const [collections, setCollections] = useState([]);
  // arr basket
  const [basketCollections, setBasketCollections] = useState([]);
  // count basket
  const [countBasket, setCountBasket] = useState(0);
  const [isAdd, setIsAdd] = useState(false);
  // add to basket
  const onAddToBasket = (objBasket) => {
    setBasketCollections((prev) => {
      return [...prev, objBasket];
    });
    setCountBasket((prev) => prev + 1);
    setIsAdd(!isAdd);
  };

  const clickBtnSearch = (e) => {
    setSerchCity(e.target.value);
  }



  useEffect(() => {
    // setIsLoading(true);
    fetch(`https://652cdf7ad0d1df5273efc824.mockapi.io/wine?${count ? `category=${count}` : ''}`)
      .then((res) => res.json())
      .then((json) => {
        setCollections(json);
      })
      .catch((err) => {
        console.warn(err);
      })
      // .finally(() => setIsLoading(false));
    }, [count]);

  return (
    <>
      <Header
        basketCollections={basketCollections}
        countBasket={countBasket}
        clickBtnSearch={clickBtnSearch}
        searchCity={searchCity}
      />
      <Catalog
        collections={collections}
        onAddToBasket={onAddToBasket}
        isAdd={isAdd}
        searchCity={searchCity}
      />
    </>
  );
};

export default App;
