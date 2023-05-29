import { ShoppingCart } from '../components/shoppingCart/SoppingCart';

const ShoppingCartPage = ({
  goodsToCart,
  total,
  onDeleteFromShoppingCart,
  onIncrementCount,
  onDecrementCount,
  onChangeValue,
  onSubmit,
}) => {
  return (
    <ShoppingCart
      goodsToCart={goodsToCart}
      total={total}
      onDeleteFromShoppingCart={onDeleteFromShoppingCart}
      onIncrementCount={onIncrementCount}
      onDecrementCount={onDecrementCount}
      onChangeValue={onChangeValue}
      onSubmit={onSubmit}
    />
  );
};

export default ShoppingCartPage;
