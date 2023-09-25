import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Footer from './Components/Footer';
import Header from './Components/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Footer />
  </React.StrictMode>
);
