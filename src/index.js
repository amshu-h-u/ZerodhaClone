import React from 'react';
import ReactDOM from 'react-dom/client';
import { Link } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './components/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/*" element={<Home/>}/>
  </Routes>
  </BrowserRouter>
);
reportWebVitals();
