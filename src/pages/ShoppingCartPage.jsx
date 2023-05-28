import { ShoppingCart } from '../components/shoppingCart/ShoppingCart';

const ShoppingCartPage = ({
  goodsToCart,
  total,
  onDeleteFromShoppingCart,
  onIncrementCount,
  onDecrementCount,
  onChangeValue,
}) => {
  return (
    <ShoppingCart
      goodsToCart={goodsToCart}
      total={total}
      onDeleteFromShoppingCart={onDeleteFromShoppingCart}
      onIncrementCount={onIncrementCount}
      onDecrementCount={onDecrementCount}
      onChangeValue={onChangeValue}
    />
  );
};

export default ShoppingCartPage;
