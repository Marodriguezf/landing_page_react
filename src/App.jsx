import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero_section/Hero';
import Products from './components/Products/Products';
import News from './components/News/News';
import Footer from './components/Footer/Footer';
import ProductList from './components/ProductList/ProductList';
import SalesForm from './components/SalesForm/SalesForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  const [orderPopup, setOrderPopup] = useState(false);
  const [cart, setCart] = useState([]);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  // Función para agregar productos al carrito
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Calcular el precio total del carrito
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <BrowserRouter>
      <Navbar handleOrderPopup={handleOrderPopup} cartItems={cart.length} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Products />
              <News />
              <Footer />
              <SalesForm orderPopup={orderPopup} setOrderPopup={setOrderPopup} cart={cart} totalPrice={totalPrice} />
            </>
          }
        />
        <Route path="/productList" element={<ProductList addToCart={addToCart} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
