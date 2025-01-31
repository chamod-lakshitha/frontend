import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Info from './components/Info';
import Gallery from './components/Gallery';
import Prediction from './components/Prediction';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Info />
    <Gallery />
    <Prediction />
    <Footer />
  </React.StrictMode>
);
