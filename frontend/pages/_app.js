import NavBar from "../components/NavBar";
import Head from "next/head";
import "../styles/globals.css";
import { useEffect, useState, react } from "react";
import Footer from "../components/Footer";
function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState([]);
  const [reloadKey, setReloadKey] = useState(1);
  const addToCart = (item, qty, price) => {
    let newCart = cart;
    for (let index = 0; index < qty; index++) {
      newCart.push([item, price]);
    }
    console.log(newCart);
    setCart(newCart);
    setReloadKey(Math.random());
  };
  const removeFromCart = (item, qty) => {
    let newCart = cart;
    let index = newCart.indexOf(item);
    newCart.splice(index);
    setCart(newCart);
  };
  const clearCart = (item) => {
    setCart([]);
  };

  return (
    <>
      <Head>
        <title>MyShop</title>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"
        />
      </Head>
      <NavBar key={reloadKey} cart={cart} />
      <Component
        removeFromCart={removeFromCart}
        addToCart={addToCart}
        clearCart={clearCart}
        cart={cart}
        {...pageProps}
      />
      <Footer />
    </>
  );
}

export default MyApp;
