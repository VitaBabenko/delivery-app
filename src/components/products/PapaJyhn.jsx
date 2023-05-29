import { goods } from '../../services/PapaJyhnAPI';
import { Section, List, ListItem, Img, Title, Btn } from './Products.styled';

export const PapaJyhn = ({ onAddToCart }) => {
  return (
    <Section>
      <List>
        {goods.map(product => (
          <ListItem key={product.id}>
            <Img src={product.photo} alt="burger" />
            <Title>{product.name}</Title>
            <Btn type="button" onClick={() => onAddToCart(product.id)}>
              add to Cart
            </Btn>
          </ListItem>
        ))}
      </List>
    </Section>
  );
};
