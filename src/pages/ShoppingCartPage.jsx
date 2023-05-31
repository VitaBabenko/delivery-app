import PropTypes from 'prop-types';
import { ShoppingCart } from '../components/shoppingCart/ShoppingCart';

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

ShoppingCartPage.propTypes = {
  goodsToCart: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  total: PropTypes.number.isRequired,
  onDeleteFromShoppingCart: PropTypes.func.isRequired,
  onIncrementCount: PropTypes.func.isRequired,
  onDecrementCount: PropTypes.func.isRequired,
  onChangeValue: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
