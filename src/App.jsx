import { React, useEffect, useState } from "react";
// import axios from 'axios';

import "./scss-setings/includes.scss";
import Header from "./Header/Header";
import Catalog from "./Catalog/Catalog.jsx";
import ChipBasket from "./ChipBasket/ChipBasket";

import AppContext from "./context";

const App = () => {
  // sort mockApi
  // const [count, setCount] = useState(0);
  // search
  const [searchCity, setSerchCity] = useState("");
  // arr data
  const [collections, setCollections] = useState([]);
  // arr basket
  const [basketCollections, setBasketCollections] = useState([]);
  // loading
  const [loading, setLoading] = useState(false);

  const [isAdd, setIsAdd] = useState(false);

  const[summ, setSumm] = useState(0);

  const clickBtnSearch = (e) => {
    setSerchCity(e.target.value);
  };

  useEffect(() => {
    setLoading(true);
    // fetch(`https://652cdf7ad0d1df5273efc824.mockapi.io/wine?${count ? `category=${count}` : ''}`)
    fetch("https://652cdf7ad0d1df5273efc824.mockapi.io/wine")
      .then((res) => res.json())
      .then((json) => {
        setCollections(json);
      })
      .catch((err) => {
        console.warn(err);
      })
      .finally(() => setLoading(false));
    // ЗАПРОС НА ПОЛУЧЕНИЕ ДАННЫХ ДЛЯ КАРТОЧЕК
    // axios.get(`https://652cdf7ad0d1df5273efc824.mockapi.io/wine?${count ? `category=${count}` : ''}`).then((res) => {
    //   setCollections(res.data);
    // });
    // ЗАПРОС НА ДОБАВЛЕНИЕ В МАССИВ В БЕКЕНД
    // axios.get('https://652cdf7ad0d1df5273efc824.mockapi.io/cart').then((res) => {
    //   setBasketCollections(res.data);
    // });
    // ПРИ УДАЛЕНИИ ИЗ КОРЗИНЫ ТАК ЖЕ ВЫЗЫВАЕМ МЕТОТ AXIOS DELETE ПЕРЕДАЁМ ССЫЛКУ С ID ЭЛЕМЕНТАМ КОТОРОГО ЪОТИМ УДАЛИТЬ
  }, []);


  const [openBasket, setOpenBasket] = useState(false);
  
  const onBasketHandler = () => {
    setOpenBasket(!openBasket);
  };
  

  return (
    <AppContext.Provider
      value={{
        setIsAdd, isAdd,
        collections, basketCollections,
        setCollections, setBasketCollections,
        loading, searchCity, clickBtnSearch,
        onBasketHandler, openBasket,
        summ, setSumm
      }}
    >
        <Header />
        <Catalog />

        <ChipBasket />

    </AppContext.Provider>
  );
};

export default App;
