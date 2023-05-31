import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './components/GlobalStyle';
import { Layout } from './components/layout/Layout';
import { McDonny } from './components/products/McDonny';
import { CFK } from './components/products/CFK';
import { PapaJyhn } from './components/products/PapaJyhn';
import { DonMarket } from './components/products/DonMarket';
import { RestoCafe } from './components/products/RestoCafe';
import { GetAllGoods } from './services/GetAllGoods';

const ShopPage = lazy(() => import('./pages/ShopPage'));
const ShoppingCartPage = lazy(() => import('./pages/ShoppingCartPage'));

const getInitialCart = () => {
  const savedCart = localStorage.getItem('cart');
  if (savedCart !== null) {
    const parsedCart = JSON.parse(savedCart);
    return parsedCart;
  }
  return [];
};

export const App = () => {
  const [goodsToCart, setGoodsToCart] = useState(getInitialCart);
  const [allGoods, setAllGoods] = useState([]);
  const [total, setTotal] = useState(0);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(goodsToCart));
  }, [goodsToCart]);

  useEffect(() => {
    setTotal(
      goodsToCart.reduce((prev, current) => prev + current.totalPrice, 0)
    );
  }, [goodsToCart]);

  useEffect(() => {
    GetAllGoods()
      .then(resp => resp.json())
      .then(json => setAllGoods(json));
  }, []);

  const addToShoppingCart = elementId => {
    const productById = allGoods.find(product => product.id === elementId);

    if (
      goodsToCart.filter(el => el.id === productById.id).length &&
      goodsToCart !== []
    ) {
      return toast.error(`${productById.name} is already in Shopping Cart!`);
    }
    return (
      setGoodsToCart([...goodsToCart, { ...productById }]),
      toast.success(`${productById.name} has been added to Your Shopping Cart!`)
    );
  };

  const deleteFromShoppingCart = elementId => {
    setGoodsToCart(product =>
      product.filter(element => element.id !== elementId)
    );
  };

  const incrementCount = id => {
    setGoodsToCart(product => {
      return product.map(element => {
        if (element.id === id) {
          return {
            ...element,
            count: element.count + 1,
            totalPrice: (element.count + 1) * element.price,
          };
        }
        return element;
      });
    });
  };

  const decrementCount = id => {
    setGoodsToCart(product => {
      return product.map(element => {
        if (element.id === id) {
          const newCount = element.count - 1 > 1 ? element.count - 1 : 1;

          return {
            ...element,
            count: newCount,
            totalPrice: newCount * element.price,
          };
        }
        return element;
      });
    });
  };

  const changeValue = (id, value) => {
    setGoodsToCart(product => {
      return product.map(element => {
        if (element.id === id) {
          return {
            ...element,
            count: value,
            totalPrice: value * element.price,
          };
        }
        return element;
      });
    });
  };

  const addOrder = newOrder => {
    if (goodsToCart.length === 0) {
      return toast.error('Your cart is empty.');
    }
    return (
      toast.success('Your order has been accepted.'),
      setOrders([...orders, { ...newOrder, total }]),
      setGoodsToCart([]),
      setTotal(0)
    );
  };

  return (
    <>
      <Toaster toastOptions={{ duration: 3000 }} />
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<ShopPage />}>
            <Route
              path="mcdonny"
              element={<McDonny onAddToCart={addToShoppingCart} />}
            />
            <Route
              path="cfk"
              element={<CFK onAddToCart={addToShoppingCart} />}
            />
            <Route
              path="papajyhn"
              element={<PapaJyhn onAddToCart={addToShoppingCart} />}
            />
            <Route
              path="donmarket"
              element={<DonMarket onAddToCart={addToShoppingCart} />}
            />
            <Route
              path="restocafe"
              element={<RestoCafe onAddToCart={addToShoppingCart} />}
            />
          </Route>
          <Route
            path="cart"
            element={
              <ShoppingCartPage
                goodsToCart={goodsToCart}
                onDeleteFromShoppingCart={deleteFromShoppingCart}
                onIncrementCount={incrementCount}
                onDecrementCount={decrementCount}
                onChangeValue={changeValue}
                total={total}
                onSubmit={addOrder}
              />
            }
          />
        </Route>
      </Routes>
    </>
  );
};
