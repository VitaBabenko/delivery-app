import PropTypes from 'prop-types';
import { Count } from '../count/Count';
import { ContactForm } from '../contactForm/ContactForm';
import {
  Wrapper,
  Section,
  List,
  ListItem,
  Wrap,
  Btn,
} from './ShoppingCart.styled';

export const ShoppingCart = ({
  goodsToCart,
  total,
  onDeleteFromShoppingCart,
  onIncrementCount,
  onDecrementCount,
  onChangeValue,
  onSubmit,
}) => {
  return (
    <>
      <Wrapper>
        <ContactForm total={total} onSubmit={onSubmit} />
        <Section>
          {goodsToCart.length === 0 ? (
            <h2>Please, add goods to your cart!</h2>
          ) : (
            <List>
              {goodsToCart.map(el => (
                <ListItem key={el.id}>
                  <Wrap>
                    <h3>{el.name}</h3>
                    <p>Price: {el.totalPrice}</p>
                    <Count
                      count={el.count}
                      incrementCount={onIncrementCount}
                      decrementCount={onDecrementCount}
                      id={el.id}
                      changeValue={onChangeValue}
                    />
                  </Wrap>
                  <Btn
                    type="button"
                    onClick={() => onDeleteFromShoppingCart(el.id)}
                  >
                    delete from Cart
                  </Btn>
                </ListItem>
              ))}
            </List>
          )}
        </Section>
      </Wrapper>
    </>
  );
};

ShoppingCart.propTypes = {
  goodsToCart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      totalPrice: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
    })
  ).isRequired,
  total: PropTypes.number.isRequired,
  onDeleteFromShoppingCart: PropTypes.func.isRequired,
  onIncrementCount: PropTypes.func.isRequired,
  onDecrementCount: PropTypes.func.isRequired,
  onChangeValue: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
