import { React, useEffect, useState } from "react";
// import axios from 'axios';
import { Route, Routes } from "react-router-dom";

import "./scss-setings/includes.scss";
import Header from "./Header/Header";
import Home from "./pages/Home";
import ChipBasket from "./ChipBasket/ChipBasket";

import AppContext from "./context";

const App = () => {
  const [count, setCount] = useState(0);
  const [blockHidden, setBlockHidden] = useState(false);


  // search
  const [searchCity, setSerchCity] = useState("");
  // arr data
  const [collections, setCollections] = useState([]);
  // arr basket
  const [basketCollections, setBasketCollections] = useState([]);
  // loading
  const [loading, setLoading] = useState(false);

  const [isAdd, setIsAdd] = useState(false);

  const [summ, setSumm] = useState(0);

  const clickBtnSearch = (e) => {
    setSerchCity(e.target.value);
  };
  const onAddFilter = (index) => {
    setCount(index);
    setBlockHidden(!blockHidden);
  };
  const onOpen = (blockHidden) => {
    setBlockHidden(!blockHidden);
  }

  
  const [colorr, setColorr] = useState('');
  const [titlee, setTitlee] = useState('');
  const filterColor = (item, title) => {
    setColorr(item);
    setTitlee(title);
  }


  useEffect(() => {


    setLoading(true);

    let category = count ? `category=${count}` : '';
    let color = colorr.toLowerCase() ? `${titlee.toLowerCase()}=${colorr.toLowerCase()}` : '';

console.log(color);
console.log(`https://652cdf7ad0d1df5273efc824.mockapi.io/wine?${category}&${color}`);


    fetch(`https://652cdf7ad0d1df5273efc824.mockapi.io/wine?${category}&${color}`)
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
  }, [count, titlee, colorr]);

  const onAddToBasket = (objBasket) => {
    collections.map(elem => {
      if (Number(elem.id) === Number(objBasket.id)) return elem.isAdd = !objBasket.isAdd;
    })

    if (basketCollections.find((item) => Number(item.id) === Number(objBasket.id))) {
      setBasketCollections((prev) => prev.filter((elem) => Number(elem.id) !== Number(objBasket.id)));
      setSumm(prev => prev - Number(objBasket.price));
    } else {
      setBasketCollections((prev) => [...prev, objBasket]);

      setSumm(prev => prev + Number(objBasket.price));
    }

  };


  return (
    <AppContext.Provider
      value={{
        setIsAdd, isAdd,
        collections, basketCollections,
        setCollections, setBasketCollections,
        loading, searchCity, clickBtnSearch,
        summ, onAddToBasket, setSumm, onAddFilter, onOpen, blockHidden, filterColor, count
      }}
    >
      <Header />
      <Routes>

        <Route path="/" exact element={<Home />} />
        <Route path="basket" exact element={<ChipBasket />} />

      </Routes>
    </AppContext.Provider>
  );
};

export default App;
