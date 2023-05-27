import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './components/GlobalStyle';
import { Layout } from './components/layout/Layout';
import { McDonny } from '../src/components/goods/McDonny';
import { CFK } from '../src/components/goods/CFK';
import { PapaJyhn } from '../src/components/goods/PapaJyhn';

const ShopPage = lazy(() => import('./pages/ShopPage'));
const ShoppingCartPage = lazy(() => import('./pages/ShoppingCartPage'));

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<ShopPage />}>
            <Route path="mcdonny" element={<McDonny />} />
            <Route path="cfk" element={<CFK />} />
            <Route path="papajyhn" element={<PapaJyhn />} />
            <Route />
            <Route />
          </Route>
          <Route path="cart" element={<ShoppingCartPage />} />
        </Route>
      </Routes>
    </>
  );
};
