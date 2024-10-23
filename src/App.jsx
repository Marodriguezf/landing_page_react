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
  const [cart, setCart] = useState([]); // Estado del carrito

  // Función para alternar la visibilidad del popup
  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };


  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };


  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

 
  const clearCart = () => {
    setCart([]); 
  };

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
    <BrowserRouter basename="/landing_page_react">
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
              {/* Pasamos clearCart, cart y totalPrice al SalesForm */}
              <SalesForm 
                orderPopup={orderPopup} 
                setOrderPopup={setOrderPopup} 
                cart={cart} 
                totalPrice={totalPrice} 
                clearCart={clearCart} 
              />
            </>
          }
        />
        <Route
          path="/productList"
          element={
            <>
              <ProductList addToCart={addToCart} />
              <SalesForm 
                orderPopup={orderPopup} 
                setOrderPopup={setOrderPopup} 
                cart={cart} 
                totalPrice={totalPrice} 
                clearCart={clearCart} 
              />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
