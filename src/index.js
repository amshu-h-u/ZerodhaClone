import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './landingpage/Navbar';
import HomePage from './landingpage/home/HomePage';
import Footer from './landingpage/Footer';
import SignUp from './landingpage/signup/SignUp';
import AboutPage from './landingpage/about/AboutPage';
import PricingPage from './landingpage/pricing/PricingPage';
import ProductPage from './landingpage/products/ProductPage';
import SupportPage from './landingpage/support/SupportPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
 <Navbar/>
 <Routes>
 <Route path="/" element={<HomePage/>}></Route>
 <Route path="/signup" element={<SignUp/>}></Route>
 <Route path="/about" element={<AboutPage/>}></Route>
 <Route path="/pricing" element={<PricingPage/>}></Route>
 <Route path="/products" element={<ProductPage/>}></Route>
 <Route path="/support" element={<SupportPage/>}></Route>
 </Routes>
     <Footer/>
 </BrowserRouter>
 
);

