import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss-setings/includes.scss';
import Header from './Header/Header';
import Catalog from './Catalog/Catalog';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Catalog />
  </React.StrictMode>
);

