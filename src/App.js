import { useState } from 'react';
import './scss-setings/includes.scss';
import Header from './Header/Header';
import Catalog from './Catalog/Catalog.js';

const App = () => {
  // arr basket
  const [basketCollections, setBasketCollections] = useState([]);

  const onAddToBasket = (objBasket) => {
    setBasketCollections(prev => [...prev, objBasket]);
    console.log(objBasket);
  }

  return (
    <>
      <Header basketCollections={basketCollections}/>
      <Catalog onAddToBasket={onAddToBasket}/>
    </>
  );
}
 
export default App;