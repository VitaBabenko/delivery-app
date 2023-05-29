import { Count } from '../count/Count';
import {
  Wrapper,
  Section,
  List,
  ListItem,
  Img,
  Wrap,
  Btn,
} from './Cart.styled';

export const Cart = ({
  goodsToCart,
  total,
  onDeleteFromShoppingCart,
  onIncrementCount,
  onDecrementCount,
  onChangeValue,
}) => {
  return (
    <>
      <Wrapper>
        <Section>
          <List>
            {goodsToCart.map(el => (
              <ListItem key={el.id}>
                <Img src={el.photo} alt="" />
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
        </Section>
      </Wrapper>
    </>
  );
};
