import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { GetMcDonny } from '../../services/GetMcDonny';
import { Loader } from '../Loader';
import burger from '../../images/burger.jpg';
import { Section, List, ListItem, Img, Title, Btn } from './Products.styled';

export const McDonny = ({ onAddToCart }) => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    GetMcDonny()
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
                <Img src={burger} alt="burger" />
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

McDonny.propTypes = {
  onAddToCart: PropTypes.func.isRequired,
};
