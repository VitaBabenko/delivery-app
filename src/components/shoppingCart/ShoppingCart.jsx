import { Count } from '../count/Count';
import { ContactForm } from '../contactForm/ContactForm';
import {
  Wrapper,
  Section,
  List,
  ListItem,
  Img,
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
