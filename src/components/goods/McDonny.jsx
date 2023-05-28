import { getGoods } from '../../goodsAPI/McDonnyAPI';
import burger from '../../images/burger.jpg';
import { Section, List, ListItem, Img, Title, Btn } from './Goods.styled';

export const McDonny = ({ onAddToCart }) => {
  const goods = getGoods();

  return (
    <Section>
      <List>
        {goods.map(el => (
          <ListItem key={el.id}>
            <Img src={burger} alt="burger" />
            <Title>{el.name}</Title>
            <Btn type="button" onClick={() => onAddToCart(el.id)}>
              add to Cart
            </Btn>
          </ListItem>
        ))}
      </List>
    </Section>
  );
};
