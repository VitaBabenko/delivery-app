// import { useEffect } from 'react';
// import { GetMcDonny } from '../../services/GetMcDonny';
// import { goods } from '../../services/McDonnyAPI';
import { Section, List, ListItem, Img, Title, Btn } from './Products.styled';

export const McDonny = ({ goods, onAddToCart }) => {
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
