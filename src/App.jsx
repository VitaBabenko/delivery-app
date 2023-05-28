import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './components/GlobalStyle';
import { Layout } from './components/layout/Layout';
import { getGoodById } from './goodsAPI/McDonnyAPI';
import { McDonny } from '../src/components/goods/McDonny';
import { CFK } from '../src/components/goods/CFK';
import { PapaJyhn } from '../src/components/goods/PapaJyhn';

const ShopPage = lazy(() => import('./pages/ShopPage'));
const ShoppingCartPage = lazy(() => import('./pages/ShoppingCartPage'));

export const App = () => {
  const [goodsToCart, setGoodsToCart] = useState([]);
  const [total, setTotal] = useState(0);
  console.log(goodsToCart);

  useEffect(() => {
    setTotal(
      goodsToCart.reduce((prev, current) => prev + current.totalPrice, 0)
    );
  }, [goodsToCart]);

  const addToShoppingCart = elementId => {
    const goodsToFind = getGoodById(elementId);
    goodsToCart.filter(product => product.id === goodsToFind.id).length &&
    goodsToCart !== []
      ? toast.error(`${goodsToFind.name} is already in cart!`)
      : setGoodsToCart([...goodsToCart, { ...goodsToFind, inCart: true }]);
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
            <Route path="cfk" element={<CFK />} />
            <Route path="papajyhn" element={<PapaJyhn />} />
            <Route />
            <Route />
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
              />
            }
          />
        </Route>
      </Routes>
    </>
  );
};
