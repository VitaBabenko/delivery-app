import { getGoods } from '../../goodsAPI/McDonnyAPI';
import burger from '../../images/burger.jpg';
import { Section, List } from './Goods.styled';

export const McDonny = () => {
  const goods = getGoods();

  return (
    <Section>
      <List>
        {goods.map(el => (
          <li key={el.id}>
            <img src={burger} alt="burger" width="250" />
            <h3>{el.name}</h3>
            <button type="button">add to Cart</button>
          </li>
        ))}
      </List>
    </Section>
  );
};
