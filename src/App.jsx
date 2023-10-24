
import { useEffect, useState } from 'react';
// import axios from 'axios';

import "./scss-setings/includes.scss";
import Header from "./Header/Header";
import Catalog from "./Catalog/Catalog.jsx";

const App = () => {
  // sort mockApi
  const [count, setCount] = useState(0);
  // search
  const [searchCity, setSerchCity] = useState('');
  // arr data
  const [collections, setCollections] = useState([]);
  // arr basket
  const [basketCollections, setBasketCollections] = useState([]);

// add to basket
  const onAddToBasket = (objBasket, setIsAdd) => {

//  axios.post('https://652cdf7ad0d1df5273efc824.mockapi.io/cart', objBasket);
      setIsAdd(true);
      setBasketCollections((prev) => {
        return [...prev, objBasket];
      });

      console.log(basketCollections);
  };

  const clickBtnSearch = (e) => {
    setSerchCity(e.target.value);
  }

  // const test = () => {

  // }


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

// ЗАПРОС НА ПОЛУЧЕНИЕ ДАННЫХ ДЛЯ КАРТОЧЕК

      // axios.get(`https://652cdf7ad0d1df5273efc824.mockapi.io/wine?${count ? `category=${count}` : ''}`).then((res) => {
      //   setCollections(res.data);
      // });

// ЗАПРОС НА ДОБАВЛЕНИЕ В МАССИВ В БЕКЕНД  

      // axios.get('https://652cdf7ad0d1df5273efc824.mockapi.io/cart').then((res) => {
      //   setBasketCollections(res.data);
      // });

// ПРИ УДАЛЕНИИ ИЗ КОРЗИНЫ ТАК ЖЕ ВЫЗЫВАЕМ МЕТОТ AXIOS DELETE ПЕРЕДАЁМ ССЫЛКУ С ID ЭЛЕМЕНТАМ КОТОРОГО ЪОТИМ УДАЛИТЬ

    }, [count]);

  return (
    <>
      <Header
        basketCollections={basketCollections}
        setBasketCollections={setBasketCollections}
        clickBtnSearch={clickBtnSearch}
        searchCity={searchCity}
        // test={test}
      />
      <Catalog
        collections={collections}
        onAddToBasket={onAddToBasket}
        searchCity={searchCity}
        
      />
    </>
  );
};

export default App;
