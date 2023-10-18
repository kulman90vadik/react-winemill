import { useState } from 'react';
import './scss-setings/includes.scss';
import Header from './Header/Header';
import Catalog from './Catalog/Catalog.js';

const App = () => {
// arr data
  const [collections, setCollections] = useState([]);
// arr basket
  const [basketCollections, setBasketCollections] = useState([]);
// count basket
  const [countBasket, setCountBasket] = useState(0);
  // const [isAdd, setIsAdd] = useState('green');
// add to basket
  const onAddToBasket = (objBasket) => {
    setBasketCollections(prev => [...prev, objBasket]);
  
    setCountBasket(prev => prev + 1);

  }

  return (
    <>
      <Header basketCollections={basketCollections} countBasket={countBasket}/>
      <Catalog collections={collections} setCollections={setCollections} onAddToBasket={onAddToBasket}/>
    </>
  );
}
 
export default App;