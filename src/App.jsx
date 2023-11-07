import { React, useEffect, useState } from "react";
// import axios from 'axios';
import { Route, Routes } from "react-router-dom";

import "./scss-setings/includes.scss";
import Header from "./Header/Header";
import Home from "./pages/Home";
import ChipBasket from "./pages/ChipBasket/ChipBasket";
import NotFound from "./pages/NotFound/NotFound";

import AppContext from "./context";

const App = () => {

  const [count, setCount] = useState(0);
  const [countPrice, setCountPrice] = useState(0);
  const [blockHidden, setBlockHidden] = useState(false); 
  const [blockHiddenPrice, setBlockHiddenPrice] = useState(false); 
  const [order, setOrder] = useState(0); 

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
  // 
  const onAddFilterPrice = (index, id) => {
    setCountPrice(index);
    setOrder(id);
    console.log(id);
    setBlockHiddenPrice(!blockHiddenPrice);
  };
  const onOpenPrice = (blockHiddenPrice) => {
    setBlockHiddenPrice(!blockHiddenPrice);
  }
// 
  
  const [colorr, setColorr] = useState('');
  const [titlee, setTitlee] = useState('');
  const filterColor = (item, title) => {
    setColorr(item);
    setTitlee(title);
  }

  const[pageIndex, setPageIndex] = useState(1);
  const handlePageClick = (page) => {
    setPageIndex(page);
    console.log(page);
  };



  useEffect(() => {
    setLoading(true);
    let category = count ? `&category=${count}` : '';
    let orderId = order ? `&sortBy=price&order=${order}` : '';
    let color = colorr.toLowerCase() ? `&${titlee.toLowerCase()}=${colorr.toLowerCase()}` : '';
    let page = `page=${pageIndex}&limit=5`

    console.log(`https://652cdf7ad0d1df5273efc824.mockapi.io/wine?${page}${category}${orderId}${color}`);


    fetch(`https://652cdf7ad0d1df5273efc824.mockapi.io/wine?${page}${category}${orderId}${color}`)
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
  }, [count, titlee, colorr, order, pageIndex]);

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
        summ, onAddToBasket, setSumm, onAddFilter, onOpen, blockHidden, filterColor, count,
        setSerchCity,
        onAddFilterPrice, onOpenPrice, blockHiddenPrice, countPrice,
        handlePageClick, pageIndex
      }}
    >
      <Header />
      <Routes>

        <Route path="/" exact element={<Home />} />
        <Route path="basket" exact element={<ChipBasket />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </AppContext.Provider>
  );
};

export default App;
