import { useState, useEffect } from 'react';
import { GetDonMarket } from '../../services/GetDonMarket';
import { Loader } from '../Loader';
import icecream from '../../images/icecream.jpg';
import { Section, List, ListItem, Img, Title, Btn } from './Products.styled';

export const DonMarket = ({ onAddToCart }) => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    GetDonMarket()
      .then(resp => resp.json())
      .then(json => setGoods(json))
      .catch(error => {
        setError(error.message);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {loading && <Loader />}
      {error && <p>{error}</p>}
      <Section>
        {!error && !loading && (
          <List>
            {goods.map(product => (
              <ListItem key={product.id}>
                <Img src={icecream} alt="burger" />
                <Title>{product.name}</Title>
                <Btn type="button" onClick={() => onAddToCart(product.id)}>
                  add to Cart
                </Btn>
              </ListItem>
            ))}
          </List>
        )}
      </Section>
    </>
  );
};
