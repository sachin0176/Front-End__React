import React from 'react';
import Header from './components/header/Header';
import Banners from './components/banners/Banners';
import './App.css'
import Product from './components/products/Product';
import Newslleter from './components/newsletter/Newslleter';

function App() {
  return (
    <div className='main'>
      <Header className='main'/>
    <Banners className='main'/>
    <Product className='main'/>
    <Newslleter  className='main'/>
      
    </div>
  );
}

export default App;


