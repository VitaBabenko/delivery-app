import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { GetCfk } from '../../services/GetCfk';
import { Loader } from '../Loader';
import pizza from '../../images/pizza.jpg';
import { Section, List, ListItem, Img, Title, Btn } from './Products.styled';

export const CFK = ({ onAddToCart }) => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    GetCfk()
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
                <Img src={pizza} alt="burger" />
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

CFK.propTypes = {
  onAddToCart: PropTypes.func.isRequired,
};
